
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronUp } from "react-icons/fi";
import { useTranslation } from "../../hooks/translationContext";

const FaqSection = ({ faqItems }) => {
  const {translate} = useTranslation();
  const [openedIndex, setOpenedIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenedIndex(openedIndex === index ? null : index);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };



  return (
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          className='text-center mb-12'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {translate("main.Frequently_asked_questions")}
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600">
            {translate("main.Find_quick_answers")}
          </p>
        </motion.div>

        <motion.div
          className="space-y-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={item}
            >
              <FaqItem
                question={item.question}
                answer={item.answer}
                isOpen={openedIndex === index}
                onClick={() => toggleItem(index)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      className={`border rounded-2xl overflow-hidden ${isOpen ? 'border-Primary shadow-md' : 'border-gray-200'}`}
      whileHover={{
        scale: 1.01,
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
      }}
    >
      <motion.button
        className="w-full text-left p-6 flex justify-between items-center bg-white"
        onClick={onClick}
        aria-expanded={isOpen}
        whileTap={{ scale: 0.98 }}
      >
        <motion.h3
          className="text-lg md:text-xl font-semibold text-gray-800"
          animate={{ color: isOpen ? "#388E3C" : "#1F2937" }}
        >
          {question}
        </motion.h3>
        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FiChevronUp className="text-gray-500 text-xl" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: "easeOut" },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2 },
                opacity: { duration: 0.1 }
              }
            }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-gray-600 text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};