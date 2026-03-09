import React from "react";

import Anil from '../Photos/anil.jpg';

function Home(){

const scrollToProjects = () => {
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  }
};

return(

<section id="hero" className="hero">

<div className="hero-content">

<h1>Hi, I'm Anil Arudra</h1>

<h3>Software Developer</h3>

<p>
I build modern web applications using React, Java and Spring Boot.
</p>

<button className="btn" onClick={scrollToProjects}>View Projects</button>

</div>

<div className="hero-image">

<img src={Anil} alt="Anil - Software Developer" className="profile-photo" />

</div>

</section>

)

}

export default Home