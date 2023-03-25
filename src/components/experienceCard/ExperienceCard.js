import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div className="experience-card-body">
        <div
          className="experience-body-header"
          style={{ backgroundColor: theme.headerColor }}
        >
          <div className="experience-card-logo-div">
            <img
              className="experience-card-logo"
              src={require(`../../assests/images/${experience.logo_path}`)}
              alt=""
            />
          </div>
          <div className="experience-body-header-title">
            <h2 className="experience-card-title" style={{ color: theme.text }}>
              {experience.title}
            </h2>
            <h3
              className="experience-card-subtitle"
              style={{ color: theme.text }}
            >
              {experience.company}
            </h3>
          </div>
          <div className="experience-body-header-duration">
            <h3 className="experience-duration" style={{ color: theme.text }}>
              {experience.duration}
            </h3>
            <h3 className="experience-duration" style={{ color: theme.text }}>
              {experience.location}
            </h3>
          </div>
        </div>
        <div className="experience-body-content">
          <div className="experience-flex-child" style={{ width: "90%" }}>
            {experience.responsibilities.map((responsibility, i) => {
              return (
                <p
                  className="experience-content-list"
                  style={{ color: theme.text }}
                  key={"responsibility" + i}
                >
                  {responsibility}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;
