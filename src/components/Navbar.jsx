const Navbar = () => {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 mt-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block text-teal-600" href="/">
                <span className="sr-only">Home</span>
                <svg width="143" height="23" viewBox="0 0 143 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.05 11.5C0.05 9.44 0.51 7.6 1.43 5.98C2.37 4.34 3.64 3.07 5.24 2.17C6.86 1.25 8.67 0.789999 10.67 0.789999C13.01 0.789999 15.06 1.39 16.82 2.59C18.58 3.79 19.81 5.45 20.51 7.57H15.68C15.2 6.57 14.52 5.82 13.64 5.32C12.78 4.82 11.78 4.57 10.64 4.57C9.42 4.57 8.33 4.86 7.37 5.44C6.43 6 5.69 6.8 5.15 7.84C4.63 8.88 4.37 10.1 4.37 11.5C4.37 12.88 4.63 14.1 5.15 15.16C5.69 16.2 6.43 17.01 7.37 17.59C8.33 18.15 9.42 18.43 10.64 18.43C11.78 18.43 12.78 18.18 13.64 17.68C14.52 17.16 15.2 16.4 15.68 15.4H20.51C19.81 17.54 18.58 19.21 16.82 20.41C15.08 21.59 13.03 22.18 10.67 22.18C8.67 22.18 6.86 21.73 5.24 20.83C3.64 19.91 2.37 18.64 1.43 17.02C0.51 15.4 0.05 13.56 0.05 11.5ZM31.0273 18.13L35.2273 5.38H39.6973L33.5473 22H28.4473L22.3273 5.38H26.8273L31.0273 18.13Z" fill="#116A7B" />
                  <path d="M64.8863 1.06V22H60.6863V8.38L55.0763 22H51.8963L46.2563 8.38V22H42.0563V1.06H46.8263L53.4863 16.63L60.1463 1.06H64.8863ZM81.8788 18.01H73.5388L72.1588 22H67.7488L75.2788 1.03H80.1688L87.6988 22H83.2588L81.8788 18.01ZM80.7388 14.65L77.7088 5.89L74.6787 14.65H80.7388ZM102.333 22L94.7134 12.67V22H90.5134V1.06H94.7134V10.45L102.333 1.06H107.403L98.7634 11.44L107.643 22H102.333ZM114.606 4.45V9.7H121.656V13.03H114.606V18.58H122.556V22H110.406V1.03H122.556V4.45H114.606ZM137.173 22L132.553 13.84H130.573V22H126.373V1.06H134.233C135.853 1.06 137.233 1.35 138.373 1.93C139.513 2.49 140.363 3.26 140.923 4.24C141.503 5.2 141.793 6.28 141.793 7.48C141.793 8.86 141.393 10.11 140.593 11.23C139.793 12.33 138.603 13.09 137.023 13.51L142.033 22H137.173ZM130.573 10.69H134.083C135.223 10.69 136.073 10.42 136.633 9.88C137.193 9.32 137.473 8.55 137.473 7.57C137.473 6.61 137.193 5.87 136.633 5.35C136.073 4.81 135.223 4.54 134.083 4.54H130.573V10.69Z" fill="black" />
                </svg>
              </a>
            </div>
            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <a className="text-black transition hover:text-[#116A7B]" href="/">
                    Resume
                    </a>
                  </li>
                  <li>
                    <a className="text-black transition hover:text-[#116A7B]" href="/">
                    Templates
                    </a>
                  </li>
                  <li>
                    <a className="text-black transition hover:text-[#116A7B]" href="/">
                    Premium Services
                    </a>
                  </li>
                  <li>
                    <a className="text-black transition hover:text-[#116A7B]" href="/">
                    FAQ
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button className="bg-[#116A7B] text-white px-8 py-2 rounded-full">
                  Login
                </button>
                <div className="hidden sm:flex">
                <button className="border-2 text-[#116A7B] border-[#116A7B] px-8  py-2 rounded-full">
                  Register
                </button>
                </div>
              </div>
              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Navbar
