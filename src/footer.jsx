import codeimg from './assets/_.svg';
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src={codeimg}
                className="h-7 me-3"
                alt="FlowBite Logo"
              />
              <span className="text-white self-center text-2xl font-semibold whitespace-nowrap">
                Abdelrhman
              </span>
            </a>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline text-gray-300">React Bits</a>
                </li>
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline text-gray-300">Flowbite</a>
                </li>
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:underline text-gray-300">Tailwind CSS</a>
                </li>
                <li className="mb-4">
                  <a href="https://tailwindcss.com/" className="hover:underline text-gray-300">React</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline text-gray-300">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline text-gray-300">Linked in</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline text-gray-300">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline text-gray-300">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-400 sm:text-center">
            © 2026 <a href="https://flowbite.com/" className="hover:underline text-white">Abdelrhman</a>. All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clipRule="evenodd" />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>

            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.942 5.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.586 11.586 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3 17.392 17.392 0 0 0-2.868 11.662 15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.638 10.638 0 0 1-1.706-.83c.143-.106.283-.217.418-.331a11.664 11.664 0 0 0 10.118 0c.137.114.277.225.418.331-.544.328-1.116.606-1.71.832a12.58 12.58 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM8.678 14.813a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.929 1.929 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
              </svg>
              <span className="sr-only">Discord community</span>
            </a>

            {/* أضف بقية أيقونات السوشيال هنا بنفس الأسلوب */}
          </div>
        </div>
      </div>
    </footer>
  );
}
