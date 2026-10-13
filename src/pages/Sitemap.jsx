import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { 
  LuCompass, 
  LuLayers, 
  LuWrench, 
  LuFactory, 
  LuBookOpen, 
  LuFileText, 
  LuChevronRight,
  LuExternalLink,
  LuDownload
} from 'react-icons/lu';
import aboutBg from '../assets/img/about/about_bg.png';
import './Sitemap.css';

const sitemapSections = [
  {
    title: 'Company & General Pages',
    icon: <LuCompass />,
    links: [
      {
        path: '/',
        label: 'Home',
        description: 'Welcome to Gargi Engineering Services - PEB Structural Design & Tekla Detailing'
      },
      {
        path: '/about',
        label: 'About Us',
        description: 'Our engineering philosophy, mission, vision, leadership, and technology-driven workflows'
      },
      {
        path: '/service',
        label: 'All Services Overview',
        description: 'Full portfolio of pre-engineered building & turnkey engineering capabilities'
      },
      {
        path: '/contact',
        label: 'Contact Us',
        description: 'Get in touch with our team in Pune & Nagpur for consultations and quotes'
      }
    ]
  },
  {
    title: 'PEB & Structural Design Services',
    icon: <LuLayers />,
    links: [
      {
        path: '/peb-design',
        label: 'PEB Design & Structural Analysis',
        description: 'Optimized frame calculations, STAAD.Pro modeling, wind and seismic load design'
      },
      {
        path: '/peb-detailing',
        label: 'PEB Detailing & Tekla 3D Detailing',
        description: 'Advanced 3D Tekla detailing, shop drawings, erection marks, and CNC data'
      },
      {
        path: '/connection-design',
        label: 'Connection Design',
        description: 'Moment connections, shear connections, base plates, and compliance verifications'
      },
      {
        path: '/value-engineering',
        label: 'Value Engineering',
        description: 'Steel tonnage reduction, weight optimization without compromising structural safety'
      },
      {
        path: '/material-take-off',
        label: 'Material Take Off (MTO / BOM)',
        description: 'Precise bill of materials, procurement planning, and accurate tonnage estimates'
      },
      {
        path: '/fabrication-support',
        label: 'Fabrication Support & Shop Drawings',
        description: 'Shop drawings, assembly sheets, bolt lists, and fabrication assistance'
      }
    ]
  },
  {
    title: 'Civil & Turnkey Engineering',
    icon: <LuWrench />,
    links: [
      {
        path: '/civil-design',
        label: 'Civil & Structural Design',
        description: 'Substructure engineering, foundation design, RCC pedestal calculations, drainage'
      },
      {
        path: '/digital-engineering',
        label: 'Digital Engineering & BIM',
        description: 'Building Information Modeling (BIM), clash detection, 3D visualization, automation'
      },
      {
        path: '/pmc',
        label: 'Project Management Consultancy (PMC)',
        description: 'End-to-end execution supervision, quality control, scheduling, and contractor coordination'
      }
    ]
  },
  {
    title: 'Industries & Projects',
    icon: <LuFactory />,
    links: [
      {
        path: '/industries',
        label: 'Engineering Across Industries',
        description: 'Warehouses, manufacturing plants, automotive, logistics, pharma, and agro-storage'
      },
      {
        path: '/projects',
        label: 'Projects Portfolio',
        description: 'Showcase of completed industrial structures, heavy warehouses, and PEB sheds'
      }
    ]
  },
  {
    title: 'Knowledge Center & Insights',
    icon: <LuBookOpen />,
    links: [
      {
        path: '/knowledge-center',
        label: 'Knowledge Center Hub',
        description: 'Technical articles, engineering insights, and industry whitepapers'
      },
      {
        path: '/blog-details',
        label: 'Why Engineering Design Matters More Than Steel Price in PEB Projects',
        description: 'Article on steel cost optimization vs smart structural engineering'
      },
      {
        path: '/blog-details-2',
        label: 'The Future of Industrial Buildings: Digital Engineering in PEB',
        description: 'How 3D BIM modeling and digital engineering are revolutionizing steel buildings'
      },
      {
        path: '/blog-details-3',
        label: 'Five Mistakes Companies Make When Planning a New Industrial Building',
        description: 'Avoid costly project delays, scope creep, and structural redesigns'
      }
    ]
  },
  {
    title: 'Resources & Search Files',
    icon: <LuFileText />,
    links: [
      {
        path: '/sitemap.xml',
        label: 'XML Sitemap (Search Engines)',
        description: 'Standard sitemap.xml format for Google Search Console and crawlers',
        isExternal: true
      },
      {
        path: '/robots.txt',
        label: 'robots.txt Protocol',
        description: 'Robots exclusion standard file declaring sitemap and crawler rules',
        isExternal: true
      },
      {
        path: '/GargiBrochure.pdf',
        label: 'Official Corporate Brochure (PDF)',
        description: 'Download the comprehensive Gargi Engineering Services capability brochure',
        isExternal: true,
        isDownload: true
      }
    ]
  }
];

