'use client';
import { Provider } from 'react-redux';
import { store } from '@/app/store';

import Tutorial from "@/app/tutorial/page";

export default function Home() {
    return (
        <Provider store={store}>
            <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
                <Tutorial title={"Increment Tutorial"} />
                <Tutorial title={"IncrementBy Tutorial"} />
            </div>
        </Provider>
    );
}
