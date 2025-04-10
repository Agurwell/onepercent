import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Globe,
  Rocket,
  BarChart3,
  MousePointerClick,
  Gauge,
  Brain
} from 'lucide-react';
import CTASection from '../components/CTASection';

interface ServiceSectionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
  image: string;
  reverse: boolean;
}

const ServicesPage: React.FC = () => {
  const ServiceSection: React.FC<ServiceSectionProps> = ({
    icon,
    title,
    description,
    details,
    image,
    reverse
  }) => {
    return (
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0, x: reverse ? 50 : -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <div className="mb-4">{icon}</div>
              <h2 className="heading-lg mb-4">{title}</h2>
              <p className="text-xl mb-6 text-gray-700">{description}</p>
              <ul className="space-y-3 mb-8">
                {details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="bg-one-green/20 rounded-full p-1 mr-3 mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-one-dark" viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center font-bold hover:text-one-blue transition-colors">
                Discuss your project <ArrowRight size={16} className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              className={`rounded-xl overflow-hidden h-[400px] lg:h-[500px] ${reverse ? 'lg:order-first' : 'order-first lg:order-last'}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.8, ease: 'easeOut' }
                }
              }}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      <ServiceSection
        icon={<Globe size={36} className="text-one-blue" />}
        title="Website Development & Maintenance"
        description="Your 24/7 sales rep. Fast, modern, mobile-first. Built to convert."
        details={[
          "Custom, conversion-focused website design that turns visitors into customers",
          "Mobile-first approach ensuring your site works perfectly on any device",
          "SEO-optimized from the ground up to attract the right traffic",
          "Built with growth in mind, easily scalable as your business evolves",
          "Ongoing maintenance and support to keep your digital presence running smoothly"
        ]}
        image="/images/servicecenter.jpg"
        reverse={false}
      />

      <ServiceSection
        icon={<Rocket size={36} className="text-one-blue" />}
        title="SEO & Digital Marketing"
        description="Every $1 in SEO returns $22. We get you found—and chosen."
        details={[
          "Local SEO strategies that put you at the top of search results in your area",
          "Strategic keyword research focused on what your customers are actually searching for",
          "Content creation that establishes your authority in your industry",
          "Technical SEO improvements that boost your site's visibility to search engines",
          "Regular reporting that shows real progress, not vanity metrics"
        ]}
        image="/images/pinknpurpphone.jpg"
        reverse={true}
      />

      <ServiceSection
        icon={<BarChart3 size={36} className="text-one-blue" />}
        title="Social Media & Paid Ads"
        description="Be in the feed or be forgotten. We run ROI-focused campaigns that actually work."
        details={[
          "Strategic social media management that builds real community around your brand",
          "Targeted paid advertising campaigns that reach the right people at the right time",
          "Content creation that stops the scroll and drives engagement",
          "ROI-focused approach ensuring every dollar spent brings measurable returns",
          "Regular optimization based on performance data, not guesswork"
        ]}
        image="/images/pinkmonitor.jpg"
        reverse={false}
      />

      <ServiceSection
        icon={<MousePointerClick size={36} className="text-one-blue" />}
        title="Google Optimization & Review Strategy"
        description="70% more likely to visit. 50% more likely to buy. We make your Google presence untouchable."
        details={[
          "Google Business Profile optimization that puts you on the map—literally",
          "Review generation strategies that build trust and improve visibility",
          "Reputation management to protect and enhance your online image",
          "Local citation building that strengthens your presence across the web",
          "Google Analytics setup and monitoring to track real-world results"
        ]}
        image="/images/nothingtoseehere..jpg"
        reverse={true}
      />

      <ServiceSection
        icon={<Gauge size={36} className="text-one-blue" />}
        title="Automation & Systems Integration"
        description="Stop wasting time. Automate the grind and scale smart."
        details={[
          "Business process automation that frees you from repetitive tasks",
          "Customer journey mapping and optimization for seamless experiences",
          "CRM implementation and integration that keeps your team organized",
          "Workflow optimization that saves hundreds of hours annually",
          "Custom automation solutions tailored to your specific business needs"
        ]}
        image="/images/gradkey.jpg"
        reverse={false}
      />

      <ServiceSection
        icon={<Brain size={36} className="text-one-blue" />}
        title="Growth Advising & Coaching"
        description="No fluff. Just clarity, direction, and results."
        details={[
          "Strategic business planning focused on sustainable growth",
          "One-on-one coaching to overcome specific challenges and bottlenecks",
          "Systems thinking that creates scalable, replicable business models",
          "Market analysis and competitive positioning to help you stand out",
          "Accountability and support to ensure you execute on your vision"
        ]}
        image="/images/greenpurpmeet.jpg"
        reverse={true}
      />

      <CTASection
        title="Ready to transform your business?"
        subtitle="Let's talk about how our services can be tailored to your specific needs and goals."
      />
    </>
  );
};

export default ServicesPage;
