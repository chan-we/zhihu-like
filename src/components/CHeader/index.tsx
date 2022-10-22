import "./index.less";
import { Menu, MenuProps, Input, Button } from "antd";
import { useState } from "react";
import { router } from "../../router";

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
    router.navigate(`/${e.key === "main" ? "" : e.key}`, { replace: true });
  };
  return (
    <div className="c-header">
      <div>logo</div>
      <Menu
        mode="horizontal"
        items={menuItems}
        onClick={onClick}
        selectedKeys={[current]}
        style={{ alignItems: "center" }}
      />
      <Search />
      <Button>提问</Button>
    </div>
  );
}

export default CHeader;
