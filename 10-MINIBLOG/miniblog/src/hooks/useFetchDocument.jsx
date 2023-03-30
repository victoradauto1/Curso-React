import { useState, useEffect } from "react";
import { db } from '../firebase/config'
import { doc, getDoc } from "firebase/firestore";

export const useFetchDocument = (docCollection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
 

  useEffect(() => {
    const loadDocument = async () => {
      setLoading(true);

      try {
        const docRef = doc(db, "/posts/8Kawj9I6d509jmdK57xk")
        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
      } catch (error) {
        console.log(error);
        setError(error.message);
      }

      setLoading(false);
    };

    loadDocument();
  }, [docCollection, id]);

  useEffect(() => {
    if (document !== null) {
      console.log(document);
    }
  }, [document]);
  

  return { document, loading, error };
};