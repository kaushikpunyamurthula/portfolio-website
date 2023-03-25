import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import "./HomeComponent.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} theme={this.props.theme} />
        <div className="content-div">
          <Greeting theme={this.props.theme} />
          <Skills theme={this.props.theme} />
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;
