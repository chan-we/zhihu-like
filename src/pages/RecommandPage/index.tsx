import { useEffect, useState } from "react";
import axios from "axios";
import { CQuestion } from "../../components";
import { Skeleton } from "antd";

function RecommandPage() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get("/api/content").then((res: any) => {
      setQuestions(res.data);
      setLoading(false);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="recommand-page">
      {loading &&
        Array(6).fill(
          <Skeleton
            active
            style={{
              backgroundColor: "white",
              borderBottom: "1px solid #f0f2f7",
              padding: "20px",
            }}
          />
        )}
      {questions.map((question: any) => (
        <CQuestion data={question} key={question.id} />
      ))}
    </div>
  );
}

export default RecommandPage;
