import {increment, decrement, reset, incrementBy, decrementBy, resetBy} from "@/app/features/ui/incSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";

export const useIncrement = () => {
    const incCount = useAppSelector((state) => state.countReducer.incValue);
    const dispatch = useAppDispatch();
    const inc = () => dispatch(increment());
    const dec = () => dispatch(decrement());
    const rst = () => dispatch(reset());
    return { incCount, inc, dec, rst };
}

export const useIncrementBy = () => {
    const incByCount = useAppSelector((state) => state.countReducer.incByValue);
    const dispatch = useAppDispatch();
    const incBy = (value: number) => dispatch(incrementBy(value));
    const decBy = (value: number) => dispatch(decrementBy(value));
    const rstBy = () => dispatch(resetBy());
    return { incByCount, incBy, decBy, rstBy };
}