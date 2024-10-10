import {
  EnvelopeOpenIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const person = {
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

const social = [
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

export { person, social };
