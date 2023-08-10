import React from "react";
import "./jointeam.css";
import Navbar from "./navbar";
const ProjectOpportunity = ({
  title,
  description,
  skillsRequired,
  timeCommitment,
}) => (
  <div className="project-opportunity">
    <h1>{title}</h1>
    <h2>{description}</h2>
    <h2>
      <strong>Skills Required:</strong> {skillsRequired}
    </h2>
    <h2>
      <strong>Time Commitment:</strong> {timeCommitment}
    </h2>
    {/* Add Apply button or link here */}
  </div>
);

const JoinAteam = () => (
    <>
    <Navbar/>
  <div className="student-collaboration-page">
    <h1>Join Our Student Collaboration Project</h1>
    <p>
      Welcome to our student collaboration project! Here, you can find exciting
      opportunities to work on real-world projects and gain valuable experience.
    </p>

    <div className="project-opportunities">
      <ProjectOpportunity
        title="Design Team"
        description="Join our design team and create visually appealing graphics for our projects."
        skillsRequired="Graphic design, creativity, Adobe Suite"
        timeCommitment="5-10 hours per week"
      />

      {/* Add more ProjectOpportunity components as needed */}
      <ProjectOpportunity
        title="Development Team"
        description="Be part of our development team, building cutting-edge web applications."
        skillsRequired="Web development, JavaScript, React"
        timeCommitment="10-15 hours per week"
      />

      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
      <ProjectOpportunity
        title="Content Writers"
        description="Write engaging articles and content to showcase our projects to the world."
        skillsRequired="Writing, creativity, storytelling"
        timeCommitment="3-6 hours per week"
      />
    </div>

    <p>
      If you're excited to contribute and learn, we encourage you to apply for a
      project opportunity that matches your skills and interests.
    </p>
    {/* Add more content, FAQs, contact information, etc. */}
  </div>
  </>

);

export default JoinAteam;
