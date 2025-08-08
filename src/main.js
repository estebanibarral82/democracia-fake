// Import our custom CSS
import './style.css'

// Timeline data for both modes
const timelineData = {
  mentira: [
    {
      year: "1973",
      title: "Plan Z: la UP planea masacrar a 5 000 opositores",
      description: "La prensa oficial reproduce un supuesto documento militar que atribuye al gobierno de Allende un plan de autogolpe para el 19 de septiembre, con listas de enemigos y croquis de cuarteles intervenidos.",
      cta: "VER MENTIRA",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      year: "1975",
      title: "Exterminados como ratones: el MIR se depura con 119 muertos",
      description: "El diario La Segunda afirma que los militantes desaparecidos murieron en peleas internas en el extranjero, basándose en revistas que nadie ha logrado encontrar en los países mencionados.",
      cta: "VER MENTIRA",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      year: "2017",
      title: "Chats de WhatsApp prueban red terrorista mapuche",
      description: "Capturas de pantalla presentadas por Carabineros se emiten en noticieros como prueba irrefutable de coordinación de ataques. Ocho comuneros son detenidos en horario estelar.",
      cta: "VER MENTIRA",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      year: "2018",
      title: "Comunero armado cae en enfrentamiento con GOPE",
      description: "La versión oficial acusa a Camilo Catrillanca de participar en un robo y disparar contra el GOPE. Se afirma que no hay registro audiovisual del operativo.",
      cta: "VER MENTIRA",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      year: "2020",
      title: "Detenido con bidón de bencina es el autor de incendio en Metro Baquedano",
      description: "Imágenes de un joven reducido por Carabineros se viralizan como prueba del ataque. Medios lo presentan como un manifestante violento sorprendido con acelerantes.",
      cta: "VER MENTIRA",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
      year: "2021",
      title: "Fans de K-pop organizan atentados y saqueos durante protestas",
      description: "En redes sociales y noticieros se acusa a comunidades K-pop de usar sus plataformas para coordinar hechos de violencia durante el estallido social.",
      cta: "VER MENTIRA",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    }
  ],
  verdad: [
    {
      year: "1973",
      title: "Militares difunden plan sin respaldo documental ni fuentes verificables",
      description: "La Junta informa de un plan atribuido a la UP, pero no exhibe originales ni autores. Partidos opositores y medios extranjeros no encuentran pruebas que sustenten su existencia.",
      cta: "VER VERDAD",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
    },
    {
      year: "1975",
      title: "Detenidos desaparecidos por razones políticas son eliminados por la DINA",
      description: "Organismos de derechos humanos documentan desapariciones sistemáticas de opositores. La justicia confirma que fueron víctimas del aparato represivo de la dictadura.",
      cta: "VER VERDAD",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
    },
    {
      year: "2017",
      title: "Carabineros produce montaje con capturas falsas",
      description: "La justicia determina que las imágenes fueron manipuladas digitalmente. Los ocho comuneros detenidos son liberados sin cargos tras demostrarse la adulteración.",
      cta: "VER VERDAD",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
    },
    {
      year: "2018",
      title: "Camilo Catrillanca muere por disparo de Carabineros sin estar armado",
      description: "Peritajes balísticos y testigos confirman que el comunero murió por un disparo del GOPE. No participaba en ningún robo y no portaba armas. Videos del operativo fueron destruidos.",
      cta: "VER VERDAD",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
    },
    {
      year: "2020",
      title: "Joven es detenido arbitrariamente; incendio tiene otro origen",
      description: "Investigaciones posteriores demuestran que el incendio tuvo causas técnicas no relacionadas con el detenido. El joven es liberado sin cargos tras comprobarse su inocencia.",
      cta: "VER VERDAD",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
    },
    {
      year: "2021",
      title: "Fans de K-pop apoyan causas pacíficas y derechos humanos",
      description: "La comunidad K-pop chilena demuestra su compromiso con la no violencia y el apoyo a manifestaciones pacíficas por la justicia social.",
      cta: "VER VERDAD",
      videoUrl: "https://www.youtube.com/embed/jNQXAC9IVRw"
    }
  ]
};

