
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Instalación de aire acondicionado',
      category: 'Instalaciones',
      image: '',
    },
    {
      id: 2,
      title: 'Mantenimiento preventivo',
      category: 'Mantenimiento',
      image: '',
    },
    {
      id: 3,
      title: 'Reparación de equipos',
      category: 'Reparaciones',
      image: '',
    },
  ];

  const [current, setCurrent] = useState(0);

  const previousProject = () => {
    setCurrent((current - 1 + projects.length) % projects.length);
  };

  const nextProject = () => {
    setCurrent((current + 1) % projects.length);
  };

  return (
    <section className="projects" id="proyectos">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Nuestro trabajo</span>
          <h2>Proyectos que reflejan nuestra experiencia</h2>
          <p>
            Conoce algunos de los trabajos de instalación,
            mantenimiento y reparación realizados por BIOCOMFORT.
          </p>
        </div>

        <div className="projects__carousel">
          <button
            className="projects__arrow"
            onClick={previousProject}
            aria-label="Proyecto anterior"
          >
            <ChevronLeft />
          </button>

          <article className="projects__slide">
            <div className="projects__image">
              {projects[current].image ? (
                <img
                  src={projects[current].image}
                  alt={projects[current].title}
                />
              ) : (
                <div className="projects__placeholder">
                  Fotografía del proyecto
                </div>
              )}
            </div>

            <div className="projects__info">
              <span>{projects[current].category}</span>
              <h3>{projects[current].title}</h3>
            </div>
          </article>

          <button
            className="projects__arrow"
            onClick={nextProject}
            aria-label="Proyecto siguiente"
          >
            <ChevronRight />
          </button>
        </div>

        <div className="projects__indicators">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`projects__indicator ${
                current === index ? 'active' : ''
              }`}
              onClick={() => setCurrent(index)}
              aria-label={`Ver proyecto ${index + 1}`}
              aria-current={current === index ? 'true' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
