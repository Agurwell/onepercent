import React from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';

const AboutPage: React.FC = () => {
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
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-one-light">
        <div className="container-custom">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="heading-xl mb-6">
              About <span className="gradient-text">One</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
              No certifications, no corporate talk. Just strategy, systems, and execution that work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="heading-lg mb-6">Meet Adam Gurwell</h2>
              <p className="text-lg mb-6">
                Adam founded One with a simple mission: give small business owners the edge they've been missing. 
                After years of watching talented entrepreneurs struggle with outdated systems and complicated marketing advice, 
                he decided to build something different.
              </p>
              <p className="text-lg mb-6">
                One exists to give small business owners the edge they've been missing. No certifications, no corporate talk. 
                Just strategy, systems, and execution that work. We're obsessed with results and helping people break out—into 
                more freedom, more revenue, more time.
              </p>
              <p className="text-lg">
                You don't need a guru. You need a partner.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden h-[500px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img 
                src="https://i.imgur.com/KpM8SFB.png" 
                alt="Adam Gurwell, founder of One" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-one-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-4">Our Core Values</h2>
            <p className="text-white/80">
              These aren't just words on a wall. They're the principles that guide everything we do.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            <ValueCard 
              title="Personal Growth"
              description="We believe your business should grow with you, not at the expense of you. Everything we do aims to create personal and professional freedom."
            />
            <ValueCard 
              title="Freedom Through Systems"
              description="True freedom comes from having the right systems in place. We build processes that work for you, not the other way around."
            />
            <ValueCard 
              title="Clarity Over Credentials"
              description="We value clear thinking and practical solutions over fancy certificates and jargon. Results speak louder than credentials."
            />
            <ValueCard 
              title="Strategy Over Fluff"
              description="No pointless meetings or vanity metrics. We focus on what actually moves the needle for your business."
            />
            <ValueCard 
              title="Relentless Momentum"
              description="Growth isn't about quick wins—it's about consistent progress. We build momentum that carries your business forward."
            />
            <ValueCard 
              title="Aggressive Accountability"
              description="We hold ourselves and our clients to high standards. Accountability is how progress happens."
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-one-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="rounded-xl overflow-hidden h-[400px] lg:h-[500px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <img 
                src="https://i.imgur.com/7ozxzyl.jpeg" 
                alt="Team collaborating on business growth strategy" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="heading-lg mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                We're on a mission to help small, locally owned service businesses not just survive, but thrive. 
                We believe these businesses are the backbone of communities, and they deserve access to the same 
                quality of marketing, technology, and strategy as the big corporations.
              </p>
              <p className="text-lg mb-6">
                Every day, we work to level the playing field by bringing cutting-edge tools and strategies 
                to businesses that might otherwise be left behind in the digital economy.
              </p>
              <p className="text-lg">
                Success for us means our clients gain more freedom, more revenue, and more clarity through 
                partnering with One.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Ready to work with a partner who gets it?"
        subtitle="Let's cut through the noise and build something better together."
      />
    </>
  );
};

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
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
      <h3 className="text-xl font-bold mb-4 text-one-blue">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

export default AboutPage;