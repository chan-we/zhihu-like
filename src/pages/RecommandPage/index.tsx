import { useEffect } from "react";
import axios from "axios";

function RecommandPage() {
  useEffect(() => {
    axios.get("/api/content").then((res: any) => {
      console.log(res);
    });
  });

  return <div>推荐</div>;
}

export default RecommandPage;
