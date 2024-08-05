import React, {useRef} from "react";
import {motion, useInView} from "framer-motion";

const BackButton: React.FC = () => {
    const ref = useRef(null);
    const isVisible = useInView(ref)

    return (
        <motion.div ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-4 left-4 md:top-8 md:left-8 xl:top-10 xl:left-10 z-50"
        >
            <a
                href="/"
                className="flex items-center justify-center w-10 h-10 bg-transparent mix-blend-hue border border-neutral-700 rounded-full"
                aria-label="Click to go back to the search box"
            >
                <svg
                    className="w-4 h-4 text-neutral-200"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15.5 8.1"
                >
                    <path
                        className="st0"
                        d="M0 4l4-4M0 4l4 4M0 4h15.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                    />
                </svg>
            </a>
        </motion.div>
    );
};

export default BackButton;
