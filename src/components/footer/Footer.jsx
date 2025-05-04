import { motion } from "framer-motion";
import { useTranslation } from '../../hooks/translationContext';
import { DiAndroid } from 'react-icons/di';
import { FaApple } from 'react-icons/fa';

const Footer = () => {
  const { language, setLanguage, translate } = useTranslation();

  const menuItems = [
    { id: 1, name: translate("main.about_us"), link: "/#about" },
    { id: 2, name: translate("main.services"), link: "/#services" },
    { id: 3, name: translate("main.why_choose_us"), link: "/#Why_choose_us" },
    { id: 4, name: translate("main.blog"), link: "/#blog" },
    { id: 5, name: translate("main.contact"), link: "/#contact" },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
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
    <motion.footer
      className="bg-Primary/10 text-TextDark pt-12 "
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <div className="flex flex-col gap-8 max-w-7xl mx-auto px-4">
        <motion.div
          className="flex flex-col items-center justify-center gap-8"
          variants={container}
        >
          <motion.div
            className="flex items-center w-32 lg:w-40 h-16"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="/images/logo.png"
              alt="logo"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.button
            className="flex items-center justify-center gap-2 font-semibold text-Primary rounded-full border-2 border-Primary px-8 py-3 hover:bg-Primary/10 hover:border-PrimaryDark hover:text-PrimaryDark transition-all"
            variants={item}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(76, 175, 80, 0.1)",
              boxShadow: "0 5px 15px rgba(76, 175, 80, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            {translate("main.contact_us")}
          </motion.button>



          <motion.div
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8 w-full px-4"
            variants={container}
          >
            {menuItems.map(({ id, name, link }) => (
              <motion.a
                key={id}
                href={link}
                className="text-gray-700 text-base lg:text-lg font-medium hover:text-Primary transition-colors"
                variants={item}
                whileHover={{
                  scale: 1.1,
                  color: "#388E3C"
                }}
              >
                {name}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={item}>
          <CopyRights />
        </motion.div>
      </div>
    </motion.footer>
  )
}

const CopyRights = () => {
  const currentYear = new Date().getFullYear();
  const { language } = useTranslation();

  return (
    <motion.div
      className="text-center py-4 border-t border-gray-200 mt-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      viewport={{ once: true }}
    >
      {language === "ar" ? <p className="text-gray-600">
        جميع الحقوق محفوظة لشركة <span dir="rtl" className="font-semibold text-yellow-400">© All Safe</span> <span>{currentYear}</span>
      </p> : <p className="text-gray-600">
        All Rights Reserved For <span className="font-semibold text-yellow-400">© All Safe</span> <span>{currentYear}</span>
      </p>}
    </motion.div>
  )
}

export default Footer;