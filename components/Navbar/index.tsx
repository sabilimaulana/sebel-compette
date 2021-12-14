import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import cx from "classnames";

const Navbar = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const menuClass = cx({
    "text-sm": true,
    "mt-8": isShowMenu,
    hidden: !isShowMenu,
    "md:block": true,
    ["absolute"]: true,
    "backdrop-blur-3xl": true,
    "rounded-md": true,
  });

  return (
    <nav className="md:px-24 px-4 py-8 flex justify-between md:items-center">
      <figure className="w-[149px] h-[40px] relative">
        <Image src="/img/logo.png" alt="Compette" layout="fill" />
      </figure>

      <section className="hidden md:flex gap-16 items-center">
        <p className="text-brown-50 pb-1 border-b-2 border-brown-50">Learn</p>
        <p className="text-white cursor-pointer">Categories</p>
        <p className="text-white cursor-pointer">Stories</p>
        <p className="text-white cursor-pointer">Partner</p>
        <Link href="https://github.com/sabilimaulana/sebel-compette" passHref>
          <p className="text-white cursor-pointer">Repository</p>
        </Link>
      </section>

      <section className="flex md:hidden   flex-col items-end relative">
        <div
          className="cursor-pointer md:hidden"
          onClick={() => setIsShowMenu((c) => !c)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>

        <ul className={menuClass}>
          <li className="text-gray-700 font-bold py-1">
            <Link href="/">
              <a className="px-4 text-white flex justify-end gap-2 text-lg items-center border-r-2 border-brown-50">
                <span>Learn</span>
              </a>
            </Link>
          </li>
          <li className="py-1">
            <Link href="/">
              <a className="px-4 text-white flex justify-end gap-2 text-lg items-center">
                <span>Categories</span>
              </a>
            </Link>
          </li>
          <li className="py-1">
            <Link href="/">
              <a className="px-4 text-white flex justify-end gap-2 text-lg items-center">
                <span>Stories</span>
              </a>
            </Link>
          </li>
          <li className="py-1">
            <Link href="/">
              <a className="px-4 text-white flex justify-end gap-2 text-lg items-center">
                <span>Partner</span>
              </a>
            </Link>
          </li>
          <li className="py-1">
            <Link href="https://github.com/sabilimaulana/sebel-compette">
              <a className="px-4 text-white flex justify-end gap-2 text-lg items-center">
                <span>Repository</span>
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
