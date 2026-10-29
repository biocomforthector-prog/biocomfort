import { Snowflake, Wrench, CalendarCheck2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Snowflake,
    title: 'Instalación de aires acondicionados',
    description: 'Asesoría e instalación pensadas para las características de tu espacio y tus necesidades de climatización.',
  },
  {
    icon: Wrench,
    title: 'Reparación y diagnóstico',
    description: 'Revisión de fallas y soluciones responsables para ayudarte a recuperar el funcionamiento de tu equipo.',
  },
  {
    icon: CalendarCheck2,
    title: 'Mantenimiento preventivo',
    description: 'Limpieza, revisión y cuidado periódico para favorecer el rendimiento y prolongar la vida útil del equipo.',
  },
];

export default function Services() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Nuestros servicios</p>
          <h2>Soluciones para respirar tranquilidad</h2>
          <p>Te acompañamos en cada etapa del cuidado de tu aire acondicionado, desde la instalación hasta su mantenimiento.</p>
        </div>
        <div className="service-grid">
          {services.map(({ icon: Icon, title, description }) => (
            <article className="service-card" key={title}>
              <div className="service-card__icon"><Icon size={27} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <p style={{ marginTop: '1.15rem' }}>
                <a className="text-link" href="#contacto">Consultar servicio <ArrowUpRight size={16} aria-hidden="true" /></a>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
