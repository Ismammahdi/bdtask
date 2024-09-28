import whowe from "../assets/who-we-are.webp";

const Blog = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 md:p-16">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h4 className="text-green-600 text-sm font-semibold mb-2">
            Who We Are
          </h4>
          <h2 className="text-3xl  leading-snug w-[400px]">
            We are From
            <span className="text-black font-bold">
              <span> </span>
              Another Space to Automate the World
            </span>
          </h2>
          <p className="mt-4 text-gray-700">
            Bdtask works in multiple areas including software development,
            website development, customized software solutions, mobile app
            development, theme design, and development. Our dream is to continue
            your journey with success.
          </p>
          <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            More About Us
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="">
            <img
              src={whowe}
              alt="Office Environment"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
        </div>
    );
};

export default Blog;