
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa'

export const NextArrow = (props: any) => {
    const { className, style, onClick } = props
    return (
        <div>
            <FaArrowCircleRight className={className}
                onClick={onClick}
                style={{ ...style, color: '#d915e4', fontSize:'32px' , position:'absolute', top:'50%', right:'5px'}}
            />
        </div>
    )
}

export const PrevArrow = (props: any) => {
    const { className, style, onClick } = props
    return (
        <div>
            <FaArrowCircleLeft className={className}
                onClick={onClick}
                style={{ ...style, color: '#d915e4', fontSize:'32px'}}
            />
        </div>
    )
}
