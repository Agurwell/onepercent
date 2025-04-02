import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import CTASection from '../components/CTASection';

const TestimonialsPage: React.FC = () => {
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
              Client <span className="gradient-text">Success</span> Stories
            </h1>
            <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Don't take our word for it. Here's what local service businesses have to say about partnering with One.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div 
            className="bg-one-dark text-white p-8 md:p-12 rounded-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-full md:w-1/3">
                <div className="rounded-xl overflow-hidden h-[300px]">
                  <img 
                    src="https://i.imgur.com/P43zAFA.jpeg" 
                    alt="Margot Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-one-blue" fill="#00FFFF" size={24} />
                  ))}
                </div>
                <p className="text-2xl md:text-3xl font-medium mb-6">
                  "We finally feel in control of our business. One helped us transform our online presence and streamline our operations. 
                  The systems they built for us have freed up so much time that I can finally focus on growing the business instead of just managing it."
                </p>
                <div>
                  <p className="text-xl font-bold text-white">Margot Johnson</p>
                  <p className="text-white/70">Clarity Wellness Center</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-one-light">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-4">More Success Stories</h2>
            <p className="text-lg text-gray-700">
              We've helped businesses across various industries achieve remarkable results.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <TestimonialCard 
              quote="They didn't just fix our site—they fixed our growth. Since working with One, our leads have doubled and our close rate is up 35%."
              name="Mike Rodriguez"
              business="Elite Contracting"
              stars={5}
            />
            <TestimonialCard 
              quote="The automation systems alone paid for the whole project in 30 days. We're saving 20+ hours a week on manual tasks now."
              name="Jennifer Williams"
              business="Harbor Real Estate"
              stars={5}
            />
            <TestimonialCard 
              quote="Our Google presence has completely transformed. We're now the most visible plumber in our area, and it's directly increased our calls."
              name="David Martinez"
              business="Flow Plumbing Solutions"
              stars={5}
            />
            <TestimonialCard 
              quote="The SEO strategy they created has been a game-changer. We're ranking #1 for all our key services, and the phone won't stop ringing."
              name="Michelle Thompson"
              business="Green Leaf Landscaping"
              stars={5}
            />
            <TestimonialCard 
              quote="Adam's growth coaching gave us the clarity we desperately needed. For the first time, we have a real roadmap and confidence in our direction."
              name="Robert Chen"
              business="Precision Auto Care"
              stars={5}
            />
            <TestimonialCard 
              quote="The social media strategy has transformed how people see our brand. We've built a real community and it's driving daily business."
              name="Lisa Patel"
              business="Bright Smile Dental"
              stars={5}
            />
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="heading-lg mb-4">Real Results, Real Numbers</h2>
            <p className="text-lg text-gray-700">
              We help our clients achieve measurable growth across key metrics.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <ResultCard 
              number="143%"
              description="Average increase in organic website traffic within 6 months"
            />
            <ResultCard 
              number="67%"
              description="Average improvement in lead conversion rates"
            />
            <ResultCard 
              number="20+"
              description="Hours saved weekly through business process automation"
            />
            <ResultCard 
              number="35%"
              description="Average revenue growth within first year of partnership"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Want to be our next success story?"
        subtitle="Let's talk about how we can help you achieve similar results."
      />
    </>
  );
};

interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
  stars: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, business, stars }) => {
  return (
    <motion.div 
      className="bg-white p-8 rounded-xl shadow-lg"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.3 }
        }
      }}
    >
      <div className="flex mb-4">
        {[...Array(stars)].map((_, i) => (
          <Star key={i} className="text-one-blue" fill="#00FFFF" size={20} />
        ))}
      </div>
      <p className="text-lg mb-6">{quote}</p>
      <div>
        <p className="font-bold text-one-dark">{name}</p>
        <p className="text-gray-600">{business}</p>
      </div>
    </motion.div>
  );
};

interface ResultCardProps {
  number: string;
  description: string;
}

const ResultCard: React.FC<ResultCardProps> = ({ number, description }) => {
  return (
    <motion.div 
      className="bg-one-dark text-white p-8 rounded-xl text-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.3 }
        }
      }}
    >
      <p className="text-4xl md:text-5xl font-black mb-3 gradient-text">{number}</p>
      <p className="text-white/80">{description}</p>
    </motion.div>
  );
};

export default TestimonialsPage;