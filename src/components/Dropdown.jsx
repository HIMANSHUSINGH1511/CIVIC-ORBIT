import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

function Dropdown({ title, items }) {
  return (
    <div className="relative group">
      {/* Button */}
      <button className="flex items-center gap-1 font-medium hover:text-cyan-400 transition-colors duration-200">
        {title}
        <ChevronDown
          size={18}
          className="transition-transform duration-200 group-hover:rotate-180"
        />
      </button>

      {/* Dropdown */}
      <div
        className="
          absolute
          left-0
          top-full
          pt-2
          z-50
          opacity-0
          invisible
          translate-y-2
          group-hover:opacity-100
          group-hover:visible
          group-hover:translate-y-0
          transition-all
          duration-200
        "
      >
        <div className="w-60 rounded-xl bg-[#111827]/95 backdrop-blur-xl border border-cyan-500/20 shadow-2xl overflow-hidden">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              className="flex items-center gap-3 px-5 py-3 text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-200"
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;