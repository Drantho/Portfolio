import { React, useState } from 'react'
import { Menu } from 'antd';
import { HashLink } from 'react-router-hash-link';
import { Layout, Header, Content } from "antd";

export default function Navbar() {

    const [current, setCurrent] = useState("home");

    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const scrollWithOffset = element => {
        const yCoordinate = element.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -70; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
            <Menu.Item key="intro">
                <HashLink smooth to="/home#intro" scroll={element => scrollWithOffset(element)}>
                    Intro
                </HashLink>
            </Menu.Item>
            <Menu.Item key="portfolio">
                <HashLink smooth to="/home#portfolio" scroll={element => scrollWithOffset(element)}>
                    Portfolio
                </HashLink>
            </Menu.Item>
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
