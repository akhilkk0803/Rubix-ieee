import React from "react";
import NewsletterSubscription from "./compo/JoinUS";
import JoinAteam from "./compo/JoinAteam";
import Hacker from "./compo/Hacker";
import Footer from "./compo/Footer";
import Feed from "./compo/Feed";
import { data } from "./compo/data";
import ButtonGroup from "./compo/Join";
import Intro from "./compo/intro";
import Navbar from "./compo/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate3d(-50%,-50%,0)",
        }}
      >
        <h1
          style={{
            margin: 0,
            padding: 0,
            fontSize: "10em",
            fontWeight: 500,
            letterSpacing: "-0.05em",
          }}
        >
          ವಿದ್ಯಾರ್ಥಿ सहयोग
        </h1>
      </div>
      <Intro />

      <div className="content">
        <h1>About us</h1>
        <h2 style={{ fontFamily: "sans-serif" }}>
          "Vidyarti Sahayog" is a student collaboration platform that enables
          students to share resources, collaborate on projects, and connect with
          peers. It provides a space for academic discussions, project teamwork,
          and mentorship opportunities. Through resource sharing, online events,
          and networking, students can enhance their learning experience and
          academic success.
        </h2>
        <h1>Latest Hackathons</h1>

        <Feed data={data} />
        <span></span>
        <h1>Particpate in upcoming Hackathons by choosing below :</h1>
        <ButtonGroup />
        <span></span>
        <span></span>
        <span></span>
        <NewsletterSubscription />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
