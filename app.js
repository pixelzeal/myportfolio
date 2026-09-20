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
        ],
        media: [
          {
            type: 'video',
            src: 'images/jp-video.mp4',
            poster: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg',
            caption: 'Monolithic Spatial Engine — Real-time 3D Telemetry Reel',
            badge: '4K MOTION REEL'
          },
          {
            type: 'image',
            image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg',
            caption: 'Execution Terminal — High-Contrast Monolith',
            badge: 'HIGH-RES CAPTURE'
          },
          {
            type: 'image',
            image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg',
            caption: 'Tactile Rebalancing State Architecture',
            badge: 'SPATIAL COMPONENT'
          }
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
      galleryHeading: 'Monolithic spatial liquidity',
      galleryDescription: 'The visual archive for MoneyMaven highlights multi-currency yield matrices, monolithic 3D asset clusters, high-contrast dark theme terminals, and tactile mobile component telemetry across responsive platforms.',
      galleryAsymmetric: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8af3f22c5031bdb1b69e_03.jpg', caption: 'Mobile Liquidity View & Typography Hierarchy' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8afddb600b587c981a17_07.jpg', caption: 'Dark Theme High-Contrast Interaction State' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae0274a89af6a7eac58_02.jpg', caption: 'Spatial Liquidity Matrix Telemetry' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg', caption: 'Tactile 3D Asset Rebalancing Cluster' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg', caption: 'Execution Terminal & Cross-Chain Settlement' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ca23c5bce3fa2175427_hugol-halpingston-4OyLq2yN9u0-unsplash.jpg', caption: 'Monolithic Spatial Architecture Perspective' }
      ],
      prevId: 'infuse',
      nextId: 'dubaiharbour'
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
      heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400&auto=format&fit=crop',
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
        ],
        media: [
          {
            type: 'video',
            src: 'images/jp-video.mp4',
            poster: 'images/dubai-harbour-feature.jpg',
            caption: 'Dubai Harbour Waterfront — Architectural Kinetic Motion Reel',
            badge: '4K MOTION REEL'
          },
          {
            type: 'image',
            image: 'images/dubai-harbour-feature.jpg',
            caption: 'Architectural Façade & Daylight Refraction Perspective',
            badge: 'HIGH-RES CAPTURE'
          },
          {
            type: 'image',
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2400&auto=format&fit=crop',
            caption: 'Waterfront Living & Marina Lifestyle',
            badge: 'WATERFRONT VIEW'
          }
        ]
      },
      carousel: [
        {
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2400&auto=format&fit=crop',
          caption: 'Waterfront Lifestyle & Marina Experience'
        },
        {
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop',
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
      galleryHeading: 'Residences shaped by light',
      galleryDescription: 'The gallery for Dubai Harbour Residences spans the amber-hued tower and its waterfront setting, the promenade-level retail colonnade, the elevated pool terraces and the residents’ wellness floors. Interior renders show the arrival lobby, open-plan living and dining spaces, principal bedrooms and marble bathrooms across the one to five-bedroom residences.',
      galleryAsymmetric: [
        {
          image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400&auto=format&fit=crop',
          caption: 'Waterfront Elevation & Marina Skyline'
        },
        {
          image: 'images/dubai-harbour-feature.jpg',
          caption: 'Architectural Façade & Daylight Refraction'
        },
        {
          image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=2400&auto=format&fit=crop',
          caption: 'Marina Promenade & Waterfront Lifestyle'
        },
        {
          image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2400&auto=format&fit=crop',
          caption: 'Principal Living Suite & Marble Finishes'
        },
        {
          image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2400&auto=format&fit=crop',
          caption: 'Private Sunset Terrace & Ocean Perspective'
        },
        {
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2400&auto=format&fit=crop',
          caption: 'Elevated Wellness & Infinity Horizon Pool'
        }
      ],
      prevId: 'moneymaven',
      nextId: 'jumeriahpeninsula'
    },
    jumeriahpeninsula: {
      title: 'Jumeriah Peninsula',
      category: 'Luxury Real Estate &bull; Waterfront Living',
      client: 'Jumeriah Peninsula',
      year: '2024',
      discipline: 'UX/UI Design & Digital Experience',
      scope: 'Website Design, Information Architecture, Visual Design, Responsive Experience',
      location: 'Maritime City, Dubai, U.A.E.',
      description: 'A visionary waterfront destination where luxury coastal living, expansive green landscapes, and vibrant urban energy coexist in perfect harmony. The digital experience was crafted to showcase an elevated lifestyle inspired by nature, wellness, and contemporary architecture.',
      heroImage: 'images/jumeriah-peninsula-hero.jpg',
      editorialSplit: {
        col1Heading: '01 / A New Natural Wonder',
        col1Text: 'The challenge was to communicate the unique balance between oceanfront living, lush green environments, and modern urban convenience. The experience was designed to inspire exploration while maintaining a clear path toward discovering residences, amenities, and lifestyle offerings.',
        col2Heading: '02 / Dual-District Living',
        col2Text: 'Through immersive imagery, elegant typography, and carefully structured content journeys, visitors can seamlessly explore two distinctive districts—one centered around waterfront experiences and the other around biodiverse green landscapes.'
      },
      splitFeature: {
        image: 'images/jumeriah-peninsula-feature.jpg',
        eyebrow: 'OCEAN • NATURE • CITY',
        quote: 'Where coastal serenity meets vibrant urban living.',
        text: 'Inspired by Mediterranean architecture and waterfront landscapes, the platform combines visual storytelling with intuitive navigation to create an engaging property discovery experience.',
        metrics: [
          { label: 'Districts', value: '2' },
          { label: 'Location', value: 'Waterfront' },
          { label: 'Lifestyle', value: 'Luxury' }
        ],
        media: [
          {
            type: 'video',
            src: 'images/jp-video.mp4',
            poster: 'images/jumeriah-peninsula-feature-01.jpg',
            caption: 'Jumeriah Peninsula Bay — Cinematic Lifestyle & Oceanfront Reel',
            badge: '4K CINEMATIC'
          },
          {
            type: 'image',
            image: 'images/jumeriah-peninsula-feature-01.jpg',
            caption: 'Mediterranean-Inspired Residential Elevation',
            badge: 'HIGH-RES CAPTURE'
          },
          {
            type: 'image',
            image: 'images/jumeriah-peninsula-feature-02.jpg',
            caption: 'Oceanfront Sunset Marina Experience',
            badge: 'BAY PERSPECTIVE'
          }
        ]
      },
      carousel: [
        {
          image: 'images/jumeriah-peninsula-carousel-01.jpg',
          caption: 'Jumeriah Peninsula Bay — Marina & Oceanfront Living'
        },
        {
          image: 'images/jumeriah-peninsula-carousel-02.jpg',
          caption: 'Peninsula Gardens — Urban Forest & Biodiverse Landscapes'
        },
        {
          image: 'images/jumeriah-peninsula-carousel-03.jpg',
          caption: 'Peninsula Gardens — Urban Forest & Biodiverse Landscapes'
        }
      ],
      deliverablesList: [
        {
          num: '01',
          title: 'Luxury Destination Website',
          desc: 'Designed a premium digital platform showcasing waterfront residences, lifestyle experiences, and world-class amenities.'
        },
        {
          num: '02',
          title: 'Lifestyle Storytelling Experience',
          desc: 'Created immersive content journeys highlighting the balance between nature, wellness, and urban sophistication.'
        },
        {
          num: '03',
          title: 'Residential Discovery Framework',
          desc: 'Structured intuitive user flows for exploring residences, amenities, districts, and location advantages.'
        }
      ],
      galleryHeading: 'A destination designed around balance',
      galleryDescription: 'Jumeriah Peninsula brings together luxury waterfront living, expansive green spaces, and vibrant urban experiences. The digital experience was designed to showcase the development’s distinctive districts, premium residences, and lifestyle-focused amenities through immersive visual storytelling.',
      galleryAsymmetric: [
        {
          image: 'images/jumeriah-peninsula-gallery-01.jpg',
          caption: 'Oceanfront Lifestyle & Marina Views'
        },
        {
          image: 'images/jumeriah-peninsula-gallery-02.jpg',
          caption: 'Mediterranean-Inspired Residential Architecture'
        },
        {
          image: 'images/jumeriah-peninsula-gallery-03.jpg',
          caption: 'Peninsula Gardens & Urban Forest Experience'
        },
        {
          image: 'images/jumeriah-peninsula-gallery-04.jpg',
          caption: 'Luxury Amenities & Wellness Spaces'
        },
        {
          image: 'images/jumeriah-peninsula-gallery-05.jpg',
          caption: 'Waterfront Dining & Social Destinations'
        }
      ],
      prevId: 'dubaiharbour',
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
        ],
        media: [
          {
            type: 'video',
            src: 'images/jp-video.mp4',
            poster: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg',
            caption: 'Generative Typography System — Kinetic Motion Simulation',
            badge: 'KINETIC SIMULATION'
          },
          {
            type: 'image',
            image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg',
            caption: 'Studio Exhibition Poster Architecture',
            badge: 'PRINT ARCHIVE'
          },
          {
            type: 'image',
            image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8bc07ea2875216b3b28f_pawel-czerwinski-6YutWe6awpM-unsplash.jpg',
            caption: 'Variable Type Kinetic Specimen Canvas',
            badge: 'HIGH-RES CAPTURE'
          }
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
        { num: '04', title: 'Brand Guidelines System & Design Tokens', desc: 'Cross-platform vector assets and variable layout rules.' }
      ],
      galleryHeading: 'Kinetic typography & spatial identity',
      galleryDescription: 'The spatial showcase documents WealthWave’s generative variable type specimens, physical architectural signage, partner summit print collateral, and interactive digital design token libraries.',
      galleryAsymmetric: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8af3f22c5031bdb1b69e_03.jpg', caption: 'Brand Guidelines & Kinetic Font Architecture' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8afddb600b587c981a17_07.jpg', caption: 'Digital Spatial Experience Exhibition' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8bc07ea2875216b3b28f_pawel-czerwinski-6YutWe6awpM-unsplash.jpg', caption: 'Variable Type Kinetic Motion Canvas' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg', caption: 'Architectural Exhibition Poster Matrix' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg', caption: 'Design System & Cross-Platform Tokens' }
      ],
      prevId: 'jumeriahpeninsula',
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
        ],
        media: [
          {
            type: 'video',
            src: 'images/jp-video.mp4',
            poster: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg',
            caption: 'Spatial Audio Waveform Synthesizer — Real-time WebGL Demo',
            badge: 'WEBGL DEMO'
          },
          {
            type: 'image',
            image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg',
            caption: 'Acoustic Waveform Spatial Model Telemetry',
            badge: 'HIGH-RES CAPTURE'
          },
          {
            type: 'image',
            image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640b894e43138c1b4c26a848_pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg',
            caption: 'Interactive Binaural Audio Controller',
            badge: 'SYNTHESIS INTERACTION'
          }
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
      galleryHeading: 'Acoustic architecture in space',
      galleryDescription: 'An exploratory gallery featuring binaural frequency telemetry, 3D WebGL waveform sculptures, tactile audio mixer boards, and editorial discography layouts.',
      galleryAsymmetric: [
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae0274a89af6a7eac58_02.jpg', caption: 'Sound Design Frequency Telemetry' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ae85f5dd25a288bde25_01.jpg', caption: 'Acoustic Waveform Spatial Model' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640b894e43138c1b4c26a848_pawel-czerwinski-OOFSqPWjCt0-unsplash.jpg', caption: 'Interactive Synthesizer Sound Board' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8afddb600b587c981a17_07.jpg', caption: 'Binaural Spatial Panning Environment' },
        { image: 'https://cdn.prod.website-files.com/64063dd6d2fb8585a5f08004/640f8ad52b298c2c4d370764_06.jpg', caption: 'Spectrum Analysis & Audio Visualization' }
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

  // --- Navigation Scroll Blur & Collapse Controller ---
  const navHeader = document.querySelector('.navigation');
  const floatingPills = document.querySelectorAll('.floating-pill');

  function handleNavbarScroll() {
    if (!navHeader) return;
    if (window.scrollY > 45) {
      navHeader.classList.add('is-scrolled');
    } else {
      navHeader.classList.remove('is-scrolled');
    }

    // Dynamic active pill section tracking
    const scrollPos = window.scrollY + 220;
    const worksSec = document.getElementById('works');
    const aboutSec = document.getElementById('about');

    let currentSec = 'hero';
    if (aboutSec && scrollPos >= aboutSec.offsetTop) {
      currentSec = 'about';
    } else if (worksSec && scrollPos >= worksSec.offsetTop) {
      currentSec = 'works';
    } else {
      currentSec = 'hero';
    }

    floatingPills.forEach(pill => {
      const href = pill.getAttribute('href');
      if (href === `#${currentSec}`) {
        pill.classList.add('is-active');
      } else if (href && href.startsWith('#')) {
        pill.classList.remove('is-active');
      }
    });
  }

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });
  handleNavbarScroll();

  // Floating pill click handler
  floatingPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const href = pill.getAttribute('href');
      if (href && href.startsWith('#')) {
        floatingPills.forEach(p => p.classList.remove('is-active'));
        pill.classList.add('is-active');
      }
    });
  });

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

      <!-- 4. Block: Left Interactive Media Carousel (Single View Videos + Images) & Right Content (Split Feature Storytelling) -->
      ${data.splitFeature ? (() => {
        const mediaList = data.splitFeature.media || [{ type: 'image', image: data.splitFeature.image, caption: data.splitFeature.quote, badge: 'FEATURE STILL' }];
        const hasMultiple = mediaList.length > 1;
        return `
        <div class="case-split-feature">
          <div class="split-feature-carousel-wrap" id="splitFeatureCarouselWrap">
            <div class="split-media-viewport ${hasMultiple ? '' : 'no-drag'}" id="splitMediaViewport" tabindex="0" role="region" aria-label="Split feature media carousel">
              <div class="split-media-track" id="splitMediaTrack">
                ${mediaList.map((item, idx) => `
                  <div class="split-media-card" data-split-index="${idx}">
                    ${item.type === 'video' ? `
                      <div class="split-video-wrapper" data-split-index="${idx}">
                        <video class="split-video-element" src="${item.src}" poster="${item.poster || ''}" playsinline loop muted preload="metadata" draggable="false"></video>
                        <div class="split-media-badge">${item.badge || 'VIDEO'}</div>
                        <button type="button" class="video-play-glass-btn" aria-label="Play video" title="Play / Pause Video">
                          <svg viewBox="0 0 24 24" fill="currentColor" class="icon-play-toggle icon-play"><path d="M8 5v14l11-7z"/></svg>
                          <svg viewBox="0 0 24 24" fill="currentColor" class="icon-play-toggle icon-pause"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                        </button>
                        <button type="button" class="video-sound-glass-btn" aria-label="Toggle audio" title="Mute / Unmute Audio">
                          <svg viewBox="0 0 24 24" fill="none" class="icon-sound-toggle icon-muted"><path d="M11 5L6 9H2v6h4l5 4V5zM23 9l-6 6M17 9l6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                          <svg viewBox="0 0 24 24" fill="none" class="icon-sound-toggle icon-unmuted"><path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.08" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                        </button>
                        <div class="split-media-glass-overlay"></div>
                      </div>
                    ` : `
                      <div class="split-image-wrapper split-lightbox-trigger" data-split-index="${idx}" role="button" tabindex="0" aria-label="Open ${item.caption || 'feature visual'} in Lightbox">
                        <img src="${item.image || item.src}" alt="${item.caption || 'Feature visual'}" loading="lazy" draggable="false" />
                        <div class="split-media-badge">${item.badge || 'IMAGE'}</div>
                        <button type="button" class="gallery-card-expand-btn" aria-label="Open fullscreen in lightbox" title="View Fullscreen (F)">
                          <svg viewBox="0 0 24 24" fill="none" class="icon-expand-circle">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                        </button>
                        <div class="split-media-glass-overlay"></div>
                      </div>
                    `}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Bottom Info Bar for Split Media (Caption + Controls if multiple) -->
            <div class="split-media-bottom-bar">
              <div class="split-media-caption" id="splitMediaCaption">
                ${(mediaList[0] ? mediaList[0].caption : data.splitFeature.quote) || ''}
              </div>
              ${hasMultiple ? `
                <div class="split-media-controls">
                  <button type="button" class="split-media-arrow-btn" id="splitMediaPrevBtn" aria-label="Previous media">
                    <svg viewBox="0 0 16 16" fill="none" class="icon-bottom-arrow"><path d="M10 13L5 8L10 3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>
                  <button type="button" class="split-media-arrow-btn" id="splitMediaNextBtn" aria-label="Next media">
                    <svg viewBox="0 0 16 16" fill="none" class="icon-bottom-arrow"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>
                  <span class="split-media-counter" id="splitMediaCounter">
                    01 / ${String(mediaList.length).padStart(2, '0')}
                  </span>
                </div>
              ` : ''}
            </div>
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
        `;
      })() : ''}

      <!-- 5. Block: Interactive Image Carousel Section -->
      ${data.carousel && data.carousel.length > 0 ? (() => {
        const hasMultiple = data.carousel.length > 1;
        return `
        <div class="case-carousel-section" id="caseCarouselSection">
          <div class="carousel-header">
            <div class="carousel-title-group">
              <span class="carousel-eyebrow">VISUAL EXPLORATION</span>
              <p class="carousel-caption" id="carouselCaption">${data.carousel[0].caption || ''}</p>
            </div>
            ${hasMultiple ? `
              <div class="carousel-controls">
                <span class="carousel-counter" id="carouselCounter">01 / ${String(data.carousel.length).padStart(2, '0')}</span>
                <div class="carousel-btn-group">
                  <button type="button" class="carousel-btn" id="carouselPrevBtn" aria-label="Previous slide">
                    <svg viewBox="0 0 16 16" fill="none" class="icon-carousel-arrow"><path d="M10 13L5 8L10 3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>
                  <button type="button" class="carousel-btn" id="carouselNextBtn" aria-label="Next slide">
                    <svg viewBox="0 0 16 16" fill="none" class="icon-carousel-arrow"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>
                </div>
              </div>
            ` : ''}
          </div>
          
          <div class="carousel-viewport${!hasMultiple ? ' no-drag' : ''}" id="carouselViewport">
            <div class="carousel-track" id="carouselTrack">
              ${data.carousel.map((item, idx) => `
                <div class="carousel-slide carousel-lightbox-trigger" data-carousel-index="${idx}" role="button" tabindex="0" aria-label="Enlarge image ${idx + 1}: ${item.caption || ''}">
                  <img src="${item.image}" alt="${item.caption || ''}" loading="lazy" draggable="false" />
                  <div class="carousel-expand-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" class="icon-carousel-expand">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          ${hasMultiple ? `
            <div class="carousel-dots" id="carouselDots">
              ${data.carousel.map((_, idx) => `
                <button type="button" class="carousel-dot ${idx === 0 ? 'is-active' : ''}" data-index="${idx}" aria-label="Go to slide ${idx + 1}"></button>
              `).join('')}
            </div>
          ` : ''}
        </div>
        `;
      })() : ''}

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

      <!-- 7. Block: Multi-Column Horizontal Rail Gallery -->
      ${data.galleryAsymmetric && data.galleryAsymmetric.length > 0 ? `
        <div class="case-gallery-section" id="caseGallerySection">
          <div class="case-gallery-intro">
            <span class="gallery-kicker">GALLERY</span>
            <h3 class="gallery-main-title">${data.galleryHeading || 'Visual Documentation & Spatial Perspectives'}</h3>
            <p class="gallery-narrative-prose">${data.galleryDescription || data.description}</p>
          </div>

          <!-- Horizontal Rail Viewport -->
          <div class="case-gallery-rail-viewport" id="galleryRailViewport" tabindex="0" role="region" aria-label="Horizontal image gallery rail">
            <div class="case-gallery-rail" id="galleryRail">
              ${data.galleryAsymmetric.map((item, idx) => `
                <div class="case-gallery-card" data-gallery-index="${idx}">
                  <div class="gallery-card-inner gallery-lightbox-trigger" data-gallery-index="${idx}" role="button" tabindex="0" aria-label="Open ${item.caption} in Lightbox">
                    <img src="${item.image}" alt="${item.caption}" loading="lazy" draggable="false" />
                    <button type="button" class="gallery-card-expand-btn" aria-label="Open fullscreen in lightbox" title="View Fullscreen (F)">
                      <svg viewBox="0 0 24 24" fill="none" class="icon-expand-circle">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <div class="gallery-card-glass-overlay"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Bottom Info Bar (Caption + Arrows + Counter) -->
          <div class="case-gallery-bottom-bar">
            <div class="gallery-bottom-caption" id="galleryBottomCaption">
              ${data.galleryAsymmetric[0].caption}
            </div>
            <div class="gallery-bottom-controls">
              <button type="button" class="gallery-bottom-arrow-btn" id="galleryRailPrevBtn" aria-label="Scroll left (Previous image)">
                <svg viewBox="0 0 16 16" fill="none" class="icon-bottom-arrow"><path d="M10 13L5 8L10 3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <button type="button" class="gallery-bottom-arrow-btn" id="galleryRailNextBtn" aria-label="Scroll right (Next image)">
                <svg viewBox="0 0 16 16" fill="none" class="icon-bottom-arrow"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </button>
              <span class="gallery-bottom-counter" id="galleryBottomCounter">
                01 / ${String(data.galleryAsymmetric.length).padStart(2, '0')}
              </span>
            </div>
          </div>
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

    // Initialize Split Feature Media Carousel (Block 4)
    if (data.splitFeature) {
      const mediaItems = data.splitFeature.media || [{ type: 'image', image: data.splitFeature.image, caption: data.splitFeature.quote }];
      const hasMultiple = mediaItems.length > 1;
      const splitViewport = document.getElementById('splitMediaViewport');
      const splitPrevBtn = document.getElementById('splitMediaPrevBtn');
      const splitNextBtn = document.getElementById('splitMediaNextBtn');
      const splitCaption = document.getElementById('splitMediaCaption');
      const splitCounter = document.getElementById('splitMediaCounter');

      if (splitViewport) {
        let isSplitMouseDown = false;
        let splitStartX = 0;
        let splitScrollStart = 0;
        let splitHasDragged = false;

        if (hasMultiple) {
          // Strict Mouse-Down Drag Tracking (Active only while mouse button is held down)
          splitViewport.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isSplitMouseDown = true;
            splitHasDragged = false;
            splitStartX = e.pageX;
            splitScrollStart = splitViewport.scrollLeft;
            splitViewport.classList.add('is-dragging');
          });

          window.addEventListener('mousemove', (e) => {
            if (!isSplitMouseDown) return;
            const deltaX = e.pageX - splitStartX;
            if (Math.abs(deltaX) > 5) {
              splitHasDragged = true;
            }
            splitViewport.scrollLeft = splitScrollStart - deltaX;
            updateActiveSplitState();
          });

          function stopSplitDragging() {
            if (!isSplitMouseDown) return;
            isSplitMouseDown = false;
            splitViewport.classList.remove('is-dragging');
            updateActiveSplitState();
          }

          window.addEventListener('mouseup', stopSplitDragging);
          window.addEventListener('mouseleave', stopSplitDragging);

          // Step Navigation Buttons (< and >) - robust index-based stepping & wrapping
          function getActiveSplitIndex() {
            const cards = splitViewport.querySelectorAll('.split-media-card');
            if (!cards.length) return 0;
            let activeIdx = 0;
            let minDiff = Infinity;
            const currentScroll = splitViewport.scrollLeft;

            cards.forEach((card, idx) => {
              const diff = Math.abs(card.offsetLeft - currentScroll);
              if (diff < minDiff) {
                minDiff = diff;
                activeIdx = idx;
              }
            });
            return activeIdx;
          }

          function goToSplitSlide(targetIdx) {
            const cards = splitViewport.querySelectorAll('.split-media-card');
            if (!cards.length) return;
            const safeIdx = (targetIdx + cards.length) % cards.length;
            const targetCard = cards[safeIdx];
            if (targetCard) {
              splitViewport.scrollTo({
                left: targetCard.offsetLeft,
                behavior: 'smooth'
              });
            }
          }

          if (splitPrevBtn) {
            splitPrevBtn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              const cur = getActiveSplitIndex();
              goToSplitSlide(cur - 1);
            });
          }

          if (splitNextBtn) {
            splitNextBtn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              const cur = getActiveSplitIndex();
              goToSplitSlide(cur + 1);
            });
          }

          // Active State Calculation & Indicator Updates
          function updateActiveSplitState() {
            const cards = splitViewport.querySelectorAll('.split-media-card');
            if (!cards.length) return;

            let activeIdx = 0;
            let minDiff = Infinity;
            const currentScroll = splitViewport.scrollLeft;

            cards.forEach((card, idx) => {
              const diff = Math.abs(card.offsetLeft - currentScroll);
              if (diff < minDiff) {
                minDiff = diff;
                activeIdx = idx;
              }
            });

            const curMedia = mediaItems[activeIdx];
            if (splitCaption && curMedia) {
              splitCaption.textContent = curMedia.caption || '';
            }
            if (splitCounter) {
              splitCounter.textContent = `${String(activeIdx + 1).padStart(2, '0')} / ${String(mediaItems.length).padStart(2, '0')}`;
            }
          }

          splitViewport.addEventListener('scroll', () => {
            updateActiveSplitState();
          }, { passive: true });
        }

        // Video Play / Pause & Sound Controls
        const videoWrappers = splitViewport.querySelectorAll('.split-video-wrapper');
        videoWrappers.forEach((vWrap) => {
          const video = vWrap.querySelector('.split-video-element');
          const playBtn = vWrap.querySelector('.video-play-glass-btn');
          const soundBtn = vWrap.querySelector('.video-sound-glass-btn');
          if (!video) return;

          function toggleVideoPlay() {
            if (splitHasDragged) {
              splitHasDragged = false;
              return;
            }
            if (video.paused) {
              // Pause any other playing video in modal
              caseModalContent.querySelectorAll('video').forEach((otherV) => {
                if (otherV !== video && !otherV.paused) {
                  otherV.pause();
                  const pWrap = otherV.closest('.split-video-wrapper');
                  if (pWrap) pWrap.classList.remove('is-playing');
                }
              });
              video.play().then(() => {
                vWrap.classList.add('is-playing');
              }).catch(() => {});
            } else {
              video.pause();
              vWrap.classList.remove('is-playing');
            }
          }

          if (playBtn) {
            playBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              toggleVideoPlay();
            });
          }

          if (soundBtn) {
            soundBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              video.muted = !video.muted;
              vWrap.classList.toggle('is-unmuted', !video.muted);
            });
          }

          vWrap.addEventListener('click', (e) => {
            if (e.target.closest('.video-play-glass-btn') || e.target.closest('.video-sound-glass-btn')) return;
            toggleVideoPlay();
          });

          video.addEventListener('ended', () => {
            vWrap.classList.remove('is-playing');
          });
        });

        // Lightbox trigger for image items in split media
        const imageTriggers = splitViewport.querySelectorAll('.split-lightbox-trigger');
        const splitImages = mediaItems.filter(m => m.type === 'image' || !m.type).map(m => ({
          image: m.image || m.src,
          caption: m.caption
        }));

        imageTriggers.forEach((trigger) => {
          trigger.addEventListener('click', (e) => {
            if (splitHasDragged) {
              splitHasDragged = false;
              return;
            }
            e.stopPropagation();
            const splitIdx = parseInt(trigger.getAttribute('data-split-index'), 10);
            const clickedMedia = mediaItems[splitIdx];
            const targetImgSrc = clickedMedia ? (clickedMedia.image || clickedMedia.src) : '';
            let lightboxInitialIdx = splitImages.findIndex(img => img.image === targetImgSrc);
            if (lightboxInitialIdx === -1) lightboxInitialIdx = 0;
            openLightbox(splitImages.length > 0 ? splitImages : [{ image: targetImgSrc, caption: clickedMedia?.caption || '' }], lightboxInitialIdx);
          });
        });
      }
    }

    // Initialize Interactive Carousel (Visual Exploration Block 5) if present
    if (data.carousel && data.carousel.length > 0) {
      const carouselViewport = document.getElementById('carouselViewport');
      const prevBtn = document.getElementById('carouselPrevBtn');
      const nextBtn = document.getElementById('carouselNextBtn');
      const counter = document.getElementById('carouselCounter');
      const caption = document.getElementById('carouselCaption');
      const dots = caseModalContent.querySelectorAll('.carousel-dot');
      const totalSlides = data.carousel.length;
      const hasMultiple = totalSlides > 1;

      if (carouselViewport) {
        let isCarouselMouseDown = false;
        let carouselStartX = 0;
        let carouselScrollStart = 0;
        let carouselHasDragged = false;

        if (hasMultiple) {
          carouselViewport.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isCarouselMouseDown = true;
            carouselHasDragged = false;
            carouselStartX = e.pageX;
            carouselScrollStart = carouselViewport.scrollLeft;
            carouselViewport.classList.add('is-dragging');
          });

          window.addEventListener('mousemove', (e) => {
            if (!isCarouselMouseDown) return;
            const deltaX = e.pageX - carouselStartX;
            if (Math.abs(deltaX) > 5) {
              carouselHasDragged = true;
            }
            carouselViewport.scrollLeft = carouselScrollStart - deltaX;
            updateActiveCarouselState();
          });

          function stopCarouselDragging() {
            if (!isCarouselMouseDown) return;
            isCarouselMouseDown = false;
            carouselViewport.classList.remove('is-dragging');
            updateActiveCarouselState();
          }

          window.addEventListener('mouseup', stopCarouselDragging);
          window.addEventListener('mouseleave', stopCarouselDragging);

          // Step Navigation Buttons (< and >) - robust index-based stepping & wrapping
          function getActiveCarouselIndex() {
            const slides = carouselViewport.querySelectorAll('.carousel-slide');
            if (!slides.length) return 0;
            let activeIdx = 0;
            let minDiff = Infinity;
            const currentScroll = carouselViewport.scrollLeft;

            slides.forEach((slide, idx) => {
              const diff = Math.abs(slide.offsetLeft - currentScroll);
              if (diff < minDiff) {
                minDiff = diff;
                activeIdx = idx;
              }
            });
            return activeIdx;
          }

          function goToCarouselSlide(targetIdx) {
            const slides = carouselViewport.querySelectorAll('.carousel-slide');
            if (!slides.length) return;
            const safeIdx = (targetIdx + slides.length) % slides.length;
            const targetSlide = slides[safeIdx];
            if (targetSlide) {
              carouselViewport.scrollTo({
                left: targetSlide.offsetLeft,
                behavior: 'smooth'
              });
            }
          }

          if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              const cur = getActiveCarouselIndex();
              goToCarouselSlide(cur - 1);
            });
          }

          if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              const cur = getActiveCarouselIndex();
              goToCarouselSlide(cur + 1);
            });
          }

          // Dot click navigation
          dots.forEach((dot) => {
            dot.addEventListener('click', (e) => {
              e.preventDefault();
              e.stopPropagation();
              const idx = parseInt(dot.getAttribute('data-index'), 10);
              goToCarouselSlide(idx);
            });
          });
        }

        // Real-time active slide detection & indicator updates
        function updateActiveCarouselState() {
          const slides = carouselViewport.querySelectorAll('.carousel-slide');
          if (!slides.length) return;

          let activeIdx = 0;
          let minDiff = Infinity;
          const currentScroll = carouselViewport.scrollLeft;

          slides.forEach((slide, idx) => {
            const diff = Math.abs(slide.offsetLeft - currentScroll);
            if (diff < minDiff) {
              minDiff = diff;
              activeIdx = idx;
            }
          });

          if (caption && data.carousel[activeIdx]) {
            caption.textContent = data.carousel[activeIdx].caption || '';
          }
          if (counter && hasMultiple) {
            counter.textContent = `${String(activeIdx + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
          }
          dots.forEach((dot, idx) => {
            dot.classList.toggle('is-active', idx === activeIdx);
          });
        }

        carouselViewport.addEventListener('scroll', () => {
          updateActiveCarouselState();
        }, { passive: true });

        // Lightbox trigger binding on slides
        const carouselTriggers = carouselViewport.querySelectorAll('.carousel-lightbox-trigger');
        carouselTriggers.forEach((trigger) => {
          const idx = parseInt(trigger.getAttribute('data-carousel-index'), 10);
          trigger.addEventListener('click', (e) => {
            if (carouselHasDragged) {
              carouselHasDragged = false;
              return;
            }
            e.stopPropagation();
            openLightbox(data.carousel, idx);
          });

          trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              openLightbox(data.carousel, idx);
            }
          });
        });
      }
    }

    // Initialize Multi-Column Horizontal Gallery Rail (Block 7)
    if (data.galleryAsymmetric && data.galleryAsymmetric.length > 0) {
      const railViewport = document.getElementById('galleryRailViewport');
      const railPrevBtn = document.getElementById('galleryRailPrevBtn');
      const railNextBtn = document.getElementById('galleryRailNextBtn');
      const bottomCaption = document.getElementById('galleryBottomCaption');
      const bottomCounter = document.getElementById('galleryBottomCounter');

      if (railViewport) {
        // Strict Mouse-Down Drag Tracking (Active only while mouse is held down)
        let isMouseDown = false;
        let startX = 0;
        let scrollStart = 0;
        let hasDragged = false;

        railViewport.addEventListener('mousedown', (e) => {
          if (e.button !== 0) return;
          isMouseDown = true;
          hasDragged = false;
          startX = e.pageX;
          scrollStart = railViewport.scrollLeft;

          railViewport.classList.add('is-dragging');
        });

        window.addEventListener('mousemove', (e) => {
          if (!isMouseDown) return;
          const deltaX = e.pageX - startX;
          if (Math.abs(deltaX) > 5) {
            hasDragged = true;
          }

          railViewport.scrollLeft = scrollStart - deltaX;
          updateActiveRailState();
        });

        function stopDragging() {
          if (!isMouseDown) return;
          isMouseDown = false;
          railViewport.classList.remove('is-dragging');
          // Immediate stop upon release: no continued movement
          updateActiveRailState();
        }

        window.addEventListener('mouseup', stopDragging);
        window.addEventListener('mouseleave', stopDragging);

        // Step Navigation Buttons (< and >)
        function getScrollStep() {
          const firstCard = railViewport.querySelector('.case-gallery-card');
          return firstCard ? firstCard.offsetWidth + 24 : 480;
        }

        if (railPrevBtn) {
          railPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            railViewport.scrollBy({ left: -getScrollStep(), behavior: 'smooth' });
          });
        }

        if (railNextBtn) {
          railNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            railViewport.scrollBy({ left: getScrollStep(), behavior: 'smooth' });
          });
        }

        // Real-time active slide, caption and counter calculation
        function updateActiveRailState() {
          const cards = railViewport.querySelectorAll('.case-gallery-card');
          if (!cards.length) return;

          let activeIdx = 0;
          let minDiff = Infinity;
          const currentScroll = railViewport.scrollLeft;

          cards.forEach((card, idx) => {
            const diff = Math.abs(card.offsetLeft - currentScroll);
            if (diff < minDiff) {
              minDiff = diff;
              activeIdx = idx;
            }
          });

          const curItem = data.galleryAsymmetric[activeIdx];
          if (bottomCaption && curItem) {
            bottomCaption.textContent = curItem.caption || '';
          }
          if (bottomCounter) {
            bottomCounter.textContent = `${String(activeIdx + 1).padStart(2, '0')} / ${String(data.galleryAsymmetric.length).padStart(2, '0')}`;
          }
        }

        railViewport.addEventListener('scroll', () => {
          updateActiveRailState();
        }, { passive: true });

        // Lightbox trigger binding on each card / expand button
        const galleryCards = railViewport.querySelectorAll('.gallery-lightbox-trigger');
        galleryCards.forEach((trigger) => {
          const idx = parseInt(trigger.getAttribute('data-gallery-index'), 10);
          trigger.addEventListener('click', (e) => {
            if (hasDragged) {
              hasDragged = false;
              return;
            }
            e.stopPropagation();
            openLightbox(data.galleryAsymmetric, idx);
          });

          trigger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.stopPropagation();
              openLightbox(data.galleryAsymmetric, idx);
            }
          });
        });
      }
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
      // Pause all videos when closing case study
      if (caseModalContent) {
        caseModalContent.querySelectorAll('video').forEach((v) => {
          if (!v.paused) v.pause();
          const pWrap = v.closest('.split-video-wrapper');
          if (pWrap) pWrap.classList.remove('is-playing');
        });
      }
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

  // --- 8. Lightbox / Fullscreen Image Viewer with Precision Zoom Controller ---
  const lightboxOverlay = document.getElementById('lightboxOverlay');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxFullscreenBtn = document.getElementById('lightboxFullscreenBtn');
  const lightboxZoomInBtn = document.getElementById('lightboxZoomInBtn');
  const lightboxZoomOutBtn = document.getElementById('lightboxZoomOutBtn');
  const lightboxZoomToggleBtn = document.getElementById('lightboxZoomToggleBtn');
  const lightboxZoomResetBtn = document.getElementById('lightboxZoomResetBtn');
  const lightboxZoomLevelText = document.getElementById('lightboxZoomLevelText');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxImageWrapper = document.getElementById('lightboxImageWrapper');

  let activeLightboxImages = [];
  let activeLightboxIndex = 0;

  // Zoom & Pan State
  let currentZoom = 1.0;
  let panX = 0;
  let panY = 0;
  let isPanning = false;
  let panStartX = 0;
  let panStartY = 0;
  let panStartOffsetX = 0;
  let panStartOffsetY = 0;
  let hasPanned = false;

  function updateZoomTransform(animate = true) {
    if (!lightboxImg) return;
    if (animate) {
      lightboxImg.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
    } else {
      lightboxImg.style.transition = 'none';
    }

    if (currentZoom <= 1.0) {
      currentZoom = 1.0;
      panX = 0;
      panY = 0;
      lightboxImg.style.transform = `scale(1) translate3d(0px, 0px, 0px)`;
      lightboxImg.classList.remove('is-zoomed');
      if (lightboxImageWrapper) {
        lightboxImageWrapper.classList.remove('is-zoomed');
      }
    } else {
      lightboxImg.style.transform = `scale(${currentZoom}) translate3d(${panX / currentZoom}px, ${panY / currentZoom}px, 0px)`;
      lightboxImg.classList.add('is-zoomed');
      if (lightboxImageWrapper) {
        lightboxImageWrapper.classList.add('is-zoomed');
      }
    }

    if (lightboxZoomLevelText) {
      lightboxZoomLevelText.textContent = `${Math.round(currentZoom * 100)}%`;
    }
  }

  function setZoom(newZoom, animate = true) {
    currentZoom = Math.min(Math.max(newZoom, 1.0), 3.5);
    if (currentZoom === 1.0) {
      panX = 0;
      panY = 0;
    }
    updateZoomTransform(animate);
  }

  function resetZoom() {
    setZoom(1.0, true);
  }

  if (lightboxZoomInBtn) {
    lightboxZoomInBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setZoom(currentZoom + 0.5, true);
    });
  }

  if (lightboxZoomOutBtn) {
    lightboxZoomOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setZoom(currentZoom - 0.5, true);
    });
  }

  if (lightboxZoomToggleBtn) {
    lightboxZoomToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      setZoom(currentZoom > 1.05 ? 1.0 : 2.0, true);
    });
  }

  if (lightboxZoomResetBtn) {
    lightboxZoomResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetZoom();
    });
  }

  // Zoom on Image Double-Click & Wheel
  if (lightboxImageWrapper) {
    lightboxImageWrapper.addEventListener('wheel', (e) => {
      if (!lightboxOverlay || !lightboxOverlay.classList.contains('is-active')) return;
      e.preventDefault();
      const zoomFactor = e.deltaY < 0 ? 0.25 : -0.25;
      setZoom(currentZoom + zoomFactor, false);
    }, { passive: false });

    lightboxImageWrapper.addEventListener('dblclick', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (currentZoom > 1.1) {
        resetZoom();
      } else {
        setZoom(2.2, true);
      }
    });

    // Mouse-down drag panning when zoomed
    lightboxImageWrapper.addEventListener('mousedown', (e) => {
      if (e.button !== 0 || currentZoom <= 1.0) return;
      isPanning = true;
      hasPanned = false;
      panStartX = e.clientX;
      panStartY = e.clientY;
      panStartOffsetX = panX;
      panStartOffsetY = panY;
      lightboxImageWrapper.classList.add('is-panning');
      e.preventDefault();
    });

    window.addEventListener('mousemove', (e) => {
      if (!isPanning || currentZoom <= 1.0) return;
      const deltaX = e.clientX - panStartX;
      const deltaY = e.clientY - panStartY;
      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        hasPanned = true;
      }
      panX = panStartOffsetX + deltaX;
      panY = panStartOffsetY + deltaY;
      updateZoomTransform(false);
    });

    function stopPanning() {
      if (!isPanning) return;
      isPanning = false;
      lightboxImageWrapper.classList.remove('is-panning');
      updateZoomTransform(true);
    }

    window.addEventListener('mouseup', stopPanning);
  }

  function renderLightboxSlide(index, animate = true) {
    if (!activeLightboxImages || activeLightboxImages.length === 0) return;
    const total = activeLightboxImages.length;
    activeLightboxIndex = (index + total) % total;
    const currentItem = activeLightboxImages[activeLightboxIndex];

    // Reset zoom state on each slide change
    resetZoom();

    if (lightboxCounter) {
      lightboxCounter.textContent = `${String(activeLightboxIndex + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    }

    if (lightboxCaption) {
      lightboxCaption.textContent = currentItem.caption || '';
    }

    // Prev / Next button visibility
    if (lightboxPrevBtn && lightboxNextBtn) {
      if (total <= 1) {
        lightboxPrevBtn.style.display = 'none';
        lightboxNextBtn.style.display = 'none';
      } else {
        lightboxPrevBtn.style.display = 'flex';
        lightboxNextBtn.style.display = 'flex';
      }
    }

    if (lightboxImg) {
      const imgSrc = currentItem.image || currentItem.src;
      if (animate) {
        lightboxImg.classList.add('is-transitioning');
        setTimeout(() => {
          lightboxImg.src = imgSrc;
          lightboxImg.alt = currentItem.caption || 'Expanded portfolio visual';
          lightboxImg.onload = () => {
            lightboxImg.classList.remove('is-transitioning');
          };
          setTimeout(() => {
            lightboxImg.classList.remove('is-transitioning');
          }, 120);
        }, 150);
      } else {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = currentItem.caption || 'Expanded portfolio visual';
      }
    }
  }

  function openLightbox(imagesList, initialIndex = 0) {
    if (!imagesList || imagesList.length === 0 || !lightboxOverlay) return;
    activeLightboxImages = imagesList;
    renderLightboxSlide(initialIndex, false);
    lightboxOverlay.classList.add('is-active');
    lightboxOverlay.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    if (!lightboxOverlay) return;
    lightboxOverlay.classList.remove('is-active');
    lightboxOverlay.setAttribute('aria-hidden', 'true');
    resetZoom();
    // Exit native fullscreen if active
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      const el = lightboxOverlay || document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => {});
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);
  if (lightboxFullscreenBtn) lightboxFullscreenBtn.addEventListener('click', toggleFullscreen);

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      renderLightboxSlide(activeLightboxIndex - 1);
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      renderLightboxSlide(activeLightboxIndex + 1);
    });
  }

  // Lightbox Touch Swipe Support (when not zoomed)
  if (lightboxImageWrapper) {
    let lbTouchStartX = 0;
    let lbTouchEndX = 0;

    lightboxImageWrapper.addEventListener('touchstart', (e) => {
      if (currentZoom > 1.0) return;
      lbTouchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxImageWrapper.addEventListener('touchend', (e) => {
      if (currentZoom > 1.0) return;
      lbTouchEndX = e.changedTouches[0].screenX;
      if (lbTouchEndX < lbTouchStartX - 45) {
        renderLightboxSlide(activeLightboxIndex + 1);
      } else if (lbTouchEndX > lbTouchStartX + 45) {
        renderLightboxSlide(activeLightboxIndex - 1);
      }
    }, { passive: true });
  }

  // Keyboard navigation & Zoom shortcuts for Lightbox
  window.addEventListener('keydown', (e) => {
    if (lightboxOverlay && lightboxOverlay.classList.contains('is-active')) {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        renderLightboxSlide(activeLightboxIndex - 1);
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        renderLightboxSlide(activeLightboxIndex + 1);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        setZoom(currentZoom + 0.5, true);
      } else if (e.key === '-' || e.key === '_') {
        e.preventDefault();
        setZoom(currentZoom - 0.5, true);
      } else if (e.key === '0' || e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        resetZoom();
      }
    }
  });

  // --- 9. About & Practice CV Modal ---
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

  // --- 10. Global Escape Key Listener for Modals ---
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (lightboxOverlay && lightboxOverlay.classList.contains('is-active')) {
        closeLightbox();
        return;
      }
      closeContactDrawer();
      closeCaseStudy();
      closeAboutModal();
      toggleMobileMenu(false);
    }
  });

  // --- 11. IntersectionObserver Scroll Reveal ---
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
