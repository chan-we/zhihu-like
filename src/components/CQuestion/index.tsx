import { useState } from "react";
import "./index.less";
import { useBoolean } from "ahooks";
import {
  UpOutlined,
  DownOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
  MessageFilled,
  ShareAltOutlined,
  StarFilled,
  HeartFilled,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Button } from "antd";

interface IProps {
  data: any;
}

const tailItems = [
  {
    icon: <MessageFilled />,
    label: "0条评论",
  },
  {
    icon: <ShareAltOutlined />,
    label: "分享",
  },
  {
    icon: <StarFilled />,
    label: "收藏",
  },
  {
    icon: <HeartFilled />,
    label: "喜欢",
  },
  {
    icon: <EllipsisOutlined />,
    label: "",
  },
];

function CQuestion(props: IProps) {
  const [isAll, isAllActions] = useBoolean(false);
  const { target } = props.data;
  const { author } = target;

  return (
    <div className="c-question">
      <div className="c-question-title">{target.question.title}</div>
      <div className="c-question-content">
        {isAll ? (
          <div>
            <div className="c-question-content-author">
              <span className="c-question-content-author-avatar">
                <img src={author.avatar_url} alt="" />
              </span>
              <span className="c-question-content-author-name">
                {author.name}
              </span>
              <span className="c-question-content-author-headline">
                {author.headline}
              </span>
            </div>
            <p className="c-question-content-voteup">
              {(target.voteup_count as number).toLocaleString()}人赞同了该答案
            </p>
            <div dangerouslySetInnerHTML={{ __html: target.content }}></div>
          </div>
        ) : (
          <div className="c-question-content-brief">
            {target.thumbnail && (
              <div className="c-question-content-brief-thumbnail">
                <img src={target.thumbnail} alt="" />
              </div>
            )}
            <div className="c-question-content-brief-text">
              {author.name}：
              {(target.excerpt_new as string).endsWith("…")
                ? target.excerpt_new
                : `${target.excerpt_new}…`}
              <a onClick={isAllActions.setTrue}>
                阅读全文 <DownOutlined />
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="c-question-tail">
        <div className="c-question-tail-left">
          <div>
            <Button>
              <CaretUpOutlined />
              赞同
            </Button>
            <Button>
              <CaretDownOutlined />
            </Button>
          </div>
          {tailItems.map((item, i) => (
            <span key={i}>
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>
        <div className="c-question-tail-right">
          {isAll && (
            <span onClick={isAllActions.setFalse}>
              收起
              <UpOutlined />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CQuestion;
