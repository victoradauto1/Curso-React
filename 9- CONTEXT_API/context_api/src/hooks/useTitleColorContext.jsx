import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

import React from 'react'

export const useTitleColorContext = () => {

    const context = useContext(TitleColorContext)

    if(!context){
        console.log("Contexto não encontrado")
    }

  return context
}
