import React from "react";
import {Col, Row} from "react-bootstrap";
import CertificationCards from "../About/CertificationCards";
import CloudApplicationDevelopmentFoundations
    from "../../Assets/Certificate/CloudApplicationDevelopmentFoundations.png";
import IBMFullStackSoftwareDeveloper from "../../Assets/Certificate/IBMFullStackSoftwareDeveloper.png";
import IBMDevOpsAndSoftwareEngineering from "../../Assets/Certificate/IBMDevOpsandSoftwareEngineering.png";

function Certifications() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col md={4} className="project-card">
                <CertificationCards
                    imgPath={IBMFullStackSoftwareDeveloper}
                    isBlog={false}
                    title="IBM Full Stack Software Developer Specialization"
                    ghLink="https://www.coursera.org/account/accomplishments/specialization/certificate/8UHKKBS8F3PJ"
                />
            </Col>

            <Col md={4} className="project-card">
                <CertificationCards
                    imgPath={CloudApplicationDevelopmentFoundations}
                    isBlog={false}
                    title="Cloud Application Development Foundations Specialization"
                    ghLink="https://www.coursera.org/account/accomplishments/specialization/certificate/4PJNMAHZM55S"
                />
            </Col>

            <Col md={4} className="project-card">
                <CertificationCards
                    imgPath={IBMDevOpsAndSoftwareEngineering}
                    isBlog={false}
                    title="IBM DevOps and Software Engineering Specialization"
                    ghLink="https://www.coursera.org/account/accomplishments/specialization/certificate/LSA8Y5HZHPUU"
                />
            </Col>
        </Row>
    );
}

export default Certifications;
