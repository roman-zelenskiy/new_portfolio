declare interface DataBase {
  phone_number: string;
  age: string;
  email: string;
  county: string;
  city: string;
  skills: string[];
  languages: {
    lang: string;
    level: string;
  }[]
  education: {
    title: string;
    list: {
      name_place: string;
      specialty: string;
      level: string;
      study_period: string;
    }[]
  };
  courses: {
    title: string;
    list: {
      name_place: string;
      specialty: string;
      level: string;
      study_period: string;
      certificate: string;
    }[]
  };
  works: Work[];
}