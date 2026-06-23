const externalLinkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 10V12C15 13.65 13.65 15 12 15H4C2.35 15 1 13.65 1 12V4C1 2.35 2.35 1 4 1H5.6C5.9 1 6.1 1.2 6.1 1.5C6.1 1.8 5.9 2 5.6 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H12C13.1 14 14 13.1 14 12V10C14 9.7 14.2 9.5 14.5 9.5C14.8 9.5 15 9.7 15 10ZM14 1H9.5C9.2 1 9 1.2 9 1.5C9 1.8 9.2 2 9.5 2H13.3L6.65 8.65C6.45 8.85 6.45 9.15 6.65 9.35C6.75 9.45 6.9 9.5 7 9.5C7.1 9.5 7.25 9.45 7.35 9.35L14 2.7V6.5C14 6.8 14.2 7 14.5 7C14.8 7 15 6.8 15 6.5V2C15 1.45 14.55 1 14 1Z" fill="#6D6E6F"/>
  </svg>
)

const teammates = [
  {
    quote: '"Something, Something, Something"',
    body: 'I turn complex ecosystems and user needs into cohesive experiences that scale across products and teams.',
    name: 'Nik Greenberg',
    title: ', AI Product @ Figma. Formerly AI Teammates PM.',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/d01f2917871bef7637a03ca8db8025d42ebf4f7e?width=400',
  },
  {
    quote: '"Something, Something, Something"',
    body: 'I turn complex ecosystems and user needs into cohesive experiences that scale across products and teams.',
    name: 'Daniel Hudson',
    title: ', Engineer @ Anthropic. Formerly AI Tech Lead.',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/527675b53916083aa1a060c343482aa2eb72b157?width=400',
  },
  {
    quote: '"Something, Something, Something"',
    body: 'I turn complex ecosystems and user needs into cohesive experiences that scale across products and teams.',
    name: '',
    title: 'Lead AI Researcher @ Asana.',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/d01f2917871bef7637a03ca8db8025d42ebf4f7e?width=400',
  },
]

const caseStudies = [
  {
    title: 'Human-AI Agents',
    description: 'From dogfooding to GA, I [somethng] surpassing our ARR goal by 300k',
    metadata: 'asana・Shipped',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/cddf473244d20fe8e12bec4df26eb2df1234ef5a?width=1416',
  },
  {
    title: 'AI chat',
    description: '[Shipped to GA] ???',
    metadata: 'asana・Shipped',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/b791ff72fddbb2e9bf7b46892643bfb24c8f61dd?width=1416',
  },
  {
    title: 'Asana AI',
    description: '[shit ton of ai features like smart fields, goals, etc]',
    metadata: 'asana・Shipped',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/55136e71d141fad4b8720596081d63e5d69b1287?width=1698',
  },
  {
    title: 'Scaling integrations & automations',
    description: 'Seamlessly connect, automate and customize team\'s workflows in and outside of Asana.',
    metadata: 'asana・Shipped',
    image: 'https://api.builder.io/api/v1/image/assets/TEMP/c397ce6380196c3b1862e949a714e8c260c86422?width=1692',
  },
  {
    title: 'Content management',
    description: 'Redesigned content retrieval system so users can organize videos in dynamic playlists.',
    metadata: 'TikTok・Project',
    image: null,
  },
  {
    title: 'Discover Mom and pops',
    description: 'Design lead for a social app discovering small businesses aligned with your values.',
    metadata: 'Project・Hackathon Finalist',
    image: null,
  },
]

