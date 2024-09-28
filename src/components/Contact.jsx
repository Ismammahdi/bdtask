import real from "../assets/real-estate.png";
import rgm from "../assets/rmg.png";
import avm from "../assets/aviation.png";
import ux from "../assets/ui-ux.png";
import plus from "../assets/more.png";
import auto from "../assets/automotive.png";
import health from "../assets/Healtha-Admin.webp";
import ecom from "../assets/ecommerce.png";
import edu from "../assets/education.png";
import hospi from "../assets/Hospital-Automanager.webp";
import phem from "../assets/blogging-platfoem.webp";

const Contact = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Industry <span className="text-green-600">We Serve</span>
          </h1>
          <p className="text-gray-500 mb-8">
            Bridge Your Business with the Virtual World
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={auto} alt="FinTech" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">FinTech</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={health}
                alt="Healthcare"
                className="w-12 h-12 mx-auto"
              />
              <p className="mt-4 text-gray-700 font-semibold">Healthcare</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={ecom} alt="E-Commerce" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">E-Commerce</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={auto} alt="Automotive" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">Automotive</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={edu} alt="Education" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">Education</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={real} alt="Real Estate" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">Real Estate</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img
                src={hospi}
                alt="Real Estate"
                className="w-12 h-12 mx-auto"
              />
              <p className="mt-4 text-gray-700 font-semibold">Real Estate</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={rgm} alt="Real Estate" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">Real Estate</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={phem} alt="Real Estate" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">Real Estate</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={avm} alt="Real Estate" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">Real Estate</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={ux} alt="Real Estate" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">Real Estate</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <img src={plus} alt="Real Estate" className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-gray-700 font-semibold">Real Estate</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
