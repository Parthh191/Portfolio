import './Home.css';
import Parth from '../assets/parth.jpeg'; // Ensure this path is correct

export default function Home() {
  return (
    <div className="home">
      <div className="moving-stars"></div>
      <div className="bottom-moving-stars"></div>
      <div className="home-left">
        <h1>Hi, I am Parth Tyagi</h1>
        <p>
          I am a software engineer. I have experience in building web applications using React, Node.js, Express, and MongoDB. I am also familiar with Python and Java. I am passionate about learning new technologies and building projects.
        </p>
      </div>
      <div className="home-right">
        <img src={Parth} alt="Parth Tyagi" />
      </div>
    </div>
  );
}
