import Image from "next/image";
import Logo from '@/images/logo.svg'


export const LogoIcon = ({ className }: { className?: string; }) => {
    return (
        <Image
            src={Logo}
            alt="Logo"

            className={className}
            priority
        />
    )
}


