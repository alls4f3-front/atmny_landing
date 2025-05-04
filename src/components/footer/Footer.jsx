import { useTranslation } from '../../hooks/translationContext';
import { DiAndroid } from 'react-icons/di';
import { FaApple } from 'react-icons/fa';
const Footer = () => {
  const { language, setLanguage, translate } = useTranslation();
  const menuItems = [
    { name: translate("about_us"), link: "#about" },
    { name: translate("services"), link: "#services" },
    { name: translate("why_choose_us"), link: "#Why_choose_us" },
    { name: translate("blog"), link: "#blog" },
    { name: translate("contact"), link: "#contact" },
  ];
  return (
    <footer className="bg-Primary/10 text-TextDark pt-8" id="contact">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center w-32 lg:w-40 h-16 ">
            <img src="/images/logo.png" alt="logo" className="w-full h-full object-cover " />
          </div>
          <button className="flex items-center justify-center gap-2 font-semibold text-Primary rounded-full border border-Primary px-6 py-3 hover:bg-PrimaryDark/10 hover:border-PrimaryDark hover:text-PrimaryDark animation ">
          Contact Us</button>
          <div className="flex items-center justify-center gap-4">
            <button className="flex items-center justify-center gap-2 font-semibold text-Primary rounded-full border border-Primary px-6 py-3 hover:bg-PrimaryDark/10 hover:border-PrimaryDark hover:text-PrimaryDark animation ">
              <span>Get it on iOS</span>
              <FaApple size={20} />
            </button>
            <button className="flex items-center justify-center gap-2 font-semibold text-Primary rounded-full border border-Primary px-6 py-3 hover:bg-PrimaryDark/10 hover:border-PrimaryDark hover:text-PrimaryDark animation ">
              <span>Get it on Android</span>
              <DiAndroid size={20} />
            </button>
          </div>
          <div className="flex justify-between items-center w-[90%] md:w-[70%] lg:w-[50%] mx-auto">
            {menuItems.map(({ name, link }) => (
              <a key={name} href={link} className="text-gray-700 text-base lg:text-xl font-medium hover:text-Primary animation whitespace-nowrap">
                {name}
              </a>
            ))}
          </div>

        </div>
        <CopyRights />
      </div>
    </footer>
  )
}

export default Footer



const CopyRights = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center py-4">
      <p>All Rights Reserved For <span className="font-semibold text-yellow-300">© All Safe</span> company {currentYear}</p>
    </div>
  )
}
