import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollHint: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight / 8) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className="absolute bottom-12 flex flex-col items-center justify-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.4 }}
        >
            <svg
                viewBox="0 0 41 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-12 text-neutral-200"
            >
                <path
                    d="M20.453 0c0 19.655-3.53 19.785-6.904 20.56-3.566.82-3.737-3.232 0-3.232 2.232 0 8.513 4.655 12.51 5.301 3.574.578 3.789-3.491 0-3.491-7.838 0-8.98 15.148-17.805 19.526-8.824 4.378-10.485-7.242 0-7.242 7.838 0 16.351 5.69 25.175 9.44 8.801 3.74 8.72-7.5 0-7.5S20.453 48.88 20.453 60"
                    stroke="#A3A3A3"
                    strokeWidth="1.5"
                />
            </svg>
            <div className="scroll-hint text-neutral-400 font-serif mt-2">Scroll</div>
        </motion.div>
    );
};

export default ScrollHint;
