import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, Globe, Rocket, BarChart3, MousePointerClick, Gauge, Brain } from 'lucide-react';
import CTASection from '../components/CTASection';

const HomePage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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
  className="pt-32 pb-16 md:pt-40 md:pb-20 relative bg-black"
  style={{
    backgroundImage: "url('/images/ong.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Dark overlay with blur */}
  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

  <div className="relative z-10 container-custom">
    <motion.div 
      className="max-w-4xl mx-auto text-center"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
    >
      <h1 className="heading-xl mb-6 text-white">
        About <span className="gradient-text">One</span>
      </h1>
      <p className="text-xl mb-8 text-gray-300 max-w-3xl mx-auto">
        No certifications, no corporate talk. Just strategy, systems, and execution that work.
      </p>
    </motion.div>
  </div>
</section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-one-light">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-4">Services that drive growth</h2>
            <p className="text-lg text-gray-700">
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
            <ServiceCard 
              icon={<Globe className="text-one-blue" size={32} />}
              title="Website Development & Maintenance"
              description="Your 24/7 sales rep. Fast, modern, mobile-first. Built to convert."
            />
            <ServiceCard 
              icon={<Rocket className="text-one-blue" size={32} />}
              title="SEO & Digital Marketing"
              description="Every $1 in SEO returns $22. We get you found—and chosen."
            />
            <ServiceCard 
              icon={<BarChart3 className="text-one-blue" size={32} />}
              title="Social Media & Paid Ads"
              description="Be in the feed or be forgotten. We run ROI-focused campaigns that actually work."
            />
            <ServiceCard 
              icon={<MousePointerClick className="text-one-blue" size={32} />}
              title="Google Optimization & Review Strategy"
              description="70% more likely to visit. 50% more likely to buy. We make your Google presence untouchable."
            />
            <ServiceCard 
              icon={<Gauge className="text-one-blue" size={32} />}
              title="Automation & Systems Integration"
              description="Stop wasting time. Automate the grind and scale smart."
            />
            <ServiceCard 
              icon={<Brain className="text-one-blue" size={32} />}
              title="Growth Advising & Coaching"
              description="No fluff. Just clarity, direction, and results."
            />
          </motion.div>

          <div className="text-center mt-12">
            <Link 
              to="/services" 
              className="inline-flex items-center text-lg font-bold hover:text-one-blue transition-colors"
            >
              See all our services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why One Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="heading-lg mb-6">Why partner with <span className="gradient-text">One</span>?</h2>
              <p className="text-lg mb-6">
                We're not a traditional agency—we're your no-fluff, all-results partner. 
                We focus on what actually moves the needle for small service businesses.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="bg-one-green/20 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-one-dark" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-medium">Results-driven strategies, not endless meetings</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-one-green/20 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-one-dark" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-medium">Focused on ROI that you can actually see</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-one-green/20 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-one-dark" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-medium">Systems that create freedom, not dependencies</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-one-green/20 rounded-full p-1 mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-one-dark" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="font-medium">Clarity over confusion, strategy over struggle</span>
                </li>
              </ul>
              <Link to="/about" className="btn-primary mt-8">
                Learn more about us
              </Link>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden h-[500px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img 
                src="https://i.imgur.com/JOaMmBZ.png" 
                alt="Team collaborating on business growth strategy" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-one-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-4">What our clients say</h2>
            <p className="text-white/80">
              Don't take our word for it. Here's what local service businesses have to say about partnering with One.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <TestimonialCard 
              quote="We finally feel in control of our business."
              name="Sarah Johnson"
              business="Clarity Wellness Center"
            />
            <TestimonialCard 
              quote="They didn't just fix our site—they fixed our growth."
              name="Mike Rodriguez"
              business="Elite Contracting"
            />
            <TestimonialCard 
              quote="The automation systems alone paid for the whole project in 30 days."
              name="Jennifer Williams"
              business="Harbor Real Estate"
            />
          </motion.div>

          <div className="text-center mt-12">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center text-lg font-bold text-white hover:text-one-blue transition-colors"
            >
              Read more success stories <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Preview */}
      <section className="py-20 bg-one-light">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-4">The numbers don't lie</h2>
            <p className="text-lg text-gray-700">
              Real results for real businesses. Here's what our approach can deliver.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <StatCard 
              number="97%"
              description="of consumers say a business website influences buying decisions"
            />
            <StatCard 
              number="8x"
              description="better conversion rate for SEO leads vs. traditional marketing"
            />
            <StatCard 
              number="500+"
              description="hours saved annually by businesses using automation"
            />
            <StatCard 
              number="2x"
              description="more likely to survive 5+ years with strategic mentoring"
            />
          </motion.div>

          <div className="text-center mt-12">
            <Link 
              to="/faq" 
              className="inline-flex items-center text-lg font-bold hover:text-one-blue transition-colors"
            >
              See more stats & FAQ <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
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
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.3 }
        }
      }}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="heading-sm mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <Link 
        to="/services" 
        className="inline-flex items-center mt-4 font-bold hover:text-one-blue transition-colors"
      >
        Learn more <ArrowRight size={16} className="ml-1" />
      </Link>
    </motion.div>
  );
};

interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, business }) => {
  return (
    <motion.div 
      className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.3 }
        }
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-one-blue mb-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
      </svg>
      <p className="text-xl font-medium mb-6">{quote}</p>
      <div>
        <p className="font-bold text-white">{name}</p>
        <p className="text-white/70">{business}</p>
      </div>
    </motion.div>
  );
};

interface StatCardProps {
  number: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, description }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.3 }
        }
      }}
    >
      <p className="text-4xl md:text-5xl font-black text-one-dark mb-3 gradient-text">{number}</p>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

export default HomePage;