import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import IconAnimation from "../../assets/icon-animation.svg";
import IconBusines from "../../assets/icon-business.svg";
import IconCrypto from "../../assets/icon-crypto.svg";
import IconDesign from "../../assets/icon-design.svg";
import IconPhotography from "../../assets/icon-photography.svg";
import "./Main.css";

const Main = () => {
  return (
    <main className="main">
      <Banner />
      <Card
        cardTitle="Animation"
        cardText="Learn the latest animation techniques to create stunning motion design and
    captivate your audience."
        src={IconAnimation}
      />
      <Card
        cardTitle="Design"
        cardText="Create beautiful, usable interfaces to help shape the
        future of how the web looks."
        src={IconDesign}
      />
      <Card
        cardTitle="Photography"
        cardText="Explore critical fundamentals
        like lighting, composition, and focus to capture exceptional photos."
        src={IconPhotography}
      />
      <Card
        cardTitle="Crypto"
        cardText="All you need
        to know to get started investing in crypto. Go from beginner to advanced
        with this 54 hour course."
        src={IconCrypto}
      />
      <Card
        cardTitle="Business"
        cardText="A step-by-step playbook to help you start, scale, and sustain your
        business without outside investment."
        src={IconBusines}
      />
    </main>
  );
};
export default Main;
