import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const HeaderLayout = styled.div`
width : 800px;
height : 100px;
margin: 0 auto;
text-align : center;
`
export default function Main() {
  return (
    <HeaderLayout>
    <h1>메인페이지입니다.</h1>
    <Link to="/issue"><button>이슈보러가기</button></Link>
    </HeaderLayout>
  )
}
