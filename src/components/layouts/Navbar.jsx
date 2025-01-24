import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Navbar = async () => {
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
    </>
  );
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // console.log(user);
  return (
    <div className="dark:bg-slate-800 bg-gray-100 sticky top-0 z-50 shadow-md">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link href="/" className="text-xl font-bold">
            <span className="text-red-700">Next</span> Blog
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end space-x-4">
          <DarkModeToggle />
          {user?.email ? (
            <LogoutLink className="btn btn-warning">Log out</LogoutLink>
          ) : (
            <LoginLink className="btn">Login</LoginLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
