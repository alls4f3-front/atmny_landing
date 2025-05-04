
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



const HomePage = () => {

  const services = [
    {
      title: "Home-Cooked Meals",
      description: "Enjoy fresh, homemade dishes prepared by local chefs and delivered to your doorstep.",
      icon: <FaHome size={30} />,
      image: "/images/01.png",
      color: "bg-green-100",
      iconColor: "text-green-600",
      reverse: false
    },
    {
      title: "Restaurant Food Delivery",
      description: "Order delicious meals from your favorite local restaurants with just a few taps.",
      icon: <FaUtensils size={30} />,
      image: "/images/02.png",
      color: "bg-blue-100",
      iconColor: "text-blue-600",
      reverse: true
    },
    {
      title: "Taxi & Ride Booking",
      description: "Book a reliable ride anytime, anywhere — fast, safe, and affordable transportation.",
      icon: <FaTaxi size={30} />,
      image: "/images/03.png",
      color: "bg-orange-100",
      iconColor: "text-orange-600",
      reverse: false
    },
    {
      title: "Car Wash Service",
      description: "Get your car cleaned at home or office with our on-demand car wash professionals.",
      icon: <FaCar size={30} />,
      image: "/images/04.png",
      color: "bg-purple-100",
      iconColor: "text-purple-600",
      reverse: true
    }
  ]
  const detailsServices = [
    {
      title: "Home-Cooked Meals",
      subtitle: "What is it?",
      description: "A special service that connects users with local home-based cooks for authentic homemade meals.",
      howItWorks: [
        "Users browse home chef menus featuring traditional and homemade dishes",
        "Orders are placed directly from the app with scheduled delivery times",
        "Meals are made fresh with a personal touch"
      ],
      whyUseful: "Perfect for users craving traditional food, healthier options, or supporting local cooks.",
      image: "/images/ser.png",
      reverse: true
    },
    {
      title: "Restaurant Food Delivery",
      subtitle: "What is it?",
      description: "A fast and convenient way to order meals from nearby restaurants.",
      howItWorks: [
        "Users browse a list of restaurants based on location, ratings, or cuisine",
        "They select a meal, customize the order, and choose delivery or pickup",
        "Track the order live and receive it at the doorstep"
      ],
      whyUseful: "Saves time, gives access to many food options, and simplifies the ordering process.",
      image: "/images/ser.png",
      reverse: false
    },
    {
      title: "Taxi & Ride Booking",
      subtitle: "What is it?",
      description: "An integrated ride-hailing service to book taxis or private cars anytime.",
      howItWorks: [
        "The user selects pickup and drop-off locations",
        "The app assigns a nearby driver and shows estimated arrival time",
        "Live tracking and cash/card payment options are available"
      ],
      whyUseful: "Fast, reliable, and affordable transportation without calling or waiting for a taxi on the street.",
      image: "/images/ser.png",
      reverse: true
    },
    {
      title: "Car Wash Service",
      subtitle: "What is it?",
      description: "Get your car cleaned at home or office with our on-demand car wash professionals.",
      howItWorks: [
        "The user selects the desired car wash service",
        "The app assigns a nearby car wash professional and shows estimated arrival time",
        "Live tracking and cash/card payment options are available"
      ],
      whyUseful: "Convenient and saves time, with the option to schedule the service according to your needs.",
      image: "/images/ser.png",
      reverse: false
    }

  ]
  const features = [
    {
      icon: <TiWorld size={32} />,
      title: "Smart Search & Filtering",
      description: "Quickly find what you need with intelligent search, advanced filters, and category-based navigation."
    },
    {
      icon: <FaStar size={32} />,
      title: "Ratings, Reviews & Feedback",
      description: "Share your experience and read real feedback from other users before choosing a service."
    },
    {
      icon: <PiShoppingCartFill size={32} />,
      title: "Smooth Booking & Ordering",
      description: "A seamless process for placing orders or booking services — with real-time status updates."
    },
    {
      icon: <BsChatTextFill size={32} />,
      title: "In-App Chat & Support",
      description: "Communicate directly with service providers or our support team without leaving the app."
    },
    {
      icon: <BiSolidSearch size={32} />,
      title: "Smart Search & Filtering",
      description: "Quickly find what you need with intelligent search, advanced filters, and category-based navigation."
    },
    {
      icon: <FaLock size={32} />,
      title: "Secure Authentication",
      description: "Sign up and log in safely with multi-layered security and verification steps."
    },
  ]

  const faqItems = [
    { question: "How do I create an account?", answer: "Sign up and log in safely with multi-layered security and verification steps." },
    { question: "Is my personal information safe?", answer: "Sign up and log in safely with multi-layered security and verification steps." },
    { question: "Can I order from multiple services at once?", answer: "Sign up and log in safely with multi-layered security and verification steps." },
    { question: "How can I track my orders and bookings?", answer: "Sign up and log in safely with multi-layered security and verification steps." },
    { question: "What should I do if I need help?", answer: "Sign up and log in safely with multi-layered security and verification steps." },
  ];

  const blogs = [
    {
      image: "/images/blog1.jpg",
      title: "How to Get the Best Out of Our Multi-Service App",
      description: "Discover smart tips and tricks to maximize your experience with food delivery, rides, and more — all from one app!"
    },
    {
      image: "/images/blog2.jpg",
      title: "How to Get the Best Out of Our Multi-Service App",
      description: "Discover smart tips and tricks to maximize your experience with food delivery, rides, and more — all from one app!"
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






















