import React, { useState } from "react";
import '../App.css';
import {AiOutlineCaretUp, AiOutlineCaretDown} from "react-icons/ai";
import { LineList } from "./LineList";

function DropdownLine (){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-md">
            <button onClick={() => setIsOpen((prev) => !prev)} className="bg-blue-400 p-4 w-full flex items-center justify-between font-bold text-lg rounded-md tracking-wider">
                เลือกสาย
            {!isOpen ? (
                <AiOutlineCaretDown className="h-8" />
            ):
                (<AiOutlineCaretUp className="h-8" />
            )}
            </button>
            {isOpen && (
                <div className="bg-blue-400 flex flex-col items-start rounded-md p-2 w-full">
                    {LineList.map((item,i) => (
                        <div className="flex w-full justify-between" key={i}>
                            <li className="list-none" onClick={() => setIsOpen(false)}>{item.title}</li>
                        </div>
                    ))}
                </div>
            )
            }
        </div>
    )
}

export default DropdownLine