

type InputProps={
    type:string,
    name?:string,
    placeholder?:string,
    value?:string,
    onChange?:(e:any)=>void
    className?:string
}

export const Input = ({type,placeholder,value,onChange,className, name}:InputProps) => {
    return (
        <input 
        name={name}
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={onChange} 
        className={className}/>
    )
}