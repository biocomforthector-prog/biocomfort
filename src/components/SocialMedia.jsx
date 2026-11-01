
import {
  Users,
  Camera,
  Music2,
  Play,
  MessageCircle,
} from 'lucide-react';

import socialLinks from '../config/socialLinks';

export default function SocialMedia() {
  const socialNetworks = [
    {
      name: 'Facebook',
      url: socialLinks.facebook,
      icon: Users,
      className: 'social-media__facebook',
    },
    {
      name: 'Instagram',
      url: socialLinks.instagram,
      icon: Camera,
      className: 'social-media__instagram',
    },
    {
      name: 'TikTok',
      url: socialLinks.tiktok,
      icon: Music2,
      className: 'social-media__tiktok',
    },
    {
      name: 'YouTube',
      url: socialLinks.youtube,
      icon: Play,
      className: 'social-media__youtube',
    },
  ];

  const whatsappReady =
    socialLinks.whatsapp &&
    !socialLinks.whatsapp.includes('XXXXXXXXXX');

  if (whatsappReady) {
    socialNetworks.push({
      name: 'WhatsApp',
      url: socialLinks.whatsapp,
      icon: MessageCircle,
      className: 'social-media__whatsapp',
    });
  }

  return (
    <section className="social-media" id="redes-sociales">
      <div className="container">
        <div className="social-media__header">
          <span className="section-label">Síguenos</span>

          <h2>Conéctate con BIOCOMFORT</h2>

          <p>
            Síguenos en nuestras redes sociales y descubre
            nuestros trabajos, proyectos y soluciones de
            climatización.
          </p>
        </div>

        <div className="social-media__grid">
          {socialNetworks.map((network) => {
            const Icon = network.icon;

            return (
              <a
                key={network.name}
                href={network.url}
                className={`social-media__card ${network.className}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visitar BIOCOMFORT en ${network.name}`}
              >
                <Icon size={32} />
                <span>{network.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
