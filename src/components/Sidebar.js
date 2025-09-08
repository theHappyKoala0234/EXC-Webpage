
import { motion } from "framer-motion";

export default function Sidebar({ open, onClose }) {
  const sections = [
    "Home", "About", "Board Members", "Faculty Coordinator",
    "Gravitas", "Riviera", "Blogs", "Major Events", "Contact"
  ];

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: open ? 0 : "-100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 p-6"
    >
      <button onClick={onClose} className="mb-6 font-bold text-red-600">❌ Close</button>
      <ul className="space-y-4">
        {sections.map((section) => (
          <li key={section}>
            <a
              href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-lg font-semibold hover:text-blue-500"
              onClick={onClose}
            >
              {section}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
