import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Panagiotis Adamopoulos</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>an Enterprise Architect and Delivery Manager</HighlightAlt> at Kotsovolos - Part of PPC Group.
      </p>
      <p>
        I am passionate about designing and writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
