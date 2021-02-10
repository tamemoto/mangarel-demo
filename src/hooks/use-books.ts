import { useContext, useEffect, useRef, useState } from 'react';
import { startOfDay } from 'date-fns';
import { collectionName } from 'services/mangarel/constants';
import { FirebaseContext } from 'contexts';
import { Book } from 'services/mangarel/models/book';

type BooksOptions = {
  limit?: number;
};

const defaultOptions: Required<BooksOptions> = {
  limit: 30,
};

const useBooks = (options?: BooksOptions) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const firebaseRef = useRef(useContext(FirebaseContext));
  const optionsRef = useRef({ ...defaultOptions, ...options });

  useEffect(() => {
    const { db } = firebaseRef.current;
    if (!db) {
      throw new Error('Firestore is not initialize');
    }

    const query = db
      .collection(collectionName.books)
      .where('publishedOn', '>=', startOfDay(new Date()))
      .orderBy('publishedOn', 'asc')
      .limit(optionsRef.current.limit);

    const load = async () => {
      setLoading(true);
      try {
        const snap = await query.get();
        const booksData = snap.docs.map((doc: any) => {
          return {
            ...(doc.data() as Book),
            id: doc.id,
          };
        });
        setBooks(booksData);
        setError(null);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    load();
  }, []);

  return { books, loading, error };
};

export default useBooks;
