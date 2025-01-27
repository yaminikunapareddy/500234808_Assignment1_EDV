import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <div className="left">
          <a href="/">Yamini Kunapareddy</a>
        </div>

        <div className="right">
          <a href="http://github.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
            <span>Github</span>
          </a>
          
          <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
            <span>Linkedin</span>
          </a>
          
          <a href="yaminikunapareddy789@gmail.com">
            <i className="fa-solid fa-envelope"></i>
            <span>Email</span>
          </a>
        </div>
      </nav>

      <main>
        {/* SECTION 1: Hero */}
        <section className="hero-section">
          <div className="text">
            <h2>Hi, I'm Yamini 👋</h2>
            <p>Aspiring Software Developer with strong skills in SQL, Java, C#, JavaScript, and a solid foundation in systems architecture, IT infrastructure and database management.</p>

            <div className="links">
              <a href="#skills">
                <i className="fa-solid fa-code"></i>
                <span>Skills</span>
              </a>
              
              <a href="#projects">
                <i className="fa-solid fa-pen"></i>
                <span>Projects</span>
              </a>
              
              <a href="#contact">
                <i className="fa-solid fa-envelope"></i>
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div className="headshot">
            <img src="/images/hero-headshot.webp" alt="Yamini headshot" />
          </div>
        </section>

        {/* SECTION 2: Skills */}
        <section id="skills" className="skills-section">
          <h2>Skills</h2>
          <div className="text">
            Enthusiastic and motivated student developer with a solid understanding of programming fundamentals and web development. Skilled in creating responsive websites, writing clean code, and solving technical challenges. Eager to learn new technologies and grow as a developer by building innovative and user-friendly solutions.
          </div>

          <div className="cells">
            <div className="cell">
              <img src="/images/html-logo.webp" alt="html logo" />
              <span>HTML</span>
            </div>
            
            <div className="cell">
              <img src="/images/css-logo.webp" alt="css logo" />
              <span>CSS</span>
            </div>
            
            <div className="cell">
              <img src="/images/javascript-logo.webp" alt="javascript logo" />
              <span>JavaScript</span>
            </div>
            
            <div className="cell">
              <img src="/images/node-logo.webp" alt="node logo" />
              <span>Node.js</span>
            </div>
            
            <div className="cell">
              <img src="/images/react-logo.webp" alt="react logo" />
              <span>React.js</span>
            </div>
          </div>
        </section>

        {/* SECTION 3: Projects */}
        <section id="Projects" className="Projects-section">
          <h2>Projects</h2>

          <div className="group">
            <div className="person-details">
              <img src="/images/Projects-headshot.webp" alt="Yamini" />
              <p>Yamini</p>
              <p>Centralized Repository System.</p>
            </div>

            <div className="text">
              Designed and developed a centralized repository system in Java to manage forest-related data, enabling efficient storage, retrieval, and maintenance. Incorporated strong security protocols to ensure compliance with industry standards and regulations. Integrated database management systems and implemented comprehensive data validation procedures.
            </div>
          </div>
        </section>

        {/* SECTION 4: Contact */}
        <section id="contact" className="contact-section">
          <h2>Contact</h2>

          <div className="group">
            <div className="text">
              Feel free to reach out! As a dedicated web developer, I’m always excited to collaborate on innovative projects or help solve challenging technical problems. Whether you have a question, need assistance, or want to discuss potential opportunities, I’d love to hear from you. Let’s connect and bring ideas to life!
            </div>

            <form>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" />

              <label htmlFor="message">Message</label>
              <textarea id="message" cols="30" rows="10"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
