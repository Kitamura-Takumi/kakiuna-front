<<<<<<< HEAD
import Home from './Home.jsx';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
=======
const App = () => {
  return (
    <>
  <div className="box">
  <a  className="href" href="#">
  <h1><span>東京ドーム</span></h1>
  <p>☆☆☆☆☆</p>
  </a>
</div>
>>>>>>> refs/remotes/origin/main

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




