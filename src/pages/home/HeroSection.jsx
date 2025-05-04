import { motion } from 'framer-motion'
import { DiAndroid } from 'react-icons/di'
import { FaApple } from 'react-icons/fa'
import { useTranslation } from "../../hooks/translationContext";

const HeroSection = () => {
  const {translate} = useTranslation();
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    transition: { type: "spring", stiffness: 400 }
  };

  const buttonTap = {
    scale: 0.98
  };

  return (
    <motion.section
      className="py-20  "
      id="about"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-around items-center">

        <motion.div
          className=" w-[350px] md:w-[450px] lg:w-[550px]   "
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { delay: 0.8, type: "spring" }
          }}
          whileHover={{
            y: -20,
            transition: { type: "spring", stiffness: 400 }
          }}
        >
          <img
            src="/images/iPhone.png"
            alt="App Mockup"
            className="w-full h-auto drop-shadow-2xl -rotate-12"
          />
        </motion.div>
        <motion.div className='text-center'>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-6 heading"
            variants={container}
          >
            {[translate("main.all_your_daily_Services"), translate("main.in_one_smart_app")].map((line, i) => (
              <motion.div
                key={i}
                className="overflow-hidden inline-block"
                variants={container}
              >
                <motion.span
                  className="inline-block"
                  variants={{
                    hidden: { y: "100%" },
                    visible: { y: 0 }
                  }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line.split(" ").map((word, wi) => (
                    <span key={wi} className="inline-block mr-2 leading-relaxed">
                      {word}
                    </span>
                  ))}
                  {i === 0 && <br className="md:hidden" />}
                </motion.span>
              </motion.div>
            ))}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto"
            variants={item}
          >
            {translate("main.order_food")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={item}
          >
            <motion.button
              className="flex items-center justify-center gap-3 font-semibold text-white bg-Primary rounded-full border border-Primary px-8 py-4 hover:bg-PrimaryDark hover:border-PrimaryDark animation text-lg"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <span>{translate("main.get_on_ios")}</span>
              <FaApple size={22} />
            </motion.button>

            <motion.button
              className="flex items-center justify-center gap-3 font-semibold text-Primary rounded-full border-2 border-Primary px-8 py-4 hover:bg-Primary/10 hover:border-PrimaryDark hover:text-PrimaryDark animation text-lg"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              <span>{translate("main.get_on_android")}</span>
              <DiAndroid size={22} />
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  )
}

export default HeroSection