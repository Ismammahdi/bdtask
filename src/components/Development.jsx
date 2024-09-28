import soft from "../assets/software-development.webp";
import web from "../assets/1.webp";
import mob from "../assets/mobile-app-development.webp";
import blog from "../assets/blogging-platfoem.webp";
import ecom from "../assets/e-commerce.webp";

const Development = () => {
  return (
    <div>
      {/* development */}

      <section>
        <div className="bg-white min-h-screen flex justify-center items-center ">
          <div className="container mx-auto">
            <div className="grid p-6 md:p-16 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
              <div className="items-start p-6 shadow bg-blue-100 ">
                <img src={soft} alt="..." className="w-12 h-12 rounded-full" />
                <h2>Software development</h2>
                <p className="text-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  sed cumque hic, veritatis ea soluta reprehenderit repudiandae
                  ab suscipit numquam corporis natus sit odio dolore voluptatum.
                  A repudiandae amet quia?
                </p>
              </div>
              <div className="items-start p-6 shadow bg-blue-100 ">
                <img src={web} alt="..." className="w-12 h-12 rounded-full" />
                <h2>Web development</h2>
                <p className="text-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  sed cumque hic, veritatis ea soluta reprehenderit repudiandae
                  ab suscipit numquam corporis natus sit odio dolore voluptatum.
                  A repudiandae amet quia?
                </p>
              </div>
              <div className="items-start p-6 shadow bg-blue-100 ">
                <img src={mob} alt="..." className="w-12 h-12 rounded-full" />
                <h2>Mobile development</h2>
                <p className="text-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  sed cumque hic, veritatis ea soluta reprehenderit repudiandae
                  ab suscipit numquam corporis natus sit odio dolore voluptatum.
                  A repudiandae amet quia?
                </p>
              </div>
              <div className="items-start p-6 shadow bg-blue-100 ">
                <img src={blog} alt="..." className="w-12 h-12 rounded-full" />
                <h2>Ecomers development</h2>
                <p className="text-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  sed cumque hic, veritatis ea soluta reprehenderit repudiandae
                  ab suscipit numquam corporis natus sit odio dolore voluptatum.
                  A repudiandae amet quia?
                </p>
              </div>
              <div className="items-start p-6 shadow bg-blue-100 ">
                <img src={ecom} alt="..." className="w-12 h-12 rounded-full" />
                <h2>Bloging platform</h2>
                <p className="text-xs">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                  sed cumque hic, veritatis ea soluta reprehenderit repudiandae
                  ab suscipit numquam corporis natus sit odio dolore voluptatum.
                  A repudiandae amet quia?
                </p>
              </div>
              <div className="flex items-center justify-center p-6 shadow bg-blue-100 ">
                <div className="text-center flex flex-col justify-center">
                  <h2 className="font-bold">Custom Software Development</h2>
                  <button className="mt-5 text-white bg-green-600  py-2">
                    Submit request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Development;
