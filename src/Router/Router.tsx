import { createBrowserRouter } from "react-router-dom";

import Homepage from "../pages/Home/Homepage";
import ExploreContent from "../pages/Explore/ExploreContent";
import Layout from "../pages/Layout";
import ErrorLayout from "../ErrorLayout";
import Detail from "../pages/ContentDetail/Detail";
import SearchInput from "../components/SearchInput";
import SearchResult from "../components/SearchResult";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "/explore/:Type",
        element: <ExploreContent />,
      },

      { path: "/search/:query", element: <SearchResult /> },
      { path: "/:Type/:id", element: <Detail /> },
    ],
  },
]);
export default Router;
