import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';
import project4 from '../assets/project4.png';

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: 'Grocery Shopping Mobile Application',
      desc: 'Full-stack Android e-commerce application with authentication, product management, and shopping cart system using Firebase backend.',
      image: project1,
      github: 'https://github.com/SupunLakshitha/grocery-shopping-app',
      demo: '#',
      tags: [
        'Java',
        'Android Studio',
        'Firebase',
        'Firestore',
        'Cloudinary',
        'Glide',
        'Material Design',
        'MVVM',
        'RecyclerView',
        'UI Testing',
      ],
    },
    {
      id: 2,
      title: 'Customer Shopping Behavior Analysis',
      desc: 'Data analytics project focused on customer behavior analysis using EDA, SQL queries, and interactive Power BI dashboards for business insights.',
      image: project2,
      github: 'https://github.com/SupunLakshitha/customer_behavior_analysis',
      demo: '#',
      tags: [
        'Python',
        'Pandas',
        'NumPy',
        'SQL',
        'Power BI',
        'Jupyter Notebook',
        'Data Cleaning',
        'EDA',
        'Data Visualization',
      ],
    },
    {
      id: 3,
      title: 'Coffee Shop Website',
      desc: 'Responsive full-stack website with modern UI/UX design and dynamic functionality including contact form integration.',
      image: project3,
      github: 'https://github.com/SupunLakshitha/coffee-website',
      demo: '#',
      tags: [
        'HTML',
        'CSS',
        'JavaScript',
        'PHP',
        'Responsive Design',
        'UI/UX',
        'Frontend Development',
        'Backend Integration',
      ],
    },
    {
      id: 4,
      title: 'Personal Portfolio Website',
      desc: 'Modern responsive portfolio website built with React.js featuring animations, reusable components, and optimized performance.',
      image: project4,
      github: '#',
      demo: '#',
      tags: [
        'React.js',
        'Vite',
        'Tailwind CSS',
        'Framer Motion',
        'AOS',
        'Responsive Design',
        'UI Animation',
        'Cross-Browser Testing',
      ],
    },
  ];

  return (
    <section
      id="projects"
      style={{ backgroundColor: darkMode ? '#111827' : '#f9fafb' }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            My{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Projects
            </span>
          </h2>

          <p
            className="max-w-xl mx-auto text-center"
            style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
          >
            A showcase of my recent work
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              style={{
                background: darkMode
                  ? 'linear-gradient(to right, #1f2937, #111827)'
                  : 'linear-gradient(to right, #ffffff, #f9fafb)',
                borderColor: darkMode ? '#374151' : '#e5e7eb',
              }}
              className="group rounded-xl border transition-all duration-300 hover:border-orange-500/50 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-36 overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-4">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? 'white' : '#1f2937' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3"
                  style={{ color: darkMode ? '#d1d5db' : '#667280' }}
                >
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                        color: darkMode ? '#d1d5db' : '#465563',
                      }}
                      className="px-2 py-1 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                      color: darkMode ? 'white' : '#374151',
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors"
                  >
                    <FaGithub className="text-sm" />
                    <span>Code</span>
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      background:
                        'linear-gradient(to right, #f97316, #f59e0b)',
                      color: 'white',
                    }}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/SupunLakshitha"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(to right, #f97316, #f59e0b)',
              color: 'white',
            }}
            className="inline-flex items-center font-semibold gap-2 px-7 py-4 text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all"
          >
            <FaGithub className="text-sm" />
            <span>View All Projects</span>
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;