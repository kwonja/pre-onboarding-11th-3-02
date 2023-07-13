import { createContext, useCallback, useContext, useState } from "react";
const ThemeContext = createContext(null);
export const useTheme = () => useContext(ThemeContext);

const Getissue = () =>{

    const [lists,setLists]= useState([]);

    const get = async() =>{
        
    }
    return(<>

    </>
    );
}

export default Getissue;