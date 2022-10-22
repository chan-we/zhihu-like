import "./index.less";
import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { router } from "../../router";

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
      <Menu
        mode="horizontal"
        items={menuItems}
        onClick={onClick}
        selectedKeys={[current]}
      />
    </div>
  );
}

export default CHeader;
