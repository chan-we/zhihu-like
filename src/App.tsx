import "./App.less";
import { RouterProvider } from "react-router-dom";
import { CHeader } from "./components";
import { router } from "./router";

function App() {
  return (
    <div>
      <CHeader />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
