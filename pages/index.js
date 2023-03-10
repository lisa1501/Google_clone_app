import Head from 'next/head';
import { ViewGridIcon } from '@heroicons/react/solid';

import Avatar from '../components/Avatar';

export default function Home() {
    return (
        <div>
        <Head>
            <title>Google</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
            {/* Header */}
            <header className='flex w-full p-5 justify-between text-sm text-gray-700'>
                {/* left */}
                <div className='flex space-x-4 items-center'>
                    <p className="link">About</p>
                    <p className="link">Store</p>
                </div>
                {/* right */}
                <div className='flex space-x-4 items-center'>
                    <p className="link">Gmail</p>
                    <p className="link">Images</p>

                    {/* Icon */}
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>
                    {/* Avatar */}
                    <Avatar url="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"/>
                </div>
            </header>            
            {/* Body */}

            {/* Footer */}
        
        </div>
    )
}
