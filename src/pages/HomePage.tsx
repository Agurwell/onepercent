import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Rocket, BarChart3, MousePointerClick, Gauge, Brain } from 'lucide-react';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0, transition: { duration: 0.6 }
    }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-screen text-white flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/16.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 container-custom w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-full px-8 py-10 mt-8 ring-2 ring-white/20 shadow-[0_0_60px_rgba(255,255,255,0.1)] text-center"
          >
            <h1 className="heading-xl mb-5 text-white tracking-tight leading-tight drop-shadow-md">
              About <span className="gradient-text">One</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto drop-shadow-sm">
              No certifications, no corporate talk. Just strategy, systems, and execution that work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-one-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-4">Services that drive growth</h2>
            <p className="text-lg text-white/80">
              Everything a small service business needs to grow with purpose. 
              No fluff, just the tools and strategies that actually work.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <ServiceCard icon={<Globe className="text-one-blue" size={32} />} title="Website Development & Maintenance" description="Your 24/7 sales rep. Fast, modern, mobile-first. Built to convert." />
            <ServiceCard icon={<Rocket className="text-one-blue" size={32} />} title="SEO & Digital Marketing" description="Every $1 in SEO returns $22. We get you found—and chosen." />
            <ServiceCard icon={<BarChart3 className="text-one-blue" size={32} />} title="Social Media & Paid Ads" description="Be in the feed or be forgotten. We run ROI-focused campaigns that actually work." />
            <ServiceCard icon={<MousePointerClick className="text-one-blue" size={32} />} title="Google Optimization & Review Strategy" description="70% more likely to visit. 50% more likely to buy. We make your Google presence untouchable." />
            <ServiceCard icon={<Gauge className="text-one-blue" size={32} />} title="Automation & Systems Integration" description="Stop wasting time. Automate the grind and scale smart." />
            <ServiceCard icon={<Brain className="text-one-blue" size={32} />} title="Growth Advising & Coaching" description="No fluff. Just clarity, direction, and results." />
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center text-lg font-bold hover:text-one-blue transition-colors">
              See all our services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link
          to="/contact"
          className="bg-one-blue hover:bg-one-blue/80 text-white text-sm font-semibold px-5 py-3 rounded-full shadow-lg transition-all"
        >
          Receive a Free Website Audit
        </Link>
      </div>
    </>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-purple-700/30 to-pink-500/30 text-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ring-1 ring-white/10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
      }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-white/80">{description}</p>
      <Link
        to="/services"
        className="inline-flex items-center mt-4 font-bold hover:text-one-blue transition-colors"
      >
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

export default HomePage;
