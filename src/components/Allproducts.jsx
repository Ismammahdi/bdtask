import img from "../assets/bdtask-software-development-company.jpg";
import shape from "../assets/shape-1.png";
import iso from "../assets/iso.png";
import basis from "../assets/basis.png";
import bacoo from "../assets/bacco.png";
import evato from "../assets/envato.png";

const Allproducts = () => {
  return (
    <div>
      <section className="bg-gray-100 py-10 relative h-screen pt-[100px]">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          {/* Left Side Content */}
          <div className="lg:w-1/2 space-y-9">
            <h1 className="text-4xl font-bold w-[450px]">
              Best <span className="text-blue-500">Software Development</span>
              <span> </span> Company <span> </span>
              <span className="text-4xl font-normal text-gray-700">
                To Architect The Dream For The
              </span>
              <span> </span>
              <span className="text-green-500">Next Generation</span>
            </h1>

            <p className="text-gray-500">
              BdTask, Inc. has a global reputation for delivering top-notch
              customer experiences, making us one of the leading software
              development companies in the world.
            </p>
            <div className="flex justify-start space-x-6 pt-10">
              <img src={iso} alt="ISO" />
              <img src={basis} alt="BASIS" />
              <img src={bacoo} alt="BACCO" />
              <img src={evato} alt="Envato" />
            </div>
          </div>

          {/* Right Side with Image */}
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center relative">
            {/* Office Image */}
            <div className="relative z-50">
              <img src={img} alt="Office" className=" rounded-lg shadow-lg" />
              <button className="absolute inset-0 m-auto bg-white p-2 rounded-full shadow-lg w-32 h-32 flex items-center justify-center">
                <span className="text-green-500">▶</span>
              </button>
            </div>
          </div>
        </div>

        {/* Background Shape Image (right) */}
        <div className="absolute top-16 right-0 transform translate-x-1/2 lg:translate-x-10 lg:translate-y-10 animate-float">
          <img src={shape} alt="Background Shape" />
        </div>
      </section>
    </div>
  );
};

export default Allproducts;
