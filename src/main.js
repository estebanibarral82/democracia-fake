// Import our custom CSS
import './style.css'

// Timeline data for both modes
const timelineData = {
  mentira: [
    {
      year: "1973",
      title: "Plan Z: la UP planea masacrar a 5 000 opositores",
      description: "La prensa oficial reproduce un supuesto documento militar que atribuye al gobierno de Allende un plan de autogolpe para el 19 de septiembre, con listas de enemigos y croquis de cuarteles intervenidos.",
      cta: "VER MENTIRA"
    },
    {
      year: "1975",
      title: "Exterminados como ratones: el MIR se depura con 119 muertos",
      description: "El diario La Segunda afirma que los militantes desaparecidos murieron en peleas internas en el extranjero, basándose en revistas que nadie ha logrado encontrar en los países mencionados.",
      cta: "VER MENTIRA"
    },
    {
      year: "2017",
      title: "Chats de WhatsApp prueban red terrorista mapuche",
      description: "Capturas de pantalla presentadas por Carabineros se emiten en noticieros como prueba irrefutable de coordinación de ataques. Ocho comuneros son detenidos en horario estelar.",
      cta: "VER MENTIRA"
    },
    {
      year: "2018",
      title: "Comunero armado cae en enfrentamiento con GOPE",
      description: "La versión oficial acusa a Camilo Catrillanca de participar en un robo y disparar contra el GOPE. Se afirma que no hay registro audiovisual del operativo.",
      cta: "VER MENTIRA"
    },
    {
      year: "2020",
      title: "Detenido con bidón de bencina es el autor de incendio en Metro Baquedano",
      description: "Imágenes de un joven reducido por Carabineros se viralizan como prueba del ataque. Medios lo presentan como un manifestante violento sorprendido con acelerantes.",
      cta: "VER MENTIRA"
    },
    {
      year: "2021",
      title: "Fans de K-pop organizan atentados y saqueos durante protestas",
      description: "En redes sociales y noticieros se acusa a comunidades K-pop de usar sus plataformas para coordinar hechos de violencia durante el estallido social.",
      cta: "VER MENTIRA"
    }
  ],
  verdad: [
    {
      year: "1973",
      title: "Militares difunden plan sin respaldo documental ni fuentes verificables",
      description: "La Junta informa de un plan atribuido a la UP, pero no exhibe originales ni autores. Partidos opositores y medios extranjeros no encuentran pruebas que sustenten su existencia.",
      cta: "VER VERDAD"
    },
    {
      year: "1975",
      title: "Revistas extranjeras citadas no existen; lista corresponde a detenidos en Chile",
      description: "Investigaciones periodísticas demuestran que las publicaciones no tienen registro. Organismos de derechos humanos vinculan a los 119 nombres con centros de detención chilenos.",
      cta: "VER VERDAD"
    },
    {
      year: "2017",
      title: "Mensajes sin peritaje independiente ni validación técnica",
      description: "Expertos exigen claves hash y metadatos para validar los chats. La fiscalía advierte que los teléfonos fueron manipulados sin supervisión judicial ni acceso de la defensa.",
      cta: "VER VERDAD"
    },
    {
      year: "2018",
      title: "Videos ocultos muestran a Catrillanca desarmado; disparos provienen de Carabineros",
      description: "El estudiante que lo acompañaba desmiente la versión. Las cámaras corporales de la patrulla registraron los hechos, pero los archivos fueron ocultados o eliminados.",
      cta: "VER VERDAD"
    },
    {
      year: "2020",
      title: "Joven detenido no estaba en Metro; pruebas no vinculan presencia ni incendio",
      description: "Reportes confirman que fue arrestado en superficie y no se le hallaron materiales inflamables. Fiscalía no logra acreditar su participación en el siniestro.",
      cta: "VER VERDAD"
    },
    {
      year: "2021",
      title: "No hay evidencia de participación violenta; fans promovieron causas solidarias",
      description: "Análisis de redes descarta llamados a la violencia. Grupos de fans se enfocaron en campañas de ayuda y difusión de derechos humanos, sin vínculo con disturbios.",
      cta: "VER VERDAD"
    }
  ]
};

