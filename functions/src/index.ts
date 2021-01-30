import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import puppeteer from 'puppeteer';

import { collectionName } from './services/mangarel/constants';
import { feedCalendar } from './crawlers/kodansha-calendar';
import { saveFeedMemo } from './firestore-admin/feed-memo';

admin.initializeApp();

const PUPPETEER_OPTIONS = {
  args: [
    '--disable-gpu',
    '--disable-dev-shm-usage',
    '--disable-setuid-sandbox',
    '--no-first-run',
    '--no-sandbox',
    '--no-zygote',
    '--single-process',
  ],
  headless: true,
};

export const fetchCalendar = functions
  .region('asia-northeast')
  .runWith({
    timeoutSeconds: 300,
    memory: '2GB',
  })
  .pubsub.schedule('0 2 1,10,20 * *')
  .timeZone('Asia/Tokyo')
  .onRun(async () => {
    const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
    const page = await browser.newPage();
    const db = admin.firestore();

    const memos = await feedCalendar(page);
    const fetchCount = await saveFeedMemo(db, memos, 'kadokawa');

    await browser.close();
    console.log(`Fetched kodansha wrote ${fetchCount} memos`);
  });

export const publishers = functions
  .region('asia-northeast2')
  .https.onRequest(async (req, res) => {
    const snap = await admin
      .firestore()
      .collection(collectionName.publishers)
      .get();
    const data = snap.docs.map((doc) => doc.data());
    res.send({ data });
  });
