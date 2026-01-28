import FiltersForm from '../components/docfilter';
import DocsTable from '../components/doctable';
import './pages.css';
import docspic from '../assets/docs.png'
import { Link } from 'react-router-dom';

export default function FamilyDoc() {
    return (
      <>
        <section className="relative overflow-hidden docmainpage">
          <div className="absolute inset-0 bg-cyan-800"></div>

          <div
            className="absolute inset-0 bg-cover bg-center"
          ></div>
  
          <div className="container mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:h-[90vh]">
            <div className="flex flex-col md:flex-row items-center justify-around">
              <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
                <h1 className="text-5xl text-white md:text-8xl font-bold mb-6 leading-tight">
                  Find a Doctor 
                  <br />
                  <span 
                  className="text-white"
                    >
                    Nearby.
                  </span>
                </h1>
  
                <p className="text-xl mb-5 text-gray-300">
                    Use our powerful and indepth search query database to find an available doctor nearby.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="group relative w-full sm:w-auto px-6 py-3 min-w-[160px]">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-800 to-cyan-700 rounded-lg"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-800 to-cyan-700 rounded-lg lg:blur-md blur-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <div className="relative flex items-center justify-center gap-2">
                      <Link 
                      to={'/'}>
                      <span className="text-white font-medium">Get in Touch </span>
                      </Link>
                      <svg
                        className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </div>
                  </button>

                </div>
              </div>
  
              <div className="w-full md:w-2/5 md:pl-12 relative">
                <div 
                className="bg-white relative 
                rounded-xl p-8 shadow-2xl docimg -mt-6 docimg"
                >
                    <img
                    src={docspic}
                    alt='/' 
                    />
                    <span className='bg-cyan-800 font-bold shadow-md rounded-sm coverup'> CareConnect </span>
                  </div>
              </div>
            </div>
          </div>
  
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>

        </section><br /><br /><br />

        <div className="findbox">
            <FiltersForm 
            className='z-50 w-full fillform'
            />           
            
        <section className='doclist shadow-md'>
            <DocsTable />
            </section>
             
        </div>

      </>
    );
  }
  