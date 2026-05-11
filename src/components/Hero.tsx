"use client";

export default function Hero() {
  return (
    <section style={{ 
      background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)", 
      padding: "80px 24px 60px", 
      textAlign: "center",
      color: "#ffffff"
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <span style={{ 
          display: "inline-block", 
          padding: "6px 16px", 
          background: "rgba(249, 115, 22, 0.2)", 
          color: "#f97316", 
          borderRadius: "20px", 
          fontSize: "14px", 
          fontWeight: 600,
          marginBottom: "24px",
          border: "1px solid rgba(249, 115, 22, 0.3)"
        }}>
          🔧 Repuestos de Calidad Premium
        </span>
        <h1 style={{ 
          fontSize: "42px", 
          fontWeight: 800, 
          marginBottom: "20px", 
          lineHeight: 1.2,
          textShadow: "0 2px 4px rgba(0,0,0,0.3)"
        }}>
          Todo para tu <span style={{ color: "#f97316" }}>Taller Mecánico</span><br />
          en un solo lugar
        </h1>
        <p style={{ 
          fontSize: "18px", 
          color: "#d1d5db", 
          marginBottom: "32px", 
          maxWidth: "600px", 
          margin: "0 auto 32px",
          lineHeight: 1.6
        }}>
          Catálogo actualizado con más de 10,000 repuestos originales y genéricos. 
          Envíos rápidos, garantía extendida y soporte técnico especializado.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#catalogo" style={{ 
            display: "inline-block",
            padding: "14px 32px", 
            background: "#f97316", 
            color: "#fff", 
            textDecoration: "none", 
            borderRadius: "8px", 
            fontWeight: 700,
            fontSize: "16px",
            transition: "background 0.2s"
          }} onMouseOver={(e: any) => e.currentTarget.style.background = "#ea580c"}
             onMouseOut={(e: any) => e.currentTarget.style.background = "#f97316"}>
            Ver Catálogo
          </a>
          <a href="#suscripcion" style={{ 
            display: "inline-block",
            padding: "14px 32px", 
            background: "transparent", 
            color: "#fff", 
            textDecoration: "none", 
            borderRadius: "8px", 
            fontWeight: 700,
            fontSize: "16px",
            border: "2px solid #fff"
          }} onMouseOver={(e: any) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
             onMouseOut={(e: any) => e.currentTarget.style.background = "transparent"}>
            Suscribirse a Ofertas
          </a>
        </div>
      </div>
    </section>
  );
}
