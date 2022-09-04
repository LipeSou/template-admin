interface ContentProps {
    children?: any;
}

export default function Content({children}: ContentProps) {
    return (
        <div className={`
            flex fle-col mt-7
        `}>
            {children}
        </div>
    )
}