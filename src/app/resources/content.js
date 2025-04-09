import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Abreham",
  lastName: "Dessu",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Backend & Devops Engineer",
  avatar: "/images/Abriz.jpg",
  location: "Africa/Addis_Ababa", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Amharic"], // optional: Leave the array empty if you don't want to display languages
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abriz19",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abrehamdessu",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "abrizdessu@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Backend & DevOps Engineer</>,
  subline: (
    <>
      Hi, I’m Abreham! 🚀 I’m a Backend & DevOps Engineer who’s passionate about
      turning complex problems into seamless, scalable solutions. Whether it’s
      building robust backend systems, optimizing cloud infrastructure, or
      integrating cutting-edge technologies like Node.js, NestJS, and Azure, I’m
      all about creating high-performance applications that make a real impact.
      Let’s build something amazing together!
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm Abreham Dessu, a Backend & DevOps Engineer based in Addis Ababa,
        Ethiopia. I love building scalable, high-performance systems that solve
        complex challenges. My focus is on backend development, cloud
        infrastructure, and integrating technologies to create reliable,
        efficient solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ablaze Labs",
        timeframe: "10/2023 - PRESENT",
        role: "Back-End Engineer & DevOps Specialist",
        achievements: [
          <>
            Led backend development for the Water & Energy Project, managing CMS
            for 10+ sub-projects, ensuring seamless integration and scalability.
          </>,
          <>
            Designed microservices architecture with NestJS and Kafka for the
            Telegram Virtual Games Project, supporting 10,000+ concurrent users
            and maintaining 95.9% uptime.
          </>,
          <>
            Integrated third-party payment APIs, processing 5,000+ daily
            transactions with a 96% success rate.
          </>,
          <>
            Developed RESTful APIs to support core game functionalities,
            implemented user management and referral systems, and optimized
            PostgreSQL queries, improving performance by 20%.
          </>,
          <>
            Contributed to the Job Board Project by developing key features for
            job applications, user management, and subscription plans.
          </>,
          <>
            Resolved 200+ backend issues, reducing downtime by 40%, and
            collaborated with teams to implement new features, increasing user
            engagement by 15%.
          </>,
          <>
            Engineered robust CI/CD pipelines in Azure DevOps, reducing
            deployment time by 60% and minimizing release errors by 40%,
            ensuring seamless roll outs.
          </>,
          <>
            Managed AKS clusters, scaled PostgreSQL databases by 30%, and
            provisioned Azure VMs and Blob Storage, improving system reliability
            and reducing cloud costs by 25%.
          </>,
          <>
            Built resilient microservices on Azure AKS, enforcing strict
            security policies and compliance standards, leading to 99.5% system
            availability.
          </>,
          <>
            Promoted team collaboration through GitOps, improving deployment
            efficiency by 35% and streamlining the release cycle for faster
            feature roll outs.
          </>,
        ],
      },
      {
        company: "Hirundo Security Solution",
        timeframe: "10/2022 - 06/2023",
        role: "IT Support Specialist",
        achievements: [
          <>
            Managed server and hardware infrastructure, ensuring 99.9% uptime
            for critical systems and applications.
          </>,
          <>
            Set up software and network configurations, supporting 50+ devices
            across the company, reducing installation times by 30% through
            streamlined processes.
          </>,
          <>
            Installed and configured applications, ensuring compatibility and
            optimized performance for 10+ core applications across multiple
            departments.
          </>,
          <>
            Monitored systems continuously, identifying and addressing
            performance bottlenecks, improving overall system efficiency by 25%.
          </>,
          <>
            Resolved 100+ technical queries from staff and clients, achieving a
            95% customer satisfaction rate by providing timely and effective
            issue resolution.
          </>,
          <>
            Diagnosed and fixed system, network, software faults, and hardware
            issues, reducing downtime by 40% through rapid response and
            effective troubleshooting.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Adigrat University",
        period: "2017 – 2022",
        degree: "Bachelor of Science in Electrical and Computer Engineering",
        description: (
          <>
            Specialized in the Computer Engineering stream. Graduated with a GPA
            of 3.84/4.00.
          </>
        ),
      },
      {
        name: "A2SV DSA Program",
        period: "Ongoing",
        degree: "Data Structures and Algorithms",
        description: (
          <>
            Currently enrolled in the A2SV program to master data structures and
            algorithms in preparation for software engineering interviews.
          </>
        ),
      },
      {
        name: "AWS Cloud Computing",
        period: "Ongoing",
        degree: "AWS Cloud Computing Certification",
        description: (
          <>
            Currently taking the AWS Cloud Computing course from ALX Africa to
            develop a solid understanding of cloud architecture and solutions.
          </>
        ),
      },
    ],
  },
  certifications: {
    display: true, // set to false to hide this section
    title: "Certifications",
    skills: [
      {
        title: "Cisco Certified Network Associate (CCNA)",
        issuer: "Cisco",
        description: (
          <>
            Gained foundational networking knowledge including IP addressing,
            routing, and switching.
          </>
        ),
      },
      {
        title: "AI Career Essentials",
        issuer: "ALX Africa",
        description: (
          <>
            Learned core AI and machine learning principles with real-world
            applications.
          </>
        ),
      },
      {
        title: "EF SET English Certificate (C1 Advanced)",
        issuer: "EF SET",
        description: (
          <>
            Scored 64/100, demonstrating advanced English language proficiency.
          </>
        ),
      },
    ],
  },
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, work, gallery };
