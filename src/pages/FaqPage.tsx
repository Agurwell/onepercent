import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Link } from 'lucide-react';
import CTASection from '../components/CTASection';

const FaqPage: React.FC = () => {
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

      {/* Stats Section */}
      <section className="py-20 bg-one-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-4 text-cyan-400">The Numbers Don't Lie</h2>
            <p className="text-lg text-white/80">
              Hard data on why digital strategy matters for local service businesses.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <StatCard 
              stat="97%"
              description="of consumers say a business website influences buying decisions"
            />
            <StatCard 
              stat="78%"
              description="of local mobile searches result in an offline purchase"
            />
            <StatCard 
              stat="8x"
              description="better conversion rate for SEO leads vs. traditional marketing"
            />
            <StatCard 
              stat="70%"
              description="more likely to visit a business with a complete Google profile"
            />
            <StatCard 
              stat="500+"
              description="hours saved annually by businesses using automation"
            />
            <StatCard 
              stat="88%"
              description="of consumers trust online reviews as much as personal recommendations"
            />
            <StatCard 
              stat="2x"
              description="more likely to survive 5+ years with strategic mentoring"
            />
            <StatCard 
              stat="63%"
              description="of businesses say generating traffic and leads is their top challenge"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-one-dark text-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-4 text-cyan-400">Frequently Asked Questions</h2>
            <p className="text-lg text-white/80">
              Clear answers to your most pressing questions about growth and digital strategy.
            </p>
          </motion.div>

          <motion.div 
            className="max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <FaqItem 
              question="How much does a website actually impact revenue?"
              answer="A professional website isn't just a digital business card—it's your 24/7 salesperson. For service businesses, a conversion-optimized website typically increases lead generation by 150-300%. Beyond direct leads, it builds credibility, supports your other marketing efforts, and provides valuable customer data. In today's market, a strong website isn't a luxury—it's the foundation of sustainable growth."
            />
            <FaqItem 
              question="What's the ROI on SEO?"
              answer="SEO offers one of the highest ROIs in marketing, with an average of $22 returned for every $1 spent. For local service businesses, the impact is even greater since you're targeting people actively searching for your services. While SEO takes 3-6 months to show significant results, it creates a sustainable lead generation system that, unlike paid ads, continues working even when you pause investment."
            />
            <FaqItem 
              question="Is social media really worth it for local service businesses?"
              answer="Absolutely, but with the right approach. For service businesses, social media isn't about going viral—it's about community presence, trust building, and staying top-of-mind. Our clients see social media drive 15-30% of their new business through a combination of direct inquiries, referrals, and brand recognition. The key is focusing on the right platforms and content types for your specific audience."
            />
            <FaqItem 
              question="Why should I automate if I'm doing fine manually?"
              answer="Automation isn't just about saving time—though our clients typically reclaim 10-20 hours weekly. It's about creating consistency, reducing errors, and enabling scale. When your customer follow-ups, appointment reminders, and data entry happen automatically, you can focus on high-value work that actually grows your business. Most importantly, automation creates a business that can run without you being involved in every detail."
            />
            <FaqItem 
              question="What kind of results have others seen from growth coaching?"
              answer="Our coaching clients typically see 30-50% revenue growth within 12 months. Beyond financial metrics, they report greater clarity, more efficient operations, and dramatically reduced stress. The most significant impact comes from breaking through specific growth ceilings that were holding their business back—whether that's implementing systems for delegation, clarifying their unique market position, or creating scalable marketing funnels."
            />
            <FaqItem 
              question="How long until I see results from working with One?"
              answer="This varies by service, but we believe in quick wins paired with long-term strategy. Website and automation improvements typically show measurable results within 30 days. SEO and content marketing build momentum over 3-6 months. Growth coaching often creates immediate clarity while the revenue impact compounds over 6-12 months. We establish clear metrics and timelines for every engagement so you always know what to expect."
            />
          </motion.div>
        </div>
      </section>

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

interface StatCardProps {
  stat: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ stat, description }) => {
  return (
    <motion.div 
      className="bg-gradient-to-br from-purple-700/30 to-pink-500/30 text-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row items-center gap-4 ring-1 ring-white/10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.3 }
        }
      }}
    >
      <div className="min-w-max">
        <p className="text-4xl font-black text-cyan-400 tracking-wide uppercase">{stat}</p>
      </div>
      <p className="text-white/80 text-center md:text-left">{description}</p>
    </motion.div>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      className="mb-6 bg-gradient-to-br from-purple-700/30 to-pink-500/30 text-white p-6 rounded-xl shadow-lg ring-1 ring-white/10"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.3 }
        }
      }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-cyan-400">{question}</h3>
        {isOpen ? <ChevronUp className="flex-shrink-0" /> : <ChevronDown className="flex-shrink-0" />}
      </button>
      {isOpen && (
        <div className="mt-4">
          <p className="text-white/80">{answer}</p>
        </div>
      )}
    </motion.div>
  );
};

export default FaqPage;