function App() {
  return (
    <>
      <nav className="sidebar-nav">
        <div className="sidebar-top">
          <img
            className="sidebar-avatar"
            src="https://api.builder.io/api/v1/image/assets/TEMP/d9656f186a44ec94e14fd7aac798a9d312586b4f?width=80"
            alt="Profile"
          />
        </div>
        <ul className="sidebar-links">
          <li>
            <a href="#work" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#briefcase)">
                  <path d="M13.999 3H11.999V2C11.999 0.897 11.102 0 9.99902 0H5.99902C4.89602 0 3.99902 0.897 3.99902 2V3H1.99902C0.896023 3 -0.000976562 3.897 -0.000976562 5V12C-0.000976562 13.103 0.896023 14 1.99902 14H13.999C15.102 14 15.999 13.103 15.999 12V5C15.999 3.897 15.102 3 13.999 3ZM4.99902 2C4.99902 1.4485 5.44752 1 5.99902 1H9.99902C10.5505 1 10.999 1.4485 10.999 2V3H4.99902V2ZM2.99902 13H1.99902C1.44752 13 0.999023 12.5515 0.999023 12V5C0.999023 4.4485 1.44752 4 1.99902 4H2.99902V13ZM11.999 13H3.99902V4H11.999V13ZM14.999 12C14.999 12.5515 14.5505 13 13.999 13H12.999V4H13.999C14.5505 4 14.999 4.4485 14.999 5V12Z" fill="#6D6E6F"/>
                </g>
                <defs>
                  <clipPath id="briefcase"><rect width="16" height="16" fill="white"/></clipPath>
                </defs>
              </svg>
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8.98001C10.2055 8.98001 12 7.18501 12 4.98001C12 2.77401 10.2055 0.980011 8 0.980011C5.7945 0.980011 4 2.77401 4 4.98001C4 7.18501 5.7945 8.98001 8 8.98001ZM8 1.98001C9.6545 1.98001 11 3.32501 11 4.98001C11 6.63401 9.6545 7.98001 8 7.98001C6.3455 7.98001 5 6.63401 5 4.98001C5 3.32501 6.3455 1.98001 8 1.98001ZM15 15.48C15 15.6126 14.9473 15.7398 14.8536 15.8336C14.7598 15.9273 14.6326 15.98 14.5 15.98C14.3674 15.98 14.2402 15.9273 14.1464 15.8336C14.0527 15.7398 14 15.6126 14 15.48V13.3785C13.9993 12.7425 13.7464 12.1326 13.2966 11.6829C12.8469 11.2331 12.2371 10.9802 11.601 10.9795H4.399C3.76295 10.9802 3.15314 11.2331 2.70338 11.6829C2.25363 12.1326 2.00066 12.7425 2 13.3785V15.4795C2 15.6121 1.94732 15.7393 1.85355 15.8331C1.75979 15.9268 1.63261 15.9795 1.5 15.9795C1.36739 15.9795 1.24021 15.9268 1.14645 15.8331C1.05268 15.7393 1 15.6121 1 15.4795V13.3785C1.00106 12.4774 1.35951 11.6134 1.99671 10.9762C2.63392 10.339 3.49785 9.98057 4.399 9.97951H11.601C12.5021 9.98057 13.3661 10.339 14.0033 10.9762C14.6405 11.6134 14.9989 12.4774 15 13.3785V15.48Z" fill="#6D6E6F"/>
              </svg>
              About me
            </a>
          </li>
          <li>
            <a href="#resume" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.79202 0.586C9.47412 0.27355 9.06125 0.0758214 8.61852 0.024C8.57902 0.014 8.54152 0 8.49902 0C8.48452 0 8.47302 0.007 8.45902 0.008C8.43202 0.007 8.40552 0 8.37802 0H4.99902C3.34452 0 1.99902 1.3455 1.99902 3V13C1.99902 14.6545 3.34452 16 4.99902 16H11.999C13.654 16 14.999 14.6545 14.999 13V6.8285C14.9998 6.50009 14.9355 6.17478 14.8098 5.8714C14.684 5.56801 14.4994 5.29256 14.2665 5.061L9.79202 0.586ZM8.99902 1.2225C9.02802 1.2455 9.05902 1.2665 9.08502 1.293L13.56 5.768C13.6305 5.839 13.6935 5.917 13.748 6H9.99852C9.44702 6 8.99852 5.5515 8.99852 5L8.99902 1.2225ZM13.999 13C13.999 14.103 13.102 15 11.999 15H4.99902C3.89602 15 2.99902 14.103 2.99902 13V3C2.99902 1.897 3.89602 1 4.99902 1H7.99902V5C7.99902 6.103 8.89602 7 9.99902 7H13.999V13Z" fill="#6D6E6F"/>
              </svg>
              Resume
            </a>
          </li>
          <li>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="sidebar-link">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 10V12C15 13.65 13.65 15 12 15H4C2.35 15 1 13.65 1 12V4C1 2.35 2.35 1 4 1H5.6C5.9 1 6.1 1.2 6.1 1.5C6.1 1.8 5.9 2 5.6 2H4C2.9 2 2 2.9 2 4V12C2 13.1 2.9 14 4 14H12C13.1 14 14 13.1 14 12V10C14 9.7 14.2 9.5 14.5 9.5C14.8 9.5 15 9.7 15 10ZM14 1H9.5C9.2 1 9 1.2 9 1.5C9 1.8 9.2 2 9.5 2H13.3L6.65 8.65C6.45 8.85 6.45 9.15 6.65 9.35C6.75 9.45 6.9 9.5 7 9.5C7.1 9.5 7.25 9.45 7.35 9.35L14 2.7V6.5C14 6.8 14.2 7 14.5 7C14.8 7 15 6.8 15 6.5V2C15 1.45 14.55 1 14 1Z" fill="#6D6E6F"/>
              </svg>
              Linkedin
            </a>
          </li>
        </ul>
      </nav>
      <main className="home">
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-headline">Shaping and building human-AI products</h1>
            <p className="hero-byline">
              Yanet Ibarra, Senior Product Designer at Asana working on Agentic Work Management.{' '}
              <br />1 patent. 1 innovation award.
            </p>
          </div>
        </section>

        <section id="work" className="selected-work">
          <h2 className="section-title">Selected Work</h2>
          <div className="case-study-list">
            {Array.from({ length: Math.ceil(caseStudies.length / 2) }, (_, rowIndex) => (
              <div key={rowIndex} className="case-study-row">
                {caseStudies.slice(rowIndex * 2, rowIndex * 2 + 2).map((study) => (
                  <div key={study.title} className="case-study-card">
                    <div className="card-image">
                      {study.image && (
                        <img src={study.image} alt={study.title} className="card-screenshot" />
                      )}
                    </div>
                    <div className="card-content">
                      <div className="card-info">
                        <h3 className="card-title">{study.title}</h3>
                        <p className="card-description">{study.description}</p>
                      </div>
                      <div className="card-meta">
                        <span className="meta-label">{study.metadata}</span>
                        {externalLinkIcon}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about-section">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <img
              className="about-photo"
              src="https://api.builder.io/api/v1/image/assets/TEMP/45fe64b27eae68d61ec5ae0a656691790d3fead1?width=1300"
              alt="Yanet Ibarra"
            />
            <div className="about-text">
              <div className="about-text-inner">
                <h3 className="about-heading">Howdy, I'm Yanet </h3>
                <p className="about-bio">
                  I'm a Product Designer at <strong>Asana</strong>, where I led the design of{' '}
                  <strong>AI Teammates</strong>, bringing Asana's vision for{' '}
                  <strong>Agentic Work Management</strong> from conception to GA.
                  {'\n\n'}
                  I specialize in designing{' '}
                  <strong>human–AI collaboration for enterprise workflows</strong>, aligning teams
                  around a vision and transforming complex systems into products people trust to get
                  real work done.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="teammates-section">
          <h2 className="section-title">What Teammates Say</h2>
          <div className="testimonials-list">
            {teammates.map((teammate, i) => (
              <div key={i} className="testimonial-item">
                <img
                  className="testimonial-photo"
                  src={teammate.image}
                  alt={teammate.name || 'Teammate'}
                />
                <div className="testimonial-content">
                  <div className="testimonial-quote">{teammate.quote}</div>
                  <p className="testimonial-body">{teammate.body}</p>
                  <div className="testimonial-attribution">
                    <span className="attribution-dash">— </span>
                    {teammate.name && <span className="attribution-name">{teammate.name}</span>}
                    <span className="attribution-title">{teammate.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="super-powers-section">
          <h2 className="section-title">Super Powers</h2>
          <div className="powers-list">
            <div className="power-item">
              <h3 className="power-title">Systems thinker.</h3>
              <p className="power-description">I turn complex ecosystems and user needs into cohesive experiences that scale across products and teams.</p>
            </div>
            <div className="power-item">
              <h3 className="power-title">Visionary.</h3>
              <p className="power-description">I push teams to think bigger, define what's next, and rally teams around a shared vision.</p>
            </div>
            <div className="power-item">
              <h3 className="power-title">Scrappy mobilizer.</h3>
              <p className="power-description">I lead with conviction, learn quickly, and drive momentum through ambiguity.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
