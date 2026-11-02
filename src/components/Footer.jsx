import logoBiocomfort from '../assets/logo-biocomfort.png';
import { Users, Camera, Music2, Play } from 'lucide-react';
import socialLinks from '../config/socialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  const socialNetworks = [
    {
      name: 'Facebook',
      url: socialLinks.facebook,
      icon: Users,
    },
    {
      name: 'Instagram',
      url: socialLinks.instagram,
      icon: Camera,
    },
    {
      name: 'TikTok',
      url: socialLinks.tiktok,
      icon: Music2,
    },
    {
      name: 'YouTube',
      url: socialLinks.youtube,
      icon: Play,
    },
  ];

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a className="brand" href="#inicio" aria-label="BIOCOMFORT, volver al inicio">
          <img
            className="footer__logo"
            src={logoBiocomfort}
            alt="BIOCOMFORT - Soluciones climáticas"
          />
        </a>

        <p className="footer__copy">
          © {year} BIOCOMFORT. Todos los derechos reservados.
        </p>

        <nav className="footer__links" aria-label="Enlaces del pie de página">
          <a href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <nav className="footer__social" aria-label="Redes sociales">
          {socialNetworks.map((network) => {
            const Icon = network.icon;

            return (
              <a
                key={network.name}
                href={network.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`BIOCOMFORT en ${network.name}`}
                title={network.name}
              >
                <Icon size={20} />
              </a>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}