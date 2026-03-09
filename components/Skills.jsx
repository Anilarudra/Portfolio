function Skills(){

const skillsData = [
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "Spring Boot", icon: "devicon-spring-original colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "HTML", icon: "devicon-html5-plain colored" },
  { name: "CSS", icon: "devicon-css3-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  {name:"Github", icon:"devicon-github-original colored"},
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
  { name: "Hibernate", icon: "devicon-hibernate-plain colored" },
  {name:"Postman", icon:"devicon-postman-plain colored"},

];

return(

<section id="skills" className="section">

<h2>Skills</h2>

<div className="skills-container">

<div className="skills">

{skillsData.map((skill, index) => (
  <span key={index}>
    <i className={`skill-icon ${skill.icon}`}></i>
    {skill.name}
  </span>
))}

</div>

</div>

</section>

)

}

export default Skills