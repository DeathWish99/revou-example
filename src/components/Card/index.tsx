import { ReactNode } from "react"

interface Props{
    children : ReactNode;
}

const Card = ({children} : Props) => {
    return (
        <div className="max-w-sm mx-auto">
            {children}
        </div>
    )
}

export default Card;