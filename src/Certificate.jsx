import metacertficate from './img/metaFrontEnd.png';
import Cs50X from './img/CS50x.png';
import freecodecamp from './img/freeCodeCamp.png';
import CicoCpp from './img/cicoCpp.png';
import CicoPy from './img/pyCico.png';
export default function certficateSection() {
    return (
        <div className="relative isolate m-0 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 px-6 py-24 lg:py-20 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            >
                <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]" />

                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80e8] to-[#1100ff] opacity-20"
                />
            </div>

            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-2xl font-semibold text-indigo-400">Certificates</h2>
                <p className="mt-3 text-4xl lg:text-5xl w-fit m-auto font-semibold tracking-tight text-balance text-white border-b-2 border-cyan-400">
                    my Achievements
                </p>

            </div>
            <div className="cardsCont grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

                <div className="card bg-gray-800 rounded-lg border-blue-400 border-1 shadow-lg">
                    <img src={metacertficate} alt="Food Lover" className='rounded-t-xl' />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white">Introduction to Front-End Development</h3>
                        <p className="mt-2 text-gray-300">fundamentals of building web interfaces using HTML, CSS, and JavaScript. It covers responsive design, UI basics, and interactive web features, preparing learners to create engaging web pages and applications.</p>
                        <div className="mt-4">
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Ui design</span>
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Html</span>
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Css</span>
                            <span className="inline-block bg-gray-700 mt-2 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Bootstrap</span>
                            <a href="https://abdelrhman005.github.io/Food-Lover/?authuser=0" target='_blank' className="mt-4 text-center inline-block bg-transparent w-full border-blue-600 border-2 rounded-md text-white px-4 py-2 rounded-full">View Details</a>
                        </div>
                    </div>

                </div>


                <div className="card bg-gray-800 rounded-lg border-blue-400 border-1 shadow-lg">
                    <img src={Cs50X} alt="Food Lover" className='rounded-t-xl' />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white">CS50x by Harvard</h3>
                        <p className="mt-2 text-gray-300">CS50x is an entry-level computer science course from Harvard that teaches core programming and problem-solving concepts. It covers algorithms, data structures, C, Python, SQL, and web development basics, preparing learners to understand how software works and how to build real-world applications.</p>
                        <div className="mt-4">
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Data Structures</span>
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Algorithms</span>
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mt-2 mr-2">Problem Solving</span>
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mt-2 mr-2">Software Development</span>
                            <a href="https://abdelrhman005.github.io/APPEXY/?authuser=0" target='_blank' className="mt-4  text-center inline-block bg-transparent w-full border-blue-600 border-2 rounded-md text-white px-4 py-2 rounded-full">View Details</a>
                        </div>
                    </div>

                </div>


                <div className="card bg-gray-800 rounded-lg border-blue-400 border-1 shadow-lg">
                    <img src={freecodecamp} alt="Food Lover" className='rounded-t-xl' />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mt-5">FreeCodeCamp Responsive Web Design</h3>
                        <p className="mt-2 text-gray-300">FreeCodeCamp Responsive Web Design is a hands-on course focused on building modern, responsive websites using HTML and CSS. It covers layout techniques, Flexbox, Grid, and accessibility, helping learners create user-friendly web pages that adapt to all screen sizes.</p>
                        <div className="mt-4">
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Responsive Design</span>
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">HTML5</span>
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2 mt-2">CSS3</span>                            <a href="https://abdelrhman005.github.io/Calm-Nest/" target='_blank' className="mt-4 text-center inline-block bg-transparent w-full border-blue-600 border-2 rounded-md text-white px-4 py-2 rounded-full">View Details</a>
                        </div>
                    </div>

                </div>
                <div className="card bg-gray-800 rounded-lg border-blue-400 border-1 shadow-lg">
                    <img src={CicoCpp} alt="Food Lover" className='rounded-t-xl' />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mt-5">C++ Essentials 1</h3>
                        <p className="mt-2 text-gray-300">C++ Essentials 1 by Cisco is a beginner-friendly course that introduces core programming concepts using c++. It covers syntax, variables, data types, conditions, loops, and functions, building a strong foundation for problem solving and software development.</p>
                        <div className="mt-4">
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Syntax & Data Types</span>
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mt-2 mr-2">Statements & Loops</span>
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mt-2 mr-2 mt-2">Functions & Problem Solving</span>                            <a href="https://abdelrhman005.github.io/Calm-Nest/" target='_blank' className="mt-4 text-center inline-block bg-transparent w-full border-blue-600 border-2 rounded-md text-white px-4 py-2 rounded-full">View Details</a>
                        </div>
                    </div>

                </div>
                <div className="card bg-gray-800 rounded-lg border-blue-400 border-1 shadow-lg">
                    <img src={CicoPy} alt="Food Lover" className='rounded-t-xl' />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mt-5">Python Essentials 1</h3>
                        <p className="mt-2 text-gray-300">Python Essentials 1 by Cisco is a beginner-friendly course that introduces core programming concepts using Python. It covers syntax, variables, data types, conditions, loops, and functions, building a strong foundation for problem solving and software development.</p>
                        <div className="mt-4">
                            <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Syntax & Data Types</span>
                            <span className="inline-block bg-gray-700 text-white mt-2 border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Statements & Loops</span>
                            <span className="inline-block bg-gray-700 text-white mt-2 border-blue-600 border-2 px-3 py-1 rounded-full mr-2 mt-2">Functions & Problem Solving</span>                            <a href="https://abdelrhman005.github.io/Calm-Nest/" target='_blank' className="mt-4 text-center inline-block bg-transparent w-full border-blue-600 border-2 rounded-md text-white px-4 py-2 rounded-full">View Details</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    )
}
