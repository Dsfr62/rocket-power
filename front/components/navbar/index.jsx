import Link from "next/link"
import { useState } from "react";

const Navbar = () => {

    const [nav, setNav] = useState(true);

    function handleNav() {
        setNav(!nav);   
        console.log(nav);
    };

    return (
        <nav className="bg-black flex items-center justify-between h-16 w-[100%]">
            <Link href="/">
                <a className="font-semibold mx-8 text-orange-500">Rocket Power</a>
            </Link>
            {
                !nav ?
                <div className="bg-black flex flex-col mr-2 p-2">
                    <button type="button" className="bg-orange-500 ease-linear md:hover:bg-orange-500 invisible mt-36 mb-2 text-orange-500 transition-all" onClick={handleNav}>Clic</button>
                    <Link href="/">
                        <a className="border-y-2 border-orange-500 ease-in-out mt-2 text-white transition-all">Item 1</a>
                    </Link>
                    <Link href="/">
                        <a className="border-b-2 border-orange-500 ease-in-out mt-2 text-white transition-all">Item 2</a>
                    </Link>
                    <Link href="/">
                        <a className="border-b-2 border-orange-500 ease-in-out mt-2 text-white transition-all">Item 3</a>
                    </Link>
                    <Link href="/">
                        <a className="border-b-2 border-orange-500 ease-in-out mt-2 text-white transition-all">Item 4</a>
                    </Link>
                </div>
                :
                <div>
                    <Link href="/">
                        <a className="ease-linear hover:bg-orange-500 invisible md:mx-8 md:visible text-white transition-all">Item 1</a>
                    </Link>
                    <Link href="/">
                        <a className="ease-linear hover:bg-orange-500 invisible md:mx-8 md:visible text-white transition-all">Item 2</a>
                    </Link>
                    <Link href="/">
                        <a className="ease-linear hover:bg-orange-500 invisible md:mx-8 md:visible text-white transition-all">Item 3</a>
                    </Link>
                    <Link href="/">
                        <a className="ease-linear hover:bg-orange-500 invisible md:mx-4 md:visible text-white transition-all">Item 4</a>
                    </Link>
                    <button type="button" className="bg-white ease-in-out md:hover:bg-orange-500 invisible mr-2 text-white transition-all" onClick={handleNav}>Clic</button>
                </div>
            }
        </nav>
    );
};

export default Navbar;