import React,{useState} from 'react'
import styled from 'styled-components';
import Issueitem from './Issueitem';

const ListLayout = styled.div`
width : 800px;
height : 200px;
margin : 0 auto;
`

export default function Issuelist() {
  const [lists,setList]= useState([]);
  return (
    <ListLayout>
      {
        lists.map( (list) =>(
          <Issueitem/>
          ))
      }

    </ListLayout>
  )
}
