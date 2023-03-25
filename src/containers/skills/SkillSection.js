import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skills } from "../../portfolio";
import { Fade } from "react-reveal";

function GetSkillSvg(props) {
  return <img src={require(`../../assests/images/${props.fileName}`)} alt="" />;
}

function getSkillImageDiv(skill, theme, direction) {
  return (
    <Fade left={direction} right={!direction} duration={2000}>
      <div className="skills-image-div">
        <GetSkillSvg fileName={skill.fileName} theme={theme} />
      </div>
    </Fade>
  );
}

function getSkillTextDiv(skill, theme, direction) {
  return (
    <Fade left={direction} right={!direction} duration={2000}>
      <div
        className="skills-text-div"
        style={!direction ? { marginLeft: "5%" } : { marginRight: "5%" }}
      >
        <h1
          className="skills-heading"
          style={{ color: theme.text, textAlign: "center" }}
        >
          {skill.title}
        </h1>
        <SoftwareSkill logos={skill.softwareSkills} />

        <div>
          {skill.skills.map((skillSentence, i) => {
            return (
              <p
                className="subTitle skills-text"
                style={{ color: theme.secondaryText }}
                key={"sentence" + i}
              >
                {skillSentence}
              </p>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}

class SkillSection extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div>
        {skills.data.map((skill, idx) => {
          if (idx % 2 === 0)
            return (
              <div className="skills-main-div" key={"skills-main" + idx}>
                {getSkillImageDiv(skill, theme, true)}
                {getSkillTextDiv(skill, theme, false)}
              </div>
            );
          else
            return (
              <div className="skills-main-div" key={"skills-main" + idx}>
                {getSkillTextDiv(skill, theme, true)}
                {getSkillImageDiv(skill, theme, false)}
              </div>
            );
        })}
      </div>
    );
  }
}

export default SkillSection;
