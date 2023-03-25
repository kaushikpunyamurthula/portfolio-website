import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";

const summarySection = contactPageData.summarySection;
const addressSection = contactPageData.addressSection;
const contactSection = contactPageData.contactSection;

class Contact extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="contact-main">
        <Header theme={theme} />
        <div className="basic-contact">
          {summarySection.display && (
            <Fade bottom duration={1000} distance="40px">
              <div className="contact-heading-div">
                <div className="contact-heading-img-div">
                  <img
                    src={require(`../../assests/images/${summarySection["profile_image_path"]}`)}
                    alt=""
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="contact-heading-text-div">
                  <h1
                    className="contact-heading-text"
                    style={{ color: theme.text }}
                  >
                    {summarySection["title"]}
                  </h1>
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {summarySection["description"]}
                  </p>
                  <SocialMedia theme={theme} />
                  <div className="resume-btn-div">
                    <Button
                      text="Link to my Resume"
                      newTab={true}
                      href={greeting.resumeLink}
                      theme={theme}
                    />
                  </div>
                </div>
              </div>
            </Fade>
          )}
          {addressSection.display && (
            <Fade bottom duration={1000} distance="40px">
              <div className="address-heading-div">
                <div className="google-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.640175597874!2d-111.92300672581933!3d33.40655055155116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b089320befa5d%3A0x1b276e2dcc409847!2sVolta%20on%20Broadway!5e0!3m2!1sen!2sus!4v1679548368775!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    title="address"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                <div className="address-heading-text-div">
                  <h1
                    className="address-heading-text"
                    style={{ color: theme.text }}
                  >
                    {addressSection.title}
                  </h1>
                  <p
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {addressSection.location.addressText}
                  </p>
                  <h1
                    className="address-heading-text"
                    style={{ color: theme.text }}
                  >
                    {contactSection.phone.title}
                  </h1>
                  <a
                    href={"tel:" + contactSection.phone.subtitle}
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {contactSection.phone.subtitle}
                  </a>
                  <h1
                    className="address-heading-text"
                    style={{ color: theme.text }}
                  >
                    {contactSection.email.title}
                  </h1>
                  <a
                    href={"mailto:" + contactSection.email.subtitle}
                    className="contact-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {contactSection.email.subtitle}
                  </a>
                </div>
              </div>
            </Fade>
          )}
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;
