import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout.jsx";
import Home from "./pages/home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    //errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },

  // {
  //   path: 'xx',
  //   element: <xx />,
  // },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