class DemocraciaFake {
  constructor() {
    this.currentMode = 'mentira'; // Default mode
    this.individualModes = {}; // Estado individual de cada noticia
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.renderTimeline();
    this.initScrollAnimations();
    this.updateLogo();
    this.initSwitchLabels();
    this.initScrollProgress();
  }

  initSwitchLabels() {
    // Inicializar labels del switch
    const leftLabel = document.querySelector('.switch-label.left');
    const rightLabel = document.querySelector('.switch-label.right');
    
    if (leftLabel && rightLabel) {
      leftLabel.classList.add('active'); // Mentira está activo por defecto
      rightLabel.classList.remove('active');
    }
  }

  setupEventListeners() {
    // Hamburger menu
    const hamburgerToggle = document.getElementById('hamburgerToggle');
    const menuOverlay = document.getElementById('menuOverlay');
    
    hamburgerToggle?.addEventListener('click', () => {
      hamburgerToggle.classList.toggle('active');
      menuOverlay.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.menu-items a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburgerToggle.classList.remove('active');
        menuOverlay.classList.remove('active');
      });
    });

    // Mode switch
    const switchInput = document.getElementById('switchInput');
    switchInput?.addEventListener('change', (e) => {
      console.log('Switch changed:', e.target.checked);
      this.toggleMode(e.target.checked);
    });

    // También agregar click listener al contenedor del switch para mejor UX
    const switchContainer = document.querySelector('.switch');
    switchContainer?.addEventListener('click', (e) => {
      if (e.target !== switchInput) {
        switchInput.checked = !switchInput.checked;
        this.toggleMode(switchInput.checked);
      }
    });

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
    
    videoModalClose?.addEventListener('click', () => {
      this.closeVideoModal();
    });

    videoModal?.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        this.closeVideoModal();
      }
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeVideoModal();
      }
    });
  }

  toggleMode(isVerdad) {
    console.log('Toggling mode to:', isVerdad ? 'verdad' : 'mentira');
    this.currentMode = isVerdad ? 'verdad' : 'mentira';
    
    // Toggle body class
    document.body.classList.toggle('verdad-mode', isVerdad);
    
    // Update switch labels
    const leftLabel = document.querySelector('.switch-label.left');
    const rightLabel = document.querySelector('.switch-label.right');
    
    if (leftLabel && rightLabel) {
      leftLabel.classList.toggle('active', !isVerdad);
      rightLabel.classList.toggle('active', isVerdad);
    }
    
    // Update logo
    this.updateLogo();
    
    // Re-render timeline with new data
    this.renderTimeline();
  }

  updateLogo() {
    const logo = document.getElementById('mainLogo');
    if (logo) {
      // Usar las imágenes reales del directorio public
      const logoSrc = this.currentMode === 'mentira' 
        ? 'header-mentira.png' 
        : 'header-verdad.png';
      logo.src = logoSrc;
      logo.alt = `Democracia Fake - ${this.currentMode === 'mentira' ? 'Montaje' : 'Verdad'}`;
    }
  }

  renderTimeline() {
    const timeline = document.getElementById('timeline');
    if (!timeline) return;

    timeline.innerHTML = '';
    
    // Usar los datos de ambos modos para crear la estructura completa
    const mentiraData = timelineData['mentira'];
    
    mentiraData.forEach((item, index) => {
      const timelineItem = document.createElement('div');
      timelineItem.className = 'timeline-item';
      timelineItem.setAttribute('data-year', item.year);
      
      // Determinar el modo actual para esta noticia específica
      const itemMode = this.individualModes[item.year] || this.currentMode;
      const currentData = timelineData[itemMode][index];
      
      timelineItem.innerHTML = `
        <div class="timeline-circle"></div>
        <div class="timeline-year">${item.year}</div>
        <div class="timeline-content">
          <div class="timeline-switch-container">
            <span class="timeline-switch-label left ${itemMode === 'mentira' ? 'active' : ''}">MENTIRA</span>
            <label class="timeline-switch">
              <input type="checkbox" ${itemMode === 'verdad' ? 'checked' : ''} data-year="${item.year}">
              <span class="timeline-slider"></span>
            </label>
            <span class="timeline-switch-label right ${itemMode === 'verdad' ? 'active' : ''}">VERDAD</span>
          </div>
          <h3>${currentData.title}</h3>
          <p>${currentData.description}</p>
          <button class="timeline-cta" data-year="${item.year}">${currentData.cta}</button>
        </div>
      `;
      
      timeline.appendChild(timelineItem);
    });

    // Configurar event listeners para los switches individuales
    this.setupTimelineSwitches();

    // Reset animations
    setTimeout(() => {
      this.initScrollAnimations();
    }, 100);
  }

  setupTimelineSwitches() {
    const timelineSwitches = document.querySelectorAll('.timeline-switch input');
    
    timelineSwitches.forEach(switchInput => {
      switchInput.addEventListener('change', (e) => {
        const year = e.target.getAttribute('data-year');
        const isVerdad = e.target.checked;
        this.toggleIndividualMode(year, isVerdad);
      });
    });
  }

  toggleIndividualMode(year, isVerdad) {
    // Actualizar el estado individual de esta noticia
    this.individualModes[year] = isVerdad ? 'verdad' : 'mentira';
    
    // Encontrar el timeline item específico
    const timelineItem = document.querySelector(`[data-year="${year}"]`);
    if (!timelineItem) return;

    // Obtener los datos para este año específico
    const mentiraIndex = timelineData['mentira'].findIndex(item => item.year === year);
    if (mentiraIndex === -1) return;

    const currentData = timelineData[isVerdad ? 'verdad' : 'mentira'][mentiraIndex];
    
    // Actualizar el contenido sin re-renderizar todo el timeline
    const content = timelineItem.querySelector('.timeline-content');
    const switchContainer = content.querySelector('.timeline-switch-container');
    
    // Actualizar labels del switch
    const leftLabel = switchContainer.querySelector('.timeline-switch-label.left');
    const rightLabel = switchContainer.querySelector('.timeline-switch-label.right');
    
    leftLabel.classList.toggle('active', !isVerdad);
    rightLabel.classList.toggle('active', isVerdad);
    
    // Actualizar contenido
    content.querySelector('h3').textContent = currentData.title;
    content.querySelector('p').textContent = currentData.description;
    content.querySelector('.timeline-cta').textContent = currentData.cta;
    
    console.log(`Timeline item ${year} switched to: ${isVerdad ? 'verdad' : 'mentira'}`);
  }

  openVideoModal(year) {
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    
    // Videos de ejemplo de YouTube para cada año
    const videoUrls = {
      '1973': 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Rick Roll como ejemplo
      '1975': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      '2017': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      '2018': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      '2020': 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      '2021': 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    };

    const videoUrl = videoUrls[year] || 'https://www.youtube.com/embed/dQw4w9WgXcQ';
    
    if (videoIframe) {
      videoIframe.src = videoUrl;
    }
    
    if (videoModal) {
      videoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  closeVideoModal() {
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');
    
    if (videoModal) {
      videoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
    
    if (videoIframe) {
      videoIframe.src = '';
    }
  }

  initScrollProgress() {
    const timeline = document.querySelector('.timeline');
    
    window.addEventListener('scroll', () => {
      if (!timeline) return;
      
      const timelineRect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const timelineHeight = timeline.offsetHeight;
      
      // Calcular progreso del scroll
      const scrollProgress = Math.max(0, Math.min(100, 
        (windowHeight - timelineRect.top) / (timelineHeight + windowHeight) * 100
      ));
      
      timeline.style.setProperty('--scroll-progress', `${scrollProgress}%`);
      timeline.classList.toggle('scrolling', scrollProgress > 0);
      
      // Activar círculos según el progreso
      this.updateTimelineCircles();
    });
  }

  updateTimelineCircles() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;
    
    timelineItems.forEach(item => {
      const circle = item.querySelector('.timeline-circle');
      const rect = item.getBoundingClientRect();
      
      // Activar círculo cuando el item está en el viewport
      if (rect.top < windowHeight * 0.7 && rect.bottom > windowHeight * 0.3) {
        circle.classList.add('active');
      } else {
        circle.classList.remove('active');
      }
    });
  }

  initScrollAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    timelineItems.forEach(item => {
      item.classList.remove('animate');
      observer.observe(item);
    });
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
document.addEventListener('DOMContentLoaded', () => {
  new DemocraciaFake();
});

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
