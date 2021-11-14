import type { NextPage } from 'next';
import Link  from 'next/link';
import { useRouter } from 'next/router'
const Gallery: NextPage = () => {
    const router = useRouter();
    console.dir(router);
    return (
        <h1><Link href="/"> hello </Link></h1>
    );
}
export default Gallery