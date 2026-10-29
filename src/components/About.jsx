import { Wind, CheckCircle2 } from 'lucide-react';

const points = [
  'Atención cercana y clara',
  'Recomendaciones según tu espacio',
  'Enfoque en el cuidado del equipo',
  'Compromiso con el confort',
];

export default function About() {
  return (
    <section className="section section--soft" id="nosotros">
      <div className="container about__grid">
        <div className="about-visual" aria-hidden="true">
          <div className="about-visual__circle" />
          <div className="about-visual__icon"><Wind size={70} strokeWidth={1.5} /></div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">Conócenos</p>
          <h2>Confort, cuidado y confianza en cada servicio</h2>
          <p>
            En BIOCOMFORT trabajamos para que disfrutes de espacios agradables durante todo el año.
            Nos enfocamos en brindar soluciones de climatización con comunicación clara y atención
            a las necesidades de cada cliente.
          </p>
          <p>
            Ya sea que necesites instalar un equipo, revisar una falla o programar mantenimiento,
            estamos listos para ayudarte a encontrar el siguiente paso.
          </p>
          <ul className="about-points">
            {points.map((point) => (
              <li key={point}><CheckCircle2 size={18} aria-hidden="true" /> {point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
