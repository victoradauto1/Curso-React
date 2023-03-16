import { useState, useEffect } from "react";
import { db } from '../firebase/config'
import { collection, orderBy, query, onSnapshot, where, QuerySnapshot, doc } from "firebase/firestore";

export const useFetchDocuments =(docCollection, search = null, uid = null )=>{

    const [documents, setDocuments] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(()=>{
        console.log("Executando useFetchDocuments",docCollection)
        const loadData = async ()=>{
            if(cancelled) return
    
            setLoading(true)
    
            const collectionRef = await collection(db, docCollection)
    
            try {
                let q
    
                q = await query(collectionRef, orderBy('createAt', 'desc'))
    
                await onSnapshot(q, (querySnapshot)=>{
    
                    setDocuments(
                        querySnapshot.docs.map((doc) =>(
                            {id: doc.id,
                            ...doc.data(),}
                        ))
                    )
                })
    
                setLoading(false)
    
    
            } catch (error) {
                console.log(error)
                setDocuments(error.message)
    
                setLoading(false)
            }
        }
    
        loadData()
    
    },[docCollection, search, uid, cancelled])
    

    useEffect(()=>{
        return ()=> setCancelled(true)
    },[])

    return {documents, loading, error }

}