export const generateWelcomeHtml = (userEmail: string): string => `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bienvenido a AutoParts Pro</title>
</head>
<body style="margin:0; padding:0; background-color:#f3f4f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing:antialiased;">
  
  <!-- Contenedor Principal -->
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f3f4f6;">
    <tr>
      <td align="center" style="padding:40px 20px;">
        
        <!-- Tarjeta estilo WordPress -->
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid #e5e7eb; border-radius:8px; overflow:hidden; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
          
          <!-- 1. SECCIÓN: HEADER / LOGO -->
          <tr>
            <td align="center" style="padding:32px 24px; background-color:#1f2937; border-bottom:4px solid #f97316;">
              <!-- Placeholder de Logo -->
              <div style="font-size:24px; font-weight:800; color:#ffffff; text-transform:uppercase; letter-spacing:1px;">
                ⚙️ AutoParts <span style="color:#f97316;">Pro</span>
              </div>
              <p style="margin:4px 0 0 0; color:#9ca3af; font-size:14px;">Repuestos y Servicio Técnico</p>
            </td>
          </tr>

          <!-- 2. SECCIÓN: SALUDO -->
          <tr>
            <td style="padding:32px 32px 16px 32px; color:#111827; font-size:24px; font-weight:700; line-height:1.4;">
              ¡Hola, colega! 🚗
            </td>
          </tr>

          <!-- 3. SECCIÓN: CONTENIDO -->
          <tr>
            <td style="padding:0 32px 24px 32px; color:#374151; font-size:16px; line-height:1.7;">
              <p style="margin:0 0 16px 0;">
                Gracias por suscribirte a <strong>AutoParts Pro</strong>. Hemos registrado tu correo <span style="background-color:#f3f4f6; padding:2px 6px; border-radius:4px; color:#1f2937; font-weight:600;">${userEmail}</span> en nuestra lista prioritaria.
              </p>
              <p style="margin:0 0 16px 0;">
                A partir de ahora recibirás:
              </p>
              <ul style="margin:0 0 16px 0; padding-left:20px;">
                <li style="margin-bottom:8px;">🔧 Catálogos actualizados de repuestos.</li>
                <li style="margin-bottom:8px;">🚚 Ofertas exclusivas en envíos.</li>
                <li style="margin-bottom:8px;">📚 Guías técnicas y consejos de mantenimiento.</li>
              </ul>
              <p style="margin:0;">
                Nuestro compromiso es mantener tu vehículo en movimiento con las mejores piezas del mercado.
              </p>
            </td>
          </tr>

          <!-- 4. SECCIÓN: BOTÓN CTA -->
          <tr>
            <td align="center" style="padding:0 32px 40px 32px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;">
                <tr>
                  <td align="center" style="border-radius:6px; background-color:#f97316;">
                    <a href="https://tudominio.com/catalogo" target="_blank" style="display:inline-block; padding:14px 32px; font-size:16px; font-weight:700; color:#ffffff; text-decoration:none; font-family:Arial, sans-serif; border:1px solid #ea580c;">
                      Ver Catálogo Online
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 5. SECCIÓN: FOOTER -->
          <tr>
            <td style="padding:24px 32px; background-color:#f9fafb; color:#6b7280; font-size:12px; text-align:center; line-height:1.6; border-top:1px solid #e5e7eb;">
              <p style="margin:0 0 8px 0; font-weight:700; color:#1f2937;">AutoParts Pro</p>
              <p style="margin:0 0 12px 0;">
                Av. Mecánica 123, Ciudad Motor | 📞 +52 555 123 4567
              </p>
              <p style="margin:0 0 12px 0;">
                <a href="#" style="color:#f97316; text-decoration:none; font-weight:600;">Instagram</a> | 
                <a href="#" style="color:#f97316; text-decoration:none; font-weight:600;">WhatsApp</a> | 
                <a href="#" style="color:#f97316; text-decoration:none; font-weight:600;">Sitio Web</a>
              </p>
              <p style="margin:0; color:#9ca3af;">
                <a href="https://tudominio.com/privacidad" style="color:#9ca3af; text-decoration:underline;">Política de Privacidad</a> | 
                <a href="https://tudominio.com/baja?email=${encodeURIComponent(userEmail)}" style="color:#9ca3af; text-decoration:underline;">Cancelar suscripción</a>
              </p>
              <p style="margin:12px 0 0 0; font-size:11px; color:#d1d5db;">
                © 2026 AutoParts Pro. Todos los derechos reservados.
              </p>
            </td>
          </tr>

        </table>
        <!-- Fin Tarjeta -->
        
        <p style="margin-top:24px; color:#9ca3af; font-size:12px; text-align:center;">
          Este correo fue enviado a ${userEmail} tras su registro voluntario.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
`;
