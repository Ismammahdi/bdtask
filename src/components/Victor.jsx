import victor from "../assets/victor-gbenga-afolabi.png"

const Victor = () => {
    return (
        <div>
             <div className="bg-gray-100 py-10">
        <div className=" mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Customer <span className="text-blue-500">Feedback</span>
          </h2>
          <p className="text-gray-500 mb-10">
            Our honorable and valuable clients share their values with us. Lets
            hear our satisfied clients voices!
          </p>

          <div className="relative  bg-white shadow-lg p-6 rounded-lg mx-auto">
            <div className="flex items-center flex-col md:flex-row">
              {/* Left Image Section */}
              <div className="w-1/2">
                <img
                  src={victor}
                  alt="Victor Gbenga Afolabi"
                  className="rounded-lg"
                />
              </div>
              {/* Right Text Section */}
              <div className="w-1/3 text-left pl-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Victor Gbenga Afolabi
                </h3>
                <p className="text-green-500 text-sm mb-2">
                  CEO & Founder Hazon Holdings
                </p>
                <p className="text-gray-700">
                  Bdtask, Inc. had a lot of clients over the world and I saw
                  they were already working for other countries in Africa. I
                  must say that Bdtask has a strong management and qualified
                  resources. Also, I like that they have a good heart to their
                  clients all over the world.
                </p>
              </div>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6 space-x-2">
              <button className="w-6 h-6 bg-green-500 rounded-full"></button>
              <button className="w-6 h-6 bg-gray-300 rounded-full"></button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Victor;