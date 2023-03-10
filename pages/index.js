import Head from 'next/head';
import { CameraIcon, MicrophoneIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import Image from 'next/image';


import Avatar from '../components/Avatar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
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
                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
                    {/* Avatar */}
                    <Avatar url="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4"/>
                </div>
            </header>            
            {/* Body */}
            <form className='flex flex-col items-center mt-44 flex-grow w-4/5'>
                <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    alt = "Google Logo"
                    height={100}
                    width={300}
                />
                <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg 
                                max-w-md rounded-full border border-gray-200 px-5 py-3 items-center 
                                sm:max-w-xl lg:max-w-2xl'>
                    <SearchIcon className='h-5 mr-3 text-gray-500'/> 
                    <input type="text" placeholder="Search Google or type a URL" className="flex-grow focus:outline-none"/>
                    <div className='flex space-x-2 items-center'>
                        <MicrophoneIcon className='h-5' />
                        <CameraIcon className='h-5' />
                    </div>
                    
                </div>

                <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
                                sm:flex-row sm:space-x-4'>
                    <button className='btn'>Google Search</button>
                    <button className='btn'>I'm Feeling Lucky</button>
                </div>
                
            </form>
            
            {/* Footer */}
            <Footer />
        
        </div>
    )
}
