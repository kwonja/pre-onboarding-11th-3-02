import React from 'react'
import styled from 'styled-components';
import Issueitem from './Issueitem';
import { useIssue } from '../../context/IssueContext';
const ListLayout = styled.div`
width : 800px;
margin : 0 auto;
`
export default function Issuelist() {

  const issue = useIssue();
  if(issue === null)
  {
    return (<div>Loading...</div>);
  }
  return (
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
  )
}
