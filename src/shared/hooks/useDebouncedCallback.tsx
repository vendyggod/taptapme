import {useRef, useEffect} from "react";
import debounce from "lodash/debounce";
import {DebouncedFunc} from "lodash";

export const useDebouncedCallback = <T extends (...args: never[]) => void>(
    callback: T,
    delay: number
): DebouncedFunc<T> => {
    const debouncedCallback = useRef<DebouncedFunc<T>>(debounce(callback, delay));

    useEffect(() => {
        const currentDebouncedCallback = debouncedCallback.current;
        return () => {
            currentDebouncedCallback.cancel();
        };
    }, []);

    return debouncedCallback.current;
};