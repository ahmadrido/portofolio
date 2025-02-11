import './index.css'
import Meteors from './components/ui/meteors'
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import pp from './assets/pp.png'
import P from './components/atom/p';
import { CoolMode } from './components/ui/cool-mode';
import Particles from './components/ui/particles';
import { RainbowButton } from './components/ui/rainbow-button';
import { AnimatedListDemo } from './components/molekul/sertifikat';
import reactSerti from './assets/sertificate/dicoding react.pdf';
import responsnifSerti from './assets/sertificate/responsif serti.pdf'
import bnsp from './assets/sertificate/serti bnsp.pdf'
import basic from './assets/sertificate/basic web.pdf'
import sertiDqDa from './assets/sertificate/serti DQLAB DA bootcamp.pdf'
import ProjectPreview from './components/pages/previewProjek';
import { useState } from 'react';


const Navigations = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-transparent backdrop-blur-md rounded-b-3xl text-center mx-auto py-4 px-6 md:w-1/3">
        {/* Hamburger menu untuk mobile */}
        <button 
          className="md:hidden absolute right-4 top-4 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Menu utama */}
        <ul className={`
          flex flex-col md:flex-row
          justify-between items-center
          md:space-x-6 space-y-4 md:space-y-0
          ${isMenuOpen ? 'flex' : 'hidden md:flex'}
          transition-all duration-300 ease-in-out
        `}>
          <li>
            <a href="#about" className="text-white hover:text-gray-300 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#certificate" className="text-white hover:text-gray-300 transition-colors">
              Achievement
            </a>
          </li>
          <li className="order-first md:order-none">
            <RainbowButton>
              <CoolMode>
                <a href="#"><i className='fa-solid fa-home'></i></a>
              </CoolMode>   
            </RainbowButton>
          </li>
          <li>
            <a href="#projects" className="text-white hover:text-gray-300 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};


