"use client";

import SubscriptionForm from "./SubscriptionForm";

export default function CTASection() {
  return (
    <section id="suscripcion" style={{ 
      padding: "80px 24px", 
      background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <span style={{ fontSize: "48px", marginBottom: "16px", display: "block" }}>📬</span>
        <h2 style={{ 
          fontSize: "32px", 
          fontWeight: 800, 
          color: "#ffffff", 
          marginBottom: "16px" 
        }}>
          Recibe Ofertas Exclusivas
        </h2>
        <p style={{ 
          fontSize: "16px", 
          color: "#d1d5db", 
          marginBottom: "32px",
          lineHeight: 1.6
        }}>
          Suscríbete a nuestro boletín y obtén acceso prioritario a promociones, 
          lanzamientos de nuevos productos y descuentos para talleres registrados.
        </p>
        
        {/* Aquí se integra el formulario existente */}
        <SubscriptionForm />
        
        <p style={{ 
          fontSize: "12px", 
          color: "#6b7280", 
          marginTop: "24px",
          opacity: 0.8
        }}>
          🔒 Tus datos están seguros. Nunca enviaremos spam.
        </p>
      </div>
    </section>
  );
}
