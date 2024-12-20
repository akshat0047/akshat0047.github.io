import React from 'react';
import './App.css';
import ProjectCard from './components/ProjectCard';

const projectImages = require.context('./assets/img', false, /\.(png|jpe?g|svg)$/);

const projects = [
  {
    title: "Blog IT",
    description: "Blogging website on Django",
    tech: ["python", "django", "jinja2"],
    thumbnail: projectImages("./djangoBlog.png"),
    video: null,
    liveDemo: "https://akshat0047.pythonanywhere.com/",
    sourceCode: "https://github.com/akshat0047/first-django-blog",
  },
  {
    title: "Video Editor",
    description: "Video Editing APIs",
    tech: ["nodejs", "ffmpeg", "swagger"],
    thumbnail: projectImages("./video-editor.png"),
    video: null,
    liveDemo: "https://videoeditor-production.up.railway.app/api-docs",
    sourceCode: "https://github.com/akshat0047/VideoEditor",
  },
  {
    title: "Socket Chat",
    description: "Chatrooms based on socket.io",
    tech: ["nodejs", "socket.io", "react"],
    thumbnail: projectImages("./socket-chat.png"),
    video: null,
    liveDemo: "https://socket-chat-vr6j.onrender.com/",
    sourceCode: "https://github.com/akshat0047/first-django-blog",
  },
  {
    title: "AmiXchange",
    description: "A website to re-sell books",
    tech:"php,jquery,html,css",
    thumbnail: projectImages("./amixchange.png"),
    video: "https://drive.google.com/file/d/1Pd4_E2V-1ZDDYJHXKw9yVmxUk-oqLDvd/view?usp=drive_link",
    liveDemo: null,
    sourceCode: "https://github.com/akshat0047/AmiXchange",
  },
  {
    title: "Phas-Gaming",
    description: "Game based on phasor.js framework",
    tech: ["JavaScript", "Phaser", "html", "css"],
    thumbnail: projectImages("./gaming.png"),
    video: null,
    liveDemo: "https://akshat0047.github.io/phasgming/Mock-Game/",
    sourceCode: "https://github.com/akshat0047/phasgming",
  },
  {
    title: "AWDash",
    description: "Analytics dashboard for FOSSEE websites.",
    tech: ["php", "bootstrap", "html", "css"],
    thumbnail: projectImages("./awdash.png"),
    video: null,
    liveDemo: "https://awdash.fossee.in/index.html",
    sourceCode: "https://github.com/FOSSEE/AWDash",
  },
  {
    title: "Yaksh Kubernetes",
    description: "POC for orchestration of Yaksh (open-source)",
    tech: ["python", "flask", "jinja2"],
    thumbnail: projectImages("./kubernetes.png"),
    video: null,
    liveDemo: null,
    sourceCode: "https://github.com/akshat0047/yaksh-devops",
  },
  {
    title: "Telegram Chatbot",
    description: "Improvised MapMyIndia API for telegram",
    tech: ["javascript"],
    thumbnail: projectImages("./telegram-bot.png"),
    video: "https://drive.google.com/file/d/1KNv4C-ynJXk5ELQ3nCIyBFPIl-52ylDd/view?usp=sharing",
    liveDemo: null,
    sourceCode: "https://github.com/akshat0047/mmi-telegram-bot",
  },
  {
    title: "Fraped",
    description: "Small website scraping web-app",
    tech: ["python", "flask", "jinja2"],
    thumbnail: projectImages("./fraped.png"),
    video: "https://drive.google.com/file/d/13JVIt8p5yMoY2zLhi7O43PGutwHeqXbq/view?usp=drive_link",
    liveDemo: null,
    sourceCode: "https://github.com/akshat0047/Fraped",
  },
  // Add more projects as needed
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Akshat's Projects</h1>
        <p>Solutions that I've built personally, at internships and in fulltime roles</p>
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
