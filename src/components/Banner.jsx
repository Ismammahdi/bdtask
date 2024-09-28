import auto from "../assets/automotive.png";
import ecom from "../assets/ecommerce.png";
import edu from "../assets/education.png";
import health from "../assets/healthcare.png";
import hospi from "../assets/hospitality.png";
import phem from "../assets/pharmacy.png";
const Banner = () => {
  return (
    <div>
      {/* Statistics Section */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Bdtask, Inc. <span className="text-green-500">At a Glance</span>
          </h2>

          {/* Flexbox instead of grid */}
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {/* Project Item */}
            <div className="bg-white p-6 shadow rounded flex flex-col  items-center">
              <img src={auto} alt="Projects" className="w-12 h-12 mb-4" />
              <p className="text-4xl font-bold text-green-600">50+</p>
              <p className="text-gray-500">Projects</p>
            </div>

            {/* Products Item */}
            <div className="bg-white p-6 shadow rounded flex flex-col items-center">
              <img src={ecom} alt="Products" className="w-12 h-12 mb-4" />
              <p className="text-4xl font-bold text-green-600">40+</p>
              <p className="text-gray-500">Products</p>
            </div>

            {/* Experts Item */}
            <div className="bg-white p-6 shadow rounded flex flex-col items-center">
              <img src={edu} alt="Experts" className="w-12 h-12 mb-4" />
              <p className="text-4xl font-bold text-green-600">100+</p>
              <p className="text-gray-500">Experts</p>
            </div>

            {/* Countries Item */}
            <div className="bg-white p-6 shadow rounded flex flex-col items-center">
              <img src={health} alt="Countries" className="w-12 h-12 mb-4" />
              <p className="text-4xl font-bold text-green-600">100+</p>
              <p className="text-gray-500">Countries</p>
            </div>

            {/* Happy Clients Item */}
            <div className="bg-white p-6 shadow rounded flex flex-col items-center">
              <img src={hospi} alt="Happy Clients" className="w-12 h-12 mb-4" />
              <p className="text-4xl font-bold text-green-600">10K+</p>
              <p className="text-gray-500">Happy Clients</p>
            </div>

            {/* Years Experienced Item */}
            <div className="bg-white p-6 shadow rounded flex flex-col items-center">
              <img
                src={phem}
                alt="Years Experience"
                className="w-12 h-12 mb-4"
              />
              <p className="text-4xl font-bold text-green-600">10+</p>
              <p className="text-gray-500">Years Experienced</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
