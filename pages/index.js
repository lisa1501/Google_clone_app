import Head from 'next/head';
import { MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';


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
            <form>
                <Image
                    src="/google.png"
                    
                    height={100}
                    width={300}
                />
                <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg 
                                max-w-md rounded-full border border-gray-200 px-5 py-3 items-center 
                                sm:max-w-xl lg:max-w-2xl'>
                    <SearchIcon className='h-5 mr-3 text-gray-500'/> 
                    <input type="text" placeholder="Search" className="flex-grow focus:outline-none"/>
                    <MicrophoneIcon className='h-5'/>
                </div>
                
            </form>

            {/* Footer */}
        
        </div>
    )
}
