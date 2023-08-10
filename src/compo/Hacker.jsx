import React from "react";
import Feed from "./Feed";
import { data1 } from "./data1";
import Navbar from "./navbar";
const Hacker = () => {
  return (
    <div>
      <Navbar />
      <h1>Join here Fast</h1>
      <h2>
        Joining a team for a hackathon can be an excellent way to enhance your
        overall experience and increase your chances of success. Here are some
        reasons why you might want to consider joining a team for a hackathon:
        Diverse Skillsets: Hackathons often require a combination of skills,
        such as coding, design, project management, and domain knowledge.
        Joining a team allows you to leverage the strengths of each member,
        ensuring a well-rounded approach to solving the challenge. Collaborative
        Learning: Working with others exposes you to different perspectives,
        techniques, and approaches. You can learn from your team members and
        improve your skills in areas you might not be as proficient in.
      </h2>
      <Feed data={data1} />
    </div>
  );
};

export default Hacker;
