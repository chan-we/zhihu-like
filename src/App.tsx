import "./App.less";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage, StudyPage, VipPage, ExplorePage, AnswerPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "study",
    element: <StudyPage />,
  },
  {
    path: "vip",
    element: <VipPage />,
  },
  {
    path: "explore",
    element: <ExplorePage />,
  },
  {
    path: "answer",
    element: <AnswerPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
