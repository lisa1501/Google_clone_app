import Image from 'next/image';
import { useRouter } from 'next/router';

function Header() {
    const router= useRouter();

    return (
        <div>
            <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    className='cursor-pointer'
                    height={40}
                    width={120}
                    onClick={() => router.push('/')}
                />
        
        </div>
    )
}

export default Header
