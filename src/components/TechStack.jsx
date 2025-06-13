const tech = [
  'Python', 'JavaScript', 'C++', 'SQL', 'HTML/CSS',
  'React', 'Django', 'FastAPI', 'Bootstrap', 'Tailwind',
  'Git', 'GitHub', 'Netlify', 'Figma', 'Vite', 'Postman',
  'PostgreSQL', 'SQLite', 'MongoDB', 'Machine Learning (Kaggle)'
];

export default function TechStack() {
  return (
    <section id="tech">
      <h2>Tech Stack</h2>
      <div className="tech-badges">
        {tech.map((t) => (
          <span key={t} className="badge">{t}</span>
        ))}
      </div>
    </section>
  );
} 