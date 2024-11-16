import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="img bg-background bg-cover relative  h-auto sm:h-12 md:h-16 lg:h-24 ">
        <div className="content bg-black flex flex-row sm:flex-row text-white h-auto justify-between min-w-full  sm:w-32 p-0 sm:p-2">
          <p className="mt-3 ml-4 sm:ml-8 cursor-pointer flex ">
            Download App Via Sms     
          </p>
          <div className="links mt-3 ml-5  h-auto flex md:flex-row lg:flex-row mr-0 sm:mr-2 ">
            <Link href="" className="mr-3 ">
              Sign Up
            </Link>
            
            <Link href="" className="mr-5 ">
              {" "}
              Sign In
            </Link>
            </div>
        </div>
        <div className="logo bg-black  text-white flex flex-col sm:flex-row justify-around p-5 ">
          <div className="img cursor-pointer">
            <Image
              src="https://wsa1.pakwheels.com/assets/new-pw-logo-white-c4cd16ae34613cc1fa16d7840f34a71e.svg"
              className="ml-32 w-52 mb-5 sm:ml-0 sm:mb-0 p-1 "
              alt="logo"
              width={150}
              height={110}
            />
          </div>
          <Link className="p-3 mt-0 sm:mt-3" href="">
            Used Cars
          </Link>
          <Link className="p-3 mt-0 sm:mt-3" href="">
            New Cars
          </Link>
          <Link className="p-3 mt-0 sm:mt-3" href="">
            Bikes
          </Link>
          <Link className="p-3 mt-0 sm:mt-3" href="">
            Auto Store
          </Link>
          <Link className="p-3 mt-0 sm:mt-3" href="">
            Videos
          </Link>
          <Link className="p-3 mt-0 sm:mt-3" href="">
            Forums
          </Link>
          <Link className="p-3 mt-0 sm:mt-3" href="">
            blog
          </Link>
          <Link className="p-3 mt-0 sm:mt-3" href="">
            <span className="mb-7">New</span> More
          </Link>
          <button className="bg-[#b73439] rounded-sm w-32 p-2 font-bold h-10 mt-0 sm:mt-3">
            Post an Ad{" "}
          </button>
        </div>

        <Image src="/8.jpeg" alt=""
              className="w-full h-60 sm:h-auto" 
               width={500}
               height={500}
               quality={100}
            
              />   
    </nav>
  );
};
export default Navbar;

