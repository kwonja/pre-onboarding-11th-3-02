import { createContext, useCallback, useContext, useEffect, useState,ReactNode } from "react";
import { Issue } from "../interface/issue";
import { GetIssueDetail } from "../apis/issue";

const ContextIssueDetail = createContext<Issue | null>(null);
const DetailIssueChangeContext = createContext<any>(null);

export const useIssueDetail = () => useContext(ContextIssueDetail);
export const useDetailIssueChange = () => useContext(DetailIssueChangeContext);

export const IssueDetailContext = ({ children }: { children: ReactNode }) =>{
    const [issue,setIssue]= useState<Issue | null>(null);

    const resetIssue = () => setIssue(null);

    const getIssueDetail = useCallback(async(id : string)=>{
        const response = await GetIssueDetail(id);
        setIssue(response.data)
    },[])
    return(
    <ContextIssueDetail.Provider value={issue}>
        <DetailIssueChangeContext.Provider value={{getIssueDetail,resetIssue}}>
            {children}
        </DetailIssueChangeContext.Provider>
    </ContextIssueDetail.Provider>);
}