export default function Sitemap() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sitemap-page-wrapper">
      <SEO
        title="HTML Sitemap"
        description="Browse the complete site structure of Gargi Engineering Services. Quick navigation to our PEB design services, detailing, civil engineering, industries, projects, and knowledge base."
        keywords="Gargi Engineering sitemap, PEB design pages, Tekla detailing services, site index, industrial engineering directory"
        canonical="https://www.gargipeb.com/sitemap"
      />
      <Navbar />

      {/* Hero Header */}
      <div
        className="sitemap-hero"
        style={{
          backgroundImage: `url(${aboutBg})`
        }}
      >
        <div className="sitemap-hero-overlay"></div>
        <div className="container">
          <div className="sitemap-hero-content text-start">
            <span className="sitemap-badge">Site Directory</span>
            <h1 className="sitemap-hero-title">
              Website Sitemap &amp; Directory
            </h1>
            <p className="sitemap-hero-subtitle">
              Easily navigate through all sections of Gargi Engineering Services, including structural PEB design services, BIM detailing, industry solutions, and technical articles.
            </p>
          </div>
        </div>
      </div>

      {/* Main Sitemap Content */}
      <section className="sitemap-content-sec">
        <div className="container">
          
          <div className="sitemap-intro-bar">
            <p className="sitemap-intro-text">
              Looking for our search engine index file? You can access the direct XML sitemap for crawlers and indexing below.
            </p>
            <div className="sitemap-intro-links">
              <a 
                href="/sitemap.xml" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sitemap-xml-badge"
              >
                <LuExternalLink /> View XML Sitemap
              </a>
              <a 
                href="/GargiBrochure.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sitemap-xml-badge"
              >
                <LuDownload /> Download Brochure
              </a>
            </div>
          </div>

          <div className="sitemap-grid">
            {sitemapSections.map((section, idx) => (
              <div className="sitemap-card" key={idx}>
                <div className="sitemap-card-header">
                  <div className="sitemap-card-icon">{section.icon}</div>
                  <h2 className="sitemap-card-title">{section.title}</h2>
                </div>
                <div className="sitemap-card-body">
                  <ul className="sitemap-link-list">
                    {section.links.map((link, linkIdx) => (
                      <li className="sitemap-link-item" key={linkIdx}>
                        <LuChevronRight className="sitemap-link-arrow" />
                        <div className="sitemap-link-content">
                          {link.isExternal ? (
                            <a
                              href={link.path}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="sitemap-item-anchor"
                            >
                              {link.label} ↗
                            </a>
                          ) : (
                            <Link to={link.path} className="sitemap-item-anchor">
                              {link.label}
                            </Link>
                          )}
                          <p className="sitemap-item-desc">{link.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
