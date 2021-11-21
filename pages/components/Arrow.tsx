import Link from "next/link";
import Image from "next/image";
type Props = {
    children?: React.ReactNode;
    home?: boolean;
}
const Arrow = ({ children }: Props) => {
    return (
        <>
            <div className="mainArrow">
                <div className="arrowArea">
                    scroll
                </div>
            </div>
        </>
    );
}

export default Arrow;