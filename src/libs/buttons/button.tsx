import Link from "next/link";
type LinkType = {
    btnLink: string,
    btnText: string,
    className: string
}

export const Button = ({btnLink,btnText,className}:LinkType) => {
    return (
    <Link href={btnLink} className={`${className} w-[200px] flex items-center justify-center rounded-[32px] py-[8px] px-[16px] transition-all ease-in-out duration-300`}>
        <span className="text-[18px] font-semibold">
            {btnText}
        </span>
    </Link>
    )
}