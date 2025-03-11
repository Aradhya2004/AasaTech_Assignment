import { Button } from "@/components/ui/button";
import img from '../assets/Aasa-Logo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-100 min-h-[80px] sm:min-h-[90px] md:min-h-[100px] flex items-center justify-between px-4 sm:px-6 md:px-10 sticky top-0 w-full shadow-md">
      <div>
        <img className="h-10 sm:h-12" src={img} alt="logo" />
      </div>
      <div className="flex items-center">
        <Button className="rounded-full text-sm sm:text-lg px-8 sm:px-10 py-5 sm:py-6 text-white bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500">
          Get Started
        </Button>
      </div>
    </nav>

  );
};

export default Navbar;