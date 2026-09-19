/**
 * MAX PRATT PORTFOLIO — BESPOKE KINETIC INTERACTIONS
 * Swiss Modernist Layout & Motion Architecture
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Project Showcase Database ---
  const projectsData = {
    moneymaven: {
      title: 'MoneyMaven',
      category: 'Art Direction &bull; Digital Banking Concept',
      client: 'MoneyMaven Inc.',
      year: '2020',
      discipline: 'Art Direction & Concept',
      scope: 'Visual Identity, Spatial UI, Design System, Interaction Prototyping',
      location: 'Chicago, USA',
      description: 'MoneyMaven is a next-generation wealth management platform engineered for intuitive multi-asset tracking and digital liquidity. We conceived a brutalist yet fluid 3D visual language that strips away legacy banking anxiety, elevating portfolio rebalancing into a tactile, high-art experience.',
      heroImage: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ca23c5bce3fa2175427_hugol-halpingston-4OyLq2yN9u0-unsplash.jpg',
      editorialSplit: {
        col1Heading: '01 / The Strategic Challenge',
        col1Text: 'Traditional financial interfaces rely on decorative charts and legacy dashboard metaphors that overwhelm high-net-worth investors. Our mandate was to eliminate cognitive friction by translating multi-currency portfolios into organic, monolithic spatial compositions.',
        col2Heading: '02 / The Kinetic System',
        col2Text: 'We engineered an adaptive motion system where data density shifts according to user focus. Asset allocations are treated as sculptural volumes that deform subtly under real-time market fluctuations, turning balance sheets into living digital artifacts.'
      },
      splitFeature: {
        image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg',
        eyebrow: 'ARCHITECTURAL FRAMEWORK',
        quote: 'Stripping away ornamental noise to achieve mathematical clarity.',
        text: 'Every visual component is anchored to an uncompromising 8pt baseline grid. By restricting the color palette to ultra-high-contrast monochrome with subtle glass refractions, financial decisions happen in an atmosphere of supreme calm.',
        metrics: [
          { label: 'Latency', value: '< 120ms' },
          { label: 'Typography', value: 'Swiss Grotesk' },
          { label: 'Framerate', value: '60 FPS' }
        ]
      },
      carousel: [
        {
          image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae0274a89af6a7eac58_02.jpg',
          caption: 'Spatial Liquidity Dashboard — Multi-asset yield matrix'
        },
        {
          image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg',
          caption: 'Tactile Rebalancing State — Monolithic 3D asset cluster'
        },
        {
          image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg',
          caption: 'Tactile Rebalancing State — Monolithic 3D asset cluster'
        },
        {
          image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg',
          caption: 'Execution Terminal — Instantaneous cross-chain settlement'
        }
      ],
      deliverablesList: [
        { num: '01', title: 'Monolithic Spatial Dashboard', desc: 'Real-time WebGL portfolio telemetry with zero extraneous visual noise.' },
        { num: '02', title: 'Tactile Typography & Design Tokens', desc: 'Strict Swiss typographic hierarchy engineered for sub-second data legibility.' },
        { num: '03', title: 'Instantaneous Settlement Engine', desc: 'High-velocity transaction flow featuring physical feedback micro-interactions.' },
        { num: '04', title: 'Comprehensive Enterprise Design System', desc: 'Cross-platform component library deployed across iOS, macOS, and Web.' }
      ],
      galleryAsymmetric: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8af3f22c5031bdb1b69e_03.jpg', caption: 'Mobile Liquidity View & Typography Hierarchy' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8afddb600b587c981a17_07.jpg', caption: 'Dark Theme High-Contrast Interaction State' }
      ],
      prevId: 'infuse',
      nextId: 'paybolt'
    },
    dubaiharbour: {
  title: 'Dubai Harbour Residences',
  category: 'Luxury Real Estate • Digital Experience Design',
  client: 'Dubai Harbour Residences',
  year: '2024',
  discipline: 'UX/UI Design & Digital Experience',
  scope: 'Website Design, Information Architecture, Responsive UX, Visual Design, Design System',
  liveUrl: 'https://www.dubaiharbourresidences.com/',
  location: 'Dubai, UAE',
  description: 'Dubai Harbour Residences is a premium waterfront residential destination offering luxury coastal living in one of Dubai’s most sought-after locations. The digital experience was designed to showcase architectural excellence, marina-front lifestyle, and world-class amenities through immersive storytelling and conversion-focused user journeys.',
  heroImage: 'images/dubai-harbour-hero-image.jpg',

  editorialSplit: {
    col1Heading: '01 / Luxury Living Narrative',
    col1Text: 'The challenge was to communicate the exclusivity of the residences while maintaining a clear pathway toward property exploration and enquiry. Large-format imagery, curated content hierarchy, and immersive transitions create a seamless storytelling experience.',
    col2Heading: '02 / Conversion-Driven Experience',
    col2Text: 'Every interaction was designed to guide prospective buyers naturally through residence collections, amenities, floor plans, and location highlights while reducing friction in the enquiry journey.'
  },

  splitFeature: {
    image: 'images/dubai-harbour-feature.jpg',
    eyebrow: 'WATERFRONT LUXURY REDEFINED',
    quote: 'A digital experience inspired by the elegance of coastal living.',
    text: 'Combining premium visual storytelling with intuitive navigation, the platform transforms property discovery into an engaging journey that reflects the sophistication and exclusivity of the development.',
    metrics: [
      { label: 'Responsive', value: '100%' },
      { label: 'Page Speed', value: '<2.5s' },
      { label: 'Devices', value: 'All Screens' }
    ]
  },

  carousel: [
    {
      image: 'images/dubai-harbour-carousel-01.jpg',
      caption: 'Waterfront Lifestyle & Marina Experience'
    },
    {
      image: 'images/dubai-harbour-carousel-02.jpg',
      caption: 'Luxury Residences & Architectural Showcase'
    }
  ],

  deliverablesList: [
    {
      num: '01',
      title: 'Luxury Real Estate Marketing Website',
      desc: 'Designed a premium digital platform focused on showcasing residences, lifestyle experiences, and property investment opportunities.'
    },
    {
      num: '02',
      title: 'Information Architecture & User Flows',
      desc: 'Structured intuitive journeys for property discovery, floor plan exploration, and lead generation.'
    },
    {
      num: '03',
      title: 'Responsive Design System',
      desc: 'Created scalable UI components, typography standards, and layout patterns for consistent experiences across devices.'
    },
    {
      num: '04',
      title: 'Interactive Property Exploration',
      desc: 'Developed immersive content experiences highlighting amenities, location benefits, and architectural features.'
    }
  ],

  galleryAsymmetric: [
    {
      image: 'images/dubai-harbour-gallery-01.jpg',
      caption: 'Marina Waterfront Lifestyle Presentation'
    },
    {
      image: 'images/dubai-harbour-gallery-02.jpg',
      caption: 'Luxury Residence & Interior Experience'
    }
  ],

  prevId: 'paybolt',
  nextId: 'wellafi'
},
    fundmate: {
      title: 'FundMate',
      category: 'Concept &bull; Venture Asset Intelligence',
      client: 'FundMate Capital',
      year: '2023',
      discipline: 'Concept & Data UI',
      scope: 'Concept Direction, 3D Data Visualization, Mobile App UI',
      location: 'Chicago, USA',
      description: 'An AI-driven intelligence layer for venture syndicates and family offices. Designed with a monochrome palette that emphasizes data density while preserving extreme whitespace and visual calm.',
      heroImage: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8c21d144fa4d51d578cb_taqqy-rb-iP07KEWonDg-unsplash.jpg',
      editorialSplit: {
        col1Heading: '01 / Venture Telemetry',
        col1Text: 'Syndicate partners manage dozens of overlapping capital allocations simultaneously. We structured an organic visual dashboard that synthesizes complex deal flow into clear spatial vectors.',
        col2Heading: '02 / Visual Reduction',
        col2Text: 'Using high-contrast typography, hairline tabular dividers, and subtle grayscale depth, FundMate delivers instant clarity without visual fatigue during marathon due diligence sessions.'
      },
      splitFeature: {
        image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8afddb600b587c981a17_07.jpg',
        eyebrow: 'INTELLIGENCE AT SCALE',
        quote: 'Data density preserved within extreme architectural whitespace.',
        text: 'Balancing rigorous institutional requirements with avant-garde editorial aesthetics to produce a world-class venture investment platform.',
        metrics: [
          { label: 'Syndicates', value: '450+' },
          { label: 'Cap Managed', value: '$2.8B' },
          { label: 'Speed Index', value: '0.8s' }
        ]
      },
      carousel: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8c21d144fa4d51d578cb_taqqy-rb-iP07KEWonDg-unsplash.jpg', caption: 'Portfolio Syndicate Graph Matrix' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8afddb600b587c981a17_07.jpg', caption: 'Capital Allocation Deep Dive' }
      ],
      deliverablesList: [
        { num: '01', title: 'Generative Portfolio Telemetry', desc: 'Real-time vector graphs illustrating cap table mechanics and liquidity horizons.' },
        { num: '02', title: 'Deal Flow Intelligence System', desc: 'Proprietary sorting and syndicate syndicate syndicate syndicate analysis layer.' },
        { num: '03', title: 'Executive Mobile Command Suite', desc: 'Secure iOS native interface for high-level decision makers on the move.' }
      ],
      galleryAsymmetric: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg', caption: 'Analytical Report Generation View' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae0274a89af6a7eac58_02.jpg', caption: 'Due Diligence Matrix Perspective' }
      ],
      prevId: 'paybolt',
      nextId: 'wealthwave'
    },
    wealthwave: {
      title: 'WealthWave',
      category: 'Art Direction &bull; Venture Studio Branding',
      client: 'WealthWave Labs',
      year: '2023',
      discipline: 'Art Direction & Branding',
      scope: 'Brand Architecture, Generative Kinetic Type, Spatial Exhibition',
      location: 'Austin, USA',
      description: 'A comprehensive brand identity and digital platform for an emerging frontier tech venture studio. Rooted in generative typography that morphs with real-time portfolio activity.',
      heroImage: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8bc07ea2875216b3b28f_pawel-czerwinski-6YutWe6awpM-unsplash.jpg',
      editorialSplit: {
        col1Heading: '01 / Frontier Branding',
        col1Text: 'WealthWave incubates companies at the intersection of AI, robotics, and clean energy. The brand identity needed to communicate radical experimentation grounded in institutional gravitas.',
        col2Heading: '02 / Kinetic Typography',
        col2Text: 'We created custom variable letterforms that react to sound, user velocity, and live funding milestones, turning the brand into an ever-evolving digital organism.'
      },
      splitFeature: {
        image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg',
        eyebrow: 'GENERATIVE IDENTITY',
        quote: 'Typography that breathes and shifts with real-time studio momentum.',
        text: 'A design language built from code, celebrating the bold ambition of founders building next-generation industrial technology.',
        metrics: [
          { label: 'Ventures', value: '18 Active' },
          { label: 'Variable Axes', value: '4' },
          { label: 'Recognition', value: 'AIGA Winner' }
        ]
      },
      carousel: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8bc07ea2875216b3b28f_pawel-czerwinski-6YutWe6awpM-unsplash.jpg', caption: 'Generative Typography System in Motion' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg', caption: 'Studio Exhibition Poster Grid' }
      ],
      deliverablesList: [
        { num: '01', title: 'Generative Variable Typeface', desc: 'Custom kinetic font family responsive to digital environment inputs.' },
        { num: '02', title: 'Spatial Digital Showcase', desc: 'Widescreen interactive platform showcasing incubated venture achievements.' },
        { num: '03', title: 'Editorial Print & Exhibition Collateral', desc: 'Heavyweight archival print materials for annual partner summits.' },
        { num: '04', title: 'Editorial Print & Exhibition Collateral', desc: 'Heavyweight archival print materials for annual partner summits.' }
      ],
      galleryAsymmetric: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8af3f22c5031bdb1b69e_03.jpg', caption: 'Brand Guidelines Book Layout' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8afddb600b587c981a17_07.jpg', caption: 'Digital Spatial Experience' }
      ],
      prevId: 'fundmate',
      nextId: 'infuse'
    },
    infuse: {
      title: 'Infuse',
      category: 'Web Design &bull; Spatial Audio Showcase',
      client: 'Infuse Contemporary Sound',
      year: '2022',
      discipline: 'Web Design & Spatial Audio',
      scope: 'Spatial Web Audio, Interactive Canvas, Editorial CMS',
      location: 'New York, USA',
      description: 'An interactive listening archive celebrating experimental sound design and spatial acoustics. Featuring tactile audio-reactive waveforms and a brutalist typography grid.',
      heroImage: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640b894e43138c1b4c26a848_pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg',
      editorialSplit: {
        col1Heading: '01 / Acoustic Architecture',
        col1Text: 'Traditional music archives are static lists. Infuse turns sonic frequencies into interactive three-dimensional wave sculptures that users can navigate in physical browser space.',
        col2Heading: '02 / Brutalist Audio Grid',
        col2Text: 'We combined stark black-and-white layout architecture with Web Audio API sound synthesis, delivering an unforgettable digital installation for audiophiles.'
      },
      splitFeature: {
        image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg',
        eyebrow: 'SPATIAL SOUND ENGINE',
        quote: 'Translating invisible acoustic waves into architectural form.',
        text: 'A breakthrough in web-based binaural spatialization, allowing listeners to position themselves inside experimental compositions.',
        metrics: [
          { label: 'Audio Engine', value: 'WebAudio 3D' },
          { label: 'Tracks', value: '1,200+' },
          { label: 'Awards', value: 'FWA SOTD' }
        ]
      },
      carousel: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640b894e43138c1b4c26a848_pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg', caption: 'Spatial Audio Navigation Canvas' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg', caption: 'Frequency Spectrum Analysis View' }
      ],
      deliverablesList: [
        { num: '01', title: '3D Spatial Audio Player', desc: 'Binaural sound synthesis engine with interactive spatial panning controls.' },
        { num: '02', title: 'Interactive Frequency Sculptures', desc: 'Real-time WebGL waveform visualizations responsive to master track audio.' },
        { num: '03', title: 'Editorial Archival Archive', desc: 'Curated discography CMS with custom typography and tactile playback controls.' }
      ],
      galleryAsymmetric: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae0274a89af6a7eac58_02.jpg', caption: 'Sound Design Telemetry' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg', caption: 'Acoustic Waveform Detail' }
      ],
      prevId: 'wealthwave',
      nextId: 'moneymaven'
    }
  };

  // --- 1. Page Veil Loader Dismissal ---
  const pageOverlay = document.getElementById('pageOverlay');
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.body.classList.remove('is-loading');
      if (pageOverlay) {
        pageOverlay.classList.add('is-hidden');
      }
      initScrollReveal();
    }, 450);
  });

  // Fallback in case load already fired
  if (document.readyState === 'complete') {
    setTimeout(() => {
      document.body.classList.remove('is-loading');
      if (pageOverlay) {
        pageOverlay.classList.add('is-hidden');
      }
      initScrollReveal();
    }, 450);
  }

  // --- 2. Live Lisbon Studio Time Ticker ---
  function updateLisbonTime() {
    try {
      const options = {
        timeZone: 'Europe/Lisbon',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      const timeString = formatter.format(new Date());
      const lisbonNavTime = document.getElementById('lisbonNavTime');
      const mobileLisbonTime = document.getElementById('mobileLisbonTime');
      if (lisbonNavTime) lisbonNavTime.textContent = `${timeString} GMT+1`;
      if (mobileLisbonTime) mobileLisbonTime.textContent = `${timeString} GMT+1`;
    } catch (e) {
      // Fallback
    }
  }
  updateLisbonTime();
  setInterval(updateLisbonTime, 1000);

  // --- 3. Custom Kinetic Magnetic Cursor ---
  const cursor = document.getElementById('customCursor');
  const cursorFollower = document.getElementById('cursorFollower');
  const cursorBadge = document.getElementById('cursorBadge');

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let cursorX = mouseX;
  let cursorY = mouseY;

  const isTouchDevice = window.matchMedia('(hover: none) or (pointer: coarse)').matches;

  if (!isTouchDevice && cursor && cursorFollower && cursorBadge) {
    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    function renderCursor() {
      // Smooth interpolation for luxury feel
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;

      cursorFollower.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      cursorBadge.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) ${cursor.classList.contains('is-hovering-project') ? 'scale(1)' : 'scale(0)'}`;

      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Project Card Hover Binding
    const projectCards = document.querySelectorAll('.project-card-link');
    projectCards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hovering-project');
      });
      card.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hovering-project');
      });
    });
  }

  // --- 4. Mobile Navigation Drawer Toggle ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileContactTrigger = document.getElementById('mobileContactTrigger');

  function toggleMobileMenu(forceState) {
    if (!mobileDrawer) return;
    const isActive = forceState !== undefined ? forceState : !mobileDrawer.classList.contains('is-active');
    mobileDrawer.classList.toggle('is-active', isActive);
    mobileDrawer.setAttribute('aria-hidden', !isActive);
    if (mobileMenuBtn) {
      mobileMenuBtn.classList.toggle('is-active', isActive);
      mobileMenuBtn.setAttribute('aria-expanded', isActive);
    }
    document.body.style.overflow = isActive ? 'hidden' : '';
  }

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
  }

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleMobileMenu(false);
    });
  });

  if (mobileContactTrigger) {
    mobileContactTrigger.addEventListener('click', () => {
      toggleMobileMenu(false);
      openContactDrawer();
    });
  }

  // --- 5. Natural Language Contact Drawer ---
  const contactDrawerOverlay = document.getElementById('contactDrawerOverlay');
  const contactBackdrop = document.getElementById('contactBackdrop');
  const openContactBtn = document.getElementById('openContactBtn');
  const footerContactTrigger = document.getElementById('footerContactTrigger');
  const closeContactBtn = document.getElementById('closeContactBtn');
  const naturalLanguageForm = document.getElementById('naturalLanguageForm');
  const formStatusMsg = document.getElementById('formStatusMsg');

  function openContactDrawer() {
    if (contactDrawerOverlay) {
      contactDrawerOverlay.classList.add('is-active');
      contactDrawerOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      // Auto-focus first input
      setTimeout(() => {
        const firstInput = document.getElementById('clientName');
        if (firstInput) firstInput.focus();
      }, 300);
    }
  }

  function closeContactDrawer() {
    if (contactDrawerOverlay) {
      contactDrawerOverlay.classList.remove('is-active');
      contactDrawerOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (openContactBtn) openContactBtn.addEventListener('click', openContactDrawer);
  if (footerContactTrigger) footerContactTrigger.addEventListener('click', openContactDrawer);
  if (closeContactBtn) closeContactBtn.addEventListener('click', closeContactDrawer);
  if (contactBackdrop) contactBackdrop.addEventListener('click', closeContactDrawer);

  // Natural Language Form Submission Handling
  if (naturalLanguageForm) {
    naturalLanguageForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('clientName').value.trim();
      const email = document.getElementById('clientEmail').value.trim();
      const project = document.getElementById('projectType').value.trim();
      const budget = document.getElementById('projectBudget').value.trim();
      const deadline = document.getElementById('projectDeadline').value.trim();

      if (!name || !email || !project) {
        formStatusMsg.textContent = 'Please fill out all project brief fields.';
        formStatusMsg.className = 'form-status-msg error';
        return;
      }

      formStatusMsg.textContent = 'Brief transmitted successfully. Max Pratt Studio will respond within 24 hours.';
      formStatusMsg.className = 'form-status-msg success';

      setTimeout(() => {
        naturalLanguageForm.reset();
        setTimeout(() => {
          formStatusMsg.textContent = '';
          closeContactDrawer();
        }, 2500);
      }, 1000);
    });
  }

  // --- 6. Project Category Filter Tabs ---
  const filterPills = document.querySelectorAll('.filter-pill');
  const projectItems = document.querySelectorAll('.project-item');

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      const selectedFilter = pill.getAttribute('data-filter');

      // Update tab active states
      filterPills.forEach(p => {
        p.classList.remove('is-active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('is-active');
      pill.setAttribute('aria-selected', 'true');

      // Filter project items
      projectItems.forEach((item) => {
        const itemCategories = item.getAttribute('data-category') || '';
        if (selectedFilter === 'all' || itemCategories.includes(selectedFilter)) {
          item.classList.remove('is-hidden');
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        } else {
          item.classList.add('is-hidden');
        }
      });
    });
  });

  // Full Archive Action Button (cycles filter to all & scrolls smoothly)
  const showAllProjectsBtn = document.getElementById('showAllProjectsBtn');
  if (showAllProjectsBtn) {
    showAllProjectsBtn.addEventListener('click', () => {
      const allPill = document.querySelector('.filter-pill[data-filter="all"]');
      if (allPill) allPill.click();
      const worksSection = document.getElementById('works');
      if (worksSection) worksSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // --- 7. Dynamic Case Study Reader Modal ---
  const caseModalOverlay = document.getElementById('caseModalOverlay');
  const caseBackdrop = document.getElementById('caseBackdrop');
  const closeCaseBtn = document.getElementById('closeCaseBtn');
  const caseModalContent = document.getElementById('caseModalContent');
  const caseModalCategory = document.getElementById('caseModalCategory');

  function openCaseStudy(projectId) {
    const data = projectsData[projectId];
    if (!data || !caseModalOverlay || !caseModalContent) return;

    if (caseModalCategory) {
      caseModalCategory.innerHTML = `${data.category} &bull; ARCHIVE REF: ${projectId.toUpperCase()}`;
    }

    const prevProject = projectsData[data.prevId];
    const nextProject = projectsData[data.nextId];

    caseModalContent.innerHTML = `
      <!-- 1. Header & Vertical Meta Split -->
      <div class="case-detail-header">
        <h2 class="case-detail-title">${data.title}</h2>
        
        <div class="case-detail-layout-split">
          <!-- Left: Vertical Metadata Stack (Client, Year, Discipline, Scope) -->
          <div class="case-meta-vertical-list">
            <div class="case-meta-vertical-item">
              <span class="meta-v-label">Client</span>
              <span class="meta-v-value">${data.client}</span>
            </div>
            <div class="case-meta-vertical-item">
              <span class="meta-v-label">Year</span>
              <span class="meta-v-value">${data.year}</span>
            </div>
            <div class="case-meta-vertical-item">
              <span class="meta-v-label">Discipline</span>
              <span class="meta-v-value">${data.discipline}</span>
            </div>
            <div class="case-meta-vertical-item">
              <span class="meta-v-label">Scope</span>
              <span class="meta-v-value">${data.scope}</span>
            </div>
            <div class="case-meta-vertical-item">
              <span class="meta-v-label">Live URL</span>
              <span class="meta-v-value">
                <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer">View Project</a>
              </span>
            </div>

          </div>

          <!-- Right: Project Narrative -->
          <div class="case-detail-prose-wrap">
            <p class="case-detail-prose">${data.description}</p>
          </div>
        </div>
      </div>

      <!-- 2. Full-Bleed Hero Visual Spread -->
      <div class="case-hero-spread">
        <img src="${data.heroImage}" alt="${data.title} master visual showcase" class="case-hero-img" loading="lazy" />
      </div>

      <!-- 3. Block: 2-Column Paragraph (Editorial Split) -->
      ${data.editorialSplit ? `
        <div class="case-editorial-split">
          <div class="editorial-col">
            <h3 class="split-col-heading">${data.editorialSplit.col1Heading}</h3>
            <p class="split-col-text">${data.editorialSplit.col1Text}</p>
          </div>
          <div class="editorial-col">
            <h3 class="split-col-heading">${data.editorialSplit.col2Heading}</h3>
            <p class="split-col-text">${data.editorialSplit.col2Text}</p>
          </div>
        </div>
      ` : ''}

      <!-- 4. Block: Left Image & Right Content (Split Feature Storytelling) -->
      ${data.splitFeature ? `
        <div class="case-split-feature">
          <div class="split-feature-image-wrap">
            <img src="${data.splitFeature.image}" alt="${data.title} feature perspective" class="split-feature-img" loading="lazy" />
          </div>
          <div class="split-feature-content">
            <span class="feature-eyebrow">${data.splitFeature.eyebrow}</span>
            <blockquote class="feature-quote">&ldquo;${data.splitFeature.quote}&rdquo;</blockquote>
            <p class="feature-text">${data.splitFeature.text}</p>
            ${data.splitFeature.metrics ? `
              <div class="feature-metrics-grid">
                ${data.splitFeature.metrics.map(m => `
                  <div class="metric-chip">
                    <span class="m-val">${m.value}</span>
                    <span class="m-lbl">${m.label}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      ` : ''}

      <!-- 5. Block: Interactive Image Carousel Section -->
      ${data.carousel && data.carousel.length > 0 ? `
        <div class="case-carousel-section" id="caseCarouselSection">
          <div class="carousel-header">
            <div class="carousel-title-group">
              <span class="carousel-eyebrow">VISUAL EXPLORATION</span>
              <p class="carousel-caption" id="carouselCaption">${data.carousel[0].caption}</p>
            </div>
            <div class="carousel-controls">
              <span class="carousel-counter" id="carouselCounter">01 / 0${data.carousel.length}</span>
              <div class="carousel-btn-group">
                <button type="button" class="carousel-btn" id="carouselPrevBtn" aria-label="Previous slide">
                  <svg viewBox="0 0 16 16" fill="none" class="icon-carousel-arrow"><path d="M10 13L5 8L10 3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
                <button type="button" class="carousel-btn" id="carouselNextBtn" aria-label="Next slide">
                  <svg viewBox="0 0 16 16" fill="none" class="icon-carousel-arrow"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>
          
          <div class="carousel-viewport">
            <div class="carousel-track" id="carouselTrack">
              ${data.carousel.map((item, idx) => `
                <div class="carousel-slide" data-index="${idx}">
                  <img src="${item.image}" alt="${item.caption}" loading="lazy" />
                </div>
              `).join('')}
            </div>
          </div>

          <div class="carousel-dots" id="carouselDots">
            ${data.carousel.map((_, idx) => `
              <button type="button" class="carousel-dot ${idx === 0 ? 'is-active' : ''}" data-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 6. Block: Numbered Deliverables & Systematic Scope List (Swiss Index) -->
      ${data.deliverablesList && data.deliverablesList.length > 0 ? `
        <div class="case-deliverables-section">
          <div class="deliverables-header">
            <span class="section-kicker">DELIVERABLES &amp; SYSTEM SCOPE</span>
            <h3 class="deliverables-title">Architectural Milestones Delivered</h3>
          </div>
          <div class="case-deliverables-list">
            ${data.deliverablesList.map(item => `
              <div class="deliverable-row">
                <span class="deliv-num">${item.num}</span>
                <h4 class="deliv-title">${item.title}</h4>
                <p class="deliv-desc">${item.desc}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 7. Block: Asymmetric 2-Column Gallery Spread -->
      ${data.galleryAsymmetric && data.galleryAsymmetric.length > 0 ? `
        <div class="case-asymmetric-gallery">
          ${data.galleryAsymmetric.map(item => `
            <div class="gallery-item-wrap">
              <img src="${item.image}" alt="${item.caption}" loading="lazy" />
              <span class="gallery-caption">${item.caption}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- 8. Case Study Bottom Action Bar (Prev / Next Project Navigation) -->
      <div class="case-next-project-bar">
        <div class="case-nav-preview">
          <span class="next-kicker">PROJECT NAVIGATION</span>
          <h3 class="next-title">${nextProject ? nextProject.title : 'Overview'}</h3>
        </div>
        <div class="case-nav-btn-group">
          ${data.prevId ? `
            <button type="button" class="btn-editorial stroke" id="prevProjectBtn" data-prev-id="${data.prevId}">
              <span class="btn-arrow-icon">&larr;</span>
              <span>Load Prev Project</span>
            </button>
          ` : ''}
          ${data.nextId ? `
            <button type="button" class="btn-editorial solid" id="nextProjectBtn" data-next-id="${data.nextId}">
              <span>Load Next Project</span>
              <span class="btn-arrow-icon">&rarr;</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;

    // Initialize Interactive Carousel if present
    if (data.carousel && data.carousel.length > 0) {
      let currentSlide = 0;
      const totalSlides = data.carousel.length;
      const track = document.getElementById('carouselTrack');
      const counter = document.getElementById('carouselCounter');
      const caption = document.getElementById('carouselCaption');
      const prevBtn = document.getElementById('carouselPrevBtn');
      const nextBtn = document.getElementById('carouselNextBtn');
      const dots = document.querySelectorAll('.carousel-dot');

      function updateCarousel(index) {
        currentSlide = (index + totalSlides) % totalSlides;
        if (track) track.style.transform = `translateX(-${currentSlide * 100}%)`;
        if (counter) counter.textContent = `0${currentSlide + 1} / 0${totalSlides}`;
        if (caption) caption.textContent = data.carousel[currentSlide].caption;
        dots.forEach((d, idx) => d.classList.toggle('is-active', idx === currentSlide));
      }

      if (prevBtn) prevBtn.addEventListener('click', () => updateCarousel(currentSlide - 1));
      if (nextBtn) nextBtn.addEventListener('click', () => updateCarousel(currentSlide + 1));
      dots.forEach(dot => {
        dot.addEventListener('click', () => {
          const idx = parseInt(dot.getAttribute('data-index'), 10);
          updateCarousel(idx);
        });
      });
    }

    caseModalOverlay.classList.add('is-active');
    caseModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Prev project button event listener
    const prevBtn = document.getElementById('prevProjectBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prevId = prevBtn.getAttribute('data-prev-id');
        openCaseStudy(prevId);
        caseModalContent.scrollTop = 0;
      });
    }

    // Next project button event listener
    const nextBtn = document.getElementById('nextProjectBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const nextId = nextBtn.getAttribute('data-next-id');
        openCaseStudy(nextId);
        caseModalContent.scrollTop = 0;
      });
    }
  }

  function closeCaseStudy() {
    if (caseModalOverlay) {
      caseModalOverlay.classList.remove('is-active');
      caseModalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  // Bind project card click events
  document.querySelectorAll('.project-item').forEach((item) => {
    const card = item.querySelector('.project-card-link');
    const projectId = item.getAttribute('data-project-id');
    if (card && projectId) {
      card.addEventListener('click', () => openCaseStudy(projectId));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openCaseStudy(projectId);
        }
      });
    }
  });

  if (closeCaseBtn) closeCaseBtn.addEventListener('click', closeCaseStudy);
  if (caseBackdrop) caseBackdrop.addEventListener('click', closeCaseStudy);

  // --- 8. About & Practice CV Modal ---
  const aboutModalOverlay = document.getElementById('aboutModalOverlay');
  const aboutBackdrop = document.getElementById('aboutBackdrop');
  const aboutModalTrigger = document.getElementById('aboutModalTrigger');
  const closeAboutBtn = document.getElementById('closeAboutBtn');

  function openAboutModal() {
    if (aboutModalOverlay) {
      aboutModalOverlay.classList.add('is-active');
      aboutModalOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeAboutModal() {
    if (aboutModalOverlay) {
      aboutModalOverlay.classList.remove('is-active');
      aboutModalOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (aboutModalTrigger) aboutModalTrigger.addEventListener('click', openAboutModal);
  if (closeAboutBtn) closeAboutBtn.addEventListener('click', closeAboutModal);
  if (aboutBackdrop) aboutBackdrop.addEventListener('click', closeAboutModal);

  // --- 9. Global Escape Key Listener for Modals ---
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeContactDrawer();
      closeCaseStudy();
      closeAboutModal();
      toggleMobileMenu(false);
    }
  });

  // --- 10. IntersectionObserver Scroll Reveal ---
  function initScrollReveal() {
    const revealItems = document.querySelectorAll('.reveal-item');
    if (!('IntersectionObserver' in window)) {
      revealItems.forEach(el => el.classList.add('is-revealed'));
      return;
    }

    const observerOptions = {
      threshold: 0.02,
      rootMargin: '0px 0px 40px 0px'
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = entry.target.getAttribute('data-delay') || 0;
          setTimeout(() => {
            entry.target.classList.add('is-revealed');
          }, Number(delay));
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealItems.forEach(item => observer.observe(item));
  }

});
