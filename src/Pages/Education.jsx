import './Education.css';
import barla from '../assets/barla.png';
import coer from '../assets/coer.png';
export default function Education() {
  const educationData = [
    {
      title: "High School",
      institution: "Barla Inter College Barla M.Nagar",
      year: "2019-2020",
      icon:barla,
    },
    {
      title: "Intermediate",
      institution: "Barla Inter College, Barla M. Nagar",
      year: "2021-2022",
      icon: barla,
    },
    {
      title: "B.Tech CSE",
      institution: "Coer University",
      year: "2023 - Present",
      icon:coer,
    },
  ];

  return (
    <div className="education">
      <div className="moving-stars"></div>
      <div className="bottom-moving-stars"></div>
      <h3>What I Have Studied So Far</h3>
      <h1>Education</h1>
      <div className="education-timeline">
        {educationData.map((item, index) => (
          <div
            key={index}
            className={`education-item ${index % 2 === 0 ? 'right' : 'left'}`}
            style={{ '--animation-order': index }}
          >
            <div className="education-icon">
              <img src={item.icon} alt="icon" />
            </div>
            <div className="education-content">
              <h2>{item.title}</h2>
              <p>{item.institution}</p>
              <p>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
