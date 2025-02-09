import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollReveal = ({ children, delay = 0.2 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY + window.innerHeight;
      const elementTop = document.getElementById(children.key)?.offsetTop || 0;
      if (top > elementTop) setIsVisible(true);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
