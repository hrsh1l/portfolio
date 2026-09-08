/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Harshil Patel",
  title: "Hi all, I'm Harshil",
  subTitle: emoji(
    "A Computer Science student at Durham University 🎓 with hands-on experience shipping AR/JS features at Snapchat and building Python/Pandas data pipelines — interested in full-stack development, event-driven systems, and applied AI."
  ),
  resumeLink: "true", // Downloads src/containers/greeting/resume.pdf — replace that file to update the resume
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/hrsh1l",
  linkedin: "https://www.linkedin.com/in/harshil-patel123",
  gmail: "harshvpatel16@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "COMPUTER SCIENCE STUDENT BUILDING FULL-STACK APPS, DATA PIPELINES, AND AI-INTEGRATED FEATURES",
  skills: [
    emoji(
      "⚡ Build full-stack web apps with Node.js/Express REST APIs and React/JS front-ends"
    ),
    emoji(
      "⚡ Integrate LLMs (OpenAI API, structured JSON prompting) into production-facing features"
    ),
    emoji(
      "⚡ Engineer Python/Pandas ETL pipelines with data quality gates and lineage logging"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "c++",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Durham University",
      logo: require("./assets/images/durhamLogo.png"),
      subHeader: "BSc Computer Science",
      duration: "September 2025 - Expected June 2028",
      desc: "On track for a 1st class degree.",
      descBullets: []
    },
    {
      schoolName: "Greenhead College",
      logo: require("./assets/images/greenheadLogo.jpg"),
      subHeader: "A-Levels: Maths, Economics, Computer Science",
      duration: "September 2023 - June 2025", // TODO: confirm exact dates
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "JavaScript/TypeScript", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python & Data Engineering",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend & REST APIs",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Augmented Reality Development Intern",
      company: "Snapchat",
      companylogo: require("./assets/images/snapchatLogo.png"),
      date: "July 2026 – August 2026",
      desc: "Owned end-to-end development of an AR Horoscope Lens from prototype to production, shipping a customer-facing feature that reached 50,000+ views.",
      descBullets: [
        "Architected an event-driven JavaScript runtime across 5 modules, coordinating real-time animations and face-tracked rendering in a production system",
        "Integrated the OpenAI API with structured JSON prompting to drive real-time, personalised LLM-generated content"
      ],
      footerLink: [
        {
          name: "Try the AR Lens",
          url: "https://www.snapchat.com/unlock/?type=SNAPCODE&uuid=6d745cabef1f4a1fa41034d5bbd43db5&metadata=01"
        }
      ]
    },
    {
      role: "Data Engineering Research Intern",
      company: "Department of Engineering, Durham University",
      companylogo: require("./assets/images/durhamLogo.png"),
      date: "June 2026 – August 2026",
      desc: "Engineered a Python/Pandas ETL pipeline unifying 10+ datasets into a single GDPR-compliant data store, with automated data quality gates and end-to-end lineage logging.",
      descBullets: [
        "Identified and corrected two systematic data quality faults in the source datasets, affecting 1,300+ student records and 300 schools",
        "Designed a rules-based eligibility model spanning 11 research questions, translating complex admissions policy into an actionable, documented data model"
      ]
    },
    {
      role: "Spring Week – Technology Case Study",
      company: "Expedia Group",
      companylogo: require("./assets/images/expediaLogo.png"),
      date: "July 2026",
      desc: "Proposed and presented a real-time delayed-flight dashboard with supporting data pipeline architecture to a panel of Expedia engineers, placing 2nd place."
    },
    {
      role: "Spring Week",
      company: "Barclays",
      companylogo: require("./assets/images/barclaysLogo.png"),
      date: "April 2026",
      desc: "Analysed fintech infrastructure and digital systems architecture through engineering workshops, applying structured problem-solving to real-world technology challenges in a competitive cohort setting."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true — redundant with the curated Projects section below
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME THINGS I'VE BUILT",
  projects: [
    {
      image: require("./assets/images/lobEngineScreenshot.png"),
      projectName: "Limit Order Book Matching Engine",
      projectDesc:
        "Price-time priority limit order book matching engine with a live market simulator generating synthetic order flow, real-time order book depth visualisation, time & sales tape, and an event log tracking fills, triggers, and acknowledgements.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/hrsh1l"
        }
      ]
    },
    {
      image: require("./assets/images/trafficSignalScreenshot.jpg"),
      projectName: "Traffic Signal Optimisation Pipeline",
      projectDesc:
        "Python pipeline using YOLOv8 and ByteTrack to extract per-second vehicle arrival rates from intersection footage, validated against a Poisson distribution and optimised via particle swarm optimisation, with 500-iteration Monte Carlo simulations to model clearance-time uncertainty.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/hrsh1l"
        }
      ]
    },
    {
      image: require("./assets/images/stayrScreenshot.png"),
      projectName: "StayR: Full-Stack Property Rental Platform",
      projectDesc:
        "Full-stack rental platform (Node.js/Express REST API + JS/Bootstrap front-end) supporting end-to-end property search, listing management, and a bids/counter-offers negotiation flow.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/hrsh1l"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "harshvpatel16@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
