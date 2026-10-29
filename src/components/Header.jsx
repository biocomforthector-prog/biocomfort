import { useState } from 'react';
import { Wind, Menu, X, ArrowUpRight } from 'lucide-react';

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <a className="brand" href="#inicio" aria-label="BIOCOMFORT, inicio" onClick={closeMenu}>
          <span className="brand__mark"><Wind size={24} aria-hidden="true" /></span>
          <span className="brand__text">
            <span className="brand__name">BIOCOMFORT</span>
            <span className="brand__tagline">Climatización y confort</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="navegacion-principal"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

        <nav id="navegacion-principal" className={`nav ${menuOpen ? 'nav--open' : ''}`} aria-label="Navegación principal">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>{link.label}</a>
          ))}
          <a className="nav__cta" href="#contacto" onClick={closeMenu}>
            Solicitar servicio <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </header>
  );
}
