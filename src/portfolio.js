/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Kaushik's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Kaushik Punyamurthula Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Kaushik Punyamurthula",
  logo_name: "Kaushik Punyamurthula",
  nickname: "kaushik_surya",
  subTitle:
    "An avid technology lover. You can explore my passion for software development and my innovative projects in this Portfolio website",
  resumeLink:
    "https://drive.google.com/file/d/1vQCmBi69LwwrAOcuQmQoh4_oBz7Q6tUk/view?usp=share_link",
  portfolio_repository: "https://github.com/sskp-kaushik/portfolio-website",
  githubProfile: "https://github.com/sskp-kaushik",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/sskp-kaushik",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/kaushik-punyamurthula/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:spunyam2@asu.edu",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Server Side Development",
      fileName: "server_side_development-1.gif",
      skills: [
        "✦ Designing, developing, and maintaining server-side applications and APIs",
        "✦ Ensuring the security and integrity of data through encryption, access control, etc.",
        "✦ Building and optimizing database schema, queries, and indexes",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
      ],
    },
    {
      title: "Application Development",
      fileName: "designer-building-website.gif",
      skills: [
        "✦ Building responsive web applications using React/Angular",
        "✦ Creating mobile applications using React Native and android applications using Android Studio",
        "✦ Designing mock screens and prototypes using Figma and Axure RP",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "simple-icons:angular",
          style: {
            // backgroundColor: "#000000",
            color: "#DD1B16",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    {
      title: "Cloud Infrastructure Architecture",
      fileName: "cloud_computing-1.gif",
      skills: [
        "✦ Implement continuous integration and deployment (CI/CD) pipelines using Jenkins",
        "✦ Automating infrastructure provisioning and configuration using tools like Ansible",
        "✦ Hosting and maintaining applications on Containers (PaaS) and instances on AWS",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "vscode-icons:file-type-jenkins",
          style: {
            color: "transparent",
          },
        },
        {
          skillName: "Ansible",
          fontAwesomeClassname: "simple-icons:ansible",
          style: {
            color: "#1A1918",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Machine Learning and Data Analytics",
      fileName: "machine_learning.gif",
      skills: [
        "✦ Collecting, cleaning, and preparing data for analysis, using tools such as Python, D3.js and SQL",
        "✦ Working on training and implementing models for solving complex problems",
        "✦ Conducting exploratory data analysis and statistical inference to identify patterns, trends, and insights",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page

const education = {
  description:
    "I have done both my Masters and Bachelors in Computer Science and was able to build strong fundamentals on various paradigms of Information Technology, Software Development, Machine Learning and Data Analytics.",
  degrees: [
    {
      title: "Arizona State University",
      subtitle: "Master of Science in Computer Science",
      logo_path: "asu.png",
      alt_name: "ASU Tempe",
      duration: "Aug 2021 - May 2023",
      descriptions: [
        "❖ I have done various courses aligned to my interests including Software Development and Cloud related courses.",
        "❖ Apart from this, I have done courses on Machine Learning, Data Analytics, Natural Laguage Processing and Data Visualizations.",
        "❖ I worked as a Graduate Student Assistant for Human Computer Interaction course, contributed to reasearch and in-class activities.",
      ],
      website_link: "https://www.asu.edu/",
    },
    {
      title: "Gandhi Institute of Technology and Management Hyderabad",
      subtitle: "Bachelor of Technology in Computer Science and Engineering",
      logo_path: "gitam.png",
      alt_name: "GITAM Hyderabad",
      duration: "Aug 2014 - May 2018",
      descriptions: [
        "❖ I have taken courses related to Web Application Development, Programming in various Languages and Algorithms, strethening my basics in Software Development.",
        "❖ Apart from this, also taken courses like Cryptography, Network Security, Open Source Software Development, Database Management Systems, etc.",
        "❖ During my time at university, I was involved in various extra-curricular activities as part of student organizations and college fest core committee.",
      ],
      website_link: "http://www.gitam.edu/",
    },
  ],
  certifications: [
    {
      type: "Certificate",
      title: "Certified Blockchain Expert",
      subtitle: "Blockchain Council",
      logo_path: "certified_blockchain_expert.png",
      certificate_link:
        "https://api.accredible.com/v1/auth/invite?code=567d37e058c0ad23a891&credential_id=13508329&url=https%3A%2F%2Fwww.credential.net%2Ftavh59hg&ident=420905d3879d27012cb317da07dc90f413dfc50f",
      alt_name: "Blockchain Council",
      color_code: "#FFFFFF",
    },
    {
      type: "Certificate",
      title: "IBM Blockchain Developer",
      subtitle: "IBM Cognitive Class",
      logo_path: "ibm-blockchain-foundation-developer.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/bff9bd96e34d4a698d2fd3e6c4a0ab5e",
      alt_name: "IBM Cognitive Class",
      color_code: "#00000099",
    },
    {
      type: "Award",
      title: "Spotlight Award",
      subtitle: "Verizon India",
      logo_path: "verizon.png",
      certificate_link: "",
      alt_name: "",
      color_code: "#000000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "I have experience in developing software applications and web applications, as well as worked as a DevOps engineer. I have designed scripts and mechanisms to manage various infrastructure resources and proficient in both relational/no-relational databases.",
  header_image_path: "experience.svg",
  works: [
    {
      title: "Software Engineer Intern",
      company: "Confer Inc.",
      company_url: "https://confer.today/",
      logo_path: "confer.png",
      duration: "May 2022 - Dec 2022",
      location: "McKinney, Texas, US",
      responsibilities: [
        "❖	Designed and developed React Native mobile application screens for comparing official loan estimates, saving customers $1500 - $3000 over the life of the loan.",
        "❖	Developed RESTful APIs on Node.js, Java, and Python utilizing AWS Textract for OCR and text extraction from official loan estimate documents.",
        "❖	Provisioned AWS infrastructure resources with AWS CDK programmed in Node.js, reducing setup time and increasing maintenance efficiency.",
        "❖	Streamlined deployment using serverless strategies with AWS Amplify and AWS Lambda, minimizing manual intervention.",
      ],
      color: "#0879bf",
    },
    {
      title: "Software Engineer II",
      company: "Verizon India",
      company_url: "https://www.verizon.com/",
      logo_path: "verizon.png",
      duration: "July 2018 - June 2021",
      location: "Hyderabad, Telangana, India",
      responsibilities: [
        "❖	Developed Java Spring RESTful applications used by over 100 internal users, resulting in a 40% increase in productivity.",
        "❖	Developed microservices and blockchain smart contracts using Java, Node.js, Python, and GoLang, resulting in a cost savings of over $22M in 5 years.",
        "❖	Contributed to creating web applications using Angular and React JS as part of the 1Collections project, which led to an annual savings of over $5M and a reduction in manpower by 12 people.",
        "❖	Worked as a DevOps engineer (AWS), designing configurable Ansible scripts and CI/CD mechanisms (Jenkins) to create and maintain infrastructure resources, enabling real-time handling of 600k+ tax dispute claims a year.",
        "❖	Implemented a distributed decentralized solution for tax exemption processing using Hyperledger Fabric Blockchain, reducing manual processing by 75%.",
      ],
      color: "#9b1578",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const projects = [
  {
    "id": "616743625",
    "name": "selective_prediction_mtl",
    "createdAt": "2022-01-04T05:48:59Z",
    "url": "https://github.com/sskp-kaushik/selective_prediction_mtl.git",
    "description": "Investigate the impact of selection prediction on multi-task learning using different sampling technologies.",
    "isFork": true,
    "languages": [
      {
        "name": "Python",
        "iconifyClass": "logos:python"
      },
      {
        "name": "PyTorch",
        "iconifyClass": "logos:pytorch-icon"
      },
      {
        "name": "Matplotlib",
        "iconifyClass": "logos:matplotlib-icon"
      }
    ]
  },
  {
    "id": "479837942",
    "name": "face_recognition_as_a_service",
    "createdAt": "2022-04-09T20:36:08Z",
    "url": "https://github.com/sskp-kaushik/CSE546_CC_Project_2.git",
    "description": "Built a distributed app for real-time facial recognition using AWS Lambda and IOT devices",
    "isFork": false,
    "languages": [
      {
        "name": "Python",
        "iconifyClass": "logos-python"
      },
      {
        "name": "Docker",
        "iconifyClass": "logos:docker-icon"
      },
      {
        "name": "RaspberryPi",
        "iconifyClass": "skill-icons:raspberrypi-light"
      },
      {
        "name": "AWS Lambda",
        "iconifyClass": "logos:aws-lambda"
      },
      {
        "name": "AWS DynamoDB",
        "iconifyClass": "logos:aws-dynamodb"
      }
    ]
  },
  {
    "id": "479837942",
    "name": "image_classification_using_iaas",
    "createdAt": "2022-03-10T02:57:29Z",
    "url": "https://github.com/sskp-kaushik/CSE546_CC_Project_1.git",
    "description": "Built an elastic image classification application using IaaS cloud resources from Amazon Web Services",
    "isFork": false,
    "languages": [
      {
        "name": "Python",
        "iconifyClass": "logos-python"
      },
      {
        "name": "HTML5",
        "iconifyClass": "simple-icons:html5"
      },
      {
        "name": "Apache Server",
        "iconifyClass": "logos:apache"
      },
      {
        "name": "Gunicorn",
        "iconifyClass": "logos:gunicorn"
      },
      {
        "name": "AWS EC2",
        "iconifyClass": "logos:aws-ec2"
      },
      {
        "name": "AWS SQS",
        "iconifyClass": "logos:aws-sqs"
      },
      {
        "name": "AWS S3",
        "iconifyClass": "logos:aws-s3"
      }
    ]
  },
  {
    "id": "617311615",
    "name": "simplified_model_of_nas",
    "createdAt": "2023-03-22T05:54:58Z",
    "url": "https://github.com/sskp-kaushik/simplified-nas.git",
    "description": "Compute the capacity of a simplified model of the National Airspace System (NAS)",
    "isFork": false,
    "languages": [
      {
        "name": "Python",
        "iconifyClass": "logos-python"
      }
    ]
  },
  {
    "id": "483882128",
    "name": "hot_spot_analysis",
    "createdAt": "2022-04-21T02:39:23Z",
    "url": "https://github.com/sskp-kaushik/CSE511-Project-Phase2.git",
    "description": "Spatial hot spot analysis using two different tasks - hot zone and hot cell analysis of New York City Tax Trips",
    "isFork": false,
    "languages": [
      {
        "name": "Scala",
        "iconifyClass": "logos:scala"
      },
      {
        "name": "Apache Spark",
        "iconifyClass": "cib:apache-spark"
      },
      {
        "name": "Hadoop",
        "iconifyClass": "logos:hadoop"
      }
    ]
  },
  {
    "id": "410106230",
    "name": "natural-instructions-expansion",
    "createdAt": "2021-09-24T21:27:54Z",
    "url": "https://github.com/sskp-kaushik/natural-instructions-expansion.git",
    "description": "A community effort to create a large collection of tasks and their natural language definitions/instructions.",
    "isFork": true,
    "languages": [
      {
        "name": "JSON",
        "iconifyClass": "logos:json"
      }
    ]
  }
];

// Contact Page
const contactPageData = {
  summarySection: {
    title: "Contact Me",
    profile_image_path: "kaushik_punyamurthula.jpg",
    description:
      "Please reach out to me for collaborations on projects in Application Development, ML or Data Analytics or just a quick chat.",
    display: true,
  },
  addressSection: {
    title: "Address",
    location: {
      addressText: "1221 E Broadway Rd, Tempe, AZ 85282",
      latitude: 33.406743111151336,
      longitude: -111.92039961859334,
    },
    zoomLevel: 20,
    display: true,
  },
  contactSection: {
    phone: {
      title: "Call me @",
      subtitle: "(480)-791-6442",
    },
    email: {
      title: "Mail me @",
      subtitle: "spunyam2@asu.edu",
    },
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  education,
  experience,
  projectsHeader,
  projects,
  contactPageData,
};
