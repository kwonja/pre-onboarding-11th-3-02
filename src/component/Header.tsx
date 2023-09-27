import React from 'react'
import { Link, Outlet } from 'react-router-dom';
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
    <Link to ="/issue">
    <HeaderLayout >
    <h1>{Org} / {Repo}</h1>
    </HeaderLayout>
    </Link>
    </>
  )
}
