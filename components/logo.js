import Image from 'next/image'


export const Logo = (props) => {
    return (
        <Image
            src={'/logo.svg'}
            alt={'Uptheshelf logo'}
            width={300}
            height={100}
        />
    )
}

export const LogoWhite = (props) => {
    return (
        <Image
            src={'/logo_white.svg'}
            alt={'Uptheshelf logo'}
            width={300}
            height={100}

        />
    )
}