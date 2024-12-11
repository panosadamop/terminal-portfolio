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
        I'm <HighlightAlt>a Senior Manager</HighlightAlt> at Netcompany -
        Intrasoft.
      </p>
      <p>
        <br />
        As a Senior Manager, I oversee the development and delivery of complex
        web and mobile solutions for the world's leading companies. With over a
        decade of experience in software engineering and architecture, I possess
        extensive expertise in technologies such as JEE, Spring, Python, Django,
        PHP MVC, Symfony, Drupal, React, Angular, databases, alongside
        proficiency in Linux server administration.
        <br />
        <br />
        Throughout my career, I have successfully led and supported numerous
        projects, encompassing all phases from requirement analysis and user
        documentation to database design and service integration. These projects
        span diverse domains, including telco, insurance, banking, construction,
        education, and e-commerce. My certifications include Agile Professional
        credentials (PSM, PSPO, PSD), Python and Drupal Developer
        certifications, Big Data Analytics certifications, and recognition as a
        Prestashop Ambassador and a Drupal Association member. Additionally, I
        have authored multiple papers and a book focusing on software
        development and security.
        <br />
        <br />I am deeply passionate about designing and implementing
        innovative, scalable solutions that align with customer expectations and
        business objectives, driving value and impact in every project I
        undertake.
      </p>
    </AboutWrapper>
  );
};

export default About;
