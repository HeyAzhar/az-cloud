import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./routes/Layout";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home/index";
import Resources from "./routes/Resources/index";
import Operations from "./routes/Operations/index";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<Layout />} errorElement=<ErrorPage />>
      <Route path='/' element={<Home />} />
      <Route path='resources' element={<Resources />} />
      <Route path='operations' element={<Operations />} />
    </Route>
  )
);
