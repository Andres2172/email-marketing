"use client";

const categories = [
  { icon: "🚗", title: "Motor y Transmisión", desc: "Pistones, bandas, aceites, filtros" },
  { icon: "🔋", title: "Sistema Eléctrico", desc: "Baterías, alternadores, bujías" },
  { icon: "🛞", title: "Suspensión y Frenos", desc: "Amortiguadores, pastillas, discos" },
  { icon: "❄️", title: "Climatización", desc: "Compresores, radiadores, mangueras" },
  { icon: "🔩", title: "Tornillería y Accesorios", desc: "Kit de herramientas, sujetadores" },
  { icon: "🚚", title: "Carrocería y Exterior", desc: "Faros, espejos, defensas" },
];

export default function Categories() {
  return (
    <section id="catalogo" style={{ padding: "80px 24px", background: "#ffffff" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 800, color: "#1f2937", marginBottom: "12px" }}>
            Nuestro Catálogo de Repuestos
          </h2>
          <p style={{ fontSize: "18px", color: "#6b7280", maxWidth: "600px", margin: "0 auto" }}>
            Explora nuestras categorías principales. Todos los productos con garantía y envío inmediato.
          </p>
        </div>
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
          gap: "24px" 
        }}>
          {categories.map((cat, idx) => (
            <div key={idx} style={{ 
              padding: "24px", 
              border: "1px solid #e5e7eb", 
              borderRadius: "12px", 
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer"
            }} 
            onMouseOver={(e: any) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.1)";
            }}
            onMouseOut={(e: any) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={{ fontSize: "40px", marginBottom: "16px" }}>{cat.icon}</div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1f2937", marginBottom: "8px" }}>
                {cat.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#6b7280", margin: 0 }}>{cat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
