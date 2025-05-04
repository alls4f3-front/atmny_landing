import { ParallaxText } from '../../components/gen/ParallaxText'

const ServicesSection = ({ services }) => {
  const repeatedData = Array(10).fill(services).flat()
  return (
    <section className="" id="services">
      <div className=" w-full ">

        <ParallaxText
          baseVelocity={5}
          // pauseOnHover
          wrapperClassName={
            "!w-[95%] mx-auto overflow-hidden flex items-center justify-around gap-12 mt-20"
          }
        >
          {repeatedData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              iconColor={service.iconColor}
              reverse={service.reverse}
              image={service.image}
            />
          ))}
        </ParallaxText>
      </div>
    </section>
  )
}

export default ServicesSection


const ServiceCard = ({ title, description, color, iconColor, reverse, image }) => (
  <div className="bg-Primary/10 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow w-[350px] h-[220px] " data-cursor-img={image}>
    <div className={` w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);