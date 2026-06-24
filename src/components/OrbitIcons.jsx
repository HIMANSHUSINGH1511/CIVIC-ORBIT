import {
  FaMapMarkerAlt,
  FaCamera,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

import { BsRobot } from "react-icons/bs";

function OrbitIcons() {
  return (
    <>
      <div className="absolute -top-8 left-1/2 -translate-x-1/2">
        <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 text-3xl backdrop-blur-xl">
          <BsRobot />
        </div>
      </div>

      <div className="absolute top-20 -left-8">
        <div className="w-16 h-16 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-300 text-3xl backdrop-blur-xl">
          <FaMapMarkerAlt />
        </div>
      </div>

      <div className="absolute bottom-20 -left-8">
        <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center text-green-300 text-3xl backdrop-blur-xl">
          <FaCamera />
        </div>
      </div>

      <div className="absolute top-20 -right-8">
        <div className="w-16 h-16 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center text-indigo-300 text-3xl backdrop-blur-xl">
          <FaClipboardList />
        </div>
      </div>

      <div className="absolute bottom-20 -right-8">
        <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-400 flex items-center justify-center text-orange-300 text-3xl backdrop-blur-xl">
          <FaUsers />
        </div>
      </div>
    </>
  );
}

export default OrbitIcons;