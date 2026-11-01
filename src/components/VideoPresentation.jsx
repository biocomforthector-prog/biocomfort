
import { Play, Video } from 'lucide-react';

export default function VideoPresentation() {
  return (
    <section className="video-presentation" id="presentacion">
      <div className="container">

        <div className="video-presentation__header">
          <span className="section-label">Conócenos</span>

          <h2>Conoce BIOCOMFORT</h2>

          <p>
            Trabajamos para ofrecerte soluciones de climatización,
            bienestar y confort. Conoce más sobre nuestra empresa,
            nuestro compromiso y la calidad de nuestros servicios.
          </p>
        </div>

        <div className="video-presentation__container">

          <div className="video-presentation__placeholder">

            <div className="video-presentation__icon">
              <Video size={42} />
            </div>

            <button
              className="video-presentation__play"
              type="button"
              disabled
              aria-label="Video de presentación próximamente"
            >
              <Play size={28} fill="currentColor" />
            </button>

            <h3>Muy pronto podrás conocernos en video</h3>

            <p>
              Estamos preparando nuestra presentación
              para compartir contigo lo que hacemos.
            </p>

            <span className="video-presentation__badge">
              Video próximamente
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}
