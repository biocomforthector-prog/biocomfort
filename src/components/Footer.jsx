import { Wind } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand" href="#inicio" aria-label="BIOCOMFORT, volver al inicio">
          <span className="brand__mark"><Wind size={22} aria-hidden="true" /></span>
          <span className="brand__text">
            <span className="brand__name">BIOCOMFORT</span>
            <span className="brand__tagline">Climatización y confort</span>
          </span>
        </a>
        <p className="footer__copy">© {year} BIOCOMFORT. Todos los derechos reservados.</p>
        <nav className="footer__links" aria-label="Enlaces del pie de página">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </footer>
  );
}
