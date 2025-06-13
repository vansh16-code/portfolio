const contacts = [
  {
    icon: '📧 Email',
    label: 'Email',
    href: 'mailto:vanshmahajan2023@gmail.com',
  },
  {
    icon: '🔗 LinkedIn',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/vansh-mahajan-267696277',
  },
  {
    icon: '💻 Github' ,
    label: 'GitHub',
    href: 'https://github.com/vansh16-code',
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="card">
        <h2>Contact Me</h2>
        <p>Let's connect! I'm open to collaborations, internships, or just a friendly chat about tech.</p>
        <div className="contact-links">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={c.label}
            >
              <span>{c.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 