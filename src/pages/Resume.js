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
                Full Stack Developer leveraging a strong foundation in business, customer service, and data tracking and visualization. Certified in Full Stack Web Development from the University of Washington Coding Boot Camp. Skilled in understanding complex client requirements and developing tailored software solutions. Proven track record in leading teams to deliver projects on time. Contributed to the award-winning Norway Lights travel and tourism website. Notable projects include No Brainer Meals and Peninsula RV.
            </p>
            <Title level={2} style={styles.mainHeading}>
                Technical Skills
            </Title>
            <p>
                <strong>Front-End: </strong>HTML, CSS, SASS, JavaScript, TypeScript, JQuery React, Next.js, Vue, Angular, Handlebars, D3
            </p>
            <p>
                <strong>Design Frameworks: </strong>Bootstrap, Material Design, Foundation, Ant Design
            </p>
            <p>
                <strong>Back-End: </strong>Node.js, Express, C#, Visual Basic, .NET, Java Spring,  APIs
            </p>
            <p>
                <strong>Databases/Data/ORMs: </strong>MSSQL, MySQL, PSQL, Hibernate, Sequelize, Mongo, Mongoose, JSON, XML,  MS Access
            </p>
            <p><strong>Version Control: </strong>Git, SVN </p>
            <p>
                <strong>Applications: </strong>Visual Studio, VS Code, MySQL Workbench, Robo 3T, Git CLI, MS Office, Figma, Photoshop
            </p>
            <p>
                <strong>Other: </strong>G Code
            </p>

            <Title level={2} style={styles.mainHeading}>Projects</Title>
            <Title level={3} style={styles.headingStyle}>No Brainer Meals | <a href="https://wwww.nobrainermeals.com">nobrainermeals.com</a> | Solo Project/Full Stack</Title>
            <ul className="resume-ul">
                <li>Developed a mobile-responsive recipe, food planning, and grocery ordering web application.</li>
                <li>Improved user experience and streamlined meal planning for users.</li>
                <li>Utilized ASP.NET, C#, MSSQL, Javascript, Material Design</li>
            </ul>
            <Title level={3} style={styles.headingStyle}>Peninsula RV | no longer in service | Solo Project/Full Stack </Title>
            <ul className="resume-ul">
                <li>Built an inventory management system with a public-facing site, sales tracking, commission tracking, payroll processing, sales document generation, tax document generation, customer list, service invoice generation, vehicle service history, and sales lead generation and tracking.</li>
                <li>Enhanced operational efficiency, reducing task completion times and ensuring compliance with state and federal regulations.</li>
                <li>Developed and implemented software tools to streamline operations and enhance productivity.</li>
                <li>Ensured adherence to regulatory standards and maintained high standards of customer service.</li>
                <li>Utilized ASP.NET, C#, MSSQL, Bootstrap, Javascript, JQuery</li>
            </ul>
            <Title level={2} style={styles.mainHeading}>Experience</Title>
            <Title level={3} style={styles.headingStyle}>
                October 2022 - Present<br/>
                RCS Union Software, Coralville, IA - Developer
            </Title>
            <ul className="resume-ul">
                <li>Implement new features to align with accounting, record keeping, and reporting requirements.</li>
                <li>Work with domain experts to diagnose complicated financial issues as bugs vs user error, implement bug fixes, implement better guardrails to prevent user error.</li>
                <li>Develop custom reports.</li>
                <li>Ensure accuracy and quality of code results comply with federal and state agencies.</li>

            </ul>
            <Title level={3} style={styles.headingStyle}>
                May 2021 - September 2022<br/>
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
