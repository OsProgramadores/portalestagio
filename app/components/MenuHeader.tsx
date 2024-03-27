interface Props {
    headerTitle: string | undefined,
    headerSub: string | undefined
}

export default function MenuHeader(props : Props) {
    return (
        <div className="flex-none w-15 h-15 mb-5">
            <h2 className="font-bold">{props.headerTitle}</h2>
            <span>{props.headerSub}</span>
        </div>
    )
}