import React from 'react';
import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';
import { Link } from 'react-router-dom';

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
      <section
        className="pt-32 pb-16 md:pt-40 md:pb-20 relative bg-black text-white"
        style={{
          backgroundImage: "url('/images/oneland.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-0" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-t from-black/60 to-transparent z-0" />
        <div className="relative z-10 container-custom text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="heading-xl mb-6">
              About <span className="gradient-text">One</span>
            </h1>
            <p className="text-xl mb-8 text-white/80 max-w-3xl mx-auto">
              No certifications, no corporate talk. Just strategy, systems, and execution that work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-one-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="bg-gradient-to-br from-purple-700/30 to-pink-500/30 p-8 rounded-xl ring-1 ring-white/10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
            >
              <h2 className="heading-lg mb-6">Meet Adam </h2>
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
                src="/images/me2.png"
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
      <section className="py-20 bg-one-dark text-white">
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
                src="/images/sweetdreams.jpg"
                alt="Team collaborating on business growth strategy"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              className="bg-gradient-to-br from-purple-700/30 to-pink-500/30 p-8 rounded-xl ring-1 ring-white/10"
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
        title="Ready to transform your business?"
        subtitle="Let's talk about how our services can be tailored to your specific needs and goals."
      />

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

interface ValueCardProps {
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ title, description }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-purple-700/30 to-pink-500/30 text-white p-8 rounded-xl shadow-lg ring-1 ring-white/10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.3 }
        }
      }}
    >
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

export default AboutPage;
