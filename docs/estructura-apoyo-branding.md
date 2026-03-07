# Estructura de apoyo - Psicoanalisis con Julia

## 1) Insumos recibidos y verificados
- Logos:
  - `JULIA manual marca-02.png` (transparente, recomendado para web)
  - `JULIA manual marca-02.jpg` (fondo blanco)
  - `JULIA manual marca-03.jpg` (version alternativa sobre fondo oscuro)
- Manual de marca: `JULIA manual marca.pdf` (3 paginas)
- Fuentes:
  - `Montserrat-VariableFont_wght.ttf`
  - `Montserrat-Italic-VariableFont_wght.ttf`
  - `Willing.otf`

## 2) Hallazgos clave del manual de marca
- Concepto central: renovacion interior consciente.
- Simbolo: metamorfosis (oruga, capullo, mariposa) como transformacion psiquica.
- Mensaje de fondo: proceso de individuacion y trabajo con el inconsciente.

## 3) Paleta de marca (fuente: manual PDF)
- `#075373`
- `#BFD1D9`
- `#025E73`
- `#72B1BF`
- `#0796A6`

Nota:
- El PNG transparente contiene variaciones de antialiasing y gradiente, por eso pueden aparecer tonos cercanos (ej. `#56BEC8`).
- Para web conviene usar como verdad de marca los hex declarados en el manual.

## 4) Tipografia para web
- Primaria UI y lectura: `Montserrat`.
- Display/acento de marca: `Willing`.

Uso recomendado:
- `Willing`: titulares cortos, frases de identidad, palabras clave de hero.
- `Montserrat`: navegacion, parrafos, botones, formularios y textos largos.

## 5) Estructura de contenido recomendada (IA)
1. Header
- Logo principal (`JULIA manual marca-02.png`)
- Menu: Inicio, Sobre Julia, Servicios, Metodo, Ubicacion, Contacto
- CTA fijo: WhatsApp

2. Hero
- Titular de propuesta de valor
- Subtitulo con enfoque terapeutico
- CTA principal (Agendar por WhatsApp)
- CTA secundario (Llamar)

3. Motivos de consulta
- Lista concreta de situaciones que atiende
- Formato en tarjetas o columnas cortas

4. Servicios
- Servicio 1 (individual)
- Servicio 2 (pareja, si aplica)
- Servicio 3 (online/presencial)
- Cada bloque con: para quien es, objetivo, resultado esperado

5. Como trabajo (metodo)
- Paso 1: primera entrevista
- Paso 2: proceso terapeutico
- Paso 3: seguimiento

6. Sobre Julia
- Bio corta
- Formacion
- Enfoque de trabajo

7. Ubicacion y horario
- Direccion completa
- Horario de atencion
- Mapa embebido

8. Prueba de confianza
- Testimonios (si se tienen)
- O bloque alternativo con experiencia, certificaciones y enfoque

9. FAQ
- Duracion de sesion
- Modalidad
- Politica de cancelacion
- Formas de contacto

10. Contacto final
- Telefono
- WhatsApp
- Formulario breve
- Aviso de privacidad

11. Footer
- Datos de contacto
- Aviso de privacidad
- Derechos reservados

## 6) Datos actuales de la clienta para precarga
- Marca: Psicoanalisis con Julia
- Direccion: Calle Miguel Lerdo de Tejada 100, Col. Guadalupe Inn, C.P. 01020, Alvaro Obregon, Ciudad de Mexico
- Horario: Lunes a viernes, 10:00 am a 8:00 pm
- Telefono: +52 55 3559 2219
- WhatsApp: +52 55 3559 2219

## 7) Tokens base sugeridos para CSS
```css
:root {
  --brand-900: #075373;
  --brand-700: #025E73;
  --brand-500: #0796A6;
  --brand-300: #72B1BF;
  --brand-100: #BFD1D9;

  --ink: #143A47;
  --paper: #F4FAFC;
  --white: #FFFFFF;
}
```

## 8) Reglas practicas para implementar branding sin desviarse
- Usar `JULIA manual marca-02.png` como logo por defecto en header y footer.
- No distorsionar ni cambiar proporciones del logo.
- Mantener contraste alto en texto (especialmente sobre azules medios).
- Usar `Willing` con moderacion para no perder legibilidad.
- Mantener `Montserrat` como base de lectura para todo el sitio.

## 9) Pendientes para cerrar antes de diseno final
- Lista definitiva de servicios y descripciones.
- Bio final y credenciales que se quieran mostrar.
- Confirmar si habra Blog desde v1.
- Definir si se publicaran testimonios reales.
- Entregar texto legal de aviso de privacidad.
