📋 INSTRUCCIONES PARA GITHUB PAGES

1. CREAR REPOSITORIO EN GITHUB:
   - Ve a https://github.com/new
   - Nombre: democracia-fake
   - Descripción: Sitio web interactivo que confronta la manipulación mediática en Chile
   - Público (recomendado para GitHub Pages gratuito)
   - NO inicialices con README, .gitignore o licencia (ya existen)
   - Haz clic en 'Create repository'

2. CONECTAR REPOSITORIO LOCAL:
   git remote add origin https://github.com/estebanibarral82/democracia-fake.git
   git branch -M main
   git push -u origin main

3. CONFIGURAR GITHUB PAGES:
   - Ve a Settings > Pages en tu repositorio
   - Source: GitHub Actions
   - Guarda los cambios

4. RESULTADO:
   - URL del sitio: https://estebanibarral82.github.io/democracia-fake/
   - El despliegue es automático con cada push a main
   - Tardará unos minutos en estar disponible la primera vez

5. VERIFICAR DESPLIEGUE:
   - Ve a Actions en tu repositorio
   - Deberías ver el workflow "Deploy to GitHub Pages" ejecutándose
   - Cuando termine (✅), el sitio estará en vivo

¡El proyecto está listo para producción! 🚀
