import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const validateForm = () => {
    const errors: { [key: string]: string } = {};

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

    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', business: '', message: '' });
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
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="heading-xl mb-6">
              Let's <span className="gradient-text">Talk</span>
            </h1>
            <p className="text-xl mb-8 text-white/80 max-w-3xl mx-auto">
              Ready to build something better? We'll respond fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-one-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-gradient-to-br from-purple-700/30 to-pink-500/30 p-8 rounded-xl shadow-lg ring-1 ring-white/10">
                <h2 className="heading-md mb-6">Send us a message</h2>
                {/* ...form content here... */}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="bg-gradient-to-br from-purple-700/30 to-pink-500/30 text-white shadow-xl rounded-xl p-8 h-full ring-1 ring-white/10">
                <h2 className="heading-md mb-6">Contact Information</h2>
                {/* ...contact info content here... */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-one-dark text-white">
        <div className="container-custom text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto mb-16"
          >
            <h2 className="heading-lg mb-4">Let's Build Something Better</h2>
            <p className="text-lg text-white/80">
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

export default ContactPage;
