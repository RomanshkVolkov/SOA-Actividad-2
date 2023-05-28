import Link from 'next/link';

export default function Home() {
   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
   return <div className="mt-5"></div>;
}
