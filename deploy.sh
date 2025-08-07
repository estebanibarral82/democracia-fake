#!/bin/bash

echo "🚀 Desplegando Democracia Fake a GitHub Pages..."
echo ""

# Subir código a GitHub
echo "📤 Subiendo código a GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ Código subido exitosamente!"
    echo ""
    echo "🔧 Pasos restantes:"
    echo "1. Ve a: https://github.com/estebanibarral82/democracia-fake"
    echo "2. Ve a Settings > Pages"
    echo "3. En 'Source' selecciona: GitHub Actions"
    echo "4. Guarda los cambios"
    echo ""
    echo "⏱️  El sitio estará disponible en unos minutos en:"
    echo "🌐 https://estebanibarral82.github.io/democracia-fake/"
    echo ""
    echo "📊 Puedes ver el progreso del despliegue en:"
    echo "🔄 https://github.com/estebanibarral82/democracia-fake/actions"
else
    echo "❌ Error al subir el código."
    echo "🔍 Verifica que hayas creado el repositorio en GitHub:"
    echo "   https://github.com/new"
fi
