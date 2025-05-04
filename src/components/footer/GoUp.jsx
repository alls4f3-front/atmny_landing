import { IoIosArrowUp } from "react-icons/io";

const GoUp = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="w-full h-[40px] bg-orange-500 text-white hover:bg-gray-800 transition-all duration-500 flex justify-center items-center gap-2 cursor-pointer font-semibold"
      onClick={scrollToTop}
    >
      <IoIosArrowUp className="text-xl" />
      <p className="">العودة للأعلى</p>
    </div>
  );
};

export default GoUp;
