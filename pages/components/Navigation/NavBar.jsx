import { UserIcon, ShoppingCartIcon, Bars3Icon} from "@heroicons/react/24/outline";
import NavIcon from "./NavIcon";

export default function NavBar() {
  return (
   <> 
    {/* Left sided header name */}
    <div className="flex justify-between items-center space-x-8">
    <div>
      <h1 className="font-semibold text-5xl">
        <span className="text-lg">Welcome to</span>
        <br />
        my dev shop
      </h1>
    </div>

    {/* Right side nav icon menu */}
    <div className="flex justify-end items-center space-x-2 bg-gray-200 p-2 rounded-full ">
      <NavIcon>
        <UserIcon className="w-6 h-6" />
      </NavIcon>
      <NavIcon>
        <ShoppingCartIcon className="w-6 h-6" />
      </NavIcon>
      <NavIcon>
        <Bars3Icon className="w-6 h-6" />
      </NavIcon>
    </div>
    </div>
   </>
  );
}