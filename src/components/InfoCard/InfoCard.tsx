type Props = {
    value: number | String;
    title: string;
};

export const InfoCard = ({ value, title }: Props) => {
    return (
        <div className="bg-white border-2 border-gray-300 shadow-md rounded-lg p-4 sm:p-6 xl:p-8 ">
            <div className="flex items-center">
                <div>
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{value}</span>
                    <h3 className="text-base font-normal text-gray-500">{title}</h3>
                </div>
            </div>
        </div>
    );
};
