"use client";

const benefits = [
  { icon: "🚚", title: "Envío en 24-48h", desc: "Entrega rápida a todo el país con seguimiento en tiempo real." },
  { icon: "✅", title: "Garantía Extendida", desc: "Hasta 24 meses de garantía en repuestos seleccionados." },
  { icon: "💬", title: "Soporte Técnico", desc: "Asesoría especializada por WhatsApp o teléfono." },
  { icon: "💰", title: "Precios de Mayorista", desc: "Descuentos progresivos según volumen de compra." },
];

export default function Benefits() {
  return (
    <section style={{ padding: "80px 24px", background: "#f9fafb" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#1f2937", marginBottom: "12px" }}>
            ¿Por qué elegir AutoParts Pro?
          </h2>
          <p style={{ fontSize: "18px", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
            Más de 15 años abasteciendo talleres mecánicos con calidad y confianza.
          </p>
        </div>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: "32px" 
        }}>
          {benefits.map((ben, idx) => (
            <div key={idx} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ 
                minWidth: "48px", 
                height: "48px", 
                background: "#f97316", 
                borderRadius: "12px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontSize: "24px",
                flexShrink: 0
              }}>
                {ben.icon}
              </div>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1f2937", marginBottom: "6px" }}>
                  {ben.title}
                </h3>
                <p style={{ fontSize: "14px", color: "#6b7280", margin: 0, lineHeight: 1.6 }}>{ben.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
