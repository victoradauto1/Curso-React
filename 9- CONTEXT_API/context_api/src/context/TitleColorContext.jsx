import { createContext, useReducer } from "react";

export const TitleColorContext = createContext();

export const TitleColorContextProvider = ({children}) =>{

    const titleColorReduce = (state, action) =>{

        switch(action.type) {

            case "RED":
                return {...state, color: "red"};
            
            case "BLUE":
                return {...state, color: "blue"}
            
            default:
                return state;
        }

    }

    const [ state , dispatch] = useReducer(titleColorReduce, {color:"purple"});

    console.log("titleColorContext:", state)

    return(
        <TitleColorContext.Provider value={{...state, dispatch}}>
            {children}
        </TitleColorContext.Provider>
    )
}