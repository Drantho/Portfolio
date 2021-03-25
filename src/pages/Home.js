import { React, useState } from 'react'
import { Carousel, Row, Col, Image } from "antd"

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
                                        <video muted autoplay="true" loop="true" src="https://res.cloudinary.com/drantho/video/upload/v1615510871/ezgif.com-gif-maker_cjf7al.webm" />
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
            </section>
            <section className="section" id="about">
                <h2>About</h2>
            </section>
            <section className="section" id="contact">
                <h2>Contact</h2>
            </section>
        </div>
    )
}
