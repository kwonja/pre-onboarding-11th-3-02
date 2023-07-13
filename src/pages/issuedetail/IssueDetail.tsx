import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { useIssue } from "../../context/IssueContext";
import { useParams } from "react-router-dom";
import { GetIssueDetail } from "../../apis/issue";
import { Issue } from "../../interface/issue";
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
const IssueDetail = () =>{
    const [issue,setIssue]= useState<Issue | null>(null);
    const {id} = useParams<string>();
    const getIssueDetail = useCallback( async()=>{
        const response = await GetIssueDetail(id);
        setIssue(response.data)
    },[])
    useEffect( () =>{
        getIssueDetail()
      },[getIssueDetail])
    
    if(issue === null)
    {
    return (<div>Loading...</div>);
    }
    return(<>
    <div>
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
    </div>

    <div>{issue.body}</div>

    </>);
}

export default IssueDetail;
