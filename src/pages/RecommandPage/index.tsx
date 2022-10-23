import { useEffect, useState } from "react";
import axios from "axios";
import { CQuestion } from "../../components";

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
      {questions.map((question: any) => (
        <CQuestion data={question} key={question.id} />
      ))}
    </div>
  );
}

export default RecommandPage;
