import React from 'react';
import { Link } from "react-router-dom";
import { Card } from "antd";

export default function ProjectCard(props) {

    console.log(props.imageRatio === 'square' ? 'square-ratio' : 'wide-ratio', props)
    return (
        <Link to={`/project/${props.name}`}>
            <Card
                className={props.imageRatio === "square" ? "square-ratio" : "wide-ratio"}
                hoverable
                title={props.displayName}
                cover={<img className={props.imageRatio === 'square' ? 'square-ratio' : 'wide-ratio'} alt={`screenshot for ${props.displayName}`} src={props.image} />}
                style={{marginTop: "15px"}}
            >
            </Card>
        </Link>
    )
}
