import React,{useRef} from 'react'
import { Issue } from '../../interface/issue';
import styled from 'styled-components';
import Ad from '../ad/AdImage'
import { Link } from 'react-router-dom';
const IssueLayout = styled.div`
width : 100%;
display : flex;
flex-direction: row;
margin-bottom : 20px;
padding : 20px;
border-bottom : 1px solid black;
`

const LeftLayout = styled.div`
width : 80%;
display : flex;
flex-direction: column;
`
const RightLayout = styled.div`
display : flex;
align-items: center;
margin-left: auto;
`
interface issueItem{
  id : number
  issueItem : Issue
}
const Issueitem :  React.FC<issueItem> = ({
  issueItem : {number,title,comments,created_at,updated_at,user,state},
  issueItem,
  id
}) =>{
  return (
    <>
    <IssueLayout>
    <LeftLayout>
    <div><Link to ={`/issue/detail/${number}`}>#{number} title : {title}</Link></div>
    <br/> 
    <div>작성자 : {user.login} , 작성일 : {created_at.split("T")[0]} 수정일 : {updated_at.split("T")[0]} 상태 : {state}</div>
    </LeftLayout>
    <RightLayout>
    <div>코멘트 : {comments}</div>
    </RightLayout>
    </IssueLayout>
    { id % 5 === 4 && <Ad/>}
    </>
  )
}
export default Issueitem
