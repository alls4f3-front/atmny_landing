import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

  const BlogCard = ({ image, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
    >
      {/* Image with zoom effect */}
      <motion.div className="w-full h-96 overflow-hidden" data-cursor-img={image} >
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>

      {/* Content with staggered animation */}
      <motion.div
        className="p-6"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-3 heading text-gray-900"
          variants={{
            hidden: { x: -20, opacity: 0 },
            visible: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", stiffness: 100 }
            }
          }}
          whileHover={{ color: "#4CAF50" }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-base md:text-lg text-gray-600"
          variants={{
            hidden: { y: 10, opacity: 0 },
            visible: {
              y: 0,
              opacity: 1,
              transition: { delay: 0.2 }
            }
          }}
        >
          {description}
        </motion.p>

        {/* Read More Button */}
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { delay: 0.4 }
            }
          }}
        >

        </motion.div>
      </motion.div>
    </motion.div>
  );
};


const BlogsSection = ({ blogs }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  return (
    <motion.section
      className="py-20 "
      id="blog"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={container}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 ">
        <motion.div
          className='text-center mb-12'
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 100 }
            }
          }}
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest From Our Blog
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Tips, updates, and insights to help you make the most of our app and services.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2  gap-8"
          variants={container}
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              image={blog.image}
              title={blog.title}
              description={blog.description}
            />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BlogsSection;
