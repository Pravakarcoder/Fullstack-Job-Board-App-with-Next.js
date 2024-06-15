import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container items-center flex justify-between mx-auto my-4">
        <Link href={"/"} className="font-bold text-xl">
          Job Center{" "}
        </Link>
        <nav className="flex gap-2 *:py-2 *:px-4 *:rounded-lg">
          <Link href={"/login"} className="bg-gray-200">
            Login
          </Link>
          <Link href={"/new-listing"} className="bg-blue-600 text-white">
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
