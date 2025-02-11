import Link from "next/link";

export default function Navbar() {
  return (

    <nav className="bg-white ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between ">
          <div className="flex items-center">
            <Link href="">
              <img
                src="/logos.png"
                height="80"
                width="80"
                className="flex items-center object-cover   mb-2 mt-2 "
                alt="Logo"
              />
            </Link>
            <div className="ml-10 flex items-baseline space-x-4">

              <ul className="flex items-center gap-12">
                <li>
                  <Link href="/Home"
                    className="hover:bg-gray-200 px-5 py-3 text-gray-800  rounded-md hover:no-underline"
                  >
                    Home
                  </Link>
                </li>
                <li >
                  <Link href="/Products" className="hover:bg-gray-200 px-5 py-3 text-gray-800   rounded-md hover:no-underline">Products
                  </Link>
                </li>
                <li>
                  <Link href="/About"
                    className="hover:bg-gray-200 px-5 py-3  text-gray-800  rounded-md hover:no-underline"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link href='/Contact'
                    className="hover:bg-gray-200  px-5 py-3 text-gray-800   rounded-md hover:no-underline">
                    Contact
                  </Link>
                </li>
              </ul>

            </div>

          </div>
          <div className="flex items-center ">
            <Link href="/login"
              className="bg-gray-300 px-7 py-3 text-black hover:text-gray-600 rounded-lg  transition-all duration-300"
            >
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>

  );
}