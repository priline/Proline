"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Navigation Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Plumbing", href: "#services" },
    { name: "Electrical", href: "#services" },
    { name: "Handyman", href: "#services" },
    { name: "Aircon", href: "#services" },
    { name: "Blog", href: "#" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="w-12 h-12 bg-primary-purple rounded-full flex items-center justify-center border-4 border-primary-gold">
              <span className="text-white font-bold text-lg font-slab">TR</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-purple font-medium text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Phone CTA */}
          <a
            href="tel:+60142711987"
            className="hidden md:flex items-center gap-2 bg-white border-2 border-primary-purple text-primary-purple px-4 py-2 rounded-full hover:bg-primary-purple hover:text-white transition-all"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="font-semibold text-sm">+60 14-271 1987</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block py-2 text-gray-700 hover:text-primary-purple font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+60142711987"
              className="mt-4 flex items-center gap-2 text-primary-purple font-semibold"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              +60 14-271 1987
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  const stats = [
    { number: "15+", label: "Years Of Experience" },
    { number: "2,500+", label: "Happy Customers" },
    { number: "3,000+", label: "Completed Jobs" },
  ];

  return (
    <section className="relative bg-white py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <img
                src="https://ext.same-assets.com/3665792459/903768151.webp"
                alt="Professional Handyman"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-slab">
              Your Trusted Plumbing, Electrical & Handyman Expert
            </h1>
            <p className="mt-6 text-gray-600 text-base leading-relaxed">
              Looking for a plumber near me or a reliable electrician in Kuala Lumpur?
              Tan Resources is your all-in-one solution for home repairs and maintenance.
              From tap leakage repair and bathroom fittings to light fixture installation
              and kitchen plumbing, our team handles every job with precision and care.
              Whether you need electrical services near me or trusted handyman services
              for your home, we ensure quick, clean, and long-lasting solutions that save
              you time and stress.
            </p>

            <a
              href="tel:+60142711987"
              className="mt-8 inline-block bg-primary-gold text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors"
            >
              MORE INFO
            </a>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap gap-8 md:gap-12">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 font-slab">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  const features = [
    "Skilled technicians delivering professional expertise in plumbing, electrical, and handyman services.",
    "Accessible one-stop solutions, several services through one call.",
    "Top-notch work concentrated on durability and long-term satisfaction.",
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block bg-primary-purple text-white text-xs px-3 py-1 rounded font-medium">
              Quality Assurance
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 font-slab">
              Built on Trust. Driven by Quality.
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              Tan Resources is your neighborhood expert for dependable plumbing, electrical,
              and handyman services. With over 15 years of experience in Kuala Lumpur, we've
              helped thousands of homeowners fix leaks, upgrade bathrooms, install lighting,
              and handle everyday repairs with confidence. Our team of certified professionals
              takes pride in doing the job right. We always do any work safely, efficiently,
              and with minimal disruption to your routine. Whether you're searching for a
              plumber near me, a local electrician, or a reliable partner for home maintenance,
              we make sure your home runs smoothly, every single day.
            </p>

            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6zm-1 9V3.5L18.5 9H13z" />
                  </svg>
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="tel:+60142711987"
              className="mt-8 inline-block bg-primary-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
            >
              MORE INFO
            </a>
          </div>

          {/* Right - Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://ext.same-assets.com/3665792459/1636285497.webp"
              alt="Electrician working"
              className="w-full h-64 object-cover rounded-lg"
            />
            <img
              src="https://ext.same-assets.com/3665792459/567006936.webp"
              alt="Plumber at work"
              className="w-full h-64 object-cover rounded-lg mt-8"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Emergency CTA Banner
function EmergencyCTA() {
  return (
    <section className="relative bg-black py-12">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/3665792459/2909976014.webm')",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-primary-gold font-slab">
          Emergency Plumbing Problems?
        </h2>
        <p className="mt-4 text-white">
          Our expert plumbers are available 24/7 to handle any plumbing emergency. Don't wait until it's too late!
        </p>
        <a
          href="tel:+60142711987"
          className="mt-6 inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          Call Us: +60 14-271 1987
        </a>
      </div>
    </section>
  );
}

// Core Services Section
function CoreServicesSection() {
  const services = [
    {
      icon: "https://ext.same-assets.com/3665792459/28569627.png",
      title: "Plumbing Services",
      items: ["Bathroom System", "Kitchen System", "Toilet System", "Drainage and Sewerage System"],
    },
    {
      icon: "https://ext.same-assets.com/3665792459/2919980677.png",
      title: "Electrical Services",
      items: ["DB trip (Blackout)", "Wiring Repair", "Light Installation", "Fan installation", "Waterheater installation"],
    },
    {
      icon: "https://ext.same-assets.com/3665792459/1184587939.png",
      title: "Handyman Services",
      items: ["Tiles replacement", "Minor repairs", "Door locks replacement", "Hacking"],
    },
    {
      icon: "https://ext.same-assets.com/3665792459/3100667238.png",
      title: "Aircon Services",
      items: ["Aircon Installation", "Chemical Cleaning", "Troubleshooting", "Cooling Coil Cleaning", "Air Balancing"],
    },
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block bg-primary-purple text-white text-xs px-3 py-1 rounded font-medium">
            Quality Assurance
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 font-slab">
            Our Core Services
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-primary-gold rounded-full flex items-center justify-center mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-slab">{service.title}</h3>
              <ul className="mt-4 space-y-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="tel:+60142711987"
                className="mt-6 inline-block bg-primary-purple text-white px-6 py-2 rounded text-sm font-semibold hover:bg-primary-dark transition-colors"
              >
                Click here
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Why Choose Section with icons
function WhyChooseIconsSection() {
  const features = [
    { icon: "https://ext.same-assets.com/3665792459/3968269428.png", title: "Professional and expert Technician" },
    { icon: "https://ext.same-assets.com/3665792459/1344396993.png", title: "Reliability & Punctuality" },
    { icon: "https://ext.same-assets.com/3665792459/557516299.png", title: "Transparent Pricing & No Hidden Costs" },
    { icon: "https://ext.same-assets.com/3665792459/1532972921.png", title: "Comprehensive & Versatile Solutions" },
    { icon: "https://ext.same-assets.com/3665792459/3595377259.png", title: "Commitment to Customer Satisfaction" },
    { icon: "https://ext.same-assets.com/3665792459/3369758754.png", title: "Affordable Pricing" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block bg-primary-purple text-white text-xs px-3 py-1 rounded font-medium">
            Quality Assurance
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 font-slab">
            Why Choose Tanresources
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Left Features */}
          <div className="space-y-8">
            {features.slice(0, 3).map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700 text-right flex-1">
                  {feature.title}
                </span>
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>

          {/* Center Image - Hidden on mobile */}
          <div className="hidden lg:flex items-center justify-center">
            <img
              src="https://ext.same-assets.com/3665792459/1065296253.webp"
              alt="Professional worker"
              className="max-h-96 object-contain"
            />
          </div>

          {/* Right Features */}
          <div className="space-y-8">
            {features.slice(3, 6).map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md flex-shrink-0">
                  <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-gray-700">{feature.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Service Detail Section
function ServiceDetailSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-slab mb-4">
          Plumbing, Electrical & Handyman Services in Kuala Lumpur | Tan Resources
        </h2>

        {/* Who We Are */}
        <div className="mb-8">
          <span className="inline-block bg-primary-purple text-white text-xs px-3 py-1 rounded font-medium">
            Who We Are
          </span>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Tan Resources is a leading home repair and maintenance partner in Kuala Lumpur.
            We provide professional plumbing, electrical, and handyman services to make your
            home or office care simple, safe, and stress-free. Whether it's fixing a leak,
            wiring a room, or repairing furniture, our skilled team handles it all with
            reliability and care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {/* Plumbing Services */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded font-medium mb-4">
                Plumbing Services:
              </span>
              <p className="text-gray-600 mb-4">
                Water is essential, but plumbing problems can quickly disrupt daily life. We offer
                full-service plumbing solutions in Kuala Lumpur to keep your water systems flowing
                perfectly. Our services include:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Leak and Pipe Repairs:</strong> We detect and repair water leaks before they cause damage or waste.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Bathroom Plumbing:</strong> From shower fittings and toilet repairs to complete bathroom installations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Kitchen Plumbing:</strong> We repair and install sinks, taps, and water filters.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Drainage and Sewer Cleaning:</strong> Using modern tools, we clear clogs and ensure smooth water flow.</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/3665792459/2584196288.webp"
                alt="Electrician working"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Electrical Services */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://ext.same-assets.com/3665792459/3910988022.webp"
                alt="Electrical work"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded font-medium mb-4">
                Electrical Services:
              </span>
              <p className="text-gray-600 mb-4">
                Electrical issues can be inconvenient and unsafe. That's why our certified electricians
                in Kuala Lumpur are available for everything from small repairs to full rewiring.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Electrical Repairs & Troubleshooting:</strong> Quick fixes for power trips, faulty switches, and damaged circuits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Lighting Installation:</strong> From ceiling lights and downlights to decorative fixtures.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Switchboard & Socket Upgrades:</strong> We replace and upgrade electrical points for safety.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Handyman Services */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded font-medium mb-4">
                Handyman Services:
              </span>
              <p className="text-gray-600 mb-4">
                Not every job requires a specialist; some just need a skilled, reliable hand. Our
                handyman services in Kuala Lumpur cover all those small but important tasks.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Furniture Repairs & Assembly:</strong> Fixing or assembling furniture, cabinets, and shelves.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Door & Lock Replacement:</strong> Secure and smooth operation for doors and windows.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-primary-gold rounded-full mt-2" />
                  <span><strong>Wall Mounting & Installation:</strong> Mounting TVs, mirrors, shelves, and other items neatly.</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://ext.same-assets.com/3665792459/2159469225.webp"
                alt="Handyman working"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Why Choose Cards Section
function WhyChooseCardsSection() {
  const reasons = [
    {
      icon: "https://ext.same-assets.com/3665792459/1772696572.svg",
      title: "Experienced Professionals",
      desc: "Our team has over 15 years of field experience in plumbing, electrical, and handyman work.",
    },
    {
      icon: "https://ext.same-assets.com/3665792459/2346941821.svg",
      title: "Local and Reliable",
      desc: "Based in Kuala Lumpur, we respond fast and serve all major areas including Petaling Jaya, Cheras, and Mont Kiara.",
    },
    {
      icon: "https://ext.same-assets.com/3665792459/2442076929.svg",
      title: "Transparent Pricing",
      desc: "You will always know what you're paying for as there are no hidden fees, no surprises.",
    },
    {
      icon: "https://ext.same-assets.com/3665792459/2203366069.svg",
      title: "Certified & Insured",
      desc: "Safety comes first. Our technicians follow proper Malaysian standards for every installation or repair.",
    },
    {
      icon: "https://ext.same-assets.com/3665792459/80698935.svg",
      title: "All-in-One Service",
      desc: "One call covers all your home maintenance needs in Kuala Lumpur, including plumbing, electrical, and general repairs.",
    },
    {
      icon: "https://ext.same-assets.com/3665792459/1770542.svg",
      title: "Customer Satisfaction Guaranteed",
      desc: "We don't just complete a job; we make sure you're happy with the result.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-slab text-center mb-12">
          Why Choose Tan Resources
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center">
                <img src={reason.icon} alt={reason.title} className="w-12 h-12 text-primary-gold" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-slab">{reason.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Do you provide plumbing services in Kuala Lumpur?",
      a: "Yes, we do. Tan Resources offers complete plumbing services across Kuala Lumpur, including kitchen plumbing, bathroom repairs, water pressure checks, and leak detection.",
    },
    {
      q: "How do I book a plumber near me?",
      a: "You can call us or fill out the online form to schedule a plumber near you. Our team will confirm the time and arrive promptly for inspection or repair.",
    },
    {
      q: "What types of electrical services do you offer?",
      a: "We handle all electrical services near me, from power trips, wiring and rewiring, light installation, and ceiling fan setup to switchboard replacement.",
    },
    {
      q: "Can you help with small handyman jobs?",
      a: "Absolutely. Our handyman services in Kuala Lumpur cover small repairs like door handle fixing, tile replacement, furniture assembly, and wall patching.",
    },
    {
      q: "Do you provide emergency plumbing services?",
      a: "Yes, our expert plumbers are available 24/7 to handle any plumbing emergency. Don't wait until it's too late!",
    },
    {
      q: "Are your electricians certified and trained?",
      a: "Yes, all our electricians are certified and follow proper Malaysian safety standards for every installation or repair.",
    },
    {
      q: "Can you handle full bathroom or kitchen installations?",
      a: "Yes, we offer complete bathroom and kitchen installation services, including plumbing fixtures, tiles, and all necessary fittings.",
    },
    {
      q: "How much do your handyman services cost?",
      a: "Our pricing is transparent with no hidden costs. Contact us for a free quote based on your specific requirements.",
    },
    {
      q: "Do you use quality materials and tools for repairs?",
      a: "Absolutely. We only use high-quality materials and professional tools to ensure lasting repairs and customer satisfaction.",
    },
  ];

  return (
    <section className="py-16 bg-gray-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-slab">
              Frequently Asked Questions:
            </h2>
            <p className="mt-4 text-gray-300">
              Find answers to common questions about our plumbing services.
            </p>

            <div className="mt-8 space-y-2">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-700 rounded overflow-hidden">
                  <button
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-650"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    type="button"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-primary-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      <span className="text-sm font-medium">{faq.q}</span>
                    </div>
                    <svg
                      className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 text-gray-300 text-sm">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://ext.same-assets.com/3665792459/1995707690.jpeg"
              alt="Plumber working"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Service Locations Section
function ServiceLocationsSection() {
  const locations = [
    "Kuala Lumpur", "Mont kiara", "Petaling Jaya",
    "AMPANG park", "Puchong", "AMPANG",
    "Sri hartamas", "Bukit damansara", "Bangsar",
    "Segambut", "Segambut dalam", "KLCC",
    "Kampung baru", "Datuk keramat", "Wangsa maju",
    "Setapak", "Sentul", "Jalan Ipoh",
    "Jalan tun razak", "Duta mas", "Taman Sri sinar",
    "Kiara View", "Bandar Sri Damansara", "Damansara Perdana",
    "Mutiara damansara", "Bandar Utama", "Taman tun Ismail",
    "Titiwangsa Sentral", "Pekeliling", "Bandar Baru Sentul",
    "Danau Kota", "Taman Sri rampai", "Subang jaya",
    "Shah alam", "Jalan klang lama", "Bandar Kinrara",
    "Bukit jalil", "Desa Park City", "Sungai buloh",
    "Jalan ampang",
  ];

  return (
    <section className="py-16 bg-primary-purple text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-slab">
          Our Service Locations
        </h2>
        <p className="mt-4 text-primary-gold">
          We proudly serve these premium locations across the city with our exceptional services
        </p>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
          {locations.map((location) => (
            <div
              key={location}
              className="bg-purple-700/50 hover:bg-purple-600/60 py-3 px-4 rounded transition-colors cursor-pointer text-sm"
            >
              {location}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-purple-700/30 p-8 rounded-lg">
          <h3 className="text-xl font-bold font-slab">Don't See Your Location?</h3>
          <p className="mt-2 text-primary-gold text-sm">
            We're constantly expanding our service areas. Contact us to find out if we can serve your location or to suggest a new area.
          </p>
          <a
            href="https://wa.me/60142711987"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp Us: +60 14-271 1987
          </a>
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      text: "Very kind and friendly service. I had an emergency situation and needed help with my plumbing issue in the evening. Tan Resources was very helpful and managed to get me their guys to help within the next day itself. Really great services. I will defenelty recomend to others. And be a repeating customer in future. Thank you Tan Resources.",
      name: "klshvan z800",
      rating: 5,
    },
    {
      text: "Thank you Zaib & Ali. Well done for the great job. Punctuality 10/10 Work efficient 10/10 Work Performance 10/10 Satisfied with their service. Completed the job within 2 hours. Highly recommended for other client.",
      name: "Liyana Aziz",
      rating: 5,
    },
    {
      text: "Uncle Tan plumbers were very responsive and quick..have been struggling with clogged toilet and they came n rectified it immediately..very friendly staffs and helpful as well..highly recommended",
      name: "Aneesha Divya",
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-block bg-primary-purple text-white text-xs px-3 py-1 rounded font-medium">
            Quality Assurance
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900 font-slab">
            What Client Say
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 relative">
              <div className="absolute top-4 right-4 text-5xl text-gray-200 font-serif">"</div>
              <p className="text-gray-600 text-sm italic leading-relaxed relative z-10">
                {testimonial.text}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-purple rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-primary-gold" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer id="contact" className="bg-primary-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <div className="w-16 h-16 bg-primary-purple rounded-full flex items-center justify-center border-4 border-primary-gold">
              <span className="text-white font-bold text-xl font-slab">TR</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Providing reliable plumbing, electrical, renovation, and roofing services for homes
              across Kuala Lumpur, Malaysia. With years of hands-on experience, we deliver fast,
              high-quality solutions you can trust—every time.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary-gold hover:text-gray-900 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-primary-gold mb-4">Quick Link</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#about" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary-gold">{">"}</span> About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary-gold">{">"}</span> Blog</Link></li>
              <li><Link href="#contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary-gold">{">"}</span> Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold text-primary-gold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary-gold">{">"}</span> Plumbing Services</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary-gold">{">"}</span> Electrician Services</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary-gold">{">"}</span> Handyman Services</Link></li>
              <li><Link href="#services" className="hover:text-white transition-colors flex items-center gap-2"><span className="text-primary-gold">{">"}</span> Aircon Services</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-primary-gold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span>25, Jalan Larut, Titiwangsa Sentral, 50400 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+60142711987" className="hover:text-white transition-colors">+60 14-271 1987</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a href="mailto:info@tanresources.com" className="hover:text-white transition-colors">info@tanresources.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-primary-gold flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                </svg>
                <span>Available 24/7 for Emergencies</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Floating Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/60142711987"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50 animate-pulse-glow"
    >
      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// Main Page
export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <EmergencyCTA />
      <CoreServicesSection />
      <WhyChooseIconsSection />
      <EmergencyCTA />
      <ServiceDetailSection />
      <WhyChooseCardsSection />
      <FAQSection />
      <ServiceLocationsSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
