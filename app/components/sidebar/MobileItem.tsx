'use client';
import Link from "next/link";
import clsx from "clsx";

interface MobileItemProps{
    href: string;
    icon: any;
    active?: boolean;
    onClick?: ()=>void;
}
const MobileItem: React.FC<MobileItemProps> = ({
    href,
    icon: Icon,
    active,
    onClick
})=>{
    const handleClick = ()=>{
        if(onClick){
            return onClick();
        }
    }
    return (
        <Link href={href} 
        onClick={onClick} className={clsx(`group flex gap-x-3 text-sm landing-6 font-semibold w-full p-4 justify-center text-gray-500 hover:text-black hover:bg-gray-100`, active && `bg-gray-100 text-black`)}>
            <Icon className="h-6 w-6"/>
        </Link>
    )
}
export default MobileItem;