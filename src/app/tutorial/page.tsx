"use client";

import {useIncrement} from "@/app/features/ui/hook";

const Tutorial = ({title} : {title: string}) => {

    const {incCount, inc, dec, rst} = useIncrement();

    return (
        <div className={"flex flex-col justify-between items-center gap-5"}>
            <h1>{title}</h1>
            <div className={"mb-5"}>{incCount}</div>
            <div className={"flex justify-between items-center gap-5"}>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md active:bg-blue-950 active:animate-pulse" onClick={inc}>Increment</button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md active:bg-blue-950 active:animate-pulse" onClick={dec}>Decrement</button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md active:bg-blue-950 active:animate-pulse" onClick={rst}>Reset</button>
            </div>
        </div>
    )
}

export default Tutorial