const experiences = [
  {
    icon: '👨‍💻',
    title: 'Hack2Hatch Finalist',
    desc: 'Built a prototype under 24hrs at PEC Chandigarh',
  },
  {
    icon: '🧠',
    title: 'Ideathon Winner',
    desc: 'TechnoVista 2.0, GNDU',
  },
  {
    icon: '💡',
    title: 'Self-driven Projects',
    desc: 'Designed and deployed production-ready personal projects',
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <h2>Experience & Hackathons</h2>
      <div className="timeline">
        {experiences.map((exp) => (
          <div key={exp.title} className="timeline-item">
            <span className="timeline-dot">{exp.icon}</span>
            <h3>{exp.title}</h3>
            <p>{exp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 