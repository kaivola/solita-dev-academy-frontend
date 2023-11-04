import { MutableRefObject, useEffect } from "react";

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
