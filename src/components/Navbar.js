import { React, useState } from 'react'
import { Menu } from 'antd';
import { HashLink } from 'react-router-hash-link';
import { Children } from 'react/cjs/react.production.min';

const { SubMenu } = Menu;

export default function Navbar() {

    const [current, setCurrent] = useState("home");

    const handleClick = e => {
        setCurrent(e.key);
    };

    const scrollWithOffset = element => {
        const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -75;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const getItem = (label, key, icon, children, theme) => {
        return {
            key,
            icon,
            children,
            label,
            theme,
        };
    }

    const items = [

    ]

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
            <Menu.Item key="logo">
                <HashLink smooth to="/home#intro" scroll={element => scrollWithOffset(element)}>
                    Anthony Mitchell
                </HashLink>
            </Menu.Item>
            <Menu.Item key="intro">
                <HashLink smooth to="/home#intro" scroll={element => scrollWithOffset(element)}>
                    Intro
                </HashLink>
            </Menu.Item>
            <SubMenu
            key="sub1"
            theme="dark"
            title={
                <span>
                <span>Portfolio</span>
                </span>
            }
            >
                <Menu.Item key="1">
                    <HashLink smooth to="/home#rcs" scroll={element => scrollWithOffset(element)}>
                        RCS Union Software
                    </HashLink>
                </Menu.Item>
                <Menu.Item key="2">
                    <HashLink smooth to="/home#simpleview" scroll={element => scrollWithOffset(element)}>
                        Simpleview
                    </HashLink>
                </Menu.Item>
                <Menu.Item key="3">
                    <HashLink smooth to="/home#personal" scroll={element => scrollWithOffset(element)}>
                        Personal
                    </HashLink>
                </Menu.Item>
            </SubMenu>
            <Menu.Item key="about">
                <HashLink smooth to="/home#about" scroll={element => scrollWithOffset(element)}>
                    About
                </HashLink>
            </Menu.Item>
            <Menu.Item key="contact">
                <HashLink smooth to="/home#contact" scroll={element => scrollWithOffset(element)}>
                    Contact
                </HashLink>
            </Menu.Item>
        </Menu>
    )
}
