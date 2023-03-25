import React, { Component } from "react";
import "./Certifications.css";
import { Fade } from "react-reveal";
import { education } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

class Certifications extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="certs">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Certifications and Awards
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {education.certifications.map((cert, i) => {
            return (
              <CertificationCard
                certificate={cert}
                theme={theme}
                key={"certificate" + i}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Certifications;
