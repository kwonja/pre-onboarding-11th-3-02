import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Org, Repo } from '../apis/issue';
const HeaderLayout = styled.div`
width : 800px;
height : 100px;
margin: 0 auto;
text-align : center;
`
export default function Header() {
  return (
    <>
    <HeaderLayout>
    <h1>{Org} / {Repo}</h1>
    </HeaderLayout>
    <Outlet />
    </>
  )
}
