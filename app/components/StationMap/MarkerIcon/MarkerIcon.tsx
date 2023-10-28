type Props = {
    children: string | JSX.Element | JSX.Element[] | undefined;
};

const MarkerIcon = ({ children }: Props) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="-m-4 w-8 h-8 rounded-full bg-emerald-400 flex justify-center items-center">
                {children}
            </div>
            <div className="border-x-[11px] border-x-transparent border-t-[10px] border-t-emerald-400 mt-3"></div>
        </div>
    );
};

export default MarkerIcon;
