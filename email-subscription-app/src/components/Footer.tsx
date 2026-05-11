export default function Footer() {
  return (
    <footer style={{ 
      padding: "40px 24px", 
      background: "#111827", 
      color: "#9ca3af", 
      textAlign: "center",
      fontSize: "14px"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ marginBottom: "24px" }}>
          <span style={{ fontSize: "24px", fontWeight: 800, color: "#fff" }}>
            ⚙️ AutoParts <span style={{ color: "#f97316" }}>Pro</span>
          </span>
        </div>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "24px", 
          marginBottom: "24px",
          flexWrap: "wrap"
        }}>
          <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Catálogo</a>
          <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Contacto</a>
          <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Términos</a>
          <a href="#" style={{ color: "#d1d5db", textDecoration: "none" }}>Privacidad</a>
        </div>
        
        <p style={{ margin: "0 0 8px 0" }}>
          📍 Av. Mecánica 123, Ciudad Motor | 📞 +52 555 123 4567
        </p>
        <p style={{ margin: 0 }}>
          © 2026 AutoParts Pro. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
