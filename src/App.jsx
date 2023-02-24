import Home from './Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", //url
    element: <Home sapporo_url=""/>, //名前
  },
  // {
  //   // path: "/sapporo",
  //   // element: <SapporoPage/>
  // }
]);

const App = () => {
  return <Home/>;
};

export default App;




