export const HighlightText = ({highlightText}: {highlightText:string}) => {
    return (
        <span className={"text-textHighlighter leading-8 font-semibold  p-1 bg-grayColor"}>{highlightText}</span>
    )
}

export const BoldText = ({boldText}: {boldText:string}) => {
    return (
        <span className={"text-[16px] text-blackColor font-jost leading-8 font-semibold"}>{boldText}</span>
    )
}