import footer from "../assets/footer-bg.webp";
import bdtask from "../assets/bdtask-logo-white.webp";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white relative ">
        {/* Background image */}
        <div className="absolute md:top-[-100px] xs:top-[-5] sm:top-[-25] top-[-50px] inset-0 bg-cover bg-center ">
          <img src={footer} alt="..." />
        </div>

        {/* Content */}
        <div className="relative  mx-auto py-10 px-5 z-10">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Left Section */}
            <div className="mb-8 md:mb-0 ">
              <img src={bdtask} alt="Bdtask Logo" className="h-10 mb-3" />
              <p className="text-gray-400">
                Best Software Development Company To Architect The Dream For
                Next Generation.
              </p>
              <div className="mt-4">
                <span className="block text-lg font-bold">10,000+</span>
                <span className="block text-gray-400">Items sold</span>
                <span className="block text-lg font-bold mt-2">40+</span>
                <span className="block text-gray-400">Products</span>
              </div>
              <div className="flex mt-4 space-x-3">
                {/* Social Icons */}
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            </div>

            {/* Middle Section */}
            <div className="mb-8 md:mb-0">
              <h4 className="font-bold text-lg mb-3">Address</h4>
              <div>
                <p className="text-gray-400">
                  <strong>Bangladesh Office</strong>
                  <br />
                  B-25, Mannan Plaza, 4th Floor Khilkhet, Dhaka-1229, Bangladesh
                </p>
                <p className="mt-4 text-gray-400">
                  <strong>UAE Office</strong>
                  <br />
                  Silver Tower (20th floor) - Marasi Drive, Business Bay - Dubai
                  - United Arab Emirates
                </p>
                <p className="mt-4 text-gray-400">
                  <strong>Email</strong>: business@bdtask.com <br />
                  info@bdtask.com
                </p>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <h4 className="font-bold text-lg mb-3">Phone</h4>
              <div>
                <p className="text-gray-400">
                  <strong>Service:</strong>
                  <br />
                  +880-183-070-1422 <br />
                  +880-185-767-5727 <br />
                  +880-181-758-4639
                </p>
                <p className="mt-4 text-gray-400">
                  <strong>Office Reception:</strong>
                  <br />
                  +880-258970255
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
