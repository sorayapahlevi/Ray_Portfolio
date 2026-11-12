export const asset = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

export const site = {
  name: "Soraya Azzizah Pahlevi",
  nickname: "Ray",
  role: "Undergraduate Computer Engineer",
  location: "Jakarta",
  email: "sorayapahlevi24@gmail.com",
  phoneDisplay: "+62 812-9323-4408",
  phoneWhatsApp: "6281293234408",

  cvUrl: asset("/SorayaAzzizahPahlevi_CV.pdf"),
  github: "https://github.com/sorayapahlevi",
  linkedin: "https://www.linkedin.com/in/soraya-pahlevi",

  photo: asset("/IMG_2228.JPG") as string | null,
};

export const nav = [
  { label: "About me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: `Hi! I'm ${site.nickname}`,
  paragraph:
    "I'm a Computer Engineering undergraduate at Universitas Indonesia, and currently " +
    "interested in game development and IoT, embedded systems and chip design." +
    "I've written a card-battle game in Java, programmed a physical pinball " +
    "machine in pure AVR Assembly, and built Conway's Game of Life as a digital circuit in " +
    "VHDL. I also build full-stack web apps with React, Next.js and Express, and enjoy " +
    "leading the teams that make them.",
  interestsLabel: "When I'm AFK",
  interests: [
    { icon: "gamepad", label: "Gaming" },
    { icon: "pencil", label: "Drawing" },
    { icon: "book", label: "Reading" },
  ] as const,
};

export const skills = [
  {
    title: "Embedded & hardware",
    items: ["Arduino", "ATmega328P", "AVR Assembly", "VHDL", "C", "PWM", "I2C"],
  },
  {
    title: "Game dev",
    items: ["Java", "libGDX", "2D game art"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "C", "VHDL", "AVR Assembly"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "REST APIs", "JWT auth"],
  },
  {
    title: "Databases & tools",
    items: ["PostgreSQL", "Redis", "Neo4j", "Git & GitHub"],
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  repo: string;
  extra?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "Wild Card",
    tag: "Game",
    description:
      "A top-down adventure where you duel four bosses — Jack, Queen, King and " +
      "Joker — by scoring poker-hand combinations. Built in Java with a libGDX " +
      "client, a Spring Boot backend, and hand-drawn assets.",
    stack: ["Java", "libGDX", "Spring Boot", "PostgreSQL"],
    repo: "https://github.com/nirmalasz/FinalProject-OOP-13",
    extra: {
      label: "Play on itch.io",
      href: "https://nirmalasz.itch.io/wild-card",
    },
  },
  {
    title: "PinPulse",
    tag: "Embedded",
    description:
      "A physical pinball machine driven by an ATmega328P and written entirely in " +
      "AVR Assembly: interrupt-driven servo flippers, an IR ball sensor, an I2C LCD " +
      "scoreboard, and a finite state machine for the game loop.",
    stack: ["AVR Assembly", "Arduino UNO", "PWM", "I2C"],
    repo: "https://github.com/Allmeerage/Finpro-MBD-Kelompok-2",
    extra: {
      label: "Wokwi simulation",
      href: "https://wokwi.com/projects/464203052628442113",
    },
  },
  {
    title: "Taskly",
    tag: "Web app",
    description:
      "Workspace-based task manager for individuals and teams. Role-based access " +
      "control per workspace, JWT sessions cached in Redis, automatic deadline " +
      "reminders using Redis TTL, and a calendar that fills itself from task deadlines.",
    stack: ["Next.js", "Express", "PostgreSQL", "Redis", "JWT"],
    repo: "https://github.com/syifasip/Taskly",
  },
  {
    title: "EduGraph",
    tag: "Knowledge graph",
    description:
      "An academic and career knowledge graph that links courses, skills, faculty " +
      "and alumni paths in Neo4j, so students can explore prerequisite chains and " +
      "learning paths as an interactive force graph.",
    stack: ["React", "Vite", "Express", "Neo4j", "Tailwind CSS"],
    repo: "https://github.com/sorayapahlevi/MiniProjectSBD-EduGraph",
  },
];
