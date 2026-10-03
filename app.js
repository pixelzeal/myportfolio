/**
 * MAX PRATT PORTFOLIO — BESPOKE KINETIC INTERACTIONS
 * Swiss Modernist Layout & Motion Architecture
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Project Showcase Database ---
  const projectsData = {
    edenhouse: {
      title: 'Eden House',
      category: 'Concept Proposal • Luxury Real Estate Platform',
      client: 'Eden House',
      year: '2024',
      discipline: 'UX/UI Design & Digital Experience',
      scope: 'Website Strategy, Information Architecture, Property Discovery, Responsive Experience',
      liveUrl: 'https://www.edenhouse.ae/en',
      location: 'Dubai, U.A.E.',
      description: 'A proposal to reimagine the Eden House digital experience as a central gateway for the brand’s growing portfolio of luxury residences. The concept introduces a premium property discovery experience that allows prospective buyers to explore multiple developments while seamlessly transitioning into dedicated property detail pages such as Eden House Al Satwa.',

      heroImage: 'images/eden-house-hero.jpg',

      editorialSplit: {
        col1Heading: '01 / The Brief',
        col1Text: 'Eden House required a digital experience capable of showcasing multiple luxury developments through a unified platform. The proposal focused on creating a central destination where users could discover properties including Marasi, Za’abeel, DIFC, The Canal, Al Satwa, and The Park while maintaining the distinct identity of each development.',

        col2Heading: '02 / The Challenge',
        col2Text: 'The challenge was balancing portfolio-level exploration with property-specific storytelling. Users needed to quickly compare developments, filter homes based on their preferences, and access detailed property information without feeling lost within a complex real estate ecosystem.',

    /*     images: [
          {
            image: 'images/eden-house-editorial-01.jpg',
            caption: 'Property Gateway Experience — Multi-Development Discovery'
          },
          {
            image: 'images/eden-house-editorial-02.jpg',
            caption: 'Eden House Collection — Portfolio Navigation System'
          }
        ] */
      },

      approach: {
        col1Heading: '01 / Our Approach',
        col1Text: 'We structured the experience around a property discovery journey beginning with lifestyle aspirations rather than listings. Visitors can explore developments through location, bedroom count, and budget preferences before diving into individual property experiences.',

        col2Heading: '02 / Property-Led Storytelling',
        col2Text: 'Each development was treated as a premium destination with its own narrative, amenities, architecture, and lifestyle proposition. The design system ensures consistency across all developments while allowing every property to maintain a unique visual identity.',

        /*     images: [
              {
                image: 'images/eden-house-approach-01.jpg',
                caption: 'Property Discovery Framework & User Journey Mapping'
              }
            ] */
      },

      result: {
        text: 'The proposal transformed Eden House from a traditional property showcase into a scalable luxury real estate platform capable of supporting multiple developments, future launches, and personalized property discovery journeys while maintaining a premium brand presence throughout the experience.'
      },

      splitFeature: {
        image: 'images/eden-house-al-satwa-feature.jpg',
        eyebrow: 'EDEN HOUSE AL SATWA',
        quote: 'More than an address. A refined approach to modern luxury living.',
        text: 'As part of the proposal, a dedicated property detail experience was designed for Eden House Al Satwa. The page highlights architecture, amenities, location advantages, and lifestyle benefits while providing clear pathways toward registration and availability enquiries.',

        metrics: [
          { label: 'Villas', value: '32' },
          { label: 'Price From', value: '2.5M AED' },
          { label: 'Location', value: 'Jumeirah' }
        ],

        media: [
          {
            type: 'video',
            src: 'images/eden-house.mp4',
            poster: 'images/eden-house-split-feature-video-thumb.jpg',
            caption: 'Eden House Visual Walkthrough',
            badge: 'VIDEO WALKTHROUGH'
          },
          {
            type: 'video',
            src: 'images/eden-house-property-detail.mp4',
            poster: 'images/eden-house-al-satwa-split-feature-thumb.jpg',
            caption: 'Al Satwa Property Detail Experience',
            badge: 'VIDEO WALKTHROUGH'
          }
        ]
      },

      carousel: [
        {
          image: 'images/eden-house-feature-01.jpg',
          caption: 'World-Class Gym Facilities'
        },
        {
          image: 'images/eden-house-feature-02.jpg',
          caption: 'Safe Outdoor Kids Pool & Play Area'
        },
        {
          image: 'images/eden-house-feature-03.jpg',
          caption: 'Infinity Pool with Panoramic Sea Views'
        }
      ],

      deliverablesList: [
        {
          num: '01',
          title: 'Property Discovery Gateway',
          desc: 'Designed a centralized platform connecting multiple Eden House developments through a seamless discovery experience.'
        },
        {
          num: '02',
          title: 'Advanced Property Search',
          desc: 'Created filtering journeys based on location, bedroom count, and budget preferences.'
        },
        {
          num: '03',
          title: 'Al Satwa Property Experience',
          desc: 'Designed a dedicated property detail page showcasing architecture, amenities, pricing, and availability.'
        },
        {
          num: '04',
          title: 'Interactive Location Experience',
          desc: 'Integrated nearby destinations and neighborhood exploration through map-based interactions.'
        },
        {
          num: '05',
          title: 'Lead Generation & Registration Flows',
          desc: 'Optimized enquiry and registration experiences to support sales and community engagement.'
        }
      ],

      galleryHeading: 'A collection of distinguished addresses',

      galleryDescription: 'The Eden House proposal focused on creating a premium ecosystem for luxury property discovery. From the portfolio gateway experience to the dedicated Al Satwa property page, every touchpoint was designed to showcase architecture, lifestyle amenities, location advantages, and the elevated living experience associated with the Eden House brand.',

      galleryAsymmetric: [
        {
          image: 'images/eden-house-gallery-01.jpg',
          caption: 'Eden House Portfolio Gateway'
        },
        {
          image: 'images/eden-house-gallery-02.jpg',
          caption: 'Property Search & Discovery Experience'
        },
        {
          image: 'images/eden-house-gallery-03.jpg',
          caption: 'Al Satwa Property Overview'
        },
        {
          image: 'images/eden-house-gallery-04.jpg',
          caption: 'Luxury Amenities & Lifestyle Showcase'
        },
        {
          image: 'images/eden-house-gallery-05.jpg',
          caption: 'Location & Neighborhood Exploration'
        },
        {
          image: 'images/eden-house-gallery-06.jpg',
          caption: 'Location & Neighborhood Exploration'
        }
      ],

      prevId: 'visitdubai',
      nextId: 'wellafi'
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
        col2Text: 'Every interaction was designed to guide prospective buyers naturally through residence collections, amenities, floor plans, and location highlights while reducing friction in the enquiry journey.',
        images: [
          { image: 'images/dubai-harbour-gallery-01.jpg', caption: 'Waterfront Elevation — Marina Skyline Perspective' },
          { image: 'images/dubai-harbour-gallery-02.jpg', caption: 'Architectural Façade — Daylight Refraction Study' }
        ]
      },
      approach: {
        col1Heading: '01 / Our Approach',
        col1Text: 'We built the platform around a clear visual hierarchy — property photography leads every page, with supporting content introduced progressively as the user engages deeper. Whitespace and editorial typography reinforce the premium nature of the development.',
        col2Heading: '02 / Design System',
        col2Text: 'A comprehensive design system was established from the outset, covering typography scales, interactive states, colour tokens, and grid structures. This ensures consistency across every touchpoint and accelerates future design and development cycles.',
        images: [
          { image: 'images/dubai-harbour-feature.jpg', caption: 'Design System — Component Architecture Overview' }
        ]
      },
      result: {
        text: 'The Dubai Harbour Residences digital platform launched to immediate commercial success, with enquiry rates exceeding projections within the first quarter. The experience has since become the benchmark for luxury real estate digital presence in the UAE market, recognised for its seamless blend of editorial storytelling and conversion-focused interaction design.'
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
            type: 'image',
            image: 'images/dubai-harbour-feature.jpg',
            caption: 'Architectural Façade & Daylight Refraction Perspective',
            badge: 'HIGH-RES CAPTURE'
          }
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
      galleryHeading: 'Residences shaped by light',
      galleryDescription: 'The gallery for Dubai Harbour Residences spans the amber-hued tower and its waterfront setting, the promenade-level retail colonnade, the elevated pool terraces and the residents’ wellness floors. Interior renders show the arrival lobby, open-plan living and dining spaces, principal bedrooms and marble bathrooms across the one to five-bedroom residences.',
      galleryAsymmetric: [
        {
          image: 'images/dubai-harbour-gallery-01.jpg',
          caption: 'Waterfront Elevation & Marina Skyline'
        },
        {
          image: 'images/dubai-harbour-gallery-02.jpg',
          caption: 'Architectural Façade & Daylight Refraction'
        },
        {
          image: 'images/dubai-harbour-gallery-03.jpg',
          caption: 'Responsive view'
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
            poster: 'images/jp-video-poster.png',
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
      nextId: 'visit-dubai'
    },
    'visit-dubai': {
      title: 'Visit Dubai',
      category: 'Travel Experience &bull; Mobile App Innovation',
      client: 'Dubai Department of Economy & Tourism',
      year: '2024',
      discipline: 'Product Strategy & UX/UI Design',
      scope: 'Feature Ideation, User Experience Design, Mobile App Design, Prototyping',
      location: 'Dubai, U.A.E.',
      description: 'A concept proposal developed as part of a strategic product pitch for the Visit Dubai mobile application. The objective was to enhance visitor onboarding, simplify travel planning, improve destination discovery, and create a more personalized experience through intelligent assistance, contextual services, and social travel features.',
      heroImage: 'images/visit-dubai-hero.jpg',

      editorialSplit: {
        col1Heading: '01 / Personalized Visitor Journeys',
        col1Text: 'The proposal introduced a tailored onboarding experience that identifies whether users are residents or visitors. This simple distinction enables the app to surface more relevant content, services, events, and recommendations based on individual needs and travel intent.',
        col2Heading: '02 / The Digital Travel Companion',
        col2Text: 'Modern travelers expect immediate answers and seamless access to services. The concept reimagined Visit Dubai as a proactive travel companion capable of assisting users before arrival, during their stay, and throughout their exploration of the city.'
      },

      splitFeature: {
        image: 'images/visit-dubai-feature.jpg',
        eyebrow: 'SMARTER TRAVEL EXPERIENCES',
        quote: 'Helping visitors discover, navigate, and experience Dubai with confidence.',
        text: 'The proposed experience combines AI-powered assistance, travel utilities, social trip planning, location-based discovery, and immersive engagement features to create a unified destination companion for every traveler.',
        metrics: [
          { label: 'User Types', value: '2' },
          { label: 'Feature Concepts', value: '10+' },
          { label: 'Experience', value: 'Mobile First' }
        ],

        media: [
          {
            type: 'video',
            src: 'images/vd-onboarding-new.mp4',
            poster: 'images/vd-video-poster.jpg',
            caption: 'Resident vs Visitor Personalized Onboarding',
            badge: 'ONBOARDING'
          },
          {
            type: 'video',
            src: 'images/vd-home-experience.mp4',
            poster: 'images/vd-video-poster.jpg',
            caption: 'Useful Helpers & Quick Actions Dashboard',
            badge: 'HOME EXPERIENCE'
          },
          {
            type: 'video',
            src: 'images/vd-chatbot.mp4',
            poster: 'images/vd-video-poster-chat.jpg',
            caption: 'AI Travel Assistant & Conversational Support',
            badge: 'CHATBOT'
          },
          {
            type: 'video',
            src: 'images/vd-more.mp4',
            poster: 'images/vd-video-poster-more.jpg',
            caption: 'Travel Services & Utility Hub',
            badge: 'MORE MENU'
          },
          {
            type: 'image',
            image: 'images/visit-dubai-feature-05.jpg',
            caption: 'Get Started Journey & Travel Essentials',
            badge: 'TRAVEL SERVICES'
          },
          {
            type: 'video',
            src: 'images/vd-invite-split-bill.mp4',
            poster: 'images/vd-video-poster-social-travel.jpg',
            caption: 'Group Trip Planning & Cost Splitting',
            badge: 'SOCIAL TRAVEL'
          },
          {
            type: 'video',
            src: 'images/vd-wayfinder.mp4',
            poster: 'images/vd-video-poster-location-discovery.jpg',
            caption: 'Wayfinder AR Navigation Experience',
            badge: 'LOCATION DISCOVERY'
          },
          {
            type: 'video',
            src: 'images/vd-welcome-pack.mp4',
            poster: 'images/vd-video-poster-welcome-pack.jpg',
            caption: 'Welcome Pack for First-Time Visitors',
            badge: 'CULTURAL GUIDE'
          },
          {
            type: 'image',
            image: 'images/visit-dubai-feature-09.jpg',
            caption: 'Festival Notifications & Event Discovery',
            badge: 'SMART ALERTS'
          },
          {
            type: 'image',
            image: 'images/visit-dubai-feature-10.jpg',
            caption: 'Dubai Frame Photo Filter Experience',
            badge: 'ENGAGEMENT'
          },
          {
            type: 'image',
            image: 'images/visit-dubai-feature-11.jpg',
            caption: 'VR Ticket Hunt & Landmark Rewards',
            badge: 'GAMIFICATION'
          }
        ]
      },

      carousel: [
        {
          image: 'images/visit-dubai-carousel-01.jpg',
          caption: 'Personalized Travel Onboarding Experience'
        }
      ],

      deliverablesList: [
        {
          num: '01',
          title: 'Personalized User Onboarding',
          desc: 'Introduced resident and visitor journeys to deliver contextually relevant content and recommendations.'
        },
        {
          num: '02',
          title: 'AI-Powered Travel Assistant',
          desc: 'Designed a conversational experience capable of answering travel questions and surfacing essential services.'
        },
        {
          num: '03',
          title: 'Travel Services Ecosystem',
          desc: 'Unified visa assistance, eSIM activation, bookings, transportation, currency conversion, and emergency support.'
        },
        {
          num: '04',
          title: 'Collaborative Trip Planning',
          desc: 'Enabled travelers to invite companions, manage itineraries, and split trip expenses seamlessly.'
        },
        {
          num: '05',
          title: 'AR & Gamified Discovery Features',
          desc: 'Proposed immersive experiences including Wayfinder navigation, Dubai Frame filters, and landmark reward hunts.'
        }
      ],

      galleryHeading: 'Reimagining the visitor experience',

      galleryDescription: 'The concept explored how Visit Dubai could evolve from a destination guide into a comprehensive travel companion. By combining personalized onboarding, AI assistance, practical travel utilities, social planning tools, and immersive discovery experiences, the proposal aimed to support visitors throughout every stage of their journey.',

      galleryAsymmetric: [
        {
          image: 'images/visit-dubai-gallery-01.jpg',
          caption: 'Resident & Visitor Experience Selection'
        },
        {
          image: 'images/visit-dubai-gallery-02.jpg',
          caption: 'AI Travel Assistant Conversations'
        },
        {
          image: 'images/visit-dubai-gallery-03.jpg',
          caption: 'Travel Services & Utility Hub'
        },
        {
          image: 'images/visit-dubai-gallery-04.jpg',
          caption: 'Group Trip Planning & Expense Sharing'
        },
        {
          image: 'images/visit-dubai-gallery-05.jpg',
          caption: 'Wayfinder & Interactive Discovery Features'
        }
      ],

      prevId: 'jumeriahpeninsula',
      nextId: 'wealthwave'
    },
oceanquest: {
  title: 'OceanQuest',
  category: 'Concept &bull; Interactive Learning Experience',
  client: 'Self-Initiated Concept',
  year: '2024',
  discipline: 'Game UI, UX Design & Visual Systems',
  scope: 'UX Research, Game Interface Design, Learning Experience Design, Prototyping',
  location: 'Concept Project',
  description: 'OceanQuest is a concept for an immersive educational platform that combines game-inspired interfaces, conversational AI, and interactive learning modules to transform knowledge discovery into an engaging adventure. Inspired by modern game HUD systems and exploration mechanics, the experience encourages curiosity through progression, rewards, and visual storytelling.',
  heroImage: 'images/ocean-quest-kb-hero.jpg',
  editorialSplit: {
    col1Heading: '01 / The Brief',
    col1Text: 'Traditional learning platforms often rely on static content and conventional navigation patterns. The goal was to explore how game-inspired interfaces could create a more engaging and memorable learning experience while maintaining clarity and accessibility.',

    col2Heading: '02 / The Challenge',
    col2Text: 'The challenge was balancing immersive visuals with educational usability. The interface needed to feel futuristic and exploratory without compromising comprehension, navigation, or content discoverability.'
    ,

    images: [
      {
        image: 'images/ocean-quest-kb-exploration.jpg',
        caption: 'Research into Game HUD Systems & Mission Interfaces'
      },
      {
        image: 'images/ocean-quest-kb-exploration-wireframe.jpg',
        caption: 'Exploration of Learning Progression & Reward Mechanics'
      },
      {
        image: 'images/ocean-quest-kb-exploration-wireframe2.jpg',
        caption: 'Exploration of Learning Progression & Reward Mechanics'
      }
    ]
  },

  approach: {
    col1Heading: '01 / Research & Exploration',
    col1Text: 'The concept was informed by extensive research into game UI patterns, sci-fi control systems, exploration mechanics, mission dashboards, and progression frameworks. Multiple visual directions were explored before converging on an underwater exploration theme that naturally aligned with discovery and learning.',

    col2Heading: '02 / Designing for Engagement',
    col2Text: 'The experience was structured around progression, achievement, and exploration. Learners interact with an AI guide, complete educational modules, track progress, answer quizzes, and unlock new knowledge through a highly visual journey.',

    images: [
      {
        image: 'images/ocean-quest-kb-exploration-reference1.jpg',
        caption: 'Visual Design Exploration & Interface Evolution'
      },
      {
        image: 'images/ocean-quest-kb-exploration-reference2.jpg',
        caption: 'Visual Design Exploration & Interface Evolution'
      }
    ]
  },

  result: {
    text: 'The final concept demonstrates how educational platforms can borrow principles from game design to create richer learning experiences. OceanQuest combines conversational assistance, interactive assessments, visual progression systems, and immersive storytelling into a cohesive product vision.'
  },

  splitFeature: {
    image: 'images/oceanquest-feature.jpg',
    eyebrow: 'LEARNING THROUGH EXPLORATION',
    quote: 'Transforming knowledge into an interactive adventure.',
    text: 'OceanQuest reimagines digital learning through AI guidance, visual progression systems, gamified assessments, and immersive environments inspired by underwater exploration.',

    metrics: [
      { label: 'Modules', value: '5+' },
      { label: 'Interface Versions', value: 'Multiple' },
      { label: 'Focus', value: 'Gamified Learning' }
    ],

    media: [
      {
        type: 'video',
        src: 'images/oq-kb-final.mp4',
        poster: 'images/oq-kb-video-final-thumb.jpg',
        caption: 'AI Learning Companion Dashboard',
        badge: 'HOME'
      },
      {
        type: 'video',
        src: 'images/oq-kb-old.mp4',
        poster: 'images/oq-kb-video-old-thumb.jpg',
        caption: 'Knowledge Assistant & FAQ Experience',
        badge: 'AI ASSISTANT'
      },
      {
        type: 'video',
        src: 'images/oq-kb-old2.mp4',
        poster: 'images/oq-kb-video-old2-thumb.jpg',
        caption: 'Training Module Progress Tracking',
        badge: 'PROGRESSION'
      }
    ]
  },

  carousel: [
    {
      image: 'images/ocean-quest-kb-feature-01.jpg',
      caption: 'AI Companion & Learning Dashboard'
    },
    {
      image: 'images/ocean-quest-kb-feature-02.jpg',
      caption: 'Interactive Training & Progress System'
    },
    {
      image: 'images/ocean-quest-kb-feature-03.jpg',
      caption: 'Gamified Assessment Experience'
    },
    {
      image: 'images/ocean-quest-kb-feature-04.jpg',
      caption: 'Immersive Visual Design Language'
    }
  ],

  deliverablesList: [
    {
      num: '01',
      title: 'Game-Inspired Learning Framework',
      desc: 'Designed an educational experience based on exploration, progression, and achievement systems.'
    },
    {
      num: '02',
      title: 'Conversational Knowledge Assistant',
      desc: 'Created an AI-powered interface for answering questions and guiding learners through content.'
    },
    {
      num: '03',
      title: 'Interactive Assessment System',
      desc: 'Developed quiz and training experiences with visual feedback and progression tracking.'
    },
    {
      num: '04',
      title: 'Immersive Visual Design Language',
      desc: 'Established a cohesive sci-fi inspired design system influenced by modern game interfaces.'
    },
    {
      num: '05',
      title: 'Multi-Screen Prototype',
      desc: 'Produced multiple interface concepts and user flows to validate the learning experience.'
    }
  ],

  galleryHeading: 'Exploring the future of learning',

  galleryDescription: 'OceanQuest explores how game design principles can enhance education through visual progression, conversational guidance, interactive assessments, and immersive storytelling. The project evolved through multiple design iterations inspired by modern game interfaces, mission systems, and exploratory experiences.',

  galleryAsymmetric: [
    {
      image: 'images/ocean-quest-kb-gallery-01.jpg',
      caption: 'AI Knowledge Companion'
    },
    {
      image: 'images/ocean-quest-kb-gallery-02.jpg',
      caption: 'Training Progress Interface'
    },
    {
      image: 'images/ocean-quest-kb-gallery-03.jpg',
      caption: 'Interactive Assessment Experience'
    },
    {
      image: 'images/ocean-quest-kb-gallery-04.jpg',
      caption: 'Game HUD Design Exploration'
    },
    {
      image: 'images/ocean-quest-kb-gallery-05.jpg',
      caption: 'Learning Journey & Progression System'
    },
    {
      image: 'images/ocean-quest-kb-gallery-06.jpg',
      caption: 'Immersive Visual Design Language'
    }
  ],

  prevId: 'edenhouse',
  nextId: 'visitdubai'
},
fmf: {
  title: 'Future Minerals Forum',
  category: 'Enterprise Platform &bull; Global Industry Forum',
  client: 'Future Minerals Forum',
  year: '2025',
  discipline: 'UX/UI Design & Digital Experience',
  scope: 'Design Audit, UX Strategy, Benchmarking, Wireframing, Prototyping, Design System',
  liveUrl: 'https://www.futuremineralsforum.com/',
  location: 'Riyadh, Saudi Arabia',

  description: 'A comprehensive redesign initiative for the Future Minerals Forum digital platform. The project began as a competitive pitch involving design audits, user experience benchmarking, information architecture studies, wireframes, and visual exploration. The objective was to transform a conference-focused website into a scalable global platform capable of supporting year-round engagement, thought leadership, partnerships, and event experiences for governments, investors, and industry leaders. The Future Minerals Forum serves as a global platform connecting governments, investors, industry leaders, and innovators to strengthen mineral value chains and support sustainable mineral development.',

  heroImage: 'images/fmf-hero.jpg',

  editorialSplit: {
    col1Heading: '01 / The Brief',
    col1Text: 'Future Minerals Forum had evolved beyond a traditional annual event into a global platform bringing together governments, investors, industry leaders, and innovators. The challenge was to rethink the digital experience to better communicate the scale, vision, initiatives, knowledge resources, and ongoing impact of the forum.',

    col2Heading: '02 / The Challenge',
    col2Text: 'The existing experience contained a significant volume of content spanning events, speakers, strategic initiatives, reports, media, partnerships, and investment programs. The redesign needed to improve discoverability, simplify navigation, establish clearer content hierarchies, and create a premium digital experience aligned with the forum’s international stature.',

    images: [
      {
        image: 'images/FMF-exploration-01.jpg',
        caption: 'Competitive Benchmarking & Industry Analysis'
      },
      {
        image: 'images/FMF-exploration-02.jpg',
        caption: 'Information Architecture & Content Audit'
      },
            {
        image: 'images/FMF-exploration-03.jpg',
        caption: 'Information Architecture & Content'
      }
    ]
  },

  approach: {
    col1Heading: '01 / Research & Benchmarking',
    col1Text: 'The engagement began with a detailed review of the existing platform, competitor benchmarking, stakeholder requirements, and content ecosystem analysis. Multiple event, conference, government, and industry platforms were studied to identify best practices and opportunities for differentiation.',

    col2Heading: '02 / Experience Transformation',
    col2Text: 'Several design directions were explored through moodboards, wireframes, low-fidelity concepts, and interactive prototypes. The resulting framework established a scalable foundation capable of supporting future forum editions, strategic initiatives, knowledge hubs, media content, and year-round engagement.',

    images: [
      {
        image: 'images/FMF-exploration-04.jpg',
        caption: 'Moodboards, Wireframes & Early Experience Concepts'
      },
      {
        image: 'images/FMF-exploration-05.jpg',
        caption: 'Moodboards, Wireframes & Early Experience Concepts'
      },
      {
        image: 'images/FMF-exploration-06.jpg',
        caption: 'Moodboards, Wireframes & Early Experience Concepts'
      }
    ]
  },

  result: {
    text: 'The redesign established a modern digital foundation for Future Minerals Forum, improving content organization, storytelling, navigation, and scalability. The platform continues to evolve through ongoing enhancements, feature additions, and iterative improvements supporting the forum’s expanding global presence.'
  },

  splitFeature: {
    image: 'images/fmf-feature.jpg',
    eyebrow: 'FROM EVENT WEBSITE TO GLOBAL PLATFORM',
    quote: 'Designing a digital ecosystem for the future of minerals.',
    text: 'The redesign focused on creating a future-ready platform capable of supporting conference experiences, knowledge sharing, strategic initiatives, investment programs, media content, and international stakeholder engagement within a unified ecosystem.',

    metrics: [
      { label: 'Countries', value: '170+' },
      { label: 'Participants', value: '21K+' },
      { label: 'Speakers', value: '450+' }
    ],

    media: [
      {
        type: 'image',
        image: 'images/FMF-exploration-07.jpg',
        caption: 'Website Audit & Experience Evaluation',
        badge: 'AUDIT'
      },
      {
        type: 'image',
        image: 'images/FMF-exploration-08.jpg',
        caption: 'Navigation & Information Architecture',
        badge: 'UX STRATEGY'
      },
      {
        type: 'image',
        image: 'images/FMF-exploration-09.jpg',
        caption: 'Wireframes & Experience Flows',
        badge: 'WIREFRAMES'
      },
      {
        type: 'image',
        image: 'images/FMF-exploration-10.jpg',
        caption: 'Visual Exploration & Moodboards',
        badge: 'VISUAL DESIGN'
      },
      {
        type: 'video',
        src: 'images/fmf-home.mp4',
        poster: 'images/fmf-video1-poster.jpg',
        caption: 'Interactive Prototype Concepts',
        badge: 'PROTOTYPING'
      },
      {
        type: 'video',
        src: 'images/fmf-home02.mp4',
        poster: 'images/fmf-video2-poster.jpg',
        caption: 'Final Responsive Experience',
        badge: 'DELIVERY'
      },
     {
        type: 'video',
        src: 'images/fmf-home03.mp4',
        poster: 'images/fmf-video3-poster.jpg',
        caption: 'Final Responsive Experience',
        badge: 'DELIVERY'
      }
    ]
  },

  carousel: [
    {
      image: 'images/FMF-exploration-11.jpg',
      caption: 'Design Audit & User Journey Evaluation'
    },
    {
      image: 'images/FMF-exploration-12.jpg',
      caption: 'Design Audit & Opportunity Mapping'
    },
    {
      image: 'images/FMF-exploration-13.jpg',
      caption: 'Wireframing & Content Architecture'
    },
    {
      image: 'images/FMF-exploration-14.jpg',
      caption: 'Prototype Validation & Experience Design'
    },
    {
      image: 'images/FMF-exploration-15.jpg',
      caption: 'Prototyping & Interactive Experience Concepts'
    },
    {
      image: 'images/FMF-exploration-16.jpg',
      caption: 'Prototyping & Interactive Experience Concepts'
    },
    {
      image: 'images/FMF-exploration-17.jpg',
      caption: 'Prototyping & Interactive Experience Concepts'
    },
    {
      image: 'images/FMF-exploration-18.jpg',
      caption: 'Prototyping & Interactive Experience Concepts'
    }
  ],

  deliverablesList: [
    {
      num: '01',
      title: 'Comprehensive UX Audit',
      desc: 'Evaluated the existing platform to identify usability issues, content challenges, and optimization opportunities.'
    },
    {
      num: '02',
      title: 'Benchmarking & Competitive Analysis',
      desc: 'Studied global conference, government, and industry platforms to establish best-practice recommendations.'
    },
    {
      num: '03',
      title: 'Information Architecture Redesign',
      desc: 'Restructured navigation and content hierarchies to improve discoverability and scalability.'
    },
    {
      num: '04',
      title: 'Wireframes & Interactive Prototypes',
      desc: 'Developed multiple experience concepts and user journeys for stakeholder review and validation.'
    },
    {
      num: '05',
      title: 'Visual Design System',
      desc: 'Created a scalable visual framework supporting future events, initiatives, reports, media, and partner experiences.'
    }
  ],

  galleryHeading: 'Building a platform for global collaboration',

  galleryDescription: 'The Future Minerals Forum redesign explored how a large-scale international platform could better support events, knowledge sharing, investment opportunities, partnerships, media content, and strategic initiatives. The work included audits, benchmarking, wireframes, visual exploration, and ongoing design enhancements as the platform continues to evolve.',

  galleryAsymmetric: [
    {
      image: 'images/fmf-gallery-01.jpg',
      caption: 'Experience Audit & Recommendations'
    },
    {
      image: 'images/fmf-gallery-02.jpg',
      caption: 'Information Architecture Exploration'
    },
    {
      image: 'images/fmf-gallery-03.jpg',
      caption: 'Wireframe & User Flow Development'
    },
    {
      image: 'images/fmf-gallery-04.jpg',
      caption: 'Moodboards & Visual Direction'
    },
    {
      image: 'images/fmf-gallery-05.jpg',
      caption: 'Responsive Platform Design'
    },
    {
      image: 'images/fmf-gallery-06.jpg',
      caption: 'Responsive Platform Design'
    },
    {
      image: 'images/fmf-gallery-07.jpg',
      caption: 'Responsive Platform Design'
    },    
    {
      image: 'images/fmf-gallery-08.jpg',
      caption: 'Responsive Platform Design'
    },
  ],

  prevId: 'oceanquest',
  nextId: 'visitdubai'
},
deepdivedubai: {
  title: 'Deep Dive Dubai',
  category: 'Experience Platform &bull; Luxury Adventure Tourism',
  client: 'Deep Dive Dubai',
  year: '2025',
  discipline: 'UX/UI Design & Experience Strategy',
  scope: 'Website Redesign, UX Research, Moodboards, User Flows, Prototyping, Motion Design',
  liveUrl: 'https://www.deepdivedubai.com/',
  location: 'Dubai, U.A.E.',

  description: 'A redesign proposal for Deep Dive Dubai, the world’s deepest diving pool and one of Dubai’s most unique adventure destinations. The project explored how a premium digital experience could better showcase diving experiences, memberships, learning programs, and booking journeys through immersive storytelling, interactive motion, and underwater-inspired visual design.' ,

  heroImage: 'images/deep-dive-hero.jpg',

  editorialSplit: {
    col1Heading: '01 / The Brief',
    col1Text: 'Deep Dive Dubai offers a collection of experiences ranging from scuba diving and freediving to specialized training, memberships, and underwater exploration. The goal was to create a richer digital experience capable of communicating the scale of the facility, its unique underwater city, and the variety of experiences available to visitors and certified divers alike. The facility features a 60m-deep underwater city and experiences for beginners through professional divers. :contentReference[oaicite:0]{index=0}',

    col2Heading: '02 / The Challenge',
    col2Text: 'The existing platform contained diverse user journeys including bookings, memberships, certifications, courses, offers, and visitor information. The challenge was creating a streamlined experience that inspires exploration while making it easy for users to discover the right activity, understand requirements, and complete bookings.'
    ,

    images: [
      {
        image: 'images/deep-dive-exploration-01.jpg',
        caption: 'Competitive Analysis & Adventure Tourism Benchmarking'
      },
      {
        image: 'images/deep-dive-exploration-02.jpg',
        caption: 'Underwater Experience Moodboards & Visual Research'
      }
    ]
  },

  approach: {
    col1Heading: '01 / Research & Inspiration',
    col1Text: 'Extensive research was conducted across underwater experiences, luxury tourism platforms, adventure brands, gaming interfaces, and immersive storytelling websites. Multiple moodboards and visual directions were explored before arriving at a cinematic underwater design language inspired by light, depth, and exploration.',

    col2Heading: '02 / Experience-First Design',
    col2Text: 'The redesign prioritized storytelling and conversion equally. Dedicated experience pages, membership journeys, offers, career opportunities, and booking flows were redesigned to provide visitors with clear pathways while maintaining a premium and immersive brand experience.',

    images: [
      {
        image: 'images/deep-dive-exploration-03.jpg',
        caption: 'Experience Architecture & Interactive Prototype Exploration'
      },
      {
        image: 'images/deep-dive-exploration-04.jpg',
        caption: 'Experience Architecture & Interactive Prototype Exploration'
      },
      {
        image: 'images/deep-dive-exploration-05.jpg',
        caption: 'Colors, Typography & Visual Design Exploration'
      },      
      {
        image: 'images/deep-dive-exploration-06.jpg',
        caption: 'Colors, Typography & Visual Design Exploration'
      },      
      {
        image: 'images/deep-dive-exploration-07.jpg',
        caption: 'Experience Architecture & Interactive Prototype Exploration'
      },
      {
        image: 'images/deep-dive-exploration-08.jpg',
        caption: 'Experience Architecture & Interactive Prototype Exploration'
      },
      {
        image: 'images/deep-dive-exploration-09.jpg',
        caption: 'Experience Architecture & Interactive Prototype Exploration'
      },
      {
        image: 'images/deep-dive-exploration-10.jpg',
        caption: 'Experience Architecture & Interactive Prototype Exploration'
      }
    ]
  },

  result: {
    text: 'The proposal established a scalable digital framework capable of supporting new experiences, membership programs, promotions, training courses, and future platform enhancements. Interactive prototypes featuring hover states, motion concepts, and immersive transitions helped communicate the vision for a modern underwater adventure platform.'
  },

  splitFeature: {
    image: 'images/deep-dive-feature.jpg',
    eyebrow: 'IMMERSIVE UNDERWATER EXPERIENCES',
    quote: 'Designing the digital gateway to the world’s most unique diving destination.',
    text: 'The concept reimagined Deep Dive Dubai as more than a booking platform. Through cinematic visuals, interactive storytelling, and conversion-focused journeys, the redesign positions every experience as an adventure waiting to be discovered.',

    metrics: [
      { label: 'Pool Depth', value: '60m' },
      { label: 'Water Volume', value: '14M L' },
      { label: 'Experience Types', value: '10+' }
    ],

    media: [
      {
        type: 'video',
        src: 'images/deep-dive-full-website.mp4',
        poster: 'images/deep-dive-full-website-video-poster.jpg',
        caption: 'Scuba Diving Experience Landing Page',
        badge: 'FULL PROTOTYPE'
      },
      {
        type: 'video',
        src: 'images/deep-dive-prototype.mp4',
        poster: 'images/deep-dive-homepage-video-poster.jpg',
        caption: 'Freediving Discovery Experience',
        badge: 'HOME PROTOTYPE'
      },
      {
        type: 'video',
        src: 'images/deep-dive-campaign-landing.mp4',
        poster: 'images/deep-dive-campaign-landing-video-poster.jpg',
        caption: 'Membership Programs & Benefits',
        badge: 'CAMPAINGN PAGE'
      },
      {
        type: 'video',
        src: 'images/deep-dive-campaign-landing2.mp4',
        poster: 'images/deep-dive-campaign-landing2-video-poster.jpg',
        caption: 'Offers & Promotions Experience',
        badge: 'CAMPAINGN PAGE2'
      }
    ]
  },

  carousel: [
    {
      image: 'images/deep-dive-feature-01.jpg',
      caption: 'Offers / Packages'
    },
    {
      image: 'images/deep-dive-feature-02.jpg',
      caption: 'Freediving, Training & Certification Programs'
    },
    {
      image: 'images/deep-dive-feature-03.jpg',
      caption: 'MembeNews Events'
    },
        {
      image: 'images/deep-dive-feature-04.jpg',
      caption: 'Search Results'
    },
        {
      image: 'images/deep-dive-feature-05.jpg',
      caption: 'About Us'
    },
        {
      image: 'images/deep-dive-feature-06.jpg',
      caption: 'Pricing'
    }
  ],

  deliverablesList: [
    {
      num: '01',
      title: 'UX Audit & Experience Benchmarking',
      desc: 'Evaluated the existing platform and benchmarked leading tourism, adventure, and experiential websites.'
    },
    {
      num: '02',
      title: 'Visual Exploration & Moodboards',
      desc: 'Developed multiple underwater-inspired visual directions to define the future experience.'
    },
    {
      num: '03',
      title: 'Dedicated Experience Pages',
      desc: 'Designed detailed journeys for scuba diving, freediving, training programs, and specialty experiences.'
    },
    {
      num: '04',
      title: 'Membership & Booking Experiences',
      desc: 'Created streamlined membership, offers, and booking flows optimized for conversion.'
    },
    {
      num: '05',
      title: 'Interactive Prototype System',
      desc: 'Built high-fidelity prototypes featuring hover interactions, animated transitions, and immersive navigation patterns.'
    }
  ],

  galleryHeading: 'Exploring the underwater digital experience',

  galleryDescription: 'The redesign explored how Deep Dive Dubai’s unique underwater environment could influence the digital experience itself. Through motion, immersive imagery, dedicated experience journeys, and interactive storytelling, the concept transformed a traditional tourism website into a destination-driven exploration platform. The project included extensive moodboard development, UX research, wireframing, visual exploration, and high-fidelity prototyping. Deep Dive Dubai is known for its underwater city, scuba and freediving experiences, training programs, and membership offerings. :contentReference[oaicite:1]{index=1}',

  galleryAsymmetric: [
    {
      image: 'images/deep-dive-gallery-01.jpg',
      caption: 'Underwater Experience Discovery'
    },
    {
      image: 'images/deep-dive-gallery-02.jpg',
      caption: 'Scuba Diving Landing Experience'
    },
    {
      image: 'images/deep-dive-gallery-03.jpg',
      caption: 'Freediving Program Exploration'
    },
    {
      image: 'images/deep-dive-gallery-04.jpg',
      caption: 'Membership & Community Journeys'
    },
    {
      image: 'images/deep-dive-gallery-05.jpg',
      caption: 'Booking Flow & Interactive Prototypes'
    }
  ],

  prevId: 'fmf',
  nextId: 'wellaffi'
},
wellafi: {
  title: 'Wellafi',
  category: 'Healthcare Platform &bull; Mobile Membership Experience',
  client: 'Wellafi',
  year: '2025',
  discipline: 'Lead Product & UX/UI Design',
  scope: 'Mobile App, Design System, Information Architecture, Service Design',
  location: 'Dubai, U.A.E.',
  metaExtra: [
    { label: 'Role', value: 'Senior UX/UI Designer' },
    { label: 'Platform', value: 'Mobile App' },
    { label: 'Market', value: 'UAE' },
    { label: 'Status', value: 'Pre-launch' }
  ],
  description: 'Designing a healthcare membership experience for the UAE. Wellafi is a healthcare platform that helps members discover providers, manage healthcare plans, book services, and access package benefits throughout their healthcare journey.',

  heroImage: 'images/wellafi-hero.jpg',

  sections: [
    {
      col1Heading: '01 / The Challenge',
      col1Text: 'Healthcare services are often fragmented across multiple providers and systems. Wellafi aimed to bring healthcare discovery, appointments, memberships, and package benefits into a single experience.',
      col2Heading: '02 / Benefit Utilization',
      col2Text: 'A key challenge was helping members understand and use healthcare package benefits over time, including services that become available months after purchase.',
      images: [
                {
          image: 'images/wellafi-packages-mindmap.jpg',
          caption: 'Package Flow Graphic & Benefit Eligibility System',
          fullHeight: true
        }
      ]
    },
    {
      col1Heading: '03 / My Role',
      col1Text: 'I led the end-to-end mobile app design process from initial strategy and discovery through to design systems, usability testing, and engineering handoff.',
      list: [
        'Stakeholder workshops',
        'Competitive analysis',
        'User journeys',
        'Information architecture',
        'Wireframing',
        'Prototyping',
        'UI design',
        'Design system',
        'Usability testing',
        'Developer handoff',
        'UAT support'
      ]
    },
    {
      col1Heading: '04 / Research & Discovery',
      col1Text: 'I reviewed healthcare platforms such as Thyrocare and PharmEasy to understand common healthcare discovery patterns, package structures, and booking experiences.',
      col2Heading: '05 / Strategic Insights',
      col2Text: 'This helped identify opportunities to create a more membership-focused healthcare journey with personalized plan tracking rather than purely transactional bookings.',
      images: (() => {
        const arr = [
          {
            image: 'images/wellafi-01.jpg',
            caption: 'Research Board & Discovery Patterns — Healthcare Benchmarking',
            fullHeight: true
          },
          {
            image: 'images/wellafi-02.jpg',
            caption: 'Competitor Package Structuring & Journey Mapping',
            fullHeight: true
          },
          {
            image: 'images/wellafi-03.jpg',
            caption: 'Research Board & Discovery Patterns — Healthcare Benchmarking',
            fullHeight: true
          },{
            image: 'images/wellafi-04.jpg',
            caption: 'Research Board & Discovery Patterns — Healthcare Benchmarking',
            fullHeight: true
          },{
            image: 'images/wellafi-05.jpg',
            caption: 'Research Board & Discovery Patterns — Healthcare Benchmarking',
            fullHeight: true
          }
        ];
        arr.imageMode = 'carousel';
        return arr;
      })()
    },
    {
      col1Heading: '06 / Information Architecture',
      col1Text: 'The experience was structured around three key areas to ensure intuitive navigation and clear separation of member needs:',
      pillars: [
        {
          title: 'Discover',
          text: 'Doctors, laboratories, radiology, home care, teleconsultation'
        },
        {
          title: 'Manage',
          text: 'Plans, packages, benefits, family members'
        },
        {
          title: 'Track',
          text: 'Appointments, notifications, transactions, records'
        }
      ],
      images: [
        {
          image: 'images/wellafi-ia.jpg',
          caption: 'Information Architecture Hierarchy & User Flow Diagram',
          fullHeight: true
        },
                {
          image: 'images/wellafi-wf-01.jpg',
          caption: 'Wireframe',
          fullHeight: true
        },
                {
          image: 'images/wellafi-wf-02.jpg',
          caption: 'Wireframe',
          fullHeight: true
        }
      ]
    },
    {
      col1Heading: 'Key Experience #1',
      col1Text: 'Healthcare Plans & Benefits — Unlike traditional healthcare apps focused on one-time bookings, Wellafi introduced healthcare plans that include consultations, screenings, and recurring services.',
      col2Heading: 'Eligibility & Timing',
      col2Text: 'Benefits become available based on eligibility and timing, helping members make full use of their package across their health journey.',
      images: [
        {
          image: 'images/wellafi-plan.jpg',
          caption: 'Healthcare Plans & Benefit Entitlement Screens',
          fullHeight: true
        },
                {
          image: 'images/wellafi-package.jpg',
          caption: 'Healthcare Plans & Benefit Entitlement Screens',
          fullHeight: true
        }
      ]
    },
    {
      col1Heading: 'Key Experience #2',
      col1Text: 'Search & Provider Discovery — Users can search across doctors, laboratories, and healthcare services through a simplified discovery experience.',
      col2Heading: 'Exploratory & Direct Search',
      col2Text: 'The discovery framework was optimized for both specific specialist lookups and open exploratory searches by condition or treatment type.',
      images: [
        {
          image: 'images/wellafi-search.jpg',
          caption: 'Specialist Search & Facility Discovery Experience',
          fullHeight: true
        },
        {
          image: 'images/wellafi-search-02.jpg',
          caption: 'Specialist Search & Facility Discovery Experience',
          fullHeight: true
        }
      ]
    },
    {
      col1Heading: 'Key Experience #3',
      col1Text: 'Appointment & Activity Management — Appointments are organised into Upcoming, Past, and Cancelled categories, giving users a clear overview of their healthcare activities.',
      col2Heading: 'Contextual Action',
      col2Text: 'Each appointment card provides instant access to preparation guides, location wayfinding, teleconsultation links, and calendar syncing.',
      images: [
        {
          image: 'images/deep-dive-exploration-06.jpg',
          caption: 'Appointment Schedules & Activity History Dashboard',
          fullHeight: true
        }
      ]
    },
    {
      col1Heading: '07 / Design System',
      col1Text: 'A scalable design system was created to ensure consistency across healthcare services, plans, notifications, and provider experiences.',
      col2Heading: 'Component System',
      col2Text: 'The system establishes atomic design foundations, typography scales, accessibility contrasts, and rich component states for complex medical data.',
      images: [
        {
          image: 'images/wellafi-design-system.jpg',
          caption: 'Design System & Component Library — Color Tokens, Typography & Data Cards',
          fullHeight: true
        }
      ]
    }
  ],

  result: {
    text: 'The project established a complete mobile healthcare ecosystem covering discovery, appointments, memberships, package benefits, payments, family management, and notifications. The design provided the foundation for the product’s future launch in the UAE healthcare market.'
  },

  prevId: 'deepdivedubai',
  nextId: 'edenhouse'
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

    // Dynamic fallback to ensure unbroken circular navigation across all projects
    const projectKeys = Object.keys(projectsData);
    const currentIdx = projectKeys.indexOf(projectId);

    let safePrevKey = data.prevId && projectsData[data.prevId] ? data.prevId : null;
    let safeNextKey = data.nextId && projectsData[data.nextId] ? data.nextId : null;

    if (!safePrevKey && currentIdx !== -1) {
      const prevIndex = (currentIdx - 1 + projectKeys.length) % projectKeys.length;
      safePrevKey = projectKeys[prevIndex];
    }
    if (!safeNextKey && currentIdx !== -1) {
      const nextIndex = (currentIdx + 1) % projectKeys.length;
      safeNextKey = projectKeys[nextIndex];
    }

    const prevProject = safePrevKey ? projectsData[safePrevKey] : null;
    const nextProject = safeNextKey ? projectsData[safeNextKey] : null;

    // Helper — renders an image group as a stacked list OR inline carousel
    // Usage in data: { images: [...], imageMode: 'carousel' | 'stack' (default) }
    // Per-image flag: { image: '...', caption: '...', fullHeight: true }
    function renderEditorialImages(items, group) {
      if (!items || !items.length) return '';
      const imageMode = items.imageMode || 'stack'; // imageMode is set on the array itself
      const hasMultiple = items.length > 1;
      const expandIcon = `<svg viewBox="0 0 24 24" fill="none" class="icon-expand-circle"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

      if (imageMode === 'carousel') {
        return `
          <div class="case-section-carousel-wrap" data-section-carousel="${group}">
            <div class="case-section-carousel-viewport${hasMultiple ? '' : ' no-drag'}">
              <div class="case-section-carousel-track">
                ${items.map((item, idx) => `
                  <div class="case-section-carousel-slide editorial-lightbox-trigger"
                       data-editorial-group="${group}" data-editorial-index="${idx}"
                       role="button" tabindex="0" aria-label="Open ${item.caption || 'image'} in lightbox">
                    <img src="${item.image}"
                         alt="${item.caption || 'Visual'}"
                         class="case-editorial-media-img${item.fullHeight ? ' case-editorial-media-img--full' : ''}"
                         loading="lazy" draggable="false" />
                    <button type="button" class="gallery-card-expand-btn" aria-label="View fullscreen" title="View Fullscreen">
                      ${expandIcon}
                    </button>
                    <div class="split-media-glass-overlay"></div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="case-section-carousel-caption-bar">
              <span class="case-section-carousel-caption" data-section-caption="${group}">${items[0].caption || ''}</span>
              ${hasMultiple ? `
                <div style="display:flex;align-items:center;gap:0.75rem;">
                  <button type="button" class="carousel-btn case-section-prev-btn" data-section-target="${group}" aria-label="Previous">
                    <svg viewBox="0 0 16 16" fill="none" class="icon-carousel-arrow"><path d="M10 13L5 8L10 3" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>
                  <div class="carousel-dots" style="margin-top:0;">
                    ${items.map((_, i) => `<button type="button" class="carousel-dot case-section-dot${i === 0 ? ' is-active' : ''}" data-section-dot="${group}" data-index="${i}" aria-label="Slide ${i + 1}"></button>`).join('')}
                  </div>
                  <button type="button" class="carousel-btn case-section-next-btn" data-section-target="${group}" aria-label="Next">
                    <svg viewBox="0 0 16 16" fill="none" class="icon-carousel-arrow"><path d="M6 3L11 8L6 13" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </button>
                </div>
              ` : ''}
            </div>
          </div>
        `;
      }

      // Default: stack
      return `
        <div class="case-editorial-media-stack" data-editorial-group="${group}">
          ${items.map((item, idx) => `
            <div class="case-editorial-media-item">
              <div class="case-editorial-img-wrap editorial-lightbox-trigger"
                   data-editorial-group="${group}" data-editorial-index="${idx}"
                   role="button" tabindex="0" aria-label="Open ${item.caption || 'editorial image'} in Lightbox">
                <img src="${item.image}"
                     alt="${item.caption || 'Editorial visual'}"
                     class="case-editorial-media-img${item.fullHeight ? ' case-editorial-media-img--full' : ''}"
                     loading="lazy" draggable="false" />
                <button type="button" class="gallery-card-expand-btn" aria-label="Open fullscreen" title="View Fullscreen (F)">
                  ${expandIcon}
                </button>
                <div class="split-media-glass-overlay"></div>
              </div>
              ${item.caption ? `<span class="case-editorial-media-caption">${item.caption}</span>` : ''}
            </div>
          `).join('')}
        </div>
      `;
    }

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
            ${data.metaExtra ? data.metaExtra.map(m => `
            <div class="case-meta-vertical-item">
              <span class="meta-v-label">${m.label}</span>
              <span class="meta-v-value">${m.value}</span>
            </div>
            `).join('') : ''}
            ${data.liveUrl ? `
            <div class="case-meta-vertical-item">
              <span class="meta-v-label">Live URL</span>
              <span class="meta-v-value">
                <a href="${data.liveUrl}" target="_blank" rel="noopener noreferrer">View Project</a>
              </span>
            </div>
            ` : ''}
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

      <!-- 3. Block: 2-Column Paragraph (Editorial Split) + Optional Image Stack/Carousel -->
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
        ${data.editorialSplit.images && data.editorialSplit.images.length > 0 ? renderEditorialImages(data.editorialSplit.images, 'split') : ''}
      ` : ''}

      <!-- 4. Block: Our Approach Section (optional — same layout as editorial split + images) -->
      ${data.approach ? `
        <div class="case-approach-section">
          <div class="case-approach-split case-editorial-split">
            <div class="editorial-col">
              <h3 class="split-col-heading">${data.approach.col1Heading}</h3>
              <p class="split-col-text">${data.approach.col1Text}</p>
            </div>
            <div class="editorial-col">
              <h3 class="split-col-heading">${data.approach.col2Heading}</h3>
              <p class="split-col-text">${data.approach.col2Text}</p>
            </div>
          </div>
          ${data.approach.images && data.approach.images.length > 0 ? renderEditorialImages(data.approach.images, 'approach') : ''}
        </div>
      ` : ''}

      <!-- 4.1. Block: Custom Editorial Sections (Dynamic) -->
      ${data.sections && data.sections.length > 0 ? data.sections.map((section, sIdx) => `
        <div class="case-section-block">
          <div class="case-editorial-split">
            <div class="editorial-col">
              ${section.col1Heading ? `<h3 class="split-col-heading">${section.col1Heading}</h3>` : ''}
              ${section.col1Text ? `<p class="split-col-text">${section.col1Text}</p>` : ''}
              ${section.list ? `
                <ul class="case-section-list">
                  ${section.list.map(li => `<li>${li}</li>`).join('')}
                </ul>
              ` : ''}
            </div>
            <div class="editorial-col">
              ${section.col2Heading ? `<h3 class="split-col-heading">${section.col2Heading}</h3>` : ''}
              ${section.col2Text ? `<p class="split-col-text">${section.col2Text}</p>` : ''}
              ${section.pillars ? `
                <div class="case-ia-grid">
                  ${section.pillars.map(p => `
                    <div class="case-ia-pillar">
                      <span class="case-ia-pillar-title">${p.title}</span>
                      <p class="case-ia-pillar-text">${p.text}</p>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
            </div>
          </div>
          ${section.images && section.images.length > 0 ? renderEditorialImages(section.images, `sec-${sIdx}`) : ''}
        </div>
      `).join('') : ''}

      <!-- 5. Block: Split Feature (carousel images + content) -->
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
                      <div class="split-video-wrapper" data-split-index="${idx}" style="${item.bgColor || item.bg || data.splitFeature.videoBg ? `--split-video-bg: ${item.bgColor || item.bg || data.splitFeature.videoBg}; background-color: ${item.bgColor || item.bg || data.splitFeature.videoBg};` : ''}">
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
                        <button type="button" class="gallery-card-expand-btn video-zoom-trigger" data-split-index="${idx}" aria-label="Zoom video in Lightbox" title="Zoom Video in Lightbox (F)">
                          <svg viewBox="0 0 24 24" fill="none" class="icon-expand-circle">
                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
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
              ${data.carousel.map((item, idx) => {
          const isVideo = item.type === 'video' || (item.image && item.image.endsWith('.mp4')) || (item.src && item.src.endsWith('.mp4'));
          return `
                <div class="carousel-slide carousel-lightbox-trigger ${isVideo ? 'carousel-video-slide' : ''}" data-carousel-index="${idx}" role="button" tabindex="0" aria-label="Enlarge media ${idx + 1}: ${item.caption || ''}">
                  ${isVideo ? `
                    <video class="split-video-element" src="${item.src || item.video || item.image}" poster="${item.poster || ''}" playsinline loop muted preload="metadata" draggable="false"></video>
                    <div class="split-media-badge">${item.badge || 'VIDEO'}</div>
                  ` : `
                    <img src="${item.image || item.src}" alt="${item.caption || ''}" loading="lazy" draggable="false" />
                  `}
                  <div class="carousel-expand-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" class="icon-carousel-expand">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                `;
        }).join('')}
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
            <h3 class="deliverables-title">Milestones Delivered</h3>
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
              ${data.galleryAsymmetric.map((item, idx) => {
        const isVideo = item.type === 'video' || (item.image && item.image.endsWith('.mp4')) || (item.src && item.src.endsWith('.mp4'));
        return `
                <div class="case-gallery-card" data-gallery-index="${idx}">
                  <div class="gallery-card-inner gallery-lightbox-trigger ${isVideo ? 'gallery-video-card' : ''}" data-gallery-index="${idx}" role="button" tabindex="0" aria-label="Open ${item.caption || 'gallery visual'} in Lightbox">
                    ${isVideo ? `
                      <video class="gallery-video-element" src="${item.src || item.video || item.image}" poster="${item.poster || ''}" playsinline loop muted preload="metadata" draggable="false"></video>
                      <div class="split-media-badge">${item.badge || 'VIDEO'}</div>
                    ` : `
                      <img src="${item.image || item.src}" alt="${item.caption || ''}" loading="lazy" draggable="false" />
                    `}
                    <button type="button" class="gallery-card-expand-btn" aria-label="Open fullscreen in lightbox" title="Zoom in Lightbox (F)">
                      <svg viewBox="0 0 24 24" fill="none" class="icon-expand-circle">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </button>
                    <div class="gallery-card-glass-overlay"></div>
                  </div>
                </div>
                `;
      }).join('')}
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

      <!-- 7.5. Block: The Result (optional — renders after gallery if data.result is defined) -->
      ${data.result ? `
        <div class="case-result-section">
          <span class="gallery-kicker">THE RESULT</span>
          <h2 class="result-heading">The Result</h2>
          <p class="result-text">${data.result.text}</p>
        </div>
      ` : ''}

      <!-- 8. Case Study Bottom Action Bar (Prev / Next Project Navigation) -->
      <div class="case-next-project-bar">
        <div class="case-nav-preview">
          <span class="next-kicker">NEXT CASE STUDY</span>
          <h3 class="next-title">${nextProject ? nextProject.title : 'Overview'}</h3>
        </div>
        <div class="case-nav-btn-group">
          ${prevProject ? `
            <button type="button" class="btn-editorial stroke" id="prevProjectBtn" data-prev-id="${safePrevKey}" aria-label="Previous project: ${prevProject.title}">
              <span class="btn-arrow-icon">&larr;</span>
              <span>${prevProject.title}</span>
            </button>
          ` : ''}
          ${nextProject ? `
            <button type="button" class="btn-editorial solid" id="nextProjectBtn" data-next-id="${safeNextKey}" aria-label="Next project: ${nextProject.title}">
              <span>${nextProject.title}</span>
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
              }).catch(() => { });
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
            if (e.target.closest('.video-play-glass-btn') || e.target.closest('.video-sound-glass-btn') || e.target.closest('.gallery-card-expand-btn')) return;
            toggleVideoPlay();
          });

          video.addEventListener('ended', () => {
            vWrap.classList.remove('is-playing');
          });
        });

        // Lightbox trigger for all items (videos and images) in split media
        const splitMediaCards = splitViewport.querySelectorAll('.split-media-card');
        splitMediaCards.forEach((card) => {
          const splitIdx = parseInt(card.getAttribute('data-split-index'), 10);
          const expandBtn = card.querySelector('.gallery-card-expand-btn');
          const imgTrigger = card.querySelector('.split-lightbox-trigger');

          function triggerSplitLightbox(e) {
            if (splitHasDragged) {
              splitHasDragged = false;
              return;
            }
            e.stopPropagation();
            openLightbox(mediaItems, splitIdx);
          }

          if (expandBtn) {
            expandBtn.addEventListener('click', triggerSplitLightbox);
          }
          if (imgTrigger) {
            imgTrigger.addEventListener('click', triggerSplitLightbox);
          }
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

        function getSlideWidth() {
          const firstSlide = carouselViewport.querySelector('.carousel-slide');
          return (firstSlide && firstSlide.offsetWidth > 0) ? firstSlide.offsetWidth : carouselViewport.clientWidth;
        }

        function getActiveCarouselIndex() {
          const width = getSlideWidth();
          if (width <= 0) return 0;
          const rawIdx = Math.round(carouselViewport.scrollLeft / width);
          return Math.min(totalSlides - 1, Math.max(0, rawIdx));
        }

        function goToCarouselSlide(targetIdx) {
          const safeIdx = (targetIdx + totalSlides) % totalSlides;
          const slides = carouselViewport.querySelectorAll('.carousel-slide');
          const firstSlide = slides[0];
          const targetSlide = slides[safeIdx];
          
          let targetLeft = 0;
          if (targetSlide && firstSlide) {
            targetLeft = targetSlide.offsetLeft - firstSlide.offsetLeft;
          } else {
            targetLeft = safeIdx * getSlideWidth();
          }

          carouselViewport.scrollTo({
            left: targetLeft,
            behavior: 'smooth'
          });
        }

        // Real-time active slide detection & indicator updates
        function updateActiveCarouselState() {
          const activeIdx = getActiveCarouselIndex();

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

        if (hasMultiple) {
          const onMouseMove = (e) => {
            if (!isCarouselMouseDown) return;
            const deltaX = e.pageX - carouselStartX;
            if (Math.abs(deltaX) > 4) {
              carouselHasDragged = true;
            }
            carouselViewport.scrollLeft = carouselScrollStart - deltaX;
            updateActiveCarouselState();
          };

          const onMouseUp = () => {
            if (!isCarouselMouseDown) return;
            isCarouselMouseDown = false;
            carouselViewport.classList.remove('is-dragging');
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('mouseleave', onMouseUp);

            if (carouselHasDragged) {
              const cur = getActiveCarouselIndex();
              goToCarouselSlide(cur);
            } else {
              updateActiveCarouselState();
            }
          };

          carouselViewport.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return;
            isCarouselMouseDown = true;
            carouselHasDragged = false;
            carouselStartX = e.pageX;
            carouselScrollStart = carouselViewport.scrollLeft;
            carouselViewport.classList.add('is-dragging');
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('mouseleave', onMouseUp);
          });

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

    // Lightbox bindings for editorial images (stack + carousel modes)
    const editorialGroups = { split: data.editorialSplit?.images, approach: data.approach?.images };
    if (data.sections) {
      data.sections.forEach((sec, sIdx) => {
        if (sec.images) {
          editorialGroups[`sec-${sIdx}`] = sec.images;
        }
      });
    }
    caseModalContent.querySelectorAll('.editorial-lightbox-trigger').forEach((trigger) => {
      const group = trigger.getAttribute('data-editorial-group');
      const idx = parseInt(trigger.getAttribute('data-editorial-index'), 10);
      const imagesList = editorialGroups[group];
      if (!imagesList) return;

      // For carousel slides, only open lightbox on click (not drag)
      let sectionHasDragged = false;
      trigger.addEventListener('click', (e) => {
        if (sectionHasDragged) { sectionHasDragged = false; return; }
        e.stopPropagation();
        openLightbox(imagesList, idx);
      });
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          e.stopPropagation();
          openLightbox(imagesList, idx);
        }
      });
    });

    // Initialise inline section carousels (prev/next buttons, dots, drag-to-scroll)
    caseModalContent.querySelectorAll('.case-section-carousel-wrap').forEach((wrap) => {
      const group = wrap.getAttribute('data-section-carousel');
      const viewport = wrap.querySelector('.case-section-carousel-viewport');
      if (!viewport) return;

      const slides = viewport.querySelectorAll('.case-section-carousel-slide');
      const totalSlides = slides.length;
      if (totalSlides <= 1) return;

      const captionEl = wrap.querySelector(`[data-section-caption="${group}"]`);
      const dots = wrap.querySelectorAll(`[data-section-dot="${group}"]`);
      const prevBtn = wrap.querySelector(`.case-section-prev-btn[data-section-target="${group}"]`);
      const nextBtn = wrap.querySelector(`.case-section-next-btn[data-section-target="${group}"]`);
      const imagesList = editorialGroups[group];

      function getSectionSlideWidth() {
        return slides[0] ? slides[0].offsetWidth : viewport.clientWidth;
      }
      function getActiveSectionIdx() {
        const w = getSectionSlideWidth();
        if (w <= 0) return 0;
        return Math.min(totalSlides - 1, Math.max(0, Math.round(viewport.scrollLeft / w)));
      }
      function goToSectionSlide(idx) {
        const safe = (idx + totalSlides) % totalSlides;
        viewport.scrollTo({ left: safe * getSectionSlideWidth(), behavior: 'smooth' });
      }
      function updateSectionState() {
        const active = getActiveSectionIdx();
        if (captionEl && imagesList && imagesList[active]) {
          captionEl.textContent = imagesList[active].caption || '';
        }
        dots.forEach((d, i) => d.classList.toggle('is-active', i === active));
      }

      // Drag support
      let isDown = false, startX = 0, scrollStart = 0, hasDragged = false;
      const onMove = (e) => {
        if (!isDown) return;
        const dx = e.pageX - startX;
        if (Math.abs(dx) > 4) hasDragged = true;
        viewport.scrollLeft = scrollStart - dx;
        updateSectionState();
      };
      const onUp = () => {
        if (!isDown) return;
        isDown = false;
        viewport.classList.remove('is-dragging');
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('mouseup', onUp);
        if (hasDragged) goToSectionSlide(getActiveSectionIdx());
      };
      viewport.addEventListener('mousedown', (e) => {
        if (e.button !== 0) return;
        isDown = true; hasDragged = false;
        startX = e.pageX; scrollStart = viewport.scrollLeft;
        viewport.classList.add('is-dragging');
        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onUp);
      });

      if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); goToSectionSlide(getActiveSectionIdx() - 1); });
      if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); goToSectionSlide(getActiveSectionIdx() + 1); });
      dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          goToSectionSlide(parseInt(dot.getAttribute('data-index'), 10));
        });
      });
      viewport.addEventListener('scroll', updateSectionState, { passive: true });
    });

    caseModalOverlay.classList.add('is-active');
    caseModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Prev project button event listener
    const prevBtn = document.getElementById('prevProjectBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        const prevId = prevBtn.getAttribute('data-prev-id');
        if (prevId && projectsData[prevId]) {
          openCaseStudy(prevId);
          caseModalContent.scrollTop = 0;
        }
      });
    }

    // Next project button event listener
    const nextBtn = document.getElementById('nextProjectBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const nextId = nextBtn.getAttribute('data-next-id');
        if (nextId && projectsData[nextId]) {
          openCaseStudy(nextId);
          caseModalContent.scrollTop = 0;
        }
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

  // --- 8. Lightbox / Fullscreen Image & Video Viewer with Precision Zoom Controller ---
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
  const lightboxVideo = document.getElementById('lightboxVideo');
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

  function getActiveMediaElement() {
    if (activeLightboxImages && activeLightboxImages[activeLightboxIndex]) {
      const cur = activeLightboxImages[activeLightboxIndex];
      const isVideo = cur.type === 'video' || (cur.src && cur.src.endsWith('.mp4')) || (cur.image && cur.image.endsWith('.mp4'));
      if (isVideo && lightboxVideo) return lightboxVideo;
    }
    return lightboxImg;
  }

  function updateZoomTransform(animate = true) {
    const activeEl = getActiveMediaElement();
    if (!activeEl) return;

    if (animate) {
      activeEl.style.transition = 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
    } else {
      activeEl.style.transition = 'none';
    }

    if (currentZoom <= 1.0) {
      currentZoom = 1.0;
      panX = 0;
      panY = 0;
      activeEl.style.transform = `scale(1) translate3d(0px, 0px, 0px)`;
      activeEl.classList.remove('is-zoomed');
      if (lightboxImageWrapper) {
        lightboxImageWrapper.classList.remove('is-zoomed');
      }
    } else {
      activeEl.style.transform = `scale(${currentZoom}) translate3d(${panX / currentZoom}px, ${panY / currentZoom}px, 0px)`;
      activeEl.classList.add('is-zoomed');
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

  // Zoom on Image & Video Double-Click & Wheel
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

    const isVideo = currentItem.type === 'video' || (currentItem.src && currentItem.src.endsWith('.mp4')) || (currentItem.image && currentItem.image.endsWith('.mp4'));

    if (isVideo) {
      if (lightboxImg) {
        lightboxImg.style.display = 'none';
        lightboxImg.src = '';
      }
      if (lightboxVideo) {
        lightboxVideo.style.display = 'block';
        const videoSrc = currentItem.src || currentItem.video || currentItem.image;
        if (lightboxVideo.src !== videoSrc) {
          lightboxVideo.src = videoSrc;
        }
        if (currentItem.poster) {
          lightboxVideo.poster = currentItem.poster;
        }
        if (animate) {
          lightboxVideo.classList.add('is-transitioning');
          setTimeout(() => {
            lightboxVideo.classList.remove('is-transitioning');
          }, 150);
        }
        lightboxVideo.currentTime = 0;
        lightboxVideo.play().catch(() => { });
      }
    } else {
      if (lightboxVideo) {
        lightboxVideo.pause();
        lightboxVideo.style.display = 'none';
        lightboxVideo.src = '';
      }
      if (lightboxImg) {
        lightboxImg.style.display = 'block';
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
    if (lightboxVideo) {
      lightboxVideo.pause();
      lightboxVideo.src = '';
    }
    // Exit native fullscreen if active
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => { });
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      }
    }
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      const el = lightboxOverlay || document.documentElement;
      if (el.requestFullscreen) {
        el.requestFullscreen().catch(() => { });
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => { });
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
