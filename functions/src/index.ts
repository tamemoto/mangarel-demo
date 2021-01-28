import * as functions from 'firebase-functions';
import admin from 'firebase-admin';
import puppeteer from 'puppeteer';

import { collectionName } from './services/mangarel/constants';
import { feedCalendar } from './crawlers/kodansha-calendar';

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

export const fetchCalendar = async () => {
  const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
  const page = await browser.newPage();
  const memos = await feedCalendar(page);
  console.log(memos);
};

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

fetchCalendar();
