import { Menu, MenuProps } from "antd";
import { useState } from "react";
import { router } from "../../router";

const menuItems = [
  {
    key: "follow",
    label: "关注",
  },
  {
    key: "recommand",
    label: "推荐",
  },
  {
    key: "hot",
    label: "热榜",
  },
  {
    key: "video",
    label: "视频",
  },
];

function CBody() {
  const [current, setCurrent] = useState(
    window.location.pathname.split("/")[1] || "recommand"
  );

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    // router.navigate(`/${e.key === "recommand" ? "" : e.key}`);
  };

  return (
    <div className="c-body">
      <Menu
        mode={"horizontal"}
        items={menuItems}
        onClick={onClick}
        selectedKeys={[current]}
      ></Menu>
    </div>
  );
}

export default CBody;
