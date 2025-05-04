
import { FaCar, FaTaxi, FaUtensils, FaHome, FaStar } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async'
import { mainInfo } from '../../constants/info'
import { TiWorld } from 'react-icons/ti';
import { BsChatTextFill } from 'react-icons/bs';
import { PiShoppingCartFill } from 'react-icons/pi';
import { FaLock } from 'react-icons/fa6';
import { BiSolidSearch } from 'react-icons/bi';
import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import DetailedServicesSection from './DetailedServicesSection';
import FeaturesSection from './FeaturesSection';
import BlogsSection from './BlogsSection';
import FaqSection from './FaqSection';
import { useTranslation } from '../../hooks/translationContext';



const HomePage = () => {

  const { translate } = useTranslation();

  const services = [
    {
      title: translate("services.service1title"),
      description: translate("services.service1description"),
      icon: <FaHome size={30} />,
      image: "/images/01.png",
      color: "bg-green-100",
      iconColor: "text-green-600",
      reverse: false
    },
    {
      title: translate("services.service2title"),
      description: translate("services.service2description"),
      icon: <FaUtensils size={30} />,
      image: "/images/02.png",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      reverse: true
    },
    {
      title: translate("services.service3title"),
      description: translate("services.service3description"),
      icon: <FaTaxi size={30} />,
      image: "/images/03.png",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      reverse: false
    },
    {
      title: translate("services.service4title"),
      description: translate("services.service4description"),
      icon: <FaCar size={30} />,
      image: "/images/04.png",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      reverse: true
    }
  ]
  const getServiceData = (serviceId, index) => {
    const howItWorks = translate(`detailsServices.${serviceId}.howItWorks`);
    
    return {
      title: translate(`detailsServices.${serviceId}.title`),
      subtitle: translate(`detailsServices.${serviceId}.subtitle`),
      description: translate(`detailsServices.${serviceId}.description`),
      howItWorks: Array.isArray(howItWorks) ? howItWorks : [],
      whyUseful: translate(`detailsServices.${serviceId}.whyUseful`),
      image: "/images/ser.png",
      reverse: index % 2 === 0
    };
  };
  
  const detailsServices = ["service1", "service2", "service3", "service4"].map(getServiceData);


  const features = [
    {
      icon: <TiWorld size={32} />,
      title: translate("features.feature1.title"),
      description: translate("features.feature1.description")
    },
    {
      icon: <FaStar size={32} />,
      title: translate("features.feature2.title"),
      description: translate("features.feature2.description")
    },
    {
      icon: <PiShoppingCartFill size={32} />,
      title: translate("features.feature3.title"),
      description: translate("features.feature3.description")
    },
    {
      icon: <BsChatTextFill size={32} />,
      title: translate("features.feature4.title"),
      description: translate("features.feature4.description")
    },
    {
      icon: <BiSolidSearch size={32} />,
      title: translate("features.feature5.title"),
      description: translate("features.feature5.description")
    },
    {
      icon: <FaLock size={32} />,
      title: translate("features.feature6.title"),
      description: translate("features.feature6.description")
    },
  ]

  const faqItems = [
    { question: translate("faqItems.question1"), answer: translate("faqItems.answer1") },
    { question: translate("faqItems.question2"), answer: translate("faqItems.answer2") },
    { question: translate("faqItems.question3"), answer: translate("faqItems.answer3") },
    { question: translate("faqItems.question4"), answer: translate("faqItems.answer4") },
    { question: translate("faqItems.question5"), answer: translate("faqItems.answer5") },
  ];

  const blogs = [
    {
      image: "/images/blog1.jpg",
      title: translate("blogs.blog1.title"),
      description: translate("blogs.blog1.description")
    },
    {
      image: "/images/blog2.jpg",
      title: translate("blogs.blog2.title"),
      description: translate("blogs.blog2.description")
    }
  ]
  return (
    <div>
      <Helmet>
        <title>{mainInfo.name}</title>
        <meta name="description" content={mainInfo.description} />
      </Helmet>
      <div className="min-h-screen  w-full pt-20 md:pt-24 lg:pt-28 space-y-20">
        <HeroSection />
        <ServicesSection services={services} />
        <DetailedServicesSection detailsServices={detailsServices} />
        <FeaturesSection features={features} />
        <FaqSection faqItems={faqItems} />
        <BlogsSection blogs={blogs} />
      </div>
    </div>
  )
}

export default HomePage






















