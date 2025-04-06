import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const errors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        business: '',
        message: '',
      });
    }, 1500);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
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
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
              Ready to build something better? We'll respond fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-white shadow-xl rounded-xl p-8">
                <h2 className="heading-md mb-6">Send us a message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
                      <h3 className="font-bold text-xl mb-2">Message Sent!</h3>
                      <p>We'll get back to you as soon as possible.</p>
                    </div>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-primary"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-6">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!formErrors.name}
                        className={`w-full px-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-one-blue focus:border-transparent`}
                      />
                      {formErrors.name && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          aria-required="true"
                          aria-invalid={!!formErrors.email}
                          className={`w-full px-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-one-blue focus:border-transparent`}
                        />
                        {formErrors.email && (
                          <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-one-blue focus:border-transparent"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        name="business"
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-one-blue focus:border-transparent"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        How can we help? <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        aria-required="true"
                        aria-invalid={!!formErrors.message}
                        rows={5}
                        className={`w-full px-4 py-3 border ${formErrors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-one-blue focus:border-transparent`}
                      />
                      {formErrors.message && (
                        <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                      )}
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full flex items-center justify-center gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Processing...</>
                      ) : (
                        <>Send Message <Send size={16} /></>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-one-dark text-white shadow-xl rounded-xl p-8 h-full">
                <h2 className="heading-md mb-6">Contact Information</h2>
                <p className="mb-8">
                  We're ready to discuss how we can help your business grow. Reach out and we'll respond as soon as possible.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Mail className="text-one-blue" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Email</p>
                      <a 
                        href="mailto:adam@youronepercent.com" 
                        className="text-white hover:text-one-blue transition-colors"
                      >
                        adam@youronepercent.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/10 p-3 rounded-full">
                      <Phone className="text-one-blue" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Phone</p>
                      <a 
                        href="tel:4402511177" 
                        className="text-white hover:text-one-blue transition-colors"
                      >
                        (440) 251-1177
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                  <p className="mb-4">
                    When you reach out, here's what happens next:
                  </p>
                  <ol className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-one-blue/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        1
                      </span>
                      <span>We'll schedule a discovery call to understand your business and goals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-one-blue/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        2
                      </span>
                      <span>We'll create a tailored proposal based on your specific needs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-one-blue/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        3
                      </span>
                      <span>Once approved, we'll develop a clear roadmap and get to work</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-one-blue/20 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1 flex-shrink-0">
                        4
                      </span>
                      <span>You'll see regular updates and measurable results as we progress</span>
                    </li>
                  </ol>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-one-light">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-4">Let's Build Something Better</h2>
            <p className="text-lg text-gray-700">
              Ready to take the next step? Reach out today and let's start the conversation about growing your business.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <a href="/contact" className="btn-primary">
              Start The Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;