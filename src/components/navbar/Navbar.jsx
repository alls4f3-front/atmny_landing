import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "../../hooks/translationContext";
import { GrLanguage } from "react-icons/gr";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, translate } = useTranslation();
  const menuItems = [
    { name: translate("about_us"), link: "#about" },
    { name: translate("services"), link: "#services" },
    { name: translate("why_choose_us"), link: "#Why_choose_us" },
    { name: translate("blog"), link: "#blog" },
    { name: translate("contact"), link: "#contact" },
  ];
  return (
    <nav className=" shadow-lg rounded-lg lg:rounded-full  w-[90%] mx-auto  px-4 py-4 mt-12 mb-6 fixed left-0 right-0 top-0 z-50 bg-white ">
      <div className=" mx-auto px-4 lg:px-8 rounded-full">
        <div className="flex justify-between items-center h-fit">
          <Link to="/" className="flex items-center w-32 lg:w-40 h-16 ">
            <img src="/images/logo.png" alt="logo" className="w-full h-full object-cover " />
          </Link>

          <div className="hidden lg:flex items-center justify-between w-1/2 ">
            {menuItems.map(({ name, link }) => (
              <a key={name} href={link} className="text-gray-700 text-base lg:text-xl font-medium hover:text-Primary animation whitespace-nowrap">
                {name}
              </a>
            ))}

          </div >
          <div className="hidden lg:flex items-center justify-between w-1/5 gap-4">
            <button className="bg-Primary text-white px-4 py-2 rounded-full hover:bg-PrimaryDark animation whitespace-nowrap ">
              {translate("download_app")}
            </button>
            <button onClick={() => setLanguage(language === "ar" ? "en" : "ar")} className="text-black text-lg rounded-lg flex justify-center items-center gap-2 ">
              <GrLanguage />
              <span>{language === "ar" ? "English" : "عربى"}</span>
            </button>
          </div>


          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 lg:hidden flex items-center">
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>


        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="flex flex-col justify-start items-start lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map(({ name, link }) => (
              <a key={name} href={link} className="block px-3 py-2 text-gray-700">
                {name}
              </a>
            ))}
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              {translate("download_app")}
            </button>
            <button onClick={() => setLanguage(language === "ar" ? "en" : "ar")} className="text-TextTertiary px-4 py-2 rounded-lg flex items-center gap-2 ">
              {language === "ar" ? "English" : "عربى"}
              <GrLanguage />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar