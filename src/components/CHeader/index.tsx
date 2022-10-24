import "./index.less";
import { Menu, MenuProps, Input, Button, Avatar } from "antd";
import {
  NotificationFilled,
  MessageFilled,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { router } from "../../router";
import ZhihuBlue from "../../assets/images/zhihu_blue.png";

const { Search } = Input;

const menuItems = [
  {
    key: "main",
    label: "首页",
  },
  {
    key: "study",
    label: "学习",
  },
  {
    key: "vip",
    label: "会员",
  },
  {
    key: "explore",
    label: "发现",
  },
  {
    key: "answer",
    label: "等你来答",
  },
];

function CHeader() {
  const [current, setCurrent] = useState(
    window.location.pathname.split("/")[1] || "main"
  );

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    router.navigate(`/${e.key === "main" ? "" : e.key}`);
  };
  return (
    <div className="c-header">
      <div className="c-header-logo">
        <img src={ZhihuBlue} alt="" />
      </div>
      <Menu
        mode="horizontal"
        items={menuItems}
        onClick={onClick}
        selectedKeys={[current]}
        style={{ alignItems: "center" }}
      />
      <div className="c-header-center">
        <Search />
        <Button>提问</Button>
      </div>

      <div className="c-header-right">
        <div className="c-header-function">
          <NotificationFilled />
          <span>消息</span>
        </div>
        <div className="c-header-function">
          <MessageFilled />
          <span>私信</span>
        </div>
        <Avatar shape="square" icon={<UserOutlined />} />
      </div>
    </div>
  );
}

export default CHeader;
