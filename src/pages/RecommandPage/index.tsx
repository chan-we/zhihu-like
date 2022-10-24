import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { CQuestion } from "../../components";
import { List, Skeleton } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";

function RecommandPage() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    appendData();
  }, []);

  const appendData = () => {
    setLoading(true);
    axios.get("/api/content").then((res: any) => {
      setQuestions(questions.concat(res.data));
      setLoading(false);
    });
  };

  return (
    <div className="recommand-page">
      {loading &&
        Array(6)
          .fill("")
          .map((_, i) => (
            <Skeleton
              key={i}
              active
              style={{
                backgroundColor: "white",
                borderBottom: "1px solid #f0f2f7",
                padding: "20px",
              }}
            />
          ))}
      <InfiniteScroll
        dataLength={questions.length}
        next={appendData}
        hasMore={true}
        loader={
          <Skeleton
            active
            style={{
              backgroundColor: "white",
              borderBottom: "1px solid #f0f2f7",
              padding: "20px",
            }}
          />
        }
      >
        <List
          dataSource={questions}
          renderItem={(question: any) => (
            <CQuestion data={question} key={question.id + Math.random()} />
          )}
        />
      </InfiniteScroll>
      {/* {questions.map((question: any) => (
        <CQuestion data={question} key={question.id + Math.random()} />
      ))} */}
    </div>
  );
}

export default RecommandPage;
