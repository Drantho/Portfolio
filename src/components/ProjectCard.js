import React from 'react';
import { Link } from "react-router-dom";
import { Card } from "antd";

export default function ProjectCard(props) {
    return (
        <Link to={`/project/${props.name}`}>
            <Card
                hoverable
                title={props.displayName}
                cover={<img alt={`screenshot for ${props.displayName}`} src={props.image} />}
            >
            </Card>
        </Link>
    )
}
