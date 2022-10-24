import { CBody } from "../../components";
import "./index.less";
import Background from "../../assets/images/background.jpeg";

function MainPage() {
  return (
    <div className="main-page">
      <div className="main-page-background">
        <img src={Background} alt="" />
      </div>
      <div className="main-page-left">
        <CBody />
      </div>
      <div className="main-page-right"></div>
    </div>
  );
}

export default MainPage;
