import { createContext, useCallback, useContext, useEffect, useState,ReactNode } from "react";
import { Getissueapi } from "../apis/issue";
import { Issue } from "../interface/issue";
const ContextIssue = createContext<Issue[] | null>(null);

export const useIssue = () => useContext(ContextIssue);
export const IssueContext = ({ children }: { children: ReactNode }) =>{

    const [lists,setLists]= useState<Issue[]>([]);

    const getissue  = useCallback ( async() : Promise<void> =>{
        const response = await Getissueapi();
        console.log(response);
        setLists(response.data)
      },[])

      useEffect( () =>{
        getissue()
      },[getissue])

    return(
    <ContextIssue.Provider value={lists}>
        {children}
    </ContextIssue.Provider>
    );
}