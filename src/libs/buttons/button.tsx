import Link from "next/link";
type LinkType = {
    btnLink: string,
    btnText: string,
    className?: string
}

export const Button = ({btnLink,btnText,className}:LinkType) => {
    return (
    <Link href={btnLink} className={`${className} w-[210px] flex items-center justify-center rounded-[32px] py-[8px] px-[16px] transition-all ease-in-out duration-300`}>
        <span className="text-[18px] font-semibold">
            {btnText}
        </span>
    </Link>
    )
}

export const ButtonSecondary = ({btnLink,btnText,className}:LinkType) => {
    return (
        <Link href={btnLink} className={`${className?className: ""} inline-flex items-center justify-center rounded-[32px] py-[9px] px-[19px] bg-primaryColor hover:bg-hover-primary-color transition-all ease-in-out duration-300`}>
            <span className="text-[18px] font-normal text-whiteColor">
                {btnText}
            </span>
        </Link>
    )
}