import Silk from './Silk';
import logo from './assets/_.svg';
import PillNav from './PillNav';
import TextType from './TextType';
import AboutSection from "./AboutSection";
import ProjectSec from "./ProjectSection";
import Certficate from "./certificate";
import ContactSection from "./contactSection";
import Footer from "./footer";



const App = () => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <PillNav
          logo={logo}
          logoAlt="Company Logo"
          items={[
            { label: 'Who I Am', href: '/' },
            { label: 'work', href: '/about' },
            { label: 'Achievements', href: '/services' },
            { label: 'Let’s Talk', href: '/contact' }
          ]}
          activeHref="/"
          className="custom-nav fixed justify-self-center"
          ease="power2.easeOut"
          baseColor="#000000"
          pillColor="#ffffff"
          hoveredPillTextColor="#ffffff"
          pillTextColor="#000000"
          theme="light"
          initialLoadAnimation={false}
        />
      </div>

      <div className="w-full h-screen relative overflow-x-hidden flex justify-center">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Silk
            speed={5}
            scale={1}
            color="#370DE0"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        <div className="absolute hero-content z-10 text-white flex flex-col gap-6 justify-center items-center text-center px-4">
          <TextType
            text={[
              "Hi, I’m Abdelrhman!",
              "<Front-End Developer/>",
              "let's build something amazing together."
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
            deletingSpeed={50}
            variableSpeedEnabled={false}
            variableSpeedMin={60}
            variableSpeedMax={120}
            cursorBlinkDuration={0.5}
            className="lg:text-4xl font-bold text-3xl lg:w-full w-95 "
          />

          <h3 className=" lg:4xl text-gray-300 lg:w-170 w-90">I build modern, responsive, and interactive websites that provide seamless user experiences. Passionate about clean code, efficient performance, and turning ideas into visually appealing and functional web solutions.</h3>

          <div className="btns flex flex-row gap-5 mt-2">

            <div className="flex items-center btn justify-center">
              <div className="relative group">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-xl from-teal-400 via-blue-500 to-purple-500 p-2px opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                  <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
                    <div className="relative z-10 flex items-center space-x-2">
                      <span className="transition-all duration-500 group-hover:translate-x-1">
                        View My CV
                      </span>

                      <svg
                        className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                        />
                      </svg>
                    </div>
                  </span>
                </a>

              </div>
            </div>

            <a
              href="#projects" 
              className="relative btn bg-[#4b48ff] text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center justify-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group"
            >
              <span className="mr-10">Projects</span>

              <div
                className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  className="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                  ></path>
                </svg>
              </div>
            </a>
          </div>



        </div>
      </div>
            <AboutSection />

            <ProjectSec>

            </ProjectSec>

            <Certficate>

            </Certficate>
            <ContactSection></ContactSection>
            <Footer></Footer>            

    </>
    
  );
};

export default App;
