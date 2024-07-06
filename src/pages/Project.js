import React from 'react';
import { useParams } from "react-router-dom";
import { Image, Space, Row, Col, Carousel } from 'antd';
import data from "../data";
import Title from 'antd/lib/typography/Title';

export default function Project() {

    const { name } = useParams();

    const project = data.find(item => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());

    const styles = {
        headingStyles: {
            color: "#FFF"
        }
    }

    return (

        <Space direction="vertical" id="project" style={{ width: "100%", marginTop: 50 }}>
            <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
                <Col className="gutter-row" xl={24} sm={24}>
                    <Title level={1} style={{...styles.headingStyles, textAlign: "center"}}>{project.displayName}</Title>

                    {project.imageList &&
                    <Carousel slidesToShow={1} dots centerMode>

                        {project.imageList.map(image => {
                            return <div>
                            <Image
                                src={image}
                                style={{ border: "2px solid white" }}
                                placeholder={
                                    <Image
                                        preview={false}
                                        src={image}
                                    />
                                }
                            />
                        </div>
                        })}
                    </Carousel>}

                    {!project.imageList &&
                    <div>
                        <Image
                            width={800}
                            src={project.largeImage}
                            style={{ border: "2px solid white" }}
                            placeholder={
                                <Image
                                    preview={false}
                                    src={project.largeImage}
                                />
                            }
                        />
                    </div>}
                </Col>
            </Row>

            <Title level={2} style={{...styles.headingStyles, textAlign: "center"}}>Info</Title>

            <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
                <Col className="gutter-row" xl={8} sm={24}>
                    <div className='info'>

                        {project.role && <>
                        <Title level={3} style={styles.headingStyles}>Role: {project.role}</Title>
                        </>}

                        {project.live && <><strong>Live: </strong><a target="_blank" rel="noreferrer" href={project.live}>{project.live}</a><br /></>}

                        {project.github && <><strong>Github: </strong><a target="_blank" rel="noreferrer" href={project.github}>{project.github}</a><br /></>}

                        {project.codepen && <><strong>Codepen: </strong><a target="_blank" rel="noreferrer" href={project.codepen}>{project.codepen}</a><br /></>}

                    </div>
                </Col>
                <Col className="gutter-row" xl={8} sm={24}>
                    <div className='info'>
                    <Title level={3} style={styles.headingStyles}>Features</Title>
                    <ul>
                        {project.features.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    </div>
                </Col>
                <Col className="gutter-row" xl={8} sm={24}>
                    <div className='info'>
                    <Title level={3} style={styles.headingStyles}>Technologies</Title>
                    <ul>
                        {project.technologies.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    </div>
                </Col>
            </Row>

            {project.projects && <>
                <Title level={2} style={{...styles.headingStyles, textAlign: "center"}}>Projects</Title>
                {project.projects.map(item =>  {
                    return <>
                    <Title level={3} style={styles.headingStyles}>{item.name}</Title>
                    <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
                        <Col className="gutter-row left-align" xl={24} sm={24} style={{marginBottom: 0}}>
                            <Image
                                width={600}
                                src={item.image}
                                style={{ border: "2px solid white" }}
                                placeholder={
                                    <Image
                                        preview={false}
                                        src={item.image}
                                    />
                                }
                                />
                            <p>
                                <a href={item.link} target="_blank">
                                    {item.link}
                                </a>
                            </p>
                        </Col>
                    </Row>
                    <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
                        <Col className="gutter-row" xl={12} sm={24}>
                            <div className='info'>
                                <Title level={3} style={styles.headingStyles}>Description</Title>
                                <p>{item.description}</p>
                            </div>
                        </Col>
                        <Col className="gutter-row" xl={12} sm={24}>
                            <div className='info'>
                                <Title level={3} style={styles.headingStyles}>Work performed</Title>
                                <ul>
                                    {item.work.map(work => <li>{work}</li>)}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </>
                })}
            </>}
        </Space>
    )
}
