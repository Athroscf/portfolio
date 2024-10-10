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

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
      display: true,
      subItems: true
  },
  avatar: {
      display: true
  },
  calendar: {
      display: true,
      link: 'https://cal.com'
  },
  intro: {
      display: true,
      title: 'Introduction',
      description: <>Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
  },
  work: {
      display: true, // set to false to hide this section
      title: 'Work Experience',
      experiences: [
          {
              company: 'FLY',
              timeframe: '2022 - Present',
              role: 'Senior Design Engineer',
              achievements: [
                  <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                  <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
              ],
              images: [ // optional: leave the array empty if you don't want to display images
                  {
                      src: '/images/projects/project-01/cover-01.jpg',
                      alt: 'Once UI Project',
                      width: 16,
                      height: 9
                  }
              ]
          },
          {
              company: 'Creativ3',
              timeframe: '2018 - 2022',
              role: 'Lead Designer',
              achievements: [
                  <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                  <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
              ],
              images: [ ]
          }
      ]
  },
  studies: {
      display: true, // set to false to hide this section
      title: 'Studies',
      institutions: [
          {
              name: 'University of Jakarta',
              description: <>Studied software engineering.</>,
          },
          {
              name: 'Build the Future',
              description: <>Studied online marketing and personal branding.</>,
          }
      ]
  },
  technical: {
      display: true, // set to false to hide this section
      title: 'Technical skills',
      skills: [
          {
              title: 'Figma',
              description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
              images: [
                  {
                      src: '/images/projects/project-01/cover-02.jpg',
                      alt: 'Project image',
                      width: 16,
                      height: 9
                  },
                  {
                      src: '/images/projects/project-01/cover-03.jpg',
                      alt: 'Project image',
                      width: 16,
                      height: 9
                  },
              ]
          },
          {
              title: 'Next.js',
              description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
              images: [
                  {
                      src: '/images/projects/project-01/cover-04.jpg',
                      alt: 'Project image',
                      width: 16,
                      height: 9
                  },
              ]
          }
      ]
  }
}


const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Fullstack developer and Cloud Engineer</>,
  subline: <>Freelancer Fullstack Developer and Cloud Engineer</>
}

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

export { about, home, person, social };
