import map from "../assets/map-bdtask.png";
import one from "../assets/1.webp";
import two from "../assets/2.webp";
import three from "../assets/3.webp";
import basis from "../assets/basis.png";
import bacoo from "../assets/bacco-white.png";
import asho from "../assets/ahossain.png";
import cit from "../assets/citzim.png";

const Map = () => {
  return (
    <div>
      {/* map */}

      <div className="bg-white py-10 pb-56">
        {/* World Map Section */}
        <div className="container mx-auto">
          <div className="relative">
            {/* Map Image */}
            <img src={map} alt="World Map" className="w-full" />
            {/* Flag Markers */}

            {/* Add more flags with absolute positioning based on the image */}
          </div>
        </div>

        {/* Logos Section */}
        <div className="mt-10">
          <div className="flex justify-center container mx-auto items-center">
            {/* Logo 1 */}
            <div className="flex justify-center p-6 border-r border-b border-gray-400">
              <img
                src={one}
                alt="International Labour Organization"
                className="h-12"
              />
            </div>
            {/* Logo 2 */}
            <div className="flex justify-center p-6 border-r border-b border-gray-400">
              <img src={two} alt="ICT Division" className="h-12" />
            </div>
            {/* Logo 3 */}
            <div className="flex justify-center p-6 border-r border-b border-gray-400">
              <img src={three} alt="HA-MEEM Group" className="h-12" />
            </div>
            {/* More logos */}
            <div className="flex justify-center p-6 border-l border-b border-gray-400">
              <img src={basis} alt="More Partners" className="h-12" />
            </div>
            {/* Add other logos similarly */}
          </div>
          <div className="flex  justify-center container mx-auto items-center">
            {/* Logo 1 */}
            <div className="flex justify-center p-6 border-r border-b border-gray-400">
              <img
                src={bacoo}
                alt="International Labour Organization"
                className="h-12"
              />
            </div>
            {/* Logo 2 */}
            <div className="flex justify-center p-6 border-r border-b border-gray-400">
              <img src={asho} alt="ICT Division" className="h-12" />
            </div>
            {/* Logo 3 */}
            <div className="flex justify-center p-6 border-r border-b border-gray-400">
              <img src={cit} alt="HA-MEEM Group" className="h-12" />
            </div>
            {/* More logos */}
            <div className="flex justify-center p-6 border-l border-b border-gray-400">
              <div className="flex justify-center mt-1">
                <button className="bg-black text-white py-2 px-6 rounded-lg">
                  More
                </button>
              </div>
            </div>
            {/* Add other logos similarly */}
          </div>

          {/* More Button */}
        </div>
      </div>
    </div>
  );
};

export default Map;
