#!/bin/bash

echo "🔍 REVISIÓN COMPLETA DEL PROYECTO DEMOCRACIA FAKE v1.0.0"
echo "=========================================================="
echo ""

echo "📁 ARCHIVOS PRINCIPALES:"
echo "------------------------"
echo "✅ index.html: $(stat -f%z index.html) bytes"
echo "✅ desinformacion.html: $(stat -f%z desinformacion.html) bytes" 
echo "✅ src/main.js: $(wc -l < src/main.js) líneas"
echo "✅ package.json: versión $(grep '"version"' package.json | cut -d'"' -f4)"
echo ""

echo "🎨 LOGOS IMPLEMENTADOS:"
echo "----------------------"
if [ -f "img/FAKECRACIA-LOGO1.png" ]; then
    echo "✅ FAKECRACIA-LOGO1.png: $(stat -f%z img/FAKECRACIA-LOGO1.png) bytes"
else
    echo "❌ FAKECRACIA-LOGO1.png: NO ENCONTRADO"
fi

if [ -f "img/FAKECRACIA-LOGO2.png" ]; then
    echo "✅ FAKECRACIA-LOGO2.png: $(stat -f%z img/FAKECRACIA-LOGO2.png) bytes"
else
    echo "❌ FAKECRACIA-LOGO2.png: NO ENCONTRADO"
fi
echo ""

echo "🔧 CONFIGURACIÓN CSS LOGOS:"
echo "---------------------------"
echo "Desktop logos:"
grep -n "max-width: 600px" src/style.css | head -1
grep -n "max-height: 400px" src/style.css | head -1
echo ""
echo "Mobile logos:"
grep -n "max-width: 500px" src/style.css | head -1
echo ""

echo "🎯 JAVASCRIPT LOGO PATHS:"
echo "-------------------------"
grep -n "FAKECRACIA-LOGO" src/main.js
echo ""

echo "📊 ESTADO GIT:"
echo "-------------"
git log --oneline -3
echo ""

echo "🚀 PARA ABRIR EL PROYECTO:"
echo "-------------------------"
echo "1. Página principal: open index.html"
echo "2. Anatomía: open desinformacion.html"  
echo "3. Servidor local: npm run dev"
echo ""

echo "🌐 URLs ONLINE:"
echo "--------------"
echo "• Principal: https://estebanibarral82.github.io/democracia-fake/"
echo "• Anatomía: https://estebanibarral82.github.io/democracia-fake/desinformacion.html"
echo ""

echo "✅ REVISIÓN COMPLETADA"
