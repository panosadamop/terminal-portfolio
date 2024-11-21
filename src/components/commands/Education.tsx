import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>My education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "MSc in Computer Science",
    desc: "University of Piraeus | 2014 ~ 2016",
  },
  {
    title: "MSc in Materials Science",
    desc: "National Technical University of Athens | 2005 - 2007",
  },
  {
    title: "Diploma in Chemical Engineering",
    desc: "University of Patras | 1998 ~ 2004",
  },
];

export default Education;
