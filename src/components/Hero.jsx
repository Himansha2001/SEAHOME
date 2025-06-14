import { motion } from 'framer-motion';

const heroBg = 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg';

const Hero = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg"
        >
          Discover Luxury Coastal Living
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-white mb-8 drop-shadow-md"
        >
          SEAHOMES brings you the finest selection of oceanfront properties for a life of elegance and tranquility.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary text-lg shadow-xl"
          >
            View Properties
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary text-lg shadow-xl"
          >
            Book a Viewing
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 