// Main class for the application
class DemocraciaFake {
  constructor() {
    this.currentMode = 'mentira'; // Default mode
    this.currentModalYear = null; // Para el modal
    this.currentModalMode = 'mentira'; // Para el switch del modal
    this.init();
  }

  init() {
    console.log('Initializing DemocraciaFake app...');
    this.setupEventListeners();
    this.renderTimeline();
    this.initScrollAnimations();
    this.updateLogo();
    this.initSwitchLabels();
    this.initScrollProgress();
    this.initFloatingSwitch();
    this.initDecadesTimeline();
    this.initModalFunctionality();
    
    // Test function para debugging
    window.testSwitch = (value) => {
      console.log('Manual switch test:', value);
      this.toggleMode(value);
    };
    
    console.log('DemocraciaFake app initialized successfully');
    console.log('Use window.testSwitch(true/false) to test switches manually');
  }

  initSwitchLabels() {
    console.log('Initializing switch labels...');
    
    // Inicializar labels del switch principal
    const leftLabel = document.querySelector('.switch-label.left');
    const rightLabel = document.querySelector('.switch-label.right');
    
    console.log('Main switch labels found:', leftLabel, rightLabel);
    
    if (leftLabel && rightLabel) {
      leftLabel.classList.add('active'); // Mentira está activo por defecto
      rightLabel.classList.remove('active');
    }

    // Inicializar labels del switch flotante
    const floatingLeftLabel = document.querySelector('.floating-switch-label.left');
    const floatingRightLabel = document.querySelector('.floating-switch-label.right');
    
    console.log('Floating switch labels found:', floatingLeftLabel, floatingRightLabel);
    
    if (floatingLeftLabel && floatingRightLabel) {
      floatingLeftLabel.classList.add('active');
      floatingRightLabel.classList.remove('active');
    }
  }

  setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Usar SOLO event delegation para todos los switches - más confiable
    document.addEventListener('change', (e) => {
      console.log('Change event detected:', e.target.id, e.target.checked);
      
      if (e.target.id === 'switchInput') {
        console.log('Main switch changed via delegation:', e.target.checked);
        e.stopPropagation(); // Prevenir duplicación
        this.toggleMode(e.target.checked);
      } else if (e.target.id === 'floatingSwitchInput') {
        console.log('Floating switch changed via delegation:', e.target.checked);
        e.stopPropagation(); // Prevenir duplicación
        this.toggleMode(e.target.checked);
      } else if (e.target.id === 'modalSwitchInput') {
        console.log('Modal switch changed via delegation:', e.target.checked);
        e.stopPropagation(); // Prevenir duplicación
        this.currentModalMode = e.target.checked ? 'verdad' : 'mentira';
        this.updateModalContent();
        this.updateModalSwitchLabels();
      }
    });

    // Verificar que los elementos existen pero NO agregar listeners directos
    const switchInput = document.getElementById('switchInput');
    const floatingSwitchInput = document.getElementById('floatingSwitchInput');
    
    console.log('Switch elements check:', {
      mainSwitch: !!switchInput,
      floatingSwitch: !!floatingSwitchInput
    });

    // Modal switch - NO registrar aquí, se registra en openVideoModal

    // CTA button
    const firmaButton = document.getElementById('firmaButton');
    firmaButton?.addEventListener('click', () => {
      alert('Redirigiendo a formulario de suscripción...');
    });

