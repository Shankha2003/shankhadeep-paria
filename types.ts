export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  link: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
  tech: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  link: string;  
}

export interface InterestItem {
  name: string;
  image: string;
}

export interface Interest {
  id: string;
  title: string;
  items: InterestItem[];
  coverImage: string;
}