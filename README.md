# Democracia Fake

# Democracia Fake

Un sitio web interactivo que confronta la manipulación mediática en Chile con la verdad verificada. El proyecto presenta una experiencia de modo dual que permite a los usuarios comparar titulares manipulados con hechos verificados.

## 🚀 Características

- **Interfaz de modo dual**: Mentira vs Verdad
- **Logo central dinámico** que cambia según el modo
- **Menú hamburguesa** con navegación fluida
- **Timeline interactivo** con efectos parallax
- **Cambio dinámico de contenido** basado en el modo seleccionado

## 🎨 Paleta de Colores

- **Negro profundo**: `#090706` (Fondo base para modo Montaje)
- **Negro oscuro**: `#120908` (Fondo alternativo para modo Verdad)
- **Rojo montaje**: `#E95040` (Rojo activo para Montaje - switch, botones, texto destacado)
- **Blanco**: `#FFFFFF` (Texto y botones activos en modo Verdad)
- **Gris claro**: `#CCCCCC` / `#AAA` (Tipografía secundaria, intro, footer)

## 📝 Tipografía

1. **Special Gothic Condensed One** (sans-serif condensed): Títulos, botones, texto del switch (MONTAJE / VERDAD)
2. **Chivo Mono** (monospace): Subtítulos, texto introductorio bajo header
3. **Roboto** (sans-serif): Footer, textos secundarios y legales

## 🛠️ Tecnologías

- Vanilla JavaScript con Vite
- CSS personalizado con variables
- Diseño responsivo
- Efectos parallax para timeline
- Animaciones suaves de cambio de modo

## 🌐 Demo

[Ver sitio en vivo](https://estebanibarral82.github.io/democracia-fake/)

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📦 Despliegue

El sitio se despliega automáticamente en GitHub Pages mediante GitHub Actions cuando se hace push a la rama `main`.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. A través de una experiencia dual, permite comparar titulares manipulados con los hechos verificados, revelando cómo se construyó el relato oficial.

## Características

- **Modo Dual**: Alterna entre "Mentira" y "Verdad" para mostrar diferentes perspectivas
- **Logo Dinámico**: Cambia según el modo activo
- **Menú Hamburguesa**: Navegación fluida entre secciones
- **Timeline Interactivo**: Con efectos parallax y animaciones
- **Diseño Responsivo**: Optimizado para dispositivos móviles y escritorio

## Secciones

- **Inicio**: Header con logo central
- **Proyecto**: Información sobre Democracia Fake
- **Verdad/Mentira**: Timeline interactivo con switch de modo
- **Nueva Ley de Medios**: Información sobre legislación contra desinformación
- **Firma**: Call-to-action para suscribir nueva ley

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Negro profundo | `#090706` | Fondo base (modo Montaje) |
| Negro oscuro | `#120908` | Fondo alternativo (modo Verdad) |
| Rojo montaje | `#E95040` | Acentos activos Montaje |
| Blanco | `#FFFFFF` | Texto y botones Verdad |
| Gris claro | `#CCCCCC` / `#AAA` | Tipografía secundaria |

## Tipografías

1. **Special Elite** (títulos, botones, switch)
2. **Chivo Mono** (bajadas, texto introductorio)
3. **Roboto** (footer, textos secundarios)

## Instalación

```bash
npm install
npm run dev
```

## Desarrollo

```bash
npm run build    # Construir para producción
npm run preview  # Vista previa de la construcción
```

## Estructura del Proyecto

```
democracia-fake/
├── index.html              # HTML principal
├── src/
│   ├── main.js             # JavaScript principal con funcionalidad
│   └── democracia-fake.css # Estilos personalizados
├── public/
│   ├── logo-mentira.svg    # Logo para modo Mentira
│   └── logo-verdad.svg     # Logo para modo Verdad
└── README.md
```

## Tecnologías

- **Vite**: Build tool rápido
- **Vanilla JavaScript**: Sin frameworks para máximo rendimiento
- **CSS Moderno**: Variables CSS, Grid, Flexbox
- **Intersection Observer API**: Para animaciones de scroll
- **Google Fonts**: Tipografías web

## Próximas Funcionalidades

- Integración con API de noticias reales
- Sistema de autenticación para firma
- Más eventos históricos en el timeline
- Mejoras en efectos parallax
- Modo offline con Service Worker

## Créditos

Impulsado por:
- **Museo de la Memoria y los Derechos Humanos**
- **FastCheck**

---

*Este proyecto es una herramienta de memoria, crítica y educación cívica.*
