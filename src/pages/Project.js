import React from 'react';
import { useParams } from "react-router-dom";
import { Image, Space } from 'antd';
import data from "../data";

export default function Project() {

    const { name } = useParams();

    const project = data.find(item => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());

    return (
        <Space direction="vertical">
            <h1>{project.displayName}</h1>

            <Image
                width={400}
                src={project.largeImage}
                placeholder={
                    <Image
                        preview={false}
                        src={project.image}
                    />
                }
            /><br/>
            {project.live && <><strong>Live: </strong><a target="_blank" href={project.live}>{project.live}</a><br/></>}
            {project.github && <><strong>Github: </strong><a target="_blank" href={project.github}>{project.github}</a><br/></>}
            {project.codepen && <><strong>Codepen: </strong><a target="_blank" href={project.codepen}>{project.codepen}</a><br/></>}

            <h3>Features</h3>
            <ul>
                {project.features.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h3>Technologies</h3>
            <ul>
                {project.technologies.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
        </Space>
    )
}
