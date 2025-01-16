import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaGithub, FaGitlab, FaDocker, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiPostgresql, SiExpress, SiNextdotjs, SiSqlite } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 />, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', icon: <FaCss3Alt />, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', icon: <FaJs />, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'React', icon: <FaReact />, link: 'https://reactjs.org/docs/getting-started.html' },
  { name: 'Next.js', icon: <SiNextdotjs />, link: 'https://nextjs.org/docs' },
  { name: 'React Native', icon: <FaReact />, link: 'https://reactnative.dev/docs/getting-started' },
  { name: 'Node.js', icon: <FaNodeJs />, link: 'https://nodejs.org/en/docs/' },
  { name: 'Express', icon: <SiExpress />, link: 'https://expressjs.com/en/starter/installing.html' },
  { name: 'MongoDB', icon: <SiMongodb />, link: 'https://docs.mongodb.com/' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, link: 'https://www.postgresql.org/docs/' },
  { name: 'SQL', icon: <SiSqlite />, link: 'https://www.sqlite.org/docs.html' },
  { name: 'Java', icon: <FaJava />, link: 'https://docs.oracle.com/en/java/' },
  { name: 'GitHub', icon: <FaGithub />, link: 'https://docs.github.com/en' },
  { name: 'GitLab', icon: <FaGitlab />, link: 'https://docs.gitlab.com/' },
  { name: 'Docker', icon: <FaDocker />, link: 'https://docs.docker.com/' },
];

export default function Skills() {
  return (
    <div className="skills">
      <div className="moving-stars"></div>
      <div className="bottom-moving-stars"></div>
      <h1>My Skills</h1>
      <div className="skills-list">
        {skills.map(skill => (
          <div className="skill-item" key={skill.name} onClick={() => window.open(skill.link, '_blank')}>
            <div className="skill-icon">{skill.icon}</div>
            <h2>{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
