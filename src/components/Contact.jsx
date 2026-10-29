import { useState } from 'react';
import { MapPin, Mail, MessageCircle, Send, Phone } from 'lucide-react';

const initialForm = {
  nombre: '',
  correo: '',
  telefono: '',
  servicio: 'Instalación',
  mensaje: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Por ahora el formulario valida y muestra confirmación en el navegador.
    // Para guardar solicitudes o enviarlas a BIOCOMFORT se necesita conectar un backend.
    setSubmitted(true);
    setForm(initialForm);
  }

  return (
    <section className="section" id="contacto">
      <div className="container contact__grid">
        <div className="contact-copy">
          <p className="eyebrow">Hablemos</p>
          <h2>¿Necesitas ayuda con tu aire acondicionado?</h2>
          <p>
            Cuéntanos qué necesitas. Déjanos tus datos y el servicio de tu interés para preparar
            la atención que mejor se adapte a tu caso.
          </p>
          <div className="contact-detail">
            <div className="contact-detail__icon"><MessageCircle size={21} /></div>
            <div><strong>Atención personalizada</strong><span>Describe tu necesidad en el formulario y nos pondremos en contacto cuando el formulario esté conectado a un servicio real.</span></div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail__icon"><MapPin size={21} /></div>
            <div><strong>Servicio de climatización</strong><span>Instalación, reparación y mantenimiento.</span></div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail__icon"><Mail size={21} /></div>
            <div><strong>Correo electrónico</strong><span>Agrega aquí el correo oficial de BIOCOMFORT antes de publicar.</span></div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-field">
              <label htmlFor="nombre">Nombre completo *</label>
              <input id="nombre" name="nombre" autoComplete="name" value={form.nombre} onChange={handleChange} required placeholder="Tu nombre" />
            </div>
            <div className="form-field">
              <label htmlFor="correo">Correo electrónico *</label>
              <input id="correo" name="correo" type="email" autoComplete="email" value={form.correo} onChange={handleChange} required placeholder="tu@correo.com" />
            </div>
            <div className="form-field">
              <label htmlFor="telefono">Teléfono</label>
              <input id="telefono" name="telefono" type="tel" autoComplete="tel" value={form.telefono} onChange={handleChange} placeholder="Tu número de contacto" />
            </div>
            <div className="form-field">
              <label htmlFor="servicio">Servicio que necesitas *</label>
              <select id="servicio" name="servicio" value={form.servicio} onChange={handleChange} required>
                <option>Instalación</option>
                <option>Reparación</option>
                <option>Mantenimiento</option>
                <option>Asesoría</option>
              </select>
            </div>
            <div className="form-field form-field--full">
              <label htmlFor="mensaje">Cuéntanos más *</label>
              <textarea id="mensaje" name="mensaje" value={form.mensaje} onChange={handleChange} required placeholder="Describe brevemente lo que necesitas..." />
            </div>
          </div>
          <button className="button button--primary" type="submit">Enviar solicitud <Send size={17} aria-hidden="true" /></button>
          {submitted && (
            <p className="form-success" role="status">
              El formulario se validó correctamente en esta demostración. Todavía no se envió ni guardó la solicitud: falta conectar el backend.
            </p>
          )}
          <p className="form-note">Los campos marcados con * son obligatorios. Esta versión es de demostración y no transmite los datos.</p>
        </form>
      </div>
    </section>
  );
}
