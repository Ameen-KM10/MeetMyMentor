import Photo1 from "../assets/profile/photo1.webp";
import Photo2 from "../assets/profile/photo2.webp";
import Photo3 from "../assets/profile/photo3.webp";
import Photo4 from "../assets/profile/photo4.webp";
import Photo5 from "../assets/profile/photo5.webp";
import Photo6 from "../assets/profile/photo6.webp";

const nicheCards = [
  // Web Dev
  {
    image: Photo1,
    name: "Jimmy James",
    role: "Web Dev",
    description: "React and Node.js specialist.",
  },
  {
    image: Photo2,
    name: "Ava Patel",
    role: "Web Dev",
    description: "Frontend developer focused on accessibility.",
  },
  {
    image: Photo3,
    name: "John Carter",
    role: "Web Dev",
    description: "Full-stack mentor for modern web technologies.",
  },
  {
    image: Photo4,
    name: "Liam Chen",
    role: "Web Dev",
    description: "Backend engineer and open source contributor.",
  },
  {
    image: Photo5,
    name: "Priya Singh",
    role: "Web Dev",
    description: "JavaScript and TypeScript expert.",
  },
  {
    image: Photo6,
    name: "Sara Lee",
    role: "Web Dev",
    description: "Web performance and SEO mentor.",
  },
  {
    image: Photo1,
    name: "Mitchell Clements",
    role: "Web Dev",
    description: "Mentor in scalable web apps.",
  },

  // UI/UX
  {
    image: Photo2,
    name: "Ashok Kumar",
    role: "UI/UX",
    description: "Expert in UI/UX and product design.",
  },
  {
    image: Photo3,
    name: "Oscar",
    role: "UI/UX",
    description: "Specialist in creative direction and branding.",
  },
  {
    image: Photo4,
    name: "Michael Roseberg",
    role: "UI/UX",
    description: "Mentor in design systems and team leadership.",
  },
  {
    image: Photo5,
    name: "Kim",
    role: "UI/UX",
    description: "UI/UX designer with a passion for mentoring.",
  },
  {
    image: Photo6,
    name: "Jake Gyllenhaal",
    role: "UI/UX",
    description: "Experienced in product and interaction design.",
  },
  {
    image: Photo1,
    name: "Lora Lane",
    role: "UI/UX",
    description: "Design consultant and career coach.",
  },
  {
    image: Photo2,
    name: "Rajesh Kumar",
    role: "UI/UX",
    description: "UX researcher and usability expert.",
  },

  // Fitness
  {
    image: Photo3,
    name: "Oscar Smith",
    role: "Fitness",
    description: "Certified fitness coach and nutrition specialist.",
  },
  {
    image: Photo4,
    name: "Priya Singh",
    role: "Fitness",
    description: "Yoga instructor and wellness mentor.",
  },
  {
    image: Photo5,
    name: "Kim Lee",
    role: "Fitness",
    description: "Personal trainer and group fitness leader.",
  },
  {
    image: Photo6,
    name: "Jake Gyllenhaal",
    role: "Fitness",
    description: "Strength and conditioning mentor.",
  },
  {
    image: Photo1,
    name: "Lora Lane",
    role: "Fitness",
    description: "Fitness consultant and health coach.",
  },
  {
    image: Photo2,
    name: "Mitchell Clements",
    role: "Fitness",
    description: "Sports performance specialist.",
  },
  {
    image: Photo3,
    name: "Ava Patel",
    role: "Fitness",
    description: "Pilates and flexibility expert.",
  },

  // Career
  {
    image: Photo4,
    name: "Michael Roseberg",
    role: "Career",
    description: "Career guidance expert with 10+ years of experience.",
  },
  {
    image: Photo5,
    name: "Eddy Williams",
    role: "Career",
    description: "Career coach helping professionals achieve their goals.",
  },
  {
    image: Photo6,
    name: "Sara Lee",
    role: "Career",
    description: "Resume and interview mentor.",
  },
  {
    image: Photo1,
    name: "John Carter",
    role: "Career",
    description: "Leadership and career growth specialist.",
  },
  {
    image: Photo2,
    name: "Kim Lee",
    role: "Career",
    description: "Career transition and planning mentor.",
  },
  {
    image: Photo3,
    name: "Rajesh Kumar",
    role: "Career",
    description: "Professional development coach.",
  },
  {
    image: Photo4,
    name: "Ava Patel",
    role: "Career",
    description: "Mentor for career advancement.",
  },

  // Marketing
  {
    image: Photo5,
    name: "Kim",
    role: "Marketing",
    description: "Digital marketing strategist and branding consultant.",
  },
  {
    image: Photo6,
    name: "Mitchell Clements",
    role: "Marketing",
    description: "Marketing leader with global campaign experience.",
  },
  {
    image: Photo1,
    name: "Priya Singh",
    role: "Marketing",
    description: "Content marketing and SEO expert.",
  },
  {
    image: Photo2,
    name: "Oscar Smith",
    role: "Marketing",
    description: "Social media and influencer marketing mentor.",
  },
  {
    image: Photo3,
    name: "Sara Lee",
    role: "Marketing",
    description: "Email marketing and automation specialist.",
  },
  {
    image: Photo4,
    name: "John Carter",
    role: "Marketing",
    description: "Brand strategy and market research mentor.",
  },
  {
    image: Photo5,
    name: "Lora Lane",
    role: "Marketing",
    description: "Mentor in digital advertising.",
  },

  // Finance
  {
    image: Photo6,
    name: "Jake Gyllenhaal",
    role: "Finance",
    description:
      "Finance mentor specializing in personal and corporate finance.",
  },
  {
    image: Photo1,
    name: "Nina Brown",
    role: "Finance",
    description: "Financial analyst and investment mentor.",
  },
  {
    image: Photo2,
    name: "Sara Lee",
    role: "Finance",
    description: "Personal finance and budgeting expert.",
  },
  {
    image: Photo3,
    name: "Rajesh Kumar",
    role: "Finance",
    description: "Corporate finance and accounting mentor.",
  },
  {
    image: Photo4,
    name: "Mitchell Clements",
    role: "Finance",
    description: "Mentor in financial planning and analysis.",
  },
  {
    image: Photo5,
    name: "Kim Lee",
    role: "Finance",
    description: "Investment and wealth management coach.",
  },
  {
    image: Photo6,
    name: "Ava Patel",
    role: "Finance",
    description: "Finance mentor for startups.",
  },

  // Software
  {
    image: Photo1,
    name: "Lora Lane",
    role: "Software",
    description: "Software engineer with expertise in cloud and DevOps.",
  },
  {
    image: Photo2,
    name: "Liam Chen",
    role: "Software",
    description: "Backend engineer and open source contributor.",
  },
  {
    image: Photo3,
    name: "John Carter",
    role: "Software",
    description: "Mentor in software architecture and design patterns.",
  },
  {
    image: Photo4,
    name: "Sara Lee",
    role: "Software",
    description: "Mobile app developer and mentor.",
  },
  {
    image: Photo5,
    name: "Mitchell Clements",
    role: "Software",
    description: "Software project management expert.",
  },
  {
    image: Photo6,
    name: "Kim Lee",
    role: "Software",
    description: "Mentor in software testing and QA.",
  },
  {
    image: Photo1,
    name: "Priya Singh",
    role: "Software",
    description: "Mentor for software development best practices.",
  },
];

export default nicheCards;
