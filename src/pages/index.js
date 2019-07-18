import React from "react";

import config from "../../config";
import threeD from "../assets/images/threeD.jpg";
import reflex from "../assets/images/reflex.png";
import fruits from "../assets/images/fruits.png";
import portfolio from "../assets/images/portfolio.png";
import Layout from "../components/Layout";
import Scroll from "../components/Scroll";

import myCar from "../assets/images/myCar.png";

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn more
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            Hi! I'm Daria Kozielecka,
            <br />
            and nice to meet You!
          </h2>
          <p>
            I'm junior JavaScript developer.
            <br />
            Actually I'm working at Gdańskie Wydawnictwo Oświatowe, where I'm
            creating educational apps and mini games. I'm ready for new
            opportunities.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon solid fa-terminal major style1" />
          </li>
          <li>
            <span className="icon solid fa-laptop-code major style2" />
          </li>
          <li>
            <span className="icon solid fa-code major style3" />
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={threeD} alt="" />
        </div>
        <div className="content">
          <h2>
            3D
            <br />
            Builder
          </h2>
          <p>
            #TypeScript #ThreeJS <br />
            This project give you chance to create any 3D Prism. <br />
            Documentation is in progress.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={reflex} alt="" />
        </div>
        <div className="content">
          <h2>
            Reflex
            <br />
            Game
          </h2>
          <p>
            #JavaScript #Sass <br />
            Project was created for my first interview in GWO. <br />
            It's a simple click-game.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={fruits} alt="" />
        </div>
        <div className="content">
          <h2>
            Fruits
            <br />
            Game
          </h2>
          <p>
            #JavaScript #Css <br />
            Another simple click-game.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={myCar} alt="" />
        </div>
        <div className="content">
          <h2>
            My Car
            <br />
            Paper
          </h2>
          <p>
            #React #TypeScript #Firebase #Redux #MaterialUI
            <br />
            It's the app, whose archived history all repairs in your car. One of
            features will be notifications about approaching deadline next visit
            at your mechanic. <br />
            Actually project is in progress.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={portfolio} alt="" />
        </div>
        <div className="content">
          <h2>
            Portfolio
            <br />
          </h2>
          <p>
            #GatsbyJS <br />
            Simple one-page-scroll about me and my projects :D
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Knowledge is power</h2>
          <p>So still I'm upgrading my skills and abilities</p>
        </header>
        <ul className="features">
          <li className="icon solid fa-code">
            <h3>Basic technologies</h3>
            <p>
              <ul />
              ‧ JavaScript → ES5/ES6 <br />
              ‧ TypeScript <br />
              ‧ NodeJS → actually I'm learning it <br />
              ‧ HTML5 <br />
              ‧ CSS3
              <ul />
            </p>
          </li>
          <li className="icon solid fa-file-code">
            <h3>Frameworks</h3>
            <p>
              <ul />
              ‧ ReactJS <br />
              ‧ Redux → in progress <br />
              ‧ ReactNative → in the future
              <ul />
            </p>
          </li>
          <li className="icon solid fa-code-branch">
            <h3>Librares</h3>
            <p>
              <ul />
              ‧ Styled Components
              <br />
              ‧ ThreeJS <br />
              ‧ GatsbyJS <br />
              ‧ CreateJS <br />
              ‧ Semantic UI
              <br />
              ‧ Material UI → a little
              <br />
              <ul />
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Utilites</h3>
            <p>
              <ul />
              ‧ Sass <br />
              ‧ Git → GitHub, GitLab <br />
              ‧ NPM <br />
              ‧ Webpack <br />
              ‧ Jira/Redmine <br />
              ‧ Scrum <br />
              ‧ VS Code <br />
              ‧ OSX/Linux <br />
              ‧ Gimp/Inkscape/Adobe Animate <br />
              <ul />
            </p>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
