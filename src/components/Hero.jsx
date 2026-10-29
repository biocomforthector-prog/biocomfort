import { ArrowRight, CheckCircle2, ShieldCheck, Clock3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero__grid">
        <div>
          <p className="eyebrow">Tu bienestar, nuestra prioridad</p>
          <h1>El clima ideal para <span>tu espacio.</span></h1>
          <p className="hero__description">
            En BIOCOMFORT te ayudamos a mantener tus espacios frescos, cómodos y eficientes
            con instalación, reparación y mantenimiento de aires acondicionados.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contacto">
              Solicitar servicio <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--outline" href="#servicios">Conocer servicios</a>
          </div>
          <div className="hero__trust">
            <span><CheckCircle2 size={17} /> Atención personalizada</span>
            <span><ShieldCheck size={17} /> Trabajo responsable</span>
            <span><Clock3 size={17} /> Mantenimiento preventivo</span>
          </div>
        </div>

        <div className="hero-art" aria-label="Ilustración de un equipo de climatización" role="img">
          <div className="hero-art__orb" />
          <div className="hero-art__panel">
            <div className="hero-art__top">
              <span className="hero-art__label">BIOCOMFORT · CONTROL CLIMÁTICO</span>
              <span className="hero-art__dots" aria-hidden="true"><i /><i /><i /></span>
            </div>
            <div className="hero-art__unit">
              <div>
                <h3>Ambiente confortable</h3>
                <p>Climatización inteligente</p>
              </div>
              <div className="hero-art__temperature">22°</div>
            </div>
            <div className="hero-art__air" aria-hidden="true">
              <span /><span /><span /><span /><span /><span />
            </div>
            <div className="hero-art__status">Confort para cada espacio</div>
          </div>
        </div>
      </div>
    </section>
  );
}
