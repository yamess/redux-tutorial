"use client";

const Tutorial = ({title} : {title: string}) => {
    return (
        <div className={"flex flex-col justify-between items-center gap-5"}>
            <h1>{title}</h1>
            <div className={"mb-5"}>0</div>
            <div className={"flex justify-between items-center gap-5"}>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md active:bg-blue-950 active:animate-pulse" onClick={() => {}}>Increment</button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md active:bg-blue-950 active:animate-pulse" onClick={() => {}}>Decrement</button>
                <button className="px-4 py-2 text-white bg-blue-500 rounded-md active:bg-blue-950 active:animate-pulse" onClick={() => {}}>Reset</button>
            </div>
        </div>
    )
}

export default Tutorial