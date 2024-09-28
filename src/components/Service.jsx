import erp from "../assets/Agro-ERP.webp";
import fly from "../assets/Flight-Booking.webp";
import inn from "../assets/Innue.webp";
import hr from "../assets/HR-Manager (1).webp";
import vms from "../assets/VMS.webp";
import bus from "../assets/Bus-365.webp";
import who from "../assets/Wholesale (1).webp";
import gms from "../assets/GMS.webp";
import adu from "../assets/Edutask.webp";

const Service = () => {
  return (
    <div>
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            Our <span className="text-green-500">Solutions</span>
          </h2>
          <p className="w-[500px] mx-auto text-center text-gray-600 mb-8">
            We provide a time-worthy business solution to every type of
            business. Find out your one and level up your success stairs.
          </p>

          {/* Category Filters */}
          <div className="flex justify-center mb-8 space-x-4">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Business
            </button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Blockchain
            </button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Hospitality
            </button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              E-Commerce
            </button>
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded">
              Healthcare
            </button>
          </div>

          {/* Solutions Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {/* ERP */}
            <div className="bg-white p-6 shadow-md rounded-lg flex  items-center space-x-4 w-80">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={erp} alt="ERP" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600">ERP</h3>
                <p className="text-gray-500">
                  Business ERP Solution / Product / Shop / Company Management
                </p>
              </div>
            </div>

            {/* Flight Booking */}
            <div className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4 w-80">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={fly} alt="Flight Booking" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600">
                  Flight Booking
                </h3>
                <p className="text-gray-500">Flight Booking Software</p>
              </div>
            </div>

            {/* Innue */}
            <div className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4 w-80">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={inn} alt="Innue" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600">Innue</h3>
                <p className="text-gray-500">Business Live Chat Software</p>
              </div>
            </div>

            {/* HR Manager */}
            <div className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4 w-80">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={hr} alt="HR Manager" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600">HR Manager</h3>
                <p className="text-gray-500">
                  Human Resource Management System HR Software (HRMS)
                </p>
              </div>
            </div>

            {/* VMS */}
            <div className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4 w-80">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={vms} alt="VMS" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600">VMS</h3>
                <p className="text-gray-500">Vehicle Management System</p>
              </div>
            </div>

            {/* Bus365 */}
            <div className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4 w-80">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={bus} alt="Bus365" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600">Bus365</h3>
                <p className="text-gray-500">Bus Reservation System</p>
              </div>
            </div>

            {/* Wholesale */}
            <div className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4 w-80">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={who} alt="Wholesale" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600">Wholesale</h3>
                <p className="text-gray-500">
                  Inventory Control and Inventory Management System
                </p>
              </div>
            </div>

            {/* GMS */}
            <div className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4 w-80">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={gms} alt="GMS" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600">GMS</h3>
                <p className="text-gray-500">Garage Management Software</p>
              </div>
            </div>

            {/* Edutask */}
            <div className="bg-white p-6 shadow-md rounded-lg flex items-center space-x-4 w-80">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center">
                <img src={adu} alt="Edutask" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-green-600">Edutask</h3>
                <p className="text-gray-500">
                  Online Course Selling Marketplace
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
