import { motion } from 'framer-motion';

const features = [
  {
    title: "Premium Locations",
    description: "Exclusive properties in the most sought-after neighborhoods, offering breathtaking views and prime accessibility.",
    icon: "📍"
  },
  {
    title: "Expert Guidance",
    description: "Our experienced team provides personalized service and expert market insights to make your investment journey seamless.",
    icon: "👥"
  },
  {
    title: "Quality Assurance",
    description: "Every property meets our rigorous standards for quality, design, and construction excellence.",
    icon: "✨"
  },
  {
    title: "Investment Value",
    description: "Strategic locations and premium amenities ensure your property maintains and increases in value over time.",
    icon: "📈"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Why Choose SKYHOMES
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the difference of working with a premier real estate developer committed to excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 