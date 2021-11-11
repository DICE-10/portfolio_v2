import Link from "next/link";
import Image from "next/image";
type Props = {
    children?: React.ReactNode;
    home?: boolean;
}
const Navbar = ({ children }: Props) => {
    return (
        <div className="fs-header">
            <div className="fs-hamburger">
                <input type="checkbox" name="navToggle" id="navToggle" className="fs-nav-toggle fs-nav-leftin white90" />
                <label htmlFor="navToggle" className="fs-btn-burger">
                    <span className="fs-hamburger-icon-b"></span>
                </label>
            
                <div className="fs-navi fs-grid bg-ghostwhite">
                    
                    <div className="fs-grid m-grid-col-5 fs-nav-menu r-gap ac-center jc-end">
                        <div className="zindex-top ">
                            <img className="fs-px10 fs-py10 fs-w4_5" src="/images/light-long.svg" alt="My avatar" />
                        </div>
                        <div className="fs-center font-w-bold">
                            <Link href="/">
                                    <a  className="fs-d-block text-black  ts-nodeco fs-py29 fs-tlink-center bg-tran03 txt-tran03 libg-black litxt-whitesmoke ts-2xl font-wbold">Home</a>
                            </Link>
                        </div>
                        <div className="fs-center font-w-bold">
                            <Link href="/blog-page">
                                <a  className="fs-d-block text-black  ts-nodeco fs-py29 fs-tlink-center bg-tran03 txt-tran03 libg-black litxt-whitesmoke ts-2xl font-wbold">Blog</a>
                            </Link>
                        </div>
                        <div className="fs-center font-w-bold">
                            <Link href="/contact-page">
                                    <a  className="fs-d-block text-black  ts-nodeco fs-py29 fs-tlink-center bg-tran03 txt-tran03 libg-black litxt-whitesmoke ts-2xl font-wbold">Contact</a>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        );
}

export default Navbar;