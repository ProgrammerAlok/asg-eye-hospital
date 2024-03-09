'use client'

import Image from "next/image";
import Text from "./Text/Text";
import Button from "./Button/Button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {

    return (
        <div className="absolute w-full z-50">
            <div className=" main-container mt-4 flex justify-between items-center h-full">
                {/* image */}
                <div className=" w-[266.8px] h-[46px] ">
                    <Image 
                        src={'/images/hospital-logo.png'} 
                        alt="logo" 
                        className=' relative bg-no-repeat'
                        width={600}
                        height={100}                                                
                    />
                </div>

                {/* nav */}
                <div>
                    <NavItems />
                </div>

                {/* book btn */}
                <Button size={'md'}>
                    <Text as="p" className="" >
                        Book an appointment
                    </Text>
                </Button>
            </div>
        </div>
    );
}

function NavItems() {
    const pathname = usePathname();

    const navLinks = [
        `Home`, `About`, `Hospitals`, `Specialities`, `Blog`, `Contact`
    ].map((item, key) => ({
        name: item,
        href: `/${key===0?'':item.toLowerCase()}`
    }));

    return (
        <ul className="flex gap-3">
            {navLinks.map(({ name, href }, key) => (
                <li key={key}>
                    <Text className="" as="p">
                        <Link 
                            href={href}
                            className={`${pathname===href?'active':''}`}
                        >
                            {name}
                        </Link>
                    </Text>
                </li>
            ))}
        </ul>
    );
}