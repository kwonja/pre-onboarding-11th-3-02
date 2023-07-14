/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState,ReactNode,useCallback, useEffect } from "react";
import { Getissueapi } from "../apis/issue";
import { Issue } from "../interface/issue";
type IssueChangeContextType = {
  SortHandler: (type: string) => void;
  StateHandler: (type: string) => void;
  fetchData : ()=> void;
  addPage : () =>void;
};
const ContextIssue = createContext<Issue[] | null>(null);
const IssueChangeContext = createContext<IssueChangeContextType | null>(null);

export const useIssue = () => useContext(ContextIssue);
export const useIssueChange = () => useContext(IssueChangeContext)

export const IssueContext = ({ children }: { children: ReactNode }) =>{

    const [lists,setLists]= useState<Issue[]>([]);
    const [sort, setSort] = useState("created")
    const [state,setState] = useState("all");
    const [page, setPage] = useState(1);
    console.log("context")
    console.log(lists)
    const SortHandler =(type : string) =>{
      setSort(type);
      setLists([])
      setPage(1)
    }
    const StateHandler =(type : string)=>{
      setState(type)
      setLists([])
      setPage(1)
    }
    const addPage = () => setPage( (prev) => prev+1)
    
    const fetchData  = useCallback (async() : Promise<void> =>{
        const response = await Getissueapi(state,sort,page);
        console.log(response);
        setLists((prev) =>[...prev , ...response.data])
      },[state,sort,page])

      useEffect( ()=>{
        console.log(page)
        fetchData()
      },[page])
    return(
    <ContextIssue.Provider value={lists}>
      <IssueChangeContext.Provider value ={{SortHandler,StateHandler,fetchData,addPage}}>
        {children}
      </IssueChangeContext.Provider>
    </ContextIssue.Provider>
    );
}