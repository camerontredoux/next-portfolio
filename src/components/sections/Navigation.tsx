import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

interface NavigationProps {
  projInView: boolean;
  aboutInView: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  projInView,
  aboutInView,
}) => {
  const [selected, setSelected] = useState(0);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!scrolled) {
      setSelected(0);
    }
    if (projInView || !aboutInView) {
      setSelected(0);
    }
    if (aboutInView) {
      setSelected(1);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled, projInView, aboutInView]);

  const handleScroll = () => {
    if (window !== undefined) {
      const pos = window.scrollY;
      if (pos > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
  };

  const links = [
    {
      text: "projects",
      href: "#projects",
    },
    {
      text: "about",
      href: "#about",
    },
    {
      text: "resume",
      href: "/resume.pdf",
    },
  ];

  return (
    <div className="relative flex justify-center sm:justify-between items-center mb-10 sm:mb-14">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src="/logo.png"
        className="w-28"
        alt="Cameron's Logo"
      />
      <motion.ul
        className={`hidden sm:flex gap-10 text-gray-500 text-lg ${
          scrolled && "fixed top-5 z-50 bg-white drop-shadow-md p-4 rounded-md"
        }`}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {/* {`${inView}`} */}
        {links.map((link, index) => (
          <a rel={"noreferrer"} href={link.href} key={index}>
            <motion.li className="relative" onClick={() => setSelected(index)}>
              {link.text}
              {index === selected && (
                <motion.div
                  layoutId="links"
                  className="w-full h-4 -z-10 bottom-3 left-2 bg-[#ABC4FF55] absolute"
                ></motion.div>
              )}
            </motion.li>
          </a>
        ))}
        {scrolled && (
          <a
            className="text-xs p-2 bg-gray-50 hover:bg-gray-100 rounded-sm"
            href="#"
          >
            <motion.li>
              <FaChevronUp />
            </motion.li>
          </a>
        )}
      </motion.ul>
    </div>
  );
};
