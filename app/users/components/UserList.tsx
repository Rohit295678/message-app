'use client';

import { User } from "@prisma/client";
import UserBox from "./UserBox";
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { useState } from "react";
import SettingsModal from "@/app/components/sidebar/SettingsModal";

interface UserListProps {
    items: User[],
    currentUser: User
};

const UsersList: React.FC<UserListProps> = ({
    items,currentUser
})=>{
    const [isOpen,setIsOpen] = useState(false);
    return(
        <>
        <SettingsModal currentUser={currentUser} isOpen={isOpen} onClose={() => setIsOpen(false)} />
     <aside className="fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200 block w-full left-0">
        <div className="px-5">
           <div className="flex-col">
            <div className="flex">
            <div className="text-2xl font-bold text-neutral-800 py-4" >People</div>
            <div className="mt-4 left-0 ml-auto">
            <HiEllipsisHorizontal
        size={32}
        className="
        lg:hidden
          text-sky-500
          cursor-pointer
          hover:text-sky-600
          transition
        "
        onClick={()=> setIsOpen(true)}
      /></div>
            </div>
            
            </div> 
            {items.map((item)=>(
                <UserBox key={item.id} data={item} />
            ))}
        </div>
     </aside>
     </>
    )
};
export default UsersList;