import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren"
    }
  }
};
const DetailedServicesSection = ({ detailsServices }) => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="space-y-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {detailsServices.map((service, index) => (
            <ServiceDetail
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              howItWorks={service.howItWorks}
              whyUseful={service.whyUseful}
              image={service.image}
              reverse={service.reverse}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default DetailedServicesSection




const ServiceDetail = ({ title, subtitle, description, howItWorks, whyUseful, image, reverse }) => {
  const itemVariants = {
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

  const imageVariants = {
    hidden: { x: 100, opacity: 0, rotate: reverse ? 10 : -10 },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} justify-center items-center gap-8 w-[90%] mx-auto `}
    >
      <motion.div
        className="lg:w-1/2"
        variants={itemVariants}
      >
        <motion.h3
          data-cursor-stick
          className="heading text-base md:text-xl lg:text-3xl text-white font-bold mb-4 bg-Primary p-2 px-6 rounded-full w-fit"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h3>

        <motion.h4
          className="text-xl font-semibold text-PrimaryDark mb-2"
          variants={itemVariants}
        >
          {subtitle}
        </motion.h4>

        <motion.p
          className="text-xl text-TextDark mb-4"
          variants={itemVariants}
        >
          {description}
        </motion.p>

        <motion.div variants={itemVariants}>
          <h4 className="text-xl font-semibold text-PrimaryDark mb-2 heading">How it works</h4>
          <ul className="space-y-2 mb-4">
            {howItWorks.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <span className="text-TextDark text-xl">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h4 className="text-xl font-semibold text-PrimaryDark mb-2 heading">Why it's useful:</h4>
          <p className="text-xl text-TextDark mb-4">{whyUseful}</p>
        </motion.div>
      </motion.div>

      <motion.div
        className={`lg:w-1/2 flex  ${reverse ? 'justify-start' : 'justify-end'}`}
        variants={imageVariants}
      >
        <motion.div
          className={`bg-Primary w-fit p-8 pt-16 pb-0 rounded-3xl flex `}
          whileHover={{
            y: -10,
            transition: { type: "spring", stiffness: 300 }
          }}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
            data-cursor-img={image}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};