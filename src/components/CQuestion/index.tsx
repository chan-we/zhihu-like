import { useState } from "react";
import "./index.less";
import { useBoolean } from "ahooks";
import {
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
  const [isAll] = useBoolean(false);
  const { target } = props.data;
  return (
    <div className="c-question">
      <div className="c-question-title">{target.question.title}</div>
      <div className="c-question-content">
        {!isAll && (
          <div>
            {target.author.name}：{target.excerpt_new}
            <a>
              阅读全文 <DownOutlined />
            </a>
          </div>
        )}
      </div>
      <div className="c-question-tail">
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
    </div>
  );
}

export default CQuestion;
