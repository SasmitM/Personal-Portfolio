export interface Project {
  title: string;
  description: string;
  link?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  image: string;
}

export const portfolioData = {
  profile: {
    name: "Your Name",
    image: "/profile.jpg", // Add your profile image to public folder
  },
  interests: [
    "Web Development",
    "Machine Learning",
    "Data Science",
    "Software Engineering",
  ],
  intro: "Hello! I'm a passionate developer with a love for creating innovative solutions. I enjoy working on projects that challenge me and help me grow as a programmer. Welcome to my portfolio!",
  classes: [
    "Introduction to Computer Science",
    "Data Structures and Algorithms",
    "Web Development",
    "Database Systems",
    "Software Engineering",
  ],
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
    },
  ],
  projects: [
    {
      title: "Project 1",
      description: "A description of your first project and what it does.",
      link: "https://example.com",
    },
    {
      title: "Project 2",
      description: "A description of your second project and its features.",
      link: "https://example.com",
    },
    {
      title: "Project 3",
      description: "A description of your third project and technologies used.",
    },
  ],
  extracurriculars: [
    "Hackathon Participant - Won 2nd place in local competition",
    "Open Source Contributor - Contributed to multiple projects",
    "Tech Club Member - Organized coding workshops",
    "Volunteer Tutor - Taught programming to beginners",
  ],
};
