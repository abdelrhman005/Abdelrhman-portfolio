import { useState } from 'react';
import linkedinimg1 from './img/linkedin.svg';
import emailIcon from './img/email.svg';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection({ id }) {
    const [state, handleSubmit] = useForm("mjgpbznl");

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validate = (field, value) => {
        const newErrors = { ...errors };

        if (field === 'name') {
            if (!value.trim()) {
                newErrors.name = 'Name is required';
            } else if (value.trim().length < 2) {
                newErrors.name = 'Name must be at least 2 characters';
            } else {
                delete newErrors.name;
            }
        }

        if (field === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) {
                newErrors.email = 'Email is required';
            } else if (!emailRegex.test(value)) {
                newErrors.email = 'Please enter a valid email';
            } else {
                delete newErrors.email;
            }
        }

        if (field === 'message') {
            if (!value.trim()) {
                newErrors.message = 'Message is required';
            } else if (value.trim().length < 10) {
                newErrors.message = 'Message must be at least 10 characters';
            } else {
                delete newErrors.message;
            }
        }

        setErrors(newErrors);
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (touched[name]) {
            validate(name, value);
        }
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        validate(name, value);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setTouched({ name: true, email: true, message: true });

        const nameErrors = validate('name', formData.name);
        const emailErrors = validate('email', formData.email);
        const messageErrors = validate('message', formData.message);
        const allErrors = { ...nameErrors, ...emailErrors, ...messageErrors };
        setErrors(allErrors);

        if (Object.keys(allErrors).length === 0) {
            handleSubmit(e);
        }
    };

    const getInputClass = (field) => {
        const base = "w-full bg-white/5 rounded-lg placeholder-white/40 text-white py-3 px-4 focus:outline-none transition-all duration-300 border";
        if (touched[field] && errors[field]) {
            return `${base} border-red-400/70 focus:border-red-400 focus:bg-red-400/5`;
        }
        if (touched[field] && !errors[field] && formData[field]) {
            return `${base} border-green-400/70 focus:border-green-400 focus:bg-green-400/5`;
        }
        return `${base} border-white/10 focus:border-cyan-400 focus:bg-cyan-400/5`;
    };

    return (
        <div id={id} className="relative isolate m-0 overflow-hidden bg-gray-900 px-6 py-24  lg:py-17 sm:py-32 lg:px-8">
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
                    <h3 className='text-white text-xl mt-4'>Let's Create Something Awesome</h3>
                    <p className='text-gray-400 mt-4 '>Open to new projects, fresh ideas, and meaningful collaborations. <br /> I'm always interested in new projects and creative opportunities</p>

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

                                {/* Email */}
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
                                        src={emailIcon}
                                        alt="Email"
                                        className="w-[30px] h-[30px] transition duration-200 group-hover:brightness-0 group-hover:invert"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full lg:w-1/2'>
                    {state.succeeded ? (
                        <div className="flex flex-col p-8 gap-4 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md mx-auto text-center border border-cyan-400/50">
                             <div className="mx-auto w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                             </div>
                             <h2 className="text-2xl font-bold text-cyan-400">Message Sent!</h2>
                             <p className="text-gray-300">Thanks for reaching out. I'll get back to you soon.</p>
                             <button 
                                onClick={() => window.location.reload()}
                                className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2.5 px-6 rounded-lg mt-2 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
                             >
                                Send another message
                             </button>
                        </div>
                    ) : (
                        <form onSubmit={onSubmit} className="flex flex-col p-8 gap-5 bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl w-full max-w-md mx-auto border border-white/10">
                            <h2 className="text-2xl font-bold text-white text-center mb-1">Send a Message</h2>
                            <p className="text-gray-400 text-sm text-center -mt-2 mb-2">I'd love to hear from you</p>

                            {/* Name Field */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="name" className="text-gray-300 text-sm font-medium mb-1">Name</label>
                                <div className="relative">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClass('name')}
                                    />
                                    {touched.name && !errors.name && formData.name && (
                                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                    {touched.name && errors.name && (
                                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                </div>
                                {touched.name && errors.name && (
                                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>
                                )}
                                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
                            </div>

                            {/* Email Field */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="email" className="text-gray-300 text-sm font-medium mb-1">Email</label>
                                <div className="relative">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={getInputClass('email')}
                                    />
                                    {touched.email && !errors.email && formData.email && (
                                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                    {touched.email && errors.email && (
                                        <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                </div>
                                {touched.email && errors.email && (
                                    <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>
                                )}
                                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
                            </div>

                            {/* Message Field */}
                            <div className="flex flex-col gap-1">
                                <label htmlFor="message" className="text-gray-300 text-sm font-medium mb-1">Message</label>
                                <div className="relative">
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        rows={4}
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`${getInputClass('message')} resize-none`}
                                    />
                                    {touched.message && !errors.message && formData.message && (
                                        <svg className="absolute right-3 top-4 w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    )}
                                    {touched.message && errors.message && (
                                        <svg className="absolute right-3 top-4 w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    {touched.message && errors.message ? (
                                        <p className="text-red-400 text-xs mt-1 ml-1">{errors.message}</p>
                                    ) : <span />}
                                    <span className={`text-xs mt-1 mr-1 ${formData.message.length >= 10 ? 'text-green-400/70' : 'text-gray-500'}`}>
                                        {formData.message.length}/10 min
                                    </span>
                                </div>
                                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1 ml-1" />
                            </div>

                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300 mt-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:shadow-cyan-500/25 hover:shadow-xl active:scale-[0.98]"
                            >
                                {state.submitting ? (
                                    <>
                                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
