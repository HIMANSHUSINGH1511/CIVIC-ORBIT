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

      {/* AI */}

      <div className="absolute -top-4 sm:-top-6 lg:-top-8 left-1/2 -translate-x-1/2">

        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 text-lg sm:text-2xl lg:text-3xl backdrop-blur-xl">

          <BsRobot />

        </div>

      </div>

      {/* Location */}

      <div className="absolute top-12 sm:top-16 lg:top-20 -left-4 sm:-left-6 lg:-left-8">

        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-blue-500/20 border border-blue-400 flex items-center justify-center text-blue-300 text-lg sm:text-2xl lg:text-3xl backdrop-blur-xl">

          <FaMapMarkerAlt />

        </div>

      </div>

      {/* Camera */}

      <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 -left-4 sm:-left-6 lg:-left-8">

        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-green-500/20 border border-green-400 flex items-center justify-center text-green-300 text-lg sm:text-2xl lg:text-3xl backdrop-blur-xl">

          <FaCamera />

        </div>

      </div>

      {/* Clipboard */}

      <div className="absolute top-12 sm:top-16 lg:top-20 -right-4 sm:-right-6 lg:-right-8">

        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-indigo-500/20 border border-indigo-400 flex items-center justify-center text-indigo-300 text-lg sm:text-2xl lg:text-3xl backdrop-blur-xl">

          <FaClipboardList />

        </div>

      </div>

      {/* Users */}

      <div className="absolute bottom-12 sm:bottom-16 lg:bottom-20 -right-4 sm:-right-6 lg:-right-8">

        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-full bg-orange-500/20 border border-orange-400 flex items-center justify-center text-orange-300 text-lg sm:text-2xl lg:text-3xl backdrop-blur-xl">

          <FaUsers />

        </div>

      </div>

    </>
  );
}

export default OrbitIcons;