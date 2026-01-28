import "./App.css";
import './pages/pages.css' ;
import Contact from "./components/contact";

import { Link } from "react-router-dom";
import ArticlePage from "./pages/article";
import Blog from "./pages/blog";
import Shop from "./pages/shop";
import FamilyDoc from "./pages/familydoc";
import AboutUs from "./pages/aboutus";

function Home() {
  return (
    <>
      <div className="apppage container">
        <section className="hero">
          <div className="herotextbox">
            <div className="innerinfobox">
              <h1 className=" text-3xxl font-bold text-cyan-900">
                Find The Perfect Caregiver For Your Loved One.
              </h1>
              <p className="text-md text-black">Connecting you to a better care and service.</p>

              <br />
              <button className="herobtn bg-cyan-800 rounded-sm px-2 py-2 text-white "> Get Started </button>
            </div>
          </div>
          <div className="heroimagebox"></div>
        </section>

        <section
          className="Pagesection
      "
        >
          <div className=" serviceconbox sm:flex items-center max-w-screen-4xl pt-16 p-2">

            <div className="servicecards shadow-lg">
              <div className="serviceiconbox ml-2 mt-2">
                <img src="https://www.svgrepo.com/show/487329/emoji-happy.svg" alt="" />
              </div>
              <h4 className="font-bold text-xl p-2">
                {" "}
                Satisfaction Gaurantee
              </h4>
              <p className="font-light p-2 text-left text-sm ">
                We are rated as the best on Trustpilot for our geniue care.
              </p>
              <button
                className="border-gray-600 border-1 text-sm rounded-sm px-4 py-2 mt-4 ml-4 bg-none text-black
            "
              >
                {" "}
                Learn more{" "}
              </button>
            </div>

            <div className="servicecards shadow-lg text-white bg-cyan-800">
              <div className="serviceiconbox ml-1 mt-1">
                <img src="https://www.svgrepo.com/show/532407/chart-mixed.svg" alt="" />
              </div>
              <h4 className="font-bold text-xl p-2"> Professional Care</h4>
              <p className="font-light p-2 text-left text-sm ">
                We aren't just experts at health we also give adequate care.
              </p>
              <button
                className="border-gray-50  text-sm border-1 p-1 rounded-sm px-4 py-2 mt-4 ml-4 bg-transparent text-white
            "
              >
                {" "}
                Learn more{" "}
              </button>
            </div>

            <div className="servicecards shadow-lg ">
              <div className="serviceiconbox ml-2 mt-2">
                <img src="https://www.svgrepo.com/show/438787/price-tag.svg" alt="" />
              </div>
              <h4 className="font-bold text-xl p-2"> Low Cost Service</h4>
              <p className="font-light p-1 text-left text-sm">
                   We give true and affectionate care to our beloved
                clients.
              </p>
              <button
                className="border-gray-600 text-sm border-1 p-2 rounded-sm px-4 py-2 mt-4 ml-4 bg-none text-black
            "
              >
                {" "}
                Learn more{" "}
              </button>
            </div>
          </div>

          <section className="AboutBox p-5">
            
            <div className="grid sm:grid-cols-2 gap-2 aboutbox">

              <div className="imgaboutbox">
                <img src="https://www.shutterstock.com/image-photo/asian-caregiver-nurse-serve-food-600nw-2264912435.jpg" alt="" />
              </div>

              <div className="abouinfobox">
                <h2 className="font-bold text-4xl p-2 xs:text-green-700">
                  {" "}
                  We Take Great Care Of Your Issues.
                </h2>
                <p className="p-2 text-base ">
                  At CareConnect Health is truly wealth and companionship is
                  more than wealth, we are not just Professionals we that
                  deliver top notch and quality services but we also ensure that
                  we take good care of your needs and problems.
                </p>
                <ul className="p-2">
                  <li className="p-2 font-semibold"> Strong Security </li>
                  <li className="p-2 font-semibold">
                    {" "}
                    Experts and Professionalism
                  </li>
                  <li className="p-2 font-semibold">Maximum Time management</li>
                </ul>
                <button className="bg-cyan-800 px-8 py-2 rounded-sm border-2 border-none m-4 text-white">
                  <Link to="/about"
                  className="text-white">
                    About Us
                  </Link>
                </button>
              </div>
            </div>
          </section>

          <section className="Serviceprov p-5">
            <h2 className="text-3xl font-bold p-4 mt-2">
              {" "}
              What Service We Provide
            </h2>

            <div className="serviceconprovbox grid grid-cols-3 gap2" >
              
              <div className="serviceprovbox p-2">
                <div className="serviceprovcards p-2 shadow-lg">
                  <div className="serviceproviconbox ml-2 mt-2">
                    <img src="https://www.svgrepo.com/show/429037/care-ecology-environment.svg" alt="" />
                  </div>
                  <h4 className="font-bold text-lg p-2"> Special care </h4>
                  <p className="font-light p-2 text-left text-sm ">
                    We are rated as the best on Trustpilot for our geniue care
                    and support.
                  </p>
                  <button
                    className="border-gray-600 border-1 rounded-sm px-2 py-2 mt-2 ml-4 bg-none text-black
text-sm            "
                  >
                    {" "}
                    Learn more{" "}
                  </button>
                </div>
              </div>

              <div className="serviceprovbox p-2">
                <div className="serviceprovcards p-2 shadow-lg">
                  <div className="serviceproviconbox ml-2 mt-2">
                    <img src="https://www.svgrepo.com/show/419416/care-day-health.svg" alt="" />
                  </div>
                  <h4 className="font-bold text-lg p-2"> Special Needs </h4>
                  <p className="font-light p-2 text-left text-sm ">
                    We are rated as the best on Trustpilot for our geniue care
                    and support.
                  </p>
                  <button
                    className="border-gray-600 border-1 rounded-sm px-2 py-2 mt-2 ml-4 bg-none text-black
text-sm            "
                  >
                    {" "}
                    Learn more{" "}
                  </button>
                </div>
              </div>

              <div className="serviceprovbox p-2">
                <div className="serviceprovcards p-2 shadow-lg">
                  <div className="serviceproviconbox ml-2 mt-2">
                    <img src="https://www.svgrepo.com/show/532480/suitcase-medical.svg" alt="" />
                  </div>
                  <h4 className="font-bold text-lg p-2"> Mental Health </h4>
                  <p className="font-light p-2 text-left text-sm ">
                    We are rated as the best on Trustpilot for our geniue care
                    and support.
                  </p>
                  <button
                    className="border-gray-600 border-1 rounded-sm px-2 py-2 mt-2 ml-4 bg-none text-black
text-sm            "
                  >
                    {" "}
                    Learn more{" "}
                  </button>
                </div>
              </div>

              <div className="serviceprovbox p-2">
                <div className="serviceprovcards p-2 shadow-lg">
                  <div className="serviceproviconbox ml-2 mt-2">
                    <img src="https://www.svgrepo.com/show/80382/care2-logo.svg" alt="" />
                  </div>
                  <h4 className="font-bold text-lg p-2"> Performance </h4>
                  <p className="font-light p-2 text-left text-sm ">
                    We are rated as the best on Trustpilot for our geniue care
                    and support.
                  </p>
                  <button
                    className="border-gray-600 border-1 rounded-sm px-2 py-2 mt-2 ml-4 bg-none text-black
text-sm            "
                  >
                    {" "}
                    Learn more{" "}
                  </button>
                </div>
              </div>

              <div className="serviceprovbox p-2">
                <div className="serviceprovcards p-2 shadow-lg">
                  <div className="serviceproviconbox ml-2 mt-2">
                    <img src="https://www.svgrepo.com/show/495370/health.svg" alt="" />
                  </div>
                  <h4 className="font-bold text-lg p-2"> Psychosis</h4>
                  <p className="font-light p-2 text-left text-sm ">
                    We are rated as the best on Trustpilot for our geniue care
                    and support.
                  </p>
                  <button
                    className="border-gray-600 border-1 rounded-sm px-2 py-2 mt-2 ml-4 bg-none text-black
text-sm            "
                  >
                    {" "}
                    Learn more{" "}
                  </button>
                </div>
              </div>

              <div className="serviceprovbox p-2">
                <div className="serviceprovcards p-2">
                  <div className="serviceproviconbox ml-2 mt-2">
                    <img src="https://www.svgrepo.com/show/484074/doctor.svg" alt="" />
                  </div>
                  <h4 className="font-bold text-lg p-2 truncate"> Doc Consult </h4>
                  <p className="font-light p-2 text-left text-sm ">
                    We are rated as the best on Trustpilot for our geniue care
                    and support.
                  </p>
                  <button
                    className="border-gray-600 border-1 rounded-sm px-2 py-2 mt-2 ml-4 bg-none text-black
                    text-sm "
                  >
                    {" "}
                    Learn more{" "}
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="Marketsection p-2">
            <div className="sm:flex items-center max-w-screen-4xl  gap-2">
              <div className="marketinfobox p-2">
                <h1 className="font-bold text-4xl p-2">
                  It Is Not Just Our Job To Look After The Eldery. It's Our Pride!
                </h1>
                <br />
                <p className="p-2 text-base">
                Caring for the elderly should never be seen as a burden or an obligation.<br />
                 They are the foundation of our families and communities the ones who worked, <br />
                 sacrificed, and guided us to where we are today. Looking after them is not simply a<br />
                  duty we tick off. it is a source of pride, gratitude, and love.
                  When we honor the elderly with patience, respect, and compassion. 
                </p>

                <button className="bg-cyan-800 px-8 py-2 rounded-sm border-2 border-none m-4 text-white">
                  {" "}
                  Visit Today{" "}
                </button>
              </div>

              <div className="marketimgbox">
                <img src="https://ariannerelocation.com/wp-content/uploads/2019/08/Moving-to-Canada-as-a-caregiver-nurse.jpg" alt="" />
              </div>
            </div>
          </section>

          <section className="Contactsection p-5">
            <Contact />
          </section>
        </section>
      </div>
    </>
  );
}

export default Home;

