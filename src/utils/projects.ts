interface project {
  title: string;
  cover: string;
  tags: string[];
  code_link: string;
  deploy_link: string;
  desc: string;
}

export const projects: project[] = [
  {
    title: "Repoguard",
    cover: "/assets/projects/repoguard.png",
    tags: ["nodejs", "meow", "pkg", "GitHub API", "RESTful API"],
    code_link: "https://github.com/ydv-ankit/repoguard",
    deploy_link: "https://github.com/ydv-ankit/repoguard/releases",
    desc: "RepoGuard is a powerful command-line tool designed to streamline the management of GitHub repositories and using github tokens",
  },
  {
    title: "PenPulse - Markdown Blogging Platform",
    cover: "/assets/projects/blog.png",
    tags: ["nextjs", "typescript", "supabase", "github", "zod", "auth", "zustand", "RestAPI", "shadcn", "tailwindCSS", "radix-ui"],
    code_link: "https://github.com/ydv-ankit/PenPulse",
    deploy_link: "https://pen-pulse.vercel.app/",
    desc: "This webapp uses nextjs power with markdown for easy content creation, authenticate securely through GitHub ensuring a smooth login experience, a personalized dashboard for managing blog posts.",
  },
  {
    title: "B-Social WebApp",
    cover: "/assets/projects/bsocial.png",
    tags: ["aws", "nodejs", "reactjs", "mongoDB", "mongoose", "zustand", "RestAPI", "firebase", "MUI"],
    code_link: "https://github.com/ydv-ankit/B-Social",
    deploy_link: "https://b-social-lovat.vercel.app/",
    desc: "A fullstack social media app using React.js and Node.js. Implemented user authentication, real-time posting, liking, commenting, and following features. Utilized RESTful APIs, and MongoDB for database integration.",
  },
  {
    title: "GYM Fitness",
    cover: "/assets/projects/gym.png",
    tags: ["reactjs", "MUI", "animation", "responsive"],
    code_link: "https://github.com/ydv-ankit/GYM-Fitness",
    deploy_link: "https://my-fitness-gym.netlify.app/",
    desc: "Developed a gym fitness website using the RapidAPI API and MUI. Integrated animated images for comprehensive guide and ensured a responsive, user-friendly interface with Material-UI components",
  },
  {
    title: "Analog Clock",
    cover: "/assets/projects/analog_clock.png",
    tags: ["CSS", "Javascript", "Math"],
    code_link: "https://github.com/ydv-ankit/analog-clock",
    deploy_link: "https://analog-clock-swart-eta.vercel.app/",
    desc: "An analog clock using HTML, CSS, and JavaScript. Implemented the clock face and hands with HTML and CSS, and used JavaScript to animate the hands based on the current time.",
  },
  {
    title: "Secure Password Generator",
    cover: "/assets/projects/secure_password.png",
    tags: ["CSS", "Javascript", "algorithm", "math"],
    code_link: "https://github.com/ydv-ankit/secure-password",
    deploy_link: "https://password-secure.netlify.app/",
    desc: "Developed a secure password generator using HTML, CSS, and JavaScript. Features customizable password length and options for including uppercase letters, numbers, and special characters.",
  },
  {
    title: "Digital Clock",
    cover: "/assets/projects/digital_clock.png",
    tags: ["CSS", "Javascript"],
    code_link: "https://github.com/ydv-ankit/digital-clock",
    deploy_link: "https://digital-clock-ashy-seven.vercel.app/",
    desc: "Digital clock using HTML, CSS, and JavaScript. Displays the current time with hours, minutes, and seconds, and updates in real-time. Styled for a clean and modern look with responsive design.",
  },
  {
    title: "Guess the number",
    cover: "/assets/projects/guess_the_number.png",
    tags: ["CSS", "Javascript", "math"],
    code_link: "https://github.com/ydv-ankit/Guess-the-number",
    deploy_link: "https://guess-the-number-ebon-delta.vercel.app/",
    desc: "Users input guesses to find a randomly generated number within a specified range. Implemented user-friendly interface and interactive game logic.",
  },
];
