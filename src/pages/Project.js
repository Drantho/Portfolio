import React from 'react';
import { useParams } from "react-router-dom";
import { Image, Space, Row, Col } from 'antd';
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

        <Space direction="vertical" id="project" style={{ width: "100%" }}>
            <h1>{project.displayName}</h1>

            <Image
                width={400}
                src={project.largeImage}
                style={{ border: "2px solid white" }}
                placeholder={
                    <Image
                        preview={false}
                        src={project.image}
                    />
                }
            /><br />
            
            {project.role && <>
            <Title level={3} style={styles.headingStyles}>Role: </Title>
            <ul>
                {project.role.map((role, i) => <li key={i}>{role}</li>)}
            </ul>
            </>}            

            {project.live && <><strong>Live: </strong><a target="_blank" rel="noreferrer" href={project.live}>{project.live}</a><br /></>}

            {project.github && <><strong>Github: </strong><a target="_blank" rel="noreferrer" href={project.github}>{project.github}</a><br /></>}

            {project.codepen && <><strong>Codepen: </strong><a target="_blank" rel="noreferrer" href={project.codepen}>{project.codepen}</a><br /></>}


            <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
                <Col className="gutter-row" xl={12} sm={24}>
                    <Title level={3} style={styles.headingStyles}>Features</Title>
                    <ul>
                        {project.features.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </Col>
                <Col className="gutter-row" xl={12} sm={24}>
                    <Title level={3} style={styles.headingStyles}>Technologies</Title>
                    <ul>
                        {project.technologies.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </Col>
            </Row>
        </Space>
    )
}
