import Head from "next/head"
import { NextPage } from "next";
import Navbar from "./Navbar"
import Image from "next/image";

type Props = {
    children?: React.ReactNode;
    title?: string;
}

const MainLayout = ({ children, title }: Props) => {
    return (
        <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
            <Head>
                <title>{title}</title>
                <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
            </Head>
            <header className="fs-wfull">
            </header>
            <main className="main">
                {children}
            </main>
            <footer className="fs-grid fs-wfull fs-mcenter">
                <div className="fs-outer jc-center">
                    <div className="fs-inner fs-talgin-c ">
                        <a
                        className="flex items-center"
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        Powered by{' '}
                        <span className="h-4 ml-2">
                            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                        </span>
                        </a>
                    </div>
                </div>
                
            </footer>
        </div>
    );
}

export default MainLayout;