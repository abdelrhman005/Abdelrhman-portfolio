import linkedinimg1 from './img/linkedin.svg';
import email from './img/email.svg';
export default function Example() {
    return (
        <div className="relative isolate m-0 overflow-hidden bg-gray-900 px-6 py-24  lg:py-17 sm:py-32 lg:px-8">
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
                <p className="text-4xl lg:text-5xl w-fit m-auto font-semibold tracking-tight text-balance text-white  border-b-2 mt-5  border-cyan-400">Contact</p>
            </div>

            <div className='flex px-6 flex-col lg:flex-row justify-center items-center gap-10 mt-10'>
                <div className='w-full lg:w-1/2 flex flex-col text-center items-center'>
                    <h3 className='text-white text-xl mt-4'>Let’s Create Something Awesome</h3>
                    <p className='text-gray-400 mt-4 '>Open to new projects, fresh ideas, and meaningful collaborations. <br /> I’m always interested in new projects and creative opportunities</p>


                    <div className="mt-4 flex items-center justify-center  bg-white/10 backdrop-blur-md  rounded p-4 shadow-lg w-full max-w-md mx-auto">
                        <div className="flex flex-col gap-2">
                            {/* UP */}
                            <div className="flex gap-2">
                                {/* Instagram */}
                                <a
                                    href="https://www.instagram.com/samaka.dev/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[90px] h-[90px] bg-white rounded-[90px_5px_5px_5px]
                     shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]
                     flex items-center justify-center
                     transition duration-200 ease-in-out
                     hover:scale-110 hover:bg-[#cc39a4] group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
                                        className="w-[30px] h-[30px] fill-[#cc39a4] group-hover:fill-white">
                                        <g transform="scale(8,8)">
                                            <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
                                        </g>
                                    </svg>
                                </a>

                                {/* linkedin */}
                                <a
                                    href="https://www.linkedin.com/in/abdelrhman-mamdoh-a80b2b33b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[90px] h-[90px] bg-white rounded-[5px_90px_5px_5px]
                                        shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]
                                        flex items-center justify-center
                                        transition duration-200 ease-in-out
                                        hover:scale-110 hover:bg-[#03A9F4] group"
                                >
                                    <img
                                        src={linkedinimg1}
                                        alt="LinkedIn"
                                        className="w-[30px] h-[30px] transition duration-200 group-hover:brightness-0 group-hover:invert"
                                    />
                                </a>

                            </div>

                            {/* DOWN */}
                            <div className="flex gap-2">
                                {/* GitHub */}
                                <a
                                    href="https://github.com/abdelrhman005"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[90px] h-[90px] bg-white rounded-[5px_5px_5px_90px]
                     shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]
                     flex items-center justify-center
                     transition duration-200 ease-in-out
                     hover:scale-110 hover:bg-black group"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"
                                        className="w-[30px] h-[30px] fill-black group-hover:fill-white">
                                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                                    </svg>
                                </a>

                                {/* Discord */}
                                <a
                                    href="mailto:yourmail@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-[90px] h-[90px] bg-white rounded-[5px_5px_90px_5px]
  shadow-[rgba(50,50,93,0.25)_0px_2px_5px_-1px,rgba(0,0,0,0.3)_0px_1px_3px_-1px]
  flex items-center justify-center
  transition duration-200 ease-in-out
  hover:scale-110 hover:bg-[#8c9eff] group"
                                >
                                    <img
                                        src={email}
                                        alt="Email"
                                        className="w-[30px] h-[30px] transition duration-200 group-hover:brightness-0 group-hover:invert"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>


                </div>
                <div className='w-full lg:w-1/2'>
                    <form action="post" className="flex flex-col p-6 gap-6 bg-white/10 backdrop-blur-md rounded-xl shadow-lg w-full max-w-md mx-auto">
                        <h2 className="text-2xl font-bold text-white text-center mb-4">Send a Message</h2>

                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-transparent border-b-2 border-white/50 placeholder-white/70 text-white py-3 px-2 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                        />

                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent border-b-2 border-white/50 placeholder-white/70 text-white py-3 px-2 focus:outline-none focus:border-cyan-400 transition-all duration-300"
                        />

                        <textarea
                            placeholder="Message"
                            rows={5}
                            className="bg-transparent border-b-2 border-white/50 placeholder-white/70 text-white py-3 px-2 resize-none focus:outline-none focus:border-cyan-400 transition-all duration-300"
                        />

                        <button
                            type="submit"
                            className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg shadow-md transition-all duration-300 mt-4"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </div>
        </div>
    


    )
}
