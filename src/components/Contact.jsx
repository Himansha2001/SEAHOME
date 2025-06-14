import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-serif font-bold text-gray-900 mb-4"
          >
            Book a Viewing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600"
          >
            Schedule a private viewing of our luxury coastal properties
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-lg bg-white/60 border border-white/40 shadow-2xl rounded-2xl p-8 md:p-12 relative z-10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {['name', 'email', 'phone', 'date', 'time', 'message'].map((field, idx) => (
                <div key={field} className="relative">
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : field === 'date' ? 'date' : field === 'time' ? 'time' : field === 'message' ? 'textarea' : 'text'}
                    name={field}
                    id={field}
                    required={field !== 'message'}
                    value={formData[field]}
                    onChange={handleChange}
                    className={`peer w-full rounded-lg border border-gray-300 bg-white/70 px-4 pt-6 pb-2 text-gray-900 placeholder-transparent shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200 ${field === 'message' ? 'h-28 resize-none' : 'h-12'}`}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    as={field === 'message' ? 'textarea' : undefined}
                    rows={field === 'message' ? 4 : undefined}
                  />
                  <label
                    htmlFor={field}
                    className="absolute left-4 top-2 text-gray-500 text-sm font-medium pointer-events-none transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-primary"
                  >
                    {field === 'name' && 'Full Name'}
                    {field === 'email' && 'Email Address'}
                    {field === 'phone' && 'Phone Number'}
                    {field === 'date' && 'Preferred Date'}
                    {field === 'time' && 'Preferred Time'}
                    {field === 'message' && 'Additional Message'}
                  </label>
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-full btn btn-primary text-lg shadow-lg mt-2"
              >
                Schedule Viewing
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl flex flex-col justify-center"
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 font-medium">Address</p>
                  <p className="text-gray-600">123 Coastal Drive, Beachfront, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 font-medium">Email</p>
                  <p className="text-gray-600">info@seahomes.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-900 font-medium">Phone</p>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Business Hours</h4>
              <div className="space-y-2">
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 