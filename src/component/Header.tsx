import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLayout = styled.div`
width : 800px;
height : 100px;
margin: 0 auto;
text-align : center;
`

const Organization = "Organization";
const Repository = "Repository";
export default function Header() {
  return (
    <>
    <HeaderLayout>
    <h1>{Organization} / {Repository}</h1>
    </HeaderLayout>
    <Outlet />
    </>
  )
}
