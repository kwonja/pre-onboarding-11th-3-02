import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Errorpage from './component/Errorpage';
import Main from './pages/main/Main';
import Issuelist from './pages/issue/Issuelist';
import IssueDetail from './pages/issuedetail/IssueDetail';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/issue' element={<Issuelist/>}></Route>
        <Route path='/issue/detail/:id' element={<IssueDetail/>}></Route>
      </Route>
      <Route path='*' element={<Errorpage/>}></Route>
    </Routes>
    </>
  );
}

export default App;
