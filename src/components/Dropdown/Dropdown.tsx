import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
    onSelect: (option: any) => void;
    options: DropdownOptions[];
    title: string;
};

export const Dropdown = ({ onSelect, options, title }: Props) => {
    const [selected, setSelected] = useState<string | undefined>();
    const [open, setOpen] = useState<boolean>(false);

    const handleSelect = (option?: DropdownOptions) => {
        onSelect(option);
        setSelected(option?.title);
        setOpen(false);
    };

    return (
        <div
            className="flex justify-between items-center hover:cursor-pointer"
            onClick={() => setOpen(!open)}
        >
            <div className="w-full">{selected ?? title}</div>
            <div className="relative flex">
                <button className="z-10 block p-2">
                    <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: 16 }} />
                </button>

                {open && (
                    <div className="absolute top-4 right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                        {options.map((option) => {
                            return (
                                <div
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-slate-100"
                                >
                                    {option.title}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};
