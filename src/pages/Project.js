import React from 'react';
import { useParams } from "react-router-dom";
import { Image, Space, Row, Col } from 'antd';
import data from "../data";

export default function Project() {

    const { name } = useParams();

    const project = data.find(item => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());

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
            {project.live && <><strong>Live: </strong><a target="_blank" rel="noreferrer" href={project.live}>{project.live}</a><br /></>}

            {project.github && <><strong>Github: </strong><a target="_blank" rel="noreferrer" href={project.github}>{project.github}</a><br /></>}

            {project.codepen && <><strong>Codepen: </strong><a target="_blank" rel="noreferrer" href={project.codepen}>{project.codepen}</a><br /></>}


            <Row gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}>
                <Col className="gutter-row" xl={12} sm={24}>
                    <h3>Features</h3>
                    <ul>
                        {project.features.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </Col>
                <Col className="gutter-row" xl={12} sm={24}>
                    <h3>Technologies</h3>
                    <ul>
                        {project.technologies.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </Col>
            </Row>
        </Space>
    )
}
