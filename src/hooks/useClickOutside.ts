import { MutableRefObject, useEffect } from "react";

/**
 * Executes the function given as the second parameter when user
 * clicks outside of the element given as the first parameter
 * @param ref - ref to a html element
 * @param fn - function to execute
 */
export const useClickOutside = (ref: MutableRefObject<any> | null, fn: () => any) => {
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref) {
                if (ref.current && !ref.current.contains(event.target)) {
                    fn();
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, fn]);
};
