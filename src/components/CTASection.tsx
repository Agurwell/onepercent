import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  bgColor?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Let's build something better.",
  subtitle = "Ready to scale up and stand out? We'll help you get there.",
  buttonText = "Let's Talk",
  bgColor = "bg-one-dark"
}) => {
  return (
    <section className={`${bgColor} py-20 md:py-24`}>
      <div className="container-custom text-center">
        <h2 className="heading-lg text-white mb-4 max-w-3xl mx-auto">
          {title}
        </h2>
        <p className="text-white/80 mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link 
          to="/contact" 
          className="btn-accent flex items-center gap-1 mx-auto w-fit"
        >
          {buttonText} <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CTASection;