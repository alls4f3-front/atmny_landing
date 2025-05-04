import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useTranslation } from "../../hooks/translationContext";



const FeaturesSection = ({ features }) => {
    const { translate } = useTranslation();
    const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
      id="Why_choose_us"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-[90%] ">
        <motion.div
          className='text-center mb-16'
          variants={item}
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-6 heading"
            variants={item}
          >
            {translate("main.WhyChooseOurApp")}
          </motion.h1>
          <motion.p
            className="text-base md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto"
            variants={item}
          >
            {translate("main.WhyChooseOurAppDescription")}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          variants={container}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection ;











const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      className="relative w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 300 }
      }}
    >
      <motion.div
        className="absolute top-6 -left-[2px] bg-Primary rounded-s-3xl w-[4px] h-16"
        initial={{ scaleY: 0, originY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
      />

      <div className='flex flex-col items-start justify-start gap-2 bg-PrimaryDark/10 w-full h-full rounded-2xl p-4 py-8 pb-16 hover:bg-PrimaryDark/15 transition-all duration-300'>
        <motion.div
          className="text-black mb-4 p-3 rounded-2xl bg-Primary/20"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            backgroundColor: "rgba(76, 175, 80, 0.3)"
          }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {icon}
        </motion.div>

        <motion.h3
          className="text-lg md:text-xl lg:text-2xl font-semibold heading text-PrimaryDark relative inline-block"
          whileHover={{
            color: "#388E3C" // Darker primary color
          }}
        >
          {title}

        </motion.h3>

        <motion.p
          className="text-TextDark text-base md:text-lg lg:text-xl"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};
