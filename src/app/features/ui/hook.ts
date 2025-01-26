import {increment, decrement, reset} from "@/app/features/ui/incSlice";
import {useAppDispatch, useAppSelector} from "@/app/hooks";

export const useIncrement = () => {
    const incCount = useAppSelector((state) => state.countReducer.incValue);
    const dispatch = useAppDispatch();
    const inc = () => dispatch(increment());
    const dec = () => dispatch(decrement());
    const rst = () => dispatch(reset());
    return { incCount, inc, dec, rst };
}