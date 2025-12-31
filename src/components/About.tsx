import { useEffect, useRef, useState } from 'react';
import { Zap, Shield, Award, Users } from 'lucide-react';

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);


  const galleryImages = [
    { url: "/WhatsApp Image 2025-12-11 at 18.40.32.jpeg", title: "TNL Lighting Excellence", description: "Illumination At Its Best!" },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'Our Vision',
      description: 'To become the premier provider of high‑performance lighting solutions across Africa, recognised for unrivaled quality, innovative design, and unmatched value—delivering excellence at the lowest possible cost.',
    },
    {
      icon: Zap,
      title: 'Our Mission',
      description: 'We commit to sourcing and engineering premium lighting products that exceed industry standards while maintaining competitive pricing.',
    },
    {
      icon: Zap,
      title: 'Our Promise',
      description: 'By leveraging local talent, streamlined supply chains, and relentless cost optimisation, we empower African businesses and residences to illuminate their spaces brilliantly without compromise.',
    },
    {
      icon: Zap,
      title: 'Our Values',
      description: 'At TNL Lighting, we live by integrity and honesty, delivering unmatched quality and flawless workmanship. Every product is backed by unwavering assurance, so our clients know they’re getting the best—always.',
    },
    {
      icon: Users,
      title: 'Our Achievements',
      description: 'We have vaulted from a startup to the preferred lighting partner for Africa’s top architects and developers. In two years we’ve delivered unique high‑profile installations and built trusted collaborations with the continent’s most respected professionals, cementing our cutting‑edge reputation.',
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'At TNL Lighting Customs, every high‑end fixture is put through strict testing and covered by a full warranty, ensuring flawless performance and lasting confidence.',
    },
    {
      icon: Award,
      title: 'Expert Service',
      description: 'At TNL Lighting, we are all about you. Our team works closely with you to understand your vision and deliver top-notch light installations that exceed expectations. We are committed to personalized service, quality products, and support every step of the way.',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'We deliver expert service from start to finish—professional, on‑site installations by seasoned techs and ongoing support to keep everything running smoothly. Our team handles every detail so you get reliable performance and peace of mind long after the lights are on.',
    },
  ];

  return (
    <section
  id="about"
  ref={sectionRef}
  className="relative py-20 bg-black overflow-hidden"
>
  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
    style={{
      backgroundImage: "url('/about.jpeg')",
    }}
  />

  {/* Dark overlay for readability */}
  <div className="absolute inset-0 bg-black/70" />

  {/* Content */}
  <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className={`text-center mb-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        About <span className="text-red-500">TNLlighting</span>
      </h2>
      <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        At TNL Lighting – Customs and Design Solutions, we pride ourselves on delivering lighting designs that are truly one‑of‑a‑kind. By integrating advanced photometric modeling, 
        sprecision‑engineered optics, and bespoke material finishes, each luminaire is crafted to accentuate architectural intent and elevate brand narrative—ensuring no two installations are alike. 
      </p>
      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Since our inception in 2024, we have made it our unwavering commitment to go above and beyond for every client, 
        translating vision into performance with meticulous attention to detail and a relentless pursuit of satisfaction. 
        Our team’s dedication to innovative, tailor‑made lighting solutions means that when you choose TNL, you gain a partner committed to exceeding expectations at every turn.
      </p>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div
            key={index}
            className={`bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-red-500 transition-all duration-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div className="bg-red-500/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <Icon className="text-red-500" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>


  );
}

export default About;
