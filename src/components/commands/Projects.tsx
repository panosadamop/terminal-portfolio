import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some indicative projects that I have worked on and you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Netcompany ERMIS",
    desc: "Netcompany-Intrasoft Customs Solution",
    url: "https://netcompany.com/public-sector/customs/",
  },
  {
    id: 2,
    title: "Netcompany COMPLIANCE",
    desc: "Netcompany-Intrasoft Risk Management Solution",
    url: "https://netcompany.com/public-sector/customs/",
  },
  {
    id: 3,
    title: "National Bank of Greece",
    desc: "Design and Implementation of various projects like, ebanking, myNBG etc",
    url: "https://nbg.gr/",
  },
  {
    id: 4,
    title: "Eurobank",
    desc: "Design and Implementation of various projects for the needs of the bank.",
    url: "https://eurobank.gr/",
  },
  {
    id: 5,
    title: "MrHealthTech",
    desc: "Innovative & functionality-rich Health Insurance Management System",
    url: "https://www.munichre.com/mrhealthtech/en/solutions/mednext.html",
  },
  {
    id: 6,
    title: "CERN",
    desc: "Design and Implementation of various CERN web portals and software.",
    url: "https://home.cern/",
  },
  {
    id: 7,
    title: "European Medical Agency",
    desc: "Design and Implementation of Clinical Trials Solution. ",
    url: "https://www.ema.europa.eu/en/homepage",
  },
  {
    id: 8,
    title: "EASO",
    desc: "Design and Implementation of various portals and solutions.",
    url: "https://euaa.europa.eu/",
  },
  {
    id: 9,
    title: "Kotsovolos",
    desc: "Technical Leading and Architecture of Kotsovolos apps (Ecommerce Site, KRetail Intranet App and many more)",
    url: "https://kotsovolos.gr/",
  },
  {
    id: 10,
    title: "Hellenic Airforce",
    desc: "Design and Development of EAAA website and internal software solutions.",
    url: "https://haf.gr/",
  },
  {
    id: 11,
    title: "Hellenic Army",
    desc: "Design and Development of EAAS website and internal software solutions.",
    url: "https://army.gr/",
  },
  {
    id: 12,
    title: "Institute of Child Health",
    desc: "Design and Implementation of various websites and software solutions for the Department of Mental Health of ICH",
    url: "https://ich-mhsw.gr/",
  },
  {
    id: 13,
    title: "Mega Channel",
    desc: "Design and Implementation of various custom solutions for handling Mega Channel Content.",
    url: "https://megatv.com/",
  },
  {
    id: 14,
    title: "Specifar",
    desc: "Design and Implementation of a custom solution for Endocrinologists.",
    url: "#",
  },
  {
    id: 15,
    title: "Kosmocar",
    desc: "Design and Implementation of a custom solution for handling the company inventory.",
    url: "https://www.kosmocar.gr/",
  },
  {
    id: 16,
    title: "Public - Media Markt",
    desc: "Integration with Algolia Search Provider and development of the portals' search functionality.",
    url: "https://astro-paper.pages.dev/",
  },
  {
    id: 17,
    title: "Tsakiris Chips",
    desc: "A minimal, accessible and SEO-friendly website for tsakirischips.gr.",
    url: "https://astro-paper.pages.dev/",
  },
  {
    id: 18,
    title: "Coffee Island",
    desc: "Design and Implementation of a custom solution for HACPP.",
    url: "https://astro-paper.pages.dev/",
  },
  {
    id: 19,
    title: "The Mall Athens",
    desc: "Design and Implementation of themallathens.gr.",
    url: "https://themallathens.gr/",
  },
  {
    id: 20,
    title: "Philip Morris Hellas",
    desc: "Design and Implementation of a custom solution (TM Tool) for handling the tasks of the shifts of personnel in the maintenance department of the company.",
    url: "https://pmi.com/",
  },
];

export default Projects;
