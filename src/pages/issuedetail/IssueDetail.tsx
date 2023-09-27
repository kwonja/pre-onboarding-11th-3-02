import React, { useCallback, useEffect, useState } from 'react';
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useDetailIssueChange, useIssueDetail } from '../../context/IssueDetailContext';
const IssueDetail = () =>{
    const issue = useIssueDetail();
    const {getIssueDetail,resetIssue} =useDetailIssueChange();
    const {id} = useParams<string>();

    useEffect( () =>{
        getIssueDetail(id)

        return () => {
            resetIssue();
          };
      },[getIssueDetail,id])
    
    if(issue === null)
    {
       return (<LoadingLayer>Loading...</LoadingLayer>);
    }
    return(<>
    <DetailLayout>
        <ProfileLayer>
        <img src={issue.user.avatar_url} alt="프로필"/>
        <IssueLayout>
        <LeftLayout>
        <div>#{issue.number} title : {issue.title}</div> 
        <div>작성자 : {issue.user.login} , 작성일 : {issue.created_at.split("T")[0]} 수정일 : {issue.updated_at.split("T")[0]}</div>
        </LeftLayout>
        <RightLayout>
        <div>코멘트 : {issue.comments}</div>
        </RightLayout>
        </IssueLayout>
        </ProfileLayer>
    <div>해당 이슈를 보고 싶다면?</div><Link to={issue.html_url}>{issue.html_url}</Link>
    <h1>본문</h1>
    <div>{issue.body}</div>
    </DetailLayout>

    </>);
}

export default IssueDetail;
const DetailLayout = styled.div`
width : 800px;
margin : 0 auto;
`
const IssueLayout = styled.div`
width : 90%;
height : 100%;
display : flex;
padding : 20px;
flex-direction: row;
border-bottom : 1px solid black;
`

const LeftLayout = styled.div`
width : 80%;
display : flex;
flex-direction: column;
gap : 5px;
`
const RightLayout = styled.div`
display : flex;
align-items: center;
margin-left: auto;
`

const ProfileLayer = styled.div`
display : flex;
flex-direction: row;
align-items: center;
img{
    width : 10%;
}
`
const LoadingLayer = styled.div`
font-size : 50px;
text-align : center;
`