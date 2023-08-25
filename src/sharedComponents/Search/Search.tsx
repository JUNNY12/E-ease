import { Input } from "../Input/Input";


type Props = {
    className?: string
}

export default function Search({ className }: Props) {
    return (
        <Input type="search"
            placeholder="search books"
            className={className}
        />
    )
}