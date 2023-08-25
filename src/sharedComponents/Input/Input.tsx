

type InputProps={
    type:string,
    placeholder?:string,
    value?:string,
    onChange?:(e:any)=>void
    className?:string
}

export const Input = ({type,placeholder,value,onChange,className}:InputProps) => {
    return (
        <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        className={className}/>
    )
}