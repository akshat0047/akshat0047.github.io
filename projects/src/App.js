import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';

const projectImages = require.context('./assets/img', false, /\.(png|jpe?g|svg)$/);

const projects = [
  {
    title: "Video Editor",
    description: "Video Editing APIs",
    tech: ["nodejs", "ffmpeg", "swagger"],
    thumbnail: projectImages("./video.png"),
    video: null,
    liveDemo: "https://videoeditor-production.up.railway.app/api-docs",
    sourceCode: "https://github.com/akshat0047/VideoEditor",
  },
  {
    title: "Blog IT",
    description: "Blogging website on Django",
    tech: ["python", "django", "jinja2"],
    thumbnail: projectImages("./blog.jpeg"),
    video: null,
    liveDemo: "https://akshat0047.pythonanywhere.com/",
    sourceCode: "https://github.com/akshat0047/first-django-blog",
  },
  {
    title: "Socket Chat",
    description: "Chatrooms based on socket.io",
    tech: ["nodejs", "socket.io", "react"],
    thumbnail: projectImages("./chat.png"),
    video: null,
    liveDemo: "https://socket-chat-vr6j.onrender.com/",
    sourceCode: "https://github.com/akshat0047/first-django-blog",
  },
  // {
  //   title: "Yaksh Kubernetes",
  //   description: "POC for orchestration of Yaksh (open-source)",
  //   tech: ["python", "flask", "jinja2"],
  //   thumbnail: projectImages("./kubernetes.png"),
  //   video: null,
  //   liveDemo: null,
  //   sourceCode: "https://github.com/akshat0047/yaksh-devops",
  // },
  {
    title: "AmiXchange",
    description: "A website to re-sell books",
    tech:"php,jquery,html,css",
    thumbnail: projectImages("./book.jpeg"),
    video: "https://drive.google.com/file/d/1Pd4_E2V-1ZDDYJHXKw9yVmxUk-oqLDvd/view?usp=drive_link",
    liveDemo: null,
    sourceCode: "https://github.com/akshat0047/AmiXchange",
  },
  {
    title: "Phas-Gaming",
    description: "Game based on phasor.js framework",
    tech: ["JavaScript", "Phaser", "html", "css"],
    thumbnail: projectImages("./phasor.jpeg"),
    video: null,
    liveDemo: "https://akshat0047.github.io/phasgming/Mock-Game/",
    sourceCode: "https://github.com/akshat0047/phasgming",
  },
  {
    title: "AWDash",
    description: "Analytics dashboard for FOSSEE websites.",
    tech: ["php", "bootstrap", "html", "css"],
    thumbnail: projectImages("./analytics.jpeg"),
    video: null,
    liveDemo: "https://awdash.fossee.in/index.html",
    sourceCode: "https://github.com/FOSSEE/AWDash",
  }
  // Add more projects as needed
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Akshat's Projects</h1>
      </header>
      <main className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </main>
    </div>
  );
}

export default App;
