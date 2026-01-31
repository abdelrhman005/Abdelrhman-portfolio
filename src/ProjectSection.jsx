import foodloverimg from './img/reastarunt_hero.png';
import abexyimg  from './img/Apexy_Landin_Page.png';
import calmnestimg from './img/CalmNestImg.png';

export default function Example() {
    return (
        <div className="relative isolate m-0 overflow-hidden bg-gray-900 px-6 py-24  lg:py-20 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
                />
            </div>

            <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-2xl font-semibold text-indigo-400">My work</h2>
                <p className="mt-3 text-4xl lg:text-5xl w-fit m-auto font-semibold tracking-tight text-balance text-white border-b-2 border-cyan-400">
                    Projects
                </p>

            </div>
            <div className="cardsCont grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

                <div className="card bg-gray-800 rounded-lg border-blue-400 border-1 shadow-lg">
                    <img src={foodloverimg} alt="Food Lover" className='rounded-t-xl' />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white">Food Lover</h3>
                        <p className="mt-2 text-gray-300">Food Lover is a simple and user-friendly restaurant management system built with HTML, CSS, and JavaScript. It helps manage menus, orders, and customers efficiently, providing a clean and interactive web experience.</p>
                        <div className="mt-4">
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Html</span>
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Css</span>
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">JavaScript</span>
                        <a href="https://abdelrhman005.github.io/Food-Lover/?authuser=0" target='_blank' className="mt-15 text-center inline-block bg-transparent w-full border-blue-600 border-2 rounded-md text-white px-4 py-2 ">View Details</a>
                    </div>
                    </div>
                    
                </div>


                <div className="card bg-gray-800 rounded-lg border-blue-400 border-1 shadow-lg">
                    <img src={abexyimg} alt="Food Lover" className='rounded-t-xl' />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white">APPEXY</h3>
                        <p className="mt-2 text-gray-300">APPEXY is a simple and user-friendly web project built with HTML, CSS, and JavaScript. It demonstrates interactive UI components, responsive design, and dynamic features, providing a clean and engaging web experience.</p>
                        <div className="mt-4">
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Html</span>
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Css</span>
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">JavaScript</span>
                        <a href="https://abdelrhman005.github.io/APPEXY/?authuser=0" target='_blank' className="mt-15  text-center inline-block bg-transparent w-full border-blue-600 border-2 text-white px-4 py-2 rounded-md">View Details</a>
                    </div>
                    </div>
                    
                </div>


                <div className="card bg-gray-800 rounded-lg border-blue-400 border-1 shadow-lg">
                    <img src={calmnestimg} alt="Food Lover" className='rounded-t-xl' />
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white">Calm Nest</h3>
                        <p className="mt-2 text-gray-300">Calm Nest is a simple and user-friendly mental health platform built with HTML, CSS, and JavaScript. It offers tools, resources, and guidance, and also responsive design, providing a clean and interactive web experience for wellbeing.</p>
                        <div className="mt-4">
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Html</span>
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">Css</span>
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mr-2">JavaScript</span>
                        <span className="inline-block bg-gray-700 text-white border-blue-600 border-2 px-3 py-1 rounded-full mt-2 mr-2">LocalStorage</span>
                        <a href="https://abdelrhman005.github.io/Calm-Nest/" target='_blank' className="mt-4 text-center inline-block bg-transparent w-full border-blue-600 border-2 rounded-md text-white px-4 py-2">View Details</a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>

        
    )
}
