import Title from 'antd/lib/typography/Title'
import React from 'react'

function Resume() {
    const styles={
        headingStyle: {
            color:"#FFF"
        },
        centeredHeading: {
            color:"#FFF",
            textAlign: "center"
        },
        centeredContent: {
            textAlign: "center"
        },
        mainHeading: {
            color: "#FFF",
            textDecoration: "underline"
        }
    }
    return (
        <div className="section">
            <Title style={styles.centeredHeading}>Anthony Mitchell</Title>
            <p style={styles.centeredContent}>
                <a href="mailto:mitchellanthonyd@gmail.com">mitchellanthonyd@gmail.com</a> | Sequim, WA 98382<br/>
                LinkedIn: <a href="https://www.linkedin.com/in/drantho/">linkedin.com/in/drantho</a> | Github:  <a href="https://github.com/Drantho">github.com/Drantho</a>  | Portfolio: <a href="http://anthonymitchell.info/">anthonymitchell.info</a>
            </p>
            <Title level={2} style={styles.mainHeading}>
                Summary
            </Title>
            <p>
                Full Stack  Developer leveraging background in business, customer service, data and science to provide effective applications in varied fields. Earned a certificate in Full Stack Web Development from the University of Washington Coding Boot Camp. Proven ability to comprehend client needs and develop software that fits complex requirements. Experienced working with and leading teams to meet deadlines.
            </p>
            <Title level={2} style={styles.mainHeading}>
                Technical Skills
            </Title>
            <p>
                <strong>Front-End: </strong>HTML, CSS, SASS, Javascript, JQuery React, handlebars, D3
            </p>
            <p>
                <strong>Front-End Frameworks: </strong>Bootstrap, Material Design, Foundation, Ant Design
            </p>
            <p>
                <strong>Back-End: </strong>Node.js, Express, C#, Visual Basic, .NET, REST APIs
            </p>
            <p>
                <strong>Databases/Data/ORMs: </strong>MSSQL, MySQL, Sequelize, Mongo, Mongoose, JSON, XML,  MS Access
            </p>
            <p>
                <strong>Applications: </strong>Visual Studio, VS Code, MySQL Workbench, Robo 3T, Git CLI, MS Office
            </p>
            <p>
                <strong>Other: </strong>G Code
            </p>

            <Title level={2} style={styles.mainHeading}>Projects</Title>
            <Title level={3} style={styles.headingStyle}>No Brainer Meals | <a href="https://wwww.nobrainermeals.com">nobrainermeals.com</a> | Solo Project/Full Stack</Title>
            <ul className="resume-ul">
                <li>Mobile responsive recipe/Food planning/grocery ordering service web application</li>
                <li>ASP.NET, C#, MSSQL, Javascript, Material Design</li>
            </ul>
            <Title level={3} style={styles.headingStyle}>Plant Care App | <a href="https://sothirstyproject.herokuapp.com">sothirstyproject.herokuapp.com</a> | Project Manager/ Backend Data</Title>
            <ul className="resume-ul">
                <li>Plant information &amp; care lookup/ care reminder &amp; scheduling</li>
                <li>Node, Express, MySQL, Handlebars, Javascript, Foundation</li>
                <li>University of Washington Coding Bootcamp award winner for best functionality</li>
            </ul>
            <Title level={3} style={styles.headingStyle}>Peninsula RV | no longer in service | Solo Project/Full Stack </Title>
            <ul className="resume-ul">
                <li>Inventory management, public company information, track sales &amp; commissions, generate sale documents, generate tax documents, generate payroll documents, record customer list, record vehicle service history, generate service invoices, generate sales leads.</li>
                <li>ASP.NET, C#, MSSQL, Bootstrap, Javascript, JQuery</li>
            </ul>
            <Title level={2} style={styles.mainHeading}>Experience</Title>
            <Title level={3} style={styles.headingStyle}>
                May 2021 - Current<br/>
                Simpleview Inc, Tucson, AZ - CMS Developer I
            </Title>
            <ul className="resume-ul">
                <li>Ensure compliance with state and federal regulations.</li>
                <li>Develop, train employees in use of software tools to maintain productivity, compliance.</li>
            </ul>
            <Title level={3} style={styles.headingStyle}>
                October 2008 - September 2020<br/>
                Peninsula RV, Sequim, WA- Owner/Manager
            </Title>
            <ul className="resume-ul">
                <li>
                    Support existing code base by extending features and fixing bugs.
                </li>
                <li>
                    Support existing code base by extending features and fixing bugs.
                </li>
                <li>
                    Develop new features at client request.
                </li>
                <li>
                    Optimize performance and accessibility.
                </li>
            </ul>

            <Title level={2} style={styles.mainHeading}>Education</Title>
            <Title level={3} style={styles.headingStyle}>
                December 2020 - March 2021<br/>
                University of Washington Coding Bootcamp - Certificate
            </Title>
        </div>
    )
}

export default Resume
