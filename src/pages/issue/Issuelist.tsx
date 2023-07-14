import React,{useState,useRef,useEffect,useCallback} from 'react'
import styled from 'styled-components';
import Issueitem from './Issueitem';
import { useIssue,useIssueChange } from '../../context/IssueContext';
const ListLayout = styled.div`
width : 800px;
margin : 0 auto;
`
const ButtonLayout = styled.div`
width : 800px;
margin : 0 auto;
text-align : center;
`
export default function Issuelist() {
  const loader = useRef<HTMLDivElement | any>(null);
  const issue = useIssue();
  const change = useIssueChange();


  // const Callback = () =>{
  //   console.log( "callback" + page)
  //   change?.fetchData(page);
  // }

  const handleObserver = useCallback((entries : IntersectionObserverEntry[]) => {
    console.log(entries)
    console.log( "call observerapi")
    const target = entries[0];
    if (target.isIntersecting) {
      change?.addPage()
    }
  }, []);


  useEffect(() => {
    const option = {
      threshold: 0.1,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  if(issue === null)
  {
    return (<div>Loading...</div>);
  }
  return ( 
    <>
    <ButtonLayout>
    <button onClick={ () => change?.SortHandler("comments")}>comments</button>
    <button onClick={ () => change?.SortHandler("created")}>created</button>
    <button onClick={ () => change?.StateHandler("open")}>open</button>
    <button onClick={ () => change?.StateHandler("closed")}>closed</button>
    <button onClick={ () => change?.StateHandler("all")}>all</button>
    </ButtonLayout>
    <ListLayout>
      {
        issue.map( (item,id) =>(
          <Issueitem
          key={id}
          id={id}
          issueItem={item}
          />
          ))
      }
    </ListLayout>
    <div ref={loader}>Loading...</div>
    </>
  )
}
