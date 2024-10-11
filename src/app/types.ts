export type IPerson = {
  firstname: string;
  lastname: string;
  readonly name: string; // This is a computed property, so it's marked as readonly
  role: string;
  avatar: string;
  location: string;
  languages: string[];
};

export type IHome = {
  label: string;
  title: string;
  description: string;
  headline: React.ReactNode;
  subline: React.ReactNode;
};

export type ISocialLink = {
  name: string;
  icon: string;
  link: string;
};

export type IAbout = {
  label: string;
  title: string;
  description: string;
  tableOfContent: {
    display: boolean;
    subItems: boolean;
  };
  avatar: {
    display: boolean;
  };
  calendar: {
    display: boolean;
    link: string;
  };
  intro: {
    display: boolean;
    title: string;
    description: React.ReactNode;
  };
  work: {
    display: boolean;
    title: string;
    experiences: {
      company: string;
      timeframe: string;
      role: string;
      achievements: React.ReactNode[];
      images: {
        src: string;
        alt: string;
        width: number;
        height: number;
      }[];
    }[];
  };
  studies: {
    display: boolean;
    title: string;
    institutions: {
      name: string;
      description: React.ReactNode;
    }[];
  };
  technical: {
    display: boolean;
    title: string;
    skills: {
      title: string;
      description?: React.ReactNode;
      images?: {
        src: string;
        alt: string;
        width: number;
        height: number;
      }[];
    }[];
  };
};
