type Props = {
    children: string | JSX.Element | JSX.Element[] | undefined;
};

export const Modal = ({ children }: Props) => {
    return (
        <div className="fixed z-[9999] left-0 right-0 top-0 bottom-0 mx-auto bg-white/30 ">
            <div className="flex flex-col justify-center items-center h-full w-full">{children}</div>
        </div>
    );
};