function Apps() {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Student'],
    loop: true,
    delaySpeed: 2000
  })

  // select nav ul li a.text-white
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });
      link.classList.add('active');
    });
  });
  

  return (
    <>
      <Meteors />
      <Particles
        className="absolute inset-0"
      />

      {/* nav */}
      <Navigations />

      <main className="site-main">
      <div className="rotating-viewport">
      <div className="  ">
      <img
          src={pp} 
          alt="My Portrait"
          className="rounded-full hidden md:block text-glow img-gelap shadow-inner shadow-slate-400 bg-yellow-400"
          draggable={false}
        />
      </div>
      {/* <div className="face face-2">
      <img src={mobile} width={250} alt="" draggable={false} />
      </div> */}
    </div>

<section className="h-max" id='#'>
  <div className="text-white relative p-5 md:p-10 md:px-20 w-full ">
    {/* <BorderBeam /> */}
    <div className= "items-center">
      <div>
        <h1 className="text-5xl font-extrabold leading-tight">Hello There,</h1>
        <h3 className="text-4xl font-extrabold leading-tight">I'm <span className='text-teal-400 text-glow'>Ahmad Rido Kamaludin</span>, I'm a{" "}</h3>
        <h4 className="mt-4 text-3xl font-bold">
          <span className="text-yellow-400">
            {text}
            <Cursor cursorColor="white" />
          </span>
        </h4>
        <p className='mt-4 text-slate-400'>Informatics student with high motivation and basic programming skills. Have experience in web application development using PHP, MySQL. Accustomed to working independently to complete technical projects, with a passion for continuous learning and development.</p>
      </div>

      {/* <div className='ms-auto'>
        
        <img
          src={pp} // Ganti dengan URL gambar Anda
          alt="My Portrait"
          className="rounded-full text-glow img-gelap shadow-inner shadow-slate-400 bg-yellow-400"
          style={{cursor:'pointer'}}
          draggable={false}
        />
      </div> */}
    </div>
  </div>
</section>

            
    <section className="p-5 md:p-20" id='about'>
      <div className="title-content flex gap-5 items-center gradient-text-1">
      <i className="fa-solid fa-registered text-6xl"></i>
      <div className="desc-title">
        <h1 className="text-3xl font-bold">About Me</h1>
        <P text="My Description In Web Developer"/>
      </div>
      </div>

      <div className= "">
        <div className=''>    
            <h1 className='mt-10 text-yellow-400 text-2xl font-bold'>Hello,</h1>
            <P text="Let me introduce myself, my name is Ahmad Rido Kamaludin, I live in Tangerang, West Java, Indonesia. As a software developer in the novice Fullstack Developer field, I have the ability to integrate various project components coherently and efficiently. Apart from that, I have the skills to work together in a team and also have good creative power. I also have a great interest in continuing to learn about the latest technology relevant to Industry 4.0 or digitalization. I am ready to adapt and use the latest innovations to support industry and business needs."/>

            <h2 className='mt-5 text-yellow-400 text-2xl font-bold'><i className='fa-solid fa-graduation-cap'></i> Education</h2>
            <p className='text-slate-400 mt-2'>Institut Teknologi Tangerang Selatan <i className='fa-solid fa-location-dot text-yellow-400'></i> <br /> October 2024</p>

            <h2 className='mt-5 text-yellow-400 text-2xl font-bold'><i className='fa-solid fa-code'></i> Here is my coding skill <i className='fa-solid fa-arrow-turn-down'></i></h2>
        </div>
        {/* <div className='flex justify-center'>
          <img src={mobile} width={250} alt="" draggable={false} />
        </div> */}
      </div>
    </section>
  </main>



      <div className="marquee py-10" data-aos="flip-up">
            <div className="programing-languages">
                <i className="fa-brands fa-html5" data-bs-toggle="tooltip" title="HTML5"></i>
                <i className="fa-brands fa-css3-alt" data-bs-toggle="tooltip" title="CSS3"></i>
                <i className="fa-brands fa-js" data-bs-toggle="tooltip" title="JavaScript"></i>
                <i className="fa-brands fa-react" data-bs-toggle="tooltip" title="React"></i>
                <i className="fa-brands fa-bootstrap" data-bs-toggle="tooltip" title="Bootstrap"></i>
                <i className="fa-brands fa-node-js" data-bs-toggle="tooltip" title="Node.js"></i>
                <i className="fa-brands fa-php" data-bs-toggle="tooltip" title="PHP"></i>
                <i className="fa-brands fa-java" data-bs-toggle="tooltip" title="Java"></i>
                <i className="fa-brands fa-python" data-bs-toggle="tooltip" title="Python"></i>
                
                
                <i className="fa-brands fa-html5" data-bs-toggle="tooltip" title="HTML5"></i>
                <i className="fa-brands fa-css3-alt" data-bs-toggle="tooltip" title="CSS3"></i>
                <i className="fa-brands fa-js" data-bs-toggle="tooltip" title="JavaScript"></i>
                <i className="fa-brands fa-react" data-bs-toggle="tooltip" title="React"></i>
                <i className="fa-brands fa-bootstrap" data-bs-toggle="tooltip" title="Bootstrap"></i>
                <i className="fa-brands fa-node-js" data-bs-toggle="tooltip" title="Node.js"></i>
                <i className="fa-brands fa-php" data-bs-toggle="tooltip" title="PHP"></i>
                <i className="fa-brands fa-java" data-bs-toggle="tooltip" title="Java"></i>
                <i className="fa-brands fa-python" data-bs-toggle="tooltip" title="Python"></i>
            </div>
          </div>

          <div className="h-max md:h-screen relative bg-darkNavy certi p-5 md:p-20">
            
            <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full gap-5 md:p-20" id='certificate'>
              <div className='h-full text-center'>
                <AnimatedListDemo />
                <RainbowButton className='md:w-96 w-full mt-4 bg-white' data-modal-target="extralarge-modal" data-modal-toggle="extralarge-modal" type="button">
                <a>
                Show all certificate <i className='fa-solid fa-globe'></i>
                </a>
                </RainbowButton>             

              </div>
              <div>
                  <div className="title-content flex gap-5 items-center bg-yellow-400">
                    <i className="fa-solid fa-registered text-6xl"></i>
                    <div className="desc-title">
                      <h1 className="text-3xl font-bold">Certificate</h1>
                      <P text="Here is achievement and certificate"/>
                    </div>
                  </div>
                  <p className='mt-4 text- text-glow text-4xl leading-normal'>I really like joining webinars/bootcamps that are related to my goals,<span className='line-through text-gray-700'>  especially if they are certified <i className="fa-solid fa-face-laugh-squint"></i></span>.</p>
              </div>
            </div>
          </div>

          <div className="h-max md:h-screen p-5 md:p-20" id="projects">
            <ProjectPreview />
          </div>

          <div id="extralarge-modal-projects" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative w-full max-w-7xl max-h-full">
        
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Here is my last projects
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal-projects">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 text-black text-center flex items-center justify-center">
                <img src="https://img.freepik.com/free-vector/coming-soon-design_1132-70.jpg?t=st=1733971238~exp=1733974838~hmac=d41e055a51f5bed22e18113b650c7c35079fbccc737a17232f2ef148af8d4e2c&w=740" width={"30%"} alt="" />
                
            </div>
            <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="extralarge-modal-projects" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
            </div>
        </div>
    </div>
</div>



<div id="extralarge-modal" data-modal-backdrop="static" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div className="relative w-full max-w-7xl max-h-full">
        
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Here is my all certificate
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="extralarge-modal">
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
                <div className="serticate grid grid-cols-1 md:grid-cols-3 gap-4">
                <iframe src={bnsp} className="w-full h-64 border rounded-lg"></iframe>
                <iframe src={reactSerti} className="w-full h-64 border rounded-lg"></iframe>
                <iframe src={responsnifSerti} className="w-full h-64 border rounded-lg"></iframe>
                <iframe src={basic} className="w-full h-64 border rounded-lg"></iframe>
                <iframe src={sertiDqDa} className="w-full h-64 border rounded-lg"></iframe>

                </div>
            </div>
            <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="extralarge-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
            </div>
        </div>
    </div>
</div>

    </>
  )
}

export default Apps
