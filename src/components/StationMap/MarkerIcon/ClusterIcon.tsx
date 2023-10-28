import MarkerIcon from "./MarkerIcon";

type Props = {
    count: number;
};

const ClusterIcon = ({ count }: Props) => {
    return (
        <MarkerIcon>
            <div className="font-light text-sm">{count.toString()}</div>
        </MarkerIcon>
    );
};

export default ClusterIcon;
