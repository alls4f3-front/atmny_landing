import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./routes";
import Footer from "./components/footer/Footer";
import Lenis from "lenis";
import { useEffect } from "react";
import { useTranslation } from "./hooks/translationContext";
import { motion } from "framer-motion";
import MouseCursor from "./components/gen/MouseCursor";
function App() {
  const { language } = useTranslation();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="App">
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full overflow-hidden bg-white">
        <AppRoutes />
      </motion.div>
      <Footer />
      <MouseCursor />
    </div>
  );
}

export default App;


