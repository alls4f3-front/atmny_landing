import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "../../hooks/translationContext";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, translate } = useTranslation();

  const menuItems = [
    { id: 1, name: translate("main.about_us"), link: "/#about" },
    { id: 2, name: translate("main.services"), link: "/#services" },
    { id: 3, name: translate("main.why_choose_us"), link: "/#Why_choose_us" },
    { id: 4, name: translate("main.blog"), link: "/#blog" },
    { id: 5, name: translate("main.contact"), link: "/#contact" },
  ];

  // Animation variants
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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,

    }
  };

  const mobileMenu = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <motion.nav
      className="shadow-xl rounded-xl border border-gray-100 lg:rounded-full w-[90%] mx-auto px-4 py-4 mt-12 mb-6 fixed left-0 right-0 top-0 z-50 bg-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <div className="mx-auto px-4 lg:px-8 rounded-full">
        <div className="flex justify-between items-center h-fit">
          {/* Logo with animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/" className="flex items-center w-32 lg:w-40 h-16">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-full h-full object-cover"
              />
            </Link>
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center justify-between w-1/2"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {menuItems.map(({ id, name, link }) => (
              <motion.a
                key={id}
                href={link}
                className="text-gray-700 text-base lg:text-xl font-medium hover:text-Primary whitespace-nowrap relative animation"
                variants={item}
                whileHover={{
                  scale: 1.05,
                }}
              >
                {name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-Primary"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="hidden lg:flex items-center justify-between w-1/5 gap-4"
            variants={container}
          >
            <motion.button
              className="bg-Primary text-white px-6 py-2 rounded-full hover:bg-PrimaryDark whitespace-nowrap"
              variants={item}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(76, 175, 80, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {translate("main.download_app")}
            </motion.button>

            <motion.button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="text-black text-lg rounded-lg flex justify-center items-center gap-2"
              variants={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <GrLanguage />
              <span>{language === "ar" ? "English" : "عربى"}</span>
            </motion.button>
          </motion.div>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 lg:hidden flex items-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="flex flex-col lg:hidden bg-white overflow-hidden origin-top"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenu}
          >
            <div className="px-6 py-4 space-y-4">
              {menuItems.map(({ id, name, link }) => (
                <motion.div
                  key={id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { delay: id * 0.1 }
                  }}
                  exit={{ opacity: 0 }}
                >
                  <Link
                    to={link}
                    className="block px-3 py-3 text-gray-700 text-lg font-medium hover:text-Primary"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                className="flex flex-col gap-4 pt-2"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: menuItems.length * 0.1 }
                }}
              >
                <motion.button
                  className="bg-Primary text-white px-4 py-3 rounded-lg hover:bg-PrimaryDark text-lg font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {translate("main.download_app")}
                </motion.button>

                <motion.button
                  onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                  className="text-Primary px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-lg font-medium border border-Primary"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {language === "ar" ? "English" : "عربى"}
                  <GrLanguage />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar;