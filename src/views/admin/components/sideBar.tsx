import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

interface Props {
  handlers: [string, React.Dispatch<React.SetStateAction<string>>];
}

export default function AdminSideBar({ handlers }: Props) {
  const [activeTab, setActiveTab] = handlers;

  const [isLight, setIsLight] = useState(localStorage.getItem('theme') === null ? true :
    localStorage.getItem('theme') === 'true');

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation: any) => {
        const target: string = mutation.target.attributes.style.value;
        if (target.includes('--body:#ffffff;')) {
          //light mode
          console.log("light");
          setIsLight(true);
        } else {
          //darkMode
          console.log("dark");
          setIsLight(false);
        }
      });
    });
    // Select the node that will be observed for mutations
    const observerConfig = {
      attributes: true,
      childList: false,
      characterData: false,
      attributeOldValue: true,
    };

    const targetNode = document.getElementById('mai__body');
    //@ts-ignore
    observer.observe(targetNode, observerConfig);

    return () => {
      observer.disconnect();
    }
  }, []);

  const handleClick = (label: string) => {
    setActiveTab(label);
  }

  return (
    <>
      <Menu
        defaultSelectedKeys={[activeTab]}
        defaultOpenKeys={[activeTab]}
        mode="inline"
        theme={isLight ? 'light' : "dark"}
        inlineCollapsed={isCollapsed}
      >
        {/* <Menu.Item key="0" disabled>
          {
            isCollapsed ? <MenuUnfoldOutlined onClick={toggleCollapsed} /> :
              <MenuFoldOutlined onClick={toggleCollapsed} />
          }
          <span>Toggle Menu</span>
        </Menu.Item> */}
        <Menu.Item key="overview" onClick={() => handleClick('overview')}>
          <PieChartOutlined />
          <span>Overview</span>
        </Menu.Item>
        <Menu.Item key="users" onClick={() => handleClick('users')}>
          <DesktopOutlined />
          <span>Users</span>
        </Menu.Item>
        <Menu.Item key="moderators" onClick={() => handleClick('moderators')}>
          <ContainerOutlined />
          <span>Moderators</span>
        </Menu.Item>
        <Menu.Item key="exams" onClick={() => handleClick('exams')}>
          <MailOutlined />
          <span>Exams</span>
        </Menu.Item>
      </Menu>
    </>
  );

}