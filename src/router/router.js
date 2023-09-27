import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import Issuelist from "../pages/issue/Issuelist";
import IssueDetail from "../pages/issuedetail/IssueDetail";
import Errorpage from "../component/Errorpage";
import Main from "../pages/main/Main";
const router = createBrowserRouter([
    {
        path : "/",
        element : <App />,
        children : [
                {
                path: '',
                element: <Main/>
              },
              {
                path: 'issue',
                element: <Issuelist />
              },
              {
                path: 'issue/detail/:id',
                element: <IssueDetail />
              },
        ],
        errorElement : <Errorpage/>
    }
  ]);
  
  export default router;