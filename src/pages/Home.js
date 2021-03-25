import { React, useState } from 'react'
import { Carousel, Row, Col } from "antd"

export default function Home() {

    const [currentVerb, setCurrentVerb] = useState(0);

    const verbs = ["move", "create", "calculate", "work"];

    const changeVerb = () => {
        setCurrentVerb((currentVerb + 1) % verbs.length);
    }

    return (
        <div>
            <section className="section" id="intro">


                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={6}>
                        <img className="portrait" src="https://res.cloudinary.com/drantho/image/upload/v1614876275/jtlw9xzwwwwgayavxqyk.jpg" />
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={12}>
                                <h2 className="intro-text">My name is Anthony and I&nbsp;build&nbsp;websites&nbsp;that&nbsp;{verbs[currentVerb]}</h2>
                            </Col>
                        </Row>
                        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                            <Col className="gutter-row" span={12}>
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
                                        <img src="https://res.cloudinary.com/drantho/image/upload/v1614075793/nobrainermeals_e1bpca.png" />
                                    </div>
                                    <div className="panel">
                                        <img src="https://res.cloudinary.com/drantho/image/upload/v1616638401/mervin_graph_ijbjjr.png" />
                                    </div>
                                    <div className="panel">
                                        <img src="https://res.cloudinary.com/drantho/image/upload/v1616638834/screenshot-penrv.com-2021.03.24-19_18_14_gpjplw.png" />
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
