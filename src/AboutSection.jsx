import ElectricBorder from './ElectricBorder';
import codeimg from './assets/code.svg';
import uiimg from './assets/ui.svg';
import bold from './assets/bold.svg';



export default function Example() {
  return (
    <div className="relative isolate h-auto overflow-hidden bg-gray-900 px-6 py-20 lg:py-10 sm:py-32 lg:px-8">
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#020064] to-[#4b3ef5] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <p className="mt-9 lg:text-5xl w-fit m-auto font-semibold tracking-tight text-balance text-white text-4xl border-b-2 border-cyan-400">
          About Me
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center lg:text-md font-medium text-pretty text-gray-400 sm:text-xl/8">
        I create responsive, and interactive websites.
        I specialize in turning ideas into clean, user-friendly digital experiences using HTML, CSS, JavaScript,
        and React.
      </p>

      <div className="mx-auto mt-10 text-gray-400 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 16, height: '300px' }}
          className="flex flex-col items-center justify-center p-6 transition-transform transform hover:scale-105"
        >
          <div className='w-full h-full text-center'>
            <img src={codeimg} style={{ margin: 'auto' }} className='w-24 h-24' alt="" />
            <h2 className='text-white font-bold mt-2' style={{ margin: '6px 0 0' }}>
              Front-End Development
            </h2>
            <p className='mt-2'>Build modern, responsive, and interactive websites using HTML, CSS, JavaScript, and React. Focus on clean code, smooth UI, and an optimal user experience across all devices.</p>
          </div>
        </ElectricBorder>

        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 16, height: '300px' }}
          className="flex flex-col items-center justify-center p-6 transition-transform transform hover:scale-105"
        >
          <div className='w-full h-full text-center'>
            <img src={uiimg} style={{ margin: 'auto' }} className='w-24 h-24' alt="" />
            <h2 className='text-white font-bold mt-2' style={{ margin: '6px 0 0' }}>
              Creative UI/UX Designer
            </h2>
            <p className='mt-2'>Design modern, user-friendly interfaces with smooth interactions and animations. Focus on usability, accessibility, and engaging user experiences.</p>
          </div>
        </ElectricBorder>

        <ElectricBorder
          color="#7df9ff"
          speed={1}
          chaos={0.12}
          thickness={2}
          style={{ borderRadius: 16, height: '300px' }}
          className="flex flex-col items-center justify-center p-6 transition-transform transform hover:scale-105"
        >
          <div className='w-full h-full text-center'>
            <img src={bold} style={{ margin: 'auto' }} className='w-24 h-24' alt="" />
            <h2 className='text-white font-bold mt-2' style={{ margin: '6px 0 0' }}>
              Performance & Optimization
            </h2>
            <p className='mt-2'>Ensure fast load times, smooth animations, and maintainable code, delivering high-quality web applications for all devices.</p>
          </div>
        </ElectricBorder>
      </div>
    </div>
  )
}
