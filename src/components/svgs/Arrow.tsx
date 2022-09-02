import { motion } from "framer-motion";

interface ArrowProps {
  variants: {
    hover: {
      opacity: number;
    };
  };
}

export const Arrow: React.FC<ArrowProps> = ({ variants }) => {
  return (
    <div>
      <motion.svg
        width="170"
        height="90"
        viewBox="0 0 244 128"
        fill="none"
        className="hidden sm:block absolute bottom-3 -left-4 -rotate-6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={variants}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
          stroke="#ABC4FF"
          strokeLinecap={"round"}
          d="M234.48 126.264C247.48 103.264 248.5 62.6029 112 80C-41 99.5 7.5 25.5 22 22C29.5 20.1897 36 30 24 32.5C13.1207 34.7665 -9.49995 11.5 29 3.5"
        />
      </motion.svg>
    </div>
  );
};
