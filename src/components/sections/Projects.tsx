import { motion } from "framer-motion";

export const Projects: React.FC = () => {
  const projects = [
    {
      name: "kogan",
      href: "https://github.com/camerontredoux/kogan",
    },
    {
      name: "kanatui",
      href: "https://github.com/camerontredoux/kanatui",
    },
    {
      name: "destiny-stats",
      href: "https://github.com/camerontredoux/destiny-stats",
    },
    {
      name: "firebase",
      href: "https://github.com/camerontredoux/firebase-auth-test",
    },
    {
      name: "sort-visualizer",
      href: "https://github.com/camerontredoux/sort-visualizer",
    },
  ];

  return (
    <div className="text-3xl text-gray-700 mt-12">
      <div className="mb-12">Projects</div>
      <ul className="flex flex-col gap-16 text-lg text-gray-500">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <div className="ml-2 mb-2 mt-2 w-fit relative">
              {project.name}{" "}
              <div className="w-full h-4 -z-10 bottom-3 left-2 bg-[#ABC4FF55] absolute"></div>
            </div>
            <li className="bg-[#ABC4FF55] w-full h-96 rounded-md p-4"></li>
          </motion.div>
        ))}
      </ul>
    </div>
  );
};
