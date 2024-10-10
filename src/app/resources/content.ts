import { IAbout, IHome, IPerson, ISocialLink } from "@/app/types";

const person: IPerson = {
  firstname: "Christopher",
  lastname: "Fiallos",
  get name() {
    return `${this.firstname} ${this.lastname}`;
  },
  role: "Fullstack Developer | Cloud Engineer",
  avatar: "",
  location: "CST",
  languages: ["English", "Spanish"],
};

const about: IAbout = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      "With over four years of experience in IT and software development, I specialize in cloud engineering, software development, and IT management. I've successfully led projects that boosted team efficiency by 20% and improved product reliability by 30%. My technical skills span AWS, Docker, Kubernetes, React, and Python, while I also bring a strong background in youth coaching, fostering teamwork and growth. Currently, I’m focused on advancing my expertise in cloud technologies and leveraging my diverse skill set to drive impactful solutions."
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "CODE Exitos",
        timeframe: "2022 - 2023",
        role: "Software Developer",
        achievements: [
            "Resolved 20 software bugs in two weeks, reducing user complaints by 30% and significantly increasing overall product reliability.",
            "Developed six new features, enhancing user satisfaction and boosting app usage by 20%, contributing to an improved user experience."
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "CODE Exitos projects",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Minister Business Hotel",
        timeframe: "2021 - 2022",
        role: "IT Manager",
        achievements: [
            "Reduced call handling costs by 50% through PBX system optimization, enhancing communication efficiency across the hotel.",
            "Implemented table management software, decreasing manual errors by 30% and boosting customer satisfaction in bar operations."
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Universidad Catolica de Honduras",
        description: "Studied software engineering.",
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "AWS Certified Cloud Practitiones",
        description: "AWS Certified",
        images: [
          {
            src: "https://www.credly.com/badges/6e46fb19-a5f1-4fb9-9f23-5024da3e9bee",
            alt: "AWS CCP Badge",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
      },
      {
        title: "Next.js",
      },
      {
        title: "Next.js",
      },
      {
        title: "Next.js",
      },
      {
        title: "Next.js",
      },
      {
        title: "Next.js",
      },
    ],
  },
};

const home: IHome = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Fullstack developer and Cloud Engineer",
  subline: "Freelancer Fullstack Developer and Cloud Engineer",
};

const social: ISocialLink[] = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/athroscf",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/christopher-fiallos/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/ChrisFiallos10",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:fialloschris1@gmail.com",
  },
];

export { about, home, person, social };
