import { useEffect, useState, useReducer } from "react";
import { db } from '../firebase/config'
import { collection, addDoc,  Timestamp, doc } from "firebase/firestore";

const initialState ={

    loading: null,
    error: null

}




const insertReducer = (state, action)=>{

    switch(action.type){

        case "LOADING":
            return{loading:true, error: null}
        case "INSERTED_DOC":
            return{loading:false, error: null}
        case "ERROR":
            return{loading:false, error: action.payload }
        default:
            return state
    }

}

export const useInsertDocuments = (docCollection) =>{

        const [response, dispatch] = useReducer(insertReducer, initialState)

        //deal with memoryLink
        const [ cancelled, setCancelled] = useState(false)

        const checkCancelBeforeDispatch = (action) =>{
            if(!cancelled){
                dispatch(action)
            }
        }

        useEffect(()=>{
            setCancelled(true)
        }, [])

        const insertDocument = async(document) =>{

            checkCancelBeforeDispatch({
                type:"LOADING",
            })

            try {

                const NewDocument = { ...document,  creatAt: Timestamp.now()}

                const insertDocument = await addDoc(
                    collection(db, docCollection), 
                    NewDocument
                )

                checkCancelBeforeDispatch({
                    type:"INSERTED_DOC",
                    payload: insertDocument
                })

            } catch (error) {

                checkCancelBeforeDispatch({
                    type:"ERROR",
                    payload: error.message,
                })
                
            }
        }
       

        return{insertDocument, response}
}

