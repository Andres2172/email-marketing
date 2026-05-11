"use client";

import { useState, FormEvent } from "react";

export default function SubscriptionForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Error en el servidor.");

      setStatus("success");
      setMessage("¡Registro exitoso! Revisa tu bandeja de entrada.");
      setEmail("");
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "No se pudo completar la solicitud.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ 
      display: "flex", flexDirection: "column", gap: "16px", 
      maxWidth: "400px", margin: "0 auto", 
      padding: "24px", 
      background: "#ffffff", 
      border: "1px solid #e5e7eb", 
      borderRadius: "8px",
      boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)"
    }}>
      <label style={{ fontWeight: 600, color: "#1f2937", fontSize: "14px" }}>
        Correo electrónico del taller
      </label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="mecanico@taller.com"
        disabled={status === "loading"}
        required
        style={{ 
          padding: "12px 16px", fontSize: "16px", 
          border: "1px solid #d1d5db", borderRadius: "6px", 
          outline: "none", color: "#000000", transition: "border-color 0.2s",
          width: "100%", boxSizing: "border-box"
        }}
        onFocus={(e) => e.target.style.borderColor = "#f97316"}
        onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
      />
      <button 
        type="submit" 
        disabled={status === "loading"} 
        style={{ 
          padding: "14px 24px", fontSize: "16px", fontWeight: 700, 
          color: "#fff", backgroundColor: "#f97316", 
          border: "none", borderRadius: "6px", cursor: "pointer",
          transition: "background 0.2s", textTransform: "uppercase", letterSpacing: "0.5px"
        }}
        onMouseOver={(e: any) => e.target.style.backgroundColor = "#ea580c"}
        onMouseOut={(e: any) => e.target.style.backgroundColor = "#f97316"}
      >
        {status === "loading" ? "Procesando..." : "Suscribirme al Catálogo"}
      </button>
      {message && (
        <p style={{ 
          margin: "0", fontSize: "14px", textAlign: "center", padding: "12px", borderRadius: "6px",
          color: status === "error" ? "#991b1b" : "#065f46", 
          backgroundColor: status === "error" ? "#fef2f2" : "#ecfdf5",
          border: status === "error" ? "1px solid #fecaca" : "1px solid #6ee7b7"
        }}>
          {message}
        </p>
      )}
    </form>
  );
}
