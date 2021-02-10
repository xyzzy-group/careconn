import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Transition } from "@headlessui/react";

const NavBar = () => {
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  React.useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!container.current.contains(event.target)) {
        if (!show) return;
        setShow(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [show, container]);

  return (
    <>
      <header className="relative bg-white z-50" ref={container}>
        <div className="max-w-full mx-auto">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-4 px-4 sm:px-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span className="sr-only">Care Connection</span>
                <StaticImage
                  placeholder="none"
                  className="mr-5"
                  imgClassName="h-8 w-auto sm:h-10"
                  src="../images/titlelogo.png"
                  alt="Care Connection"
                  height={40}
                />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                onClick={() => setShow(true)}
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <Link
                to="/"
                activeClassName="text-secondary font-bold"
                className="ml-6 whitespace-nowrap text-base font-medium text-gray-500 hover:text-secondary">
                Home
              </Link>
              <Link
                to="/services"
                activeClassName="text-secondary font-bold"
                className="ml-6 whitespace-nowrap text-base font-medium text-gray-500 hover:text-secondary">
                Services
              </Link>
              <Link
                to="/schedule"
                activeClassName="text-secondary font-bold"
                className="ml-6 whitespace-nowrap text-base font-medium text-gray-500 hover:text-secondary">
                Schedule
              </Link>
              <Link
                to="/locations"
                activeClassName="text-secondary font-bold"
                className="ml-6 whitespace-nowrap text-base font-medium text-gray-500 hover:text-secondary">
                Locations
              </Link>
              <Link
                to="/faq"
                activeClassName="text-secondary font-bold"
                className="ml-6 whitespace-nowrap text-base font-medium text-gray-500 hover:text-secondary">
                FAQ
              </Link>
            </nav>
          </div>
        </div>

        <Transition
          show={show}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95">
          <div className="z-50 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div className="z-50 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="z-50  py-4 px-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <StaticImage
                      placeholder="none"
                      imgClassName="h-8 w-auto sm:h-10"
                      src="../images/titlelogo.png"
                      alt="Care Connection"
                      height={35}
                    />
                  </div>
                  <div className="-mr-2">
                    <button
                      onClick={() => setShow(false)}
                      type="button"
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <nav className="grid gap-y-3">
                    <Link
                      onClick={() => setShow(false)}
                      to="/"
                      activeClassName="text-secondary font-bold"
                      className="text-base font-medium text-gray-900 p-3 flex items-center rounded-md hover:bg-gray-50">
                      Home
                    </Link>

                    <Link
                      onClick={() => setShow(false)}
                      to="/services"
                      activeClassName="text-secondary font-bold"
                      className="text-base font-medium text-gray-900 p-3 flex items-center rounded-md hover:bg-gray-50">
                      Services
                    </Link>

                    <Link
                      onClick={() => setShow(false)}
                      to="/schedule"
                      activeClassName="text-secondary font-bold"
                      className="text-base font-medium text-gray-900 p-3 flex items-center rounded-md hover:bg-gray-50">
                      Schedule
                    </Link>

                    <Link
                      onClick={() => setShow(false)}
                      to="/locations"
                      activeClassName="text-secondary font-bold"
                      className="text-base font-medium text-gray-900 p-3 flex items-center rounded-md hover:bg-gray-50">
                      Locations
                    </Link>

                    <Link
                      onClick={() => setShow(false)}
                      to="/faq"
                      activeClassName="text-secondary font-bold"
                      className="text-base font-medium text-gray-900 p-3 flex items-center rounded-md hover:bg-gray-50">
                      FAQ
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </header>
    </>
  );
};

export default NavBar;
