declare interface DataBase {
  phone_number: string;
  age: string;
  email: string;
  main_photo: string;
  county: string;
  city: string;
  skills: string[];
  about_me: string;
  languages: {
    lang: string;
    level: string;
  }[];
  education: {
    title: string;
    list: {
      name_place: string;
      specialty: string;
      level: string;
      study_period: string;
    }[];
  };
  courses: {
    title: string;
    list: {
      name_place: string;
      specialty: string;
      level: string;
      study_period: string;
      certificate: string;
    }[];
  };
  social_networks: {
    title: string;
    path: string;
    icon: string;
  }[];
  experience: {
    position: string;
    organization: string;
    work_period: string;
    description: string;
    technologies: DataBase['skills'];
  }[];
  works: Work[];
}
