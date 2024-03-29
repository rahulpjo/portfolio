const projects = [
  {
    name: "TalenTree",
    description:
      "TalenTree is an app that connects students or new learners of any subject with teachers around the world who are looking for students. TalenTree allows both teachers and students to make posts and build a resume of work on their profile.",
    github: "https://github.com/rahulpjo/talentree",
    website: "https://talentree.netlify.app/",
    media_url:
      "https://res.cloudinary.com/dszox5xnw/image/upload/c_crop,g_south_west,h_325,w_590/v1629870256/Portfolio/TT_gcyhvv.gif",
    type: "engineering",
    tags: [
      "React.js",
      "Ruby",
      "Ruby on Rails",
      "PostgreSQL",
      "Node.js",
      "Axios",
      "Heroku",
      "Netlify",
      "React Hooks",
      "React Router",
      "JSON Web Token",
      "Bcrypt",
    ],
  },
  {
    name: "Dignified Winers",
    description:
      "Dignified Winers was collaborated with 4 talented developers & conceived as a request by a mock-client; a luxury magazine featuring ranked wines while allowing users to sign up & contribute. Developed with the MERN Stack, aided by Insomnia, Heroku, & Netlify.",
    github: "https://github.com/rahulpjo/dignified-winers",
    website: "https://dignified-winers.netlify.app/",
    media_url:
      "https://res.cloudinary.com/dszox5xnw/image/upload/c_crop,g_south_west,h_230,w_412/v1629874203/Portfolio/DW_kqhkzb.gif",
    type: "engineering",
    tags: [
      "React.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Node.js",
      "Axios",
      "Heroku",
      "Netlify",
      "React Hooks",
      "React Router",
      "Animation On Scroll",
      "JSON Web Token",
      "Bcrypt",
    ],
  },
  {
    name: "The Network Network",
    description:
      "The Network Network (or TNN) is a session-based app that allows people to get rid of their anxiety that comes with networking by posting templates of their messages and having people review/give notes on it!",
    github: "https://github.com/rahulpjo/the-network-network",
    website: "https://the-network-network.netlify.app/",
    media_url:
      "https://res.cloudinary.com/dszox5xnw/image/upload/c_crop,g_south_east,h_325,w_565,x_0,y_0/v1629848194/Portfolio/TNN_hxlo7u.gif",
    type: "engineering",
    tags: [
      "React.js",
      "React Hooks",
      "React Router",
      "Airtable API",
      "Node.js",
      "Merge Sort",
      "Axios",
      "SessionStorage",
      "CSS",
    ],
  },
  {
    name: "Music Palate",
    description:
      "This app allows users to input a musical artist they like and will return a list of other similar artists with pictures and additional information (ex. biography, related YouTube video, and top songs).",
    github: "https://github.com/rahulpjo/music-palate",
    website: "https://music-palate.netlify.app/",
    media_url:
      "https://res.cloudinary.com/dszox5xnw/image/upload/c_crop,g_south_west,h_330,w_575,x_0/v1629869527/Portfolio/MP_oydkza.gif",
    type: "engineering",
    tags: ["JavaScript", "Tastedive API", "Genius API", "Axios", "HTML", "CSS"],
  },
  {
    name: "Task Tracker",
    description:
      "Project created to learn about React framework. The application implements hooks, routing, and a mock back-end with JSON Server. Emphasis was placed on keeping it as a single-page application (no refreshes occur throughout usage of the app).",
    github: "https://github.com/rahulpjo/react-task-tracker",
    website: "https://dazzling-clarke-276924.netlify.app/",
    media_url:
      "https://res.cloudinary.com/dszox5xnw/image/upload/v1627248947/Portfolio/TaskManager_pyuhel.gif",
    type: "engineering",
    tags: ["React.js", "JSON Server", "React Hooks", "React Router"],
  },
  {
    name: "D Con-4 Online Program",
    description:
      "Website created using HTML, Sass, and JavaScript. Node-sass used to compile Sass to a single CSS file. Bootstrap used for some page formatting, but mostly done using HTML/CSS. Also incorporates UI/UX design fundamentals.",
    github: "https://github.com/rahulpjo/DCon4Site",
    website: "https://dcon4site.netlify.app/",
    media_url:
      "https://res.cloudinary.com/dszox5xnw/image/upload/v1627248943/Portfolio/DCON4_pvifx3.gif",
    type: "engineering",
    tags: [
      "HTML",
      "Sass",
      "Vanilla JavaScript",
      "CSS",
      "Bootstrap",
      "UI/UX Design",
    ],
  },
  {
    name: "Movie Database",
    description:
      "Project created to practice API calls using ajax function in JavaScript and parsing JSON. Landing page displays now playing movies and search bar will search for all movies with the key word. Project also focused on being responsive by using Bootstrap.",
    github: "https://github.com/rahulpjo/movie-db",
    website: "https://moviedb-rahuljoshi.netlify.app/",
    media_url: "https://www.rahulpjoshi.com/img/MovieDB.gif",
    type: "engineering",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "Ajax",
      "Third-Party API",
      "Bootstrap",
      "JSON Data",
    ],
  },
  {
    name: "MERN Stack E-Commerce App",
    description:
      "Project made to learn about the MERN stack (MongoDB, Express, React, Node.js) and increase practice with the React framework. The project is still in production and is being done by learning from Brad Traversy on Udemy.",
    github: "https://github.com/rahulpjo/mern-ecommerce-app",
    website: "",
    media_url: "https://www.rahulpjoshi.com/img/MERN.gif",
    type: "engineering",
    tags: [
      "React.js",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Redux",
      "Authentication",
    ],
  },
  {
    name: "Mock Company Website",
    description:
      "Website created using simple HTML/CSS, as well as implementing Bootstrap. Project built familiarity with Bootstrap components like Navbar, Cards, and more.",
    github: "",
    website: "http://303.itpwebdev.com/~rahulpjo/assignment3/home.html",
    media_url:
      "https://res.cloudinary.com/dszox5xnw/image/upload/v1627248956/Portfolio/CC_v2eap7.gif",
    type: "engineering",
    tags: ["HTML", "CSS", "Bootstrap"],
  },
];

export const getProjects = () => {
  return projects;
};