    // Timeline CTA buttons (delegated event listener)
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('timeline-cta')) {
        e.preventDefault();
        const year = e.target.closest('.timeline-item').querySelector('.timeline-year').textContent;
        this.openVideoModal(year);
      }
    });

    // Video modal event listeners
    const videoModal = document.getElementById('videoModal');
    const videoModalClose = document.getElementById('videoModalClose');
    const videoModalOverlay = document.getElementById('videoModalOverlay');
    
    videoModalClose?.addEventListener('click', () => {
      this.closeModal();
    });

    videoModalOverlay?.addEventListener('click', () => {
      this.closeModal();
    });

    videoModal?.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        this.closeModal();
      }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
      }
    });
  }

  toggleMode(isVerdad) {
    console.log('toggleMode called with:', isVerdad, 'current mode:', this.currentMode);
    
    const newMode = isVerdad ? 'verdad' : 'mentira';
    if (this.currentMode === newMode) {
      console.log('Mode unchanged, skipping update');
      return; // Evitar updates innecesarios
    }
    
    this.currentMode = newMode;
    console.log('Mode changed to:', this.currentMode);
    
    // Toggle body class
    document.body.classList.toggle('verdad-mode', isVerdad);
    
    // Sincronizar TODOS los switches SIN disparar events (usar propiedades directas)
    const mainSwitch = document.getElementById('switchInput');
    const floatingSwitch = document.getElementById('floatingSwitchInput');
    
    // Temporarily disable event listeners para evitar loops
    if (mainSwitch && mainSwitch.checked !== isVerdad) {
      console.log('Syncing main switch to:', isVerdad);
      mainSwitch.checked = isVerdad;
    }
    if (floatingSwitch && floatingSwitch.checked !== isVerdad) {
      console.log('Syncing floating switch to:', isVerdad);
      floatingSwitch.checked = isVerdad;
    }
    
    // Update all switch labels
    this.updateAllSwitchLabels(isVerdad);
    
    // Update logo
    this.updateLogo();
    
    // Re-render timeline with new data
    this.renderTimeline();
  }

  updateAllSwitchLabels(isVerdad) {
    // Update main switch labels
    const leftLabel = document.querySelector('.switch-label.left');
    const rightLabel = document.querySelector('.switch-label.right');
    
    if (leftLabel && rightLabel) {
      leftLabel.classList.toggle('active', !isVerdad);
      rightLabel.classList.toggle('active', isVerdad);
    }

    // Update floating switch labels
    const floatingLeftLabel = document.querySelector('.floating-switch-label.left');
    const floatingRightLabel = document.querySelector('.floating-switch-label.right');
    
    if (floatingLeftLabel && floatingRightLabel) {
      floatingLeftLabel.classList.toggle('active', !isVerdad);
      floatingRightLabel.classList.toggle('active', isVerdad);
    }
  }

  updateLogo() {
    const logo = document.getElementById('mainLogo');
    if (logo) {
      if (this.currentMode === 'verdad') {
        logo.src = 'header-verdad.png';
        logo.alt = 'Democracia Fake - Verdad';
      } else {
        logo.src = 'header-mentira.png';
        logo.alt = 'Democracia Fake - Montaje';
      }
    }
  }

  renderTimeline() {
    const timelineContainer = document.getElementById('timeline');
    if (!timelineContainer) return;

    const currentData = timelineData[this.currentMode];
    
    timelineContainer.innerHTML = '';
    
    // Create timeline items
    currentData.forEach((item, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      timelineItem.setAttribute('data-year', item.year);
      
      timelineItem.innerHTML = `
        <div class="timeline-circle ${index === 0 ? 'active' : ''}"></div>
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-content">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <button class="timeline-cta">${item.cta}</button>
        </div>
      `;
      
      timelineContainer.appendChild(timelineItem);
    });

    // Re-initialize scroll animations for new content
    this.initScrollAnimations();
  }

  initFloatingSwitch() {
    const floatingSwitchNav = document.getElementById('floatingSwitchNav');
    
    if (!floatingSwitchNav) {
      console.error('Floating switch nav element not found');
      return;
    }
    
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const timelineSection = document.querySelector('.verdad-mentira-section');
      
      if (timelineSection) {
        const timelineSectionTop = timelineSection.offsetTop;
        
        // Mostrar el switch flotante cuando llegue a la sección timeline (primer año)
        if (scrollY >= timelineSectionTop - 200) {
          floatingSwitchNav.classList.add('visible');
        } else {
          floatingSwitchNav.classList.remove('visible');
        }
      }
    });
  }

  initDecadesTimeline() {
    const decadesContainer = document.querySelector('.decades-items');
    if (!decadesContainer) return;

    // Definir todas las décadas desde los 70s hasta los 20s
    const decades = [
      { decade: 1970, label: "70s", years: ["1973", "1975"] },
      { decade: 1980, label: "80s", years: [] }, // Sin contenido pero visible
      { decade: 1990, label: "90s", years: [] }, // Sin contenido pero visible
      { decade: 2000, label: "00s", years: [] }, // Sin contenido pero visible
      { decade: 2010, label: "10s", years: ["2017", "2018"] },
      { decade: 2020, label: "20s", years: ["2020", "2021"] }
    ];
    
    // Limpiar contenedor
    decadesContainer.innerHTML = '';
    
    // Crear elementos para cada década
    decades.forEach((decadeData, index) => {
      const decadeItem = document.createElement('div');
      decadeItem.className = 'decade-item';
      decadeItem.setAttribute('data-decade', decadeData.decade);
      
      // Añadir clase especial si no tiene contenido
      if (decadeData.years.length === 0) {
        decadeItem.classList.add('no-content');
      }
      
      // Círculo de la década
      const decadeCircle = document.createElement('div');
      decadeCircle.className = `decade-circle ${index === 0 ? 'active' : ''}`;
      
      // Label de la década
      const decadeLabel = document.createElement('div');
      decadeLabel.className = 'decade-label';
      decadeLabel.textContent = decadeData.label;
      
      decadeItem.appendChild(decadeCircle);
      decadeItem.appendChild(decadeLabel);
      
      // Event listener para scroll solo si tiene contenido
      if (decadeData.years.length > 0) {
        decadeItem.addEventListener('click', () => {
          this.scrollToDecade(decadeData.decade, decadeData.years[0]);
          
          // Actualizar círculo activo
          document.querySelectorAll('.decade-circle').forEach(circle => circle.classList.remove('active'));
          decadeCircle.classList.add('active');
        });
        decadeItem.style.cursor = 'pointer';
      } else {
        // Para décadas sin contenido, mostrar como deshabilitado
        decadeItem.style.cursor = 'not-allowed';
        decadeItem.style.opacity = '0.5';
      }
      
      decadesContainer.appendChild(decadeItem);
    });

    // Mostrar el timeline de décadas solo cuando empiece la sección timeline
    this.initDecadesTimelineVisibility();

    // Scroll listener para la timeline de décadas
    window.addEventListener('scroll', () => {
      this.updateDecadesTimeline();
    });
  }

  initDecadesTimelineVisibility() {
    const decadesTimeline = document.querySelector('.decades-timeline');
    const timelineSection = document.querySelector('.verdad-mentira-section');
    
    if (!decadesTimeline || !timelineSection) return;
    
    window.addEventListener('scroll', () => {
      const timelineSectionTop = timelineSection.offsetTop;
      const scrollY = window.scrollY;
      
      // Mostrar el timeline de décadas cuando llegue a la sección timeline
      if (scrollY >= timelineSectionTop - 100) {
        decadesTimeline.classList.add('visible');
      } else {
        decadesTimeline.classList.remove('visible');
      }
    });
  }

  scrollToDecade(decade, firstYear) {
    // Encontrar el primer elemento de esa década
    const timelineItem = document.querySelector(`[data-year="${firstYear}"]`);
    if (timelineItem) {
      timelineItem.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  }

  updateDecadesTimeline() {
    const decadeItems = document.querySelectorAll('.decade-item');
    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;
    
    let currentDecade = null;
    
    // Determinar qué década está visible
    timelineItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const year = parseInt(item.getAttribute('data-year'));
      
      if (rect.top < windowHeight * 0.6 && rect.bottom > windowHeight * 0.4) {
        if (year >= 1970 && year < 1980) currentDecade = 1970;
        else if (year >= 2010 && year < 2020) currentDecade = 2010;
        else if (year >= 2020 && year < 2030) currentDecade = 2020;
      }
    });
    
    // Actualizar círculos activos
    decadeItems.forEach(item => {
      const decade = parseInt(item.getAttribute('data-decade'));
      const circle = item.querySelector('.decade-circle');
      
      if (decade === currentDecade) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }

  initModalFunctionality() {
    // Configuración inicial del modal
    const modalSwitchInput = document.getElementById('modalSwitchInput');
    if (modalSwitchInput) {
      modalSwitchInput.checked = false; // Iniciar en modo mentira
    }
  }

  openVideoModal(year) {
    console.log('Opening video modal for year:', year);
    this.currentModalYear = year;
    this.currentModalMode = this.currentMode;
    
    const videoModal = document.getElementById('videoModal');
    const modalSwitchInput = document.getElementById('modalSwitchInput');
    
    // Configurar título inicial
    this.updateModalContent();
    
    // Configurar switch del modal
    if (modalSwitchInput) {
      console.log('Modal switch found, setting checked state');
      modalSwitchInput.checked = this.currentModalMode === 'verdad';
    } else {
      console.error('Modal switch not found');
    }
    
    this.updateModalSwitchLabels();
    
    if (videoModal) {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  updateModalContent() {
    const year = this.currentModalYear;
    const mode = this.currentModalMode;
    
    // Obtener datos de la noticia
    const mentiraIndex = timelineData['mentira'].findIndex(item => item.year === year);
    if (mentiraIndex === -1) return;
    
    const currentData = timelineData[mode][mentiraIndex];
    
    // Actualizar título con el año incluido
    const modalTitle = document.getElementById('modalTitle');
    if (modalTitle) {
      modalTitle.textContent = `${year} - ${currentData.title}`;
    }
    
    // Actualizar video
    const videoContainer = document.getElementById('modalVideoContainer');
    if (videoContainer && currentData.videoUrl) {
      videoContainer.innerHTML = `
        <iframe 
          src="${currentData.videoUrl}" 
          frameborder="0" 
          allowfullscreen>
        </iframe>
      `;
    }
  }

  updateModalSwitchLabels() {
    const modalLeftLabel = document.querySelector('.modal-switch-label.left');
    const modalRightLabel = document.querySelector('.modal-switch-label.right');
    
    if (modalLeftLabel && modalRightLabel) {
      const isVerdad = this.currentModalMode === 'verdad';
      modalLeftLabel.classList.toggle('active', !isVerdad);
      modalRightLabel.classList.toggle('active', isVerdad);
    }
  }

  closeModal() {
    const modal = document.getElementById('videoModal');
    
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Clear video content
      const videoContainer = document.getElementById('modalVideoContainer');
      if (videoContainer) {
        videoContainer.innerHTML = '';
      }
      
      // Reset modal state
      this.currentModalYear = null;
      this.currentModalMode = null;
    }
  }

  initScrollProgress() {
    // Inicializar progreso de scroll del timeline
    this.initTimelineScrollProgress();
    
    // Agregar listener para actualizar círculos
    window.addEventListener('scroll', () => {
      this.updateTimelineCircles();
      this.updateTimelineProgress();
    });
  }

  initTimelineScrollProgress() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;
    
    // La línea de progreso ya existe en CSS como timeline::before
    // Solo necesitamos actualizarla con el scroll
  }

  updateTimelineProgress() {
    const timeline = document.getElementById('timeline');
    const timelineSection = document.querySelector('.verdad-mentira-section');
    
    if (!timeline || !timelineSection) return;
    
    const timelineSectionRect = timelineSection.getBoundingClientRect();
    const timelineSectionTop = timelineSection.offsetTop;
    const timelineSectionHeight = timelineSection.offsetHeight;
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    // Calcular el progreso de scroll dentro de la sección timeline
    const sectionStart = timelineSectionTop;
    const sectionEnd = timelineSectionTop + timelineSectionHeight - windowHeight;
    
    let progress = 0;
    if (scrollY >= sectionStart && scrollY <= sectionEnd) {
      progress = ((scrollY - sectionStart) / (sectionEnd - sectionStart)) * 100;
    } else if (scrollY > sectionEnd) {
      progress = 100;
    }
    
    // Aplicar el progreso a la línea del timeline
    timeline.style.setProperty('--scroll-progress', `${Math.min(Math.max(progress, 0), 100)}%`);
    timeline.classList.add('scrolling');
  }

  updateTimelineCircles() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    timelineItems.forEach((item, index) => {
      const circle = item.querySelector('.timeline-circle');
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.top + itemRect.height / 2;

      if (itemCenter < windowHeight * 0.7) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }

  initScrollAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Obtener el año del timeline item
          const yearElement = entry.target.querySelector('.timeline-year');
          if (yearElement) {
            const targetYear = parseInt(yearElement.textContent);
            // Iniciar el contador de años
            this.animateYearCounter(yearElement, targetYear);
          }
          
          // Activate circle when item comes into view
          const circle = entry.target.querySelector('.timeline-circle');
          if (circle) {
            // Remover active de todos los círculos
            document.querySelectorAll('.timeline-circle').forEach(c => c.classList.remove('active'));
            circle.classList.add('active');
          }
        }
      });
    }, {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    });

    timelineItems.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(50px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(item);
    });

    // Update circles on scroll
    window.addEventListener('scroll', () => {
      this.updateTimelineCircles();
    });
  }

  animateYearCounter(yearElement, targetYear) {
    // Evitar múltiples animaciones simultáneas en el mismo elemento
    if (yearElement.dataset.animating === 'true') return;
    yearElement.dataset.animating = 'true';
    
    // Obtener el año anterior más cercano
    const previousYear = this.getPreviousYear(targetYear);
    let currentYear = previousYear;
    
    // Configurar la velocidad según la diferencia de años
    const yearDifference = targetYear - previousYear;
    let animationSpeed;
    
    if (yearDifference <= 2) {
      animationSpeed = 300; // Muy lento para diferencias muy pequeñas
    } else if (yearDifference <= 10) {
      animationSpeed = 150; // Lento para diferencias pequeñas
    } else if (yearDifference <= 30) {
      animationSpeed = 50; // Medio para diferencias medianas
    } else {
      animationSpeed = 20; // Rápido para diferencias grandes
    }
    
    const updateYear = () => {
      yearElement.textContent = currentYear;
      
      if (currentYear < targetYear) {
        currentYear++;
        setTimeout(updateYear, animationSpeed);
      } else {
        yearElement.dataset.animating = 'false';
      }
    };
    
    // Iniciar la animación
    updateYear();
  }
  
  getPreviousYear(targetYear) {
    // Obtener todos los años del timeline actual
    const currentData = timelineData[this.currentMode];
    const years = currentData.map(item => parseInt(item.year)).sort((a, b) => a - b);
    const currentIndex = years.indexOf(targetYear);
    
    if (currentIndex === 0) {
      // Si es el primer año, empezar desde él mismo
      return targetYear;
    } else {
      // Empezar desde el año anterior en la lista
      return years[currentIndex - 1];
    }
  }

  // Parallax effect for timeline (simplified version)
  initParallax() {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const timelineContainer = document.querySelector('.timeline-container');
      
      if (timelineContainer) {
        const rect = timelineContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const parallaxSpeed = scrolled * 0.1;
          timelineContainer.style.transform = `translateY(${parallaxSpeed}px)`;
        }
      }
    });
  }
}

// Initialize the application when DOM is loaded
if (document.readyState === 'loading') {
  console.log('Document still loading, waiting for DOMContentLoaded');
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded via event, initializing app...');
    window.democraciaFakeApp = new DemocraciaFake();
  });
} else {
  console.log('Document already ready, initializing immediately');
  // Pequeño delay para asegurar que todo el DOM está listo
  setTimeout(() => {
    window.democraciaFakeApp = new DemocraciaFake();
  }, 100);
}

// Smooth scrolling for anchor links
document.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
    e.preventDefault();
    const targetId = e.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
});
