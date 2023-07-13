import { createContext, useCallback, useContext, useEffect, useState,ReactNode } from "react";
import { Issue } from "../interface/issue";
import { GetIssueDetail } from "../apis/issue";
const ContextIssueDetail = createContext<Issue | null>(null);
export const useIssueDetail = () => useContext(ContextIssueDetail);
export const IssueDetailContext = ({ children }: { children: ReactNode }) =>{
    const [issue,setIssue]= useState<Issue | null>(null);
    const getIssueDetail = useCallback( async()=>{
        const response = await GetIssueDetail("1");
        console.log("detail context")
        console.log(response)
        setIssue(response.data)
    },[])
    useEffect( () =>{
        getIssueDetail()
      },[getIssueDetail])


    return(
    <ContextIssueDetail.Provider value={issue}>
    {children}
    </ContextIssueDetail.Provider>);
}
