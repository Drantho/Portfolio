import { React, useState } from 'react';
import { Link } from "react-router-dom";
import { Carousel, Row, Col, Space, Card } from "antd";
import ProjectCard from "../components/ProjectCard";
import data from "../data";

export default function Home() {

    const [currentVerb, setCurrentVerb] = useState(0);

    const verbs = ["move", "create", "calculate", "work"];

    const changeVerb = () => {
        setCurrentVerb((currentVerb + 1) % verbs.length);
    }

    return (
        <div>
            <section className="section" id="intro">


                <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
                    <Col className="gutter-row" xl={8} lg={8} md={8} sm={24}>
                        <img className="portrait" src="https://res.cloudinary.com/drantho/image/upload/v1614876275/jtlw9xzwwwwgayavxqyk.jpg" />
                    </Col>
                    <Col className="gutter-row" xl={16} lg={16} md={16} sm={24}>
                        <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }} justify="center">
                            <Col className="gutter-row" xl={20} lg={20} md={20} sm={24}>
                                <h2 className="intro-text">My name is Anthony and I build websites that {verbs[currentVerb]}</h2>
                            </Col>
                        </Row>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} justify="center">
                            <Col className="gutter-row" xl={20} lg={20} md={20} sm={24}>
                                <Carousel
                                    autoplay
                                    autoplaySpeed={4500}
                                    beforeChange={changeVerb}
                                    dotPosition="top"
                                    effect="fade"
                                >
                                    <div className="panel">
                                        <video muted autoplay="true" loop="true" src="https://res.cloudinary.com/drantho/video/upload/c_fill,w_670/v1615510871/ezgif.com-gif-maker_cjf7al.webm" />
                                    </div>
                                    <div className="panel">
                                        <img src="https://res.cloudinary.com/drantho/image/upload/c_fill,w_670/v1614075793/nobrainermeals_e1bpca.png" />
                                    </div>
                                    <div className="panel">
                                        <img src="https://res.cloudinary.com/drantho/image/upload/c_fill,w_670/v1616638401/mervin_graph_ijbjjr.png" />
                                    </div>
                                    <div className="panel">
                                        <img src="https://res.cloudinary.com/drantho/image/upload/c_fill,w_670/v1616638834/screenshot-penrv.com-2021.03.24-19_18_14_gpjplw.png" />
                                    </div>
                                </Carousel>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
            <section className="section" id="portfolio">
                <h2>Portfolio</h2>

                <Space direction="vertical">
                    <Row className="gutter-row" xl={16} lg={16} md={16} sm={24}>
                        {data.map(item => {
                            return <Col xl={8} lg={8} md={12} sm={24}>
                                <ProjectCard {...item}/>
                            </Col>
                        })}
                    </Row>
                </Space>
            </section>
            <section className="section" id="about">
                <h2>About</h2>
                <Row>
                    <Col xl={12} lg={12} md={12} sm={24}>
                        <p>
                            My name is Anthony Mitchell and I am a full-stack web developer. I create functional and stylish web apps from the ground up using the C#/.NET stack and the MERN stack. I am currently available to take on projects. See my portfolio for examples of my work. Please contact me with your questions.
                        </p>
                    </Col>
                    <Col xl={12} lg={12} md={12} sm={24}>
                        <h3>Technologies</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>SASS</li>
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>D3</li>
                            <li>Bootstrap</li>
                            <li>Materialize</li>
                            <li>C#</li>
                            <li>Blazor</li>
                            <li>SQL</li>
                            <li>Mongo</li>
                            <li>Express</li>
                            <li>React</li>
                            <li>Node</li>
                            <li>Handlebars</li>
                        </ul>
                    </Col>
                </Row>
            </section>
            <section className="section" id="contact">
                <h2>Contact</h2>
            </section>
        </div>
    )
}
