

type InputProps={
    type:string,
    name?:string,
    placeholder?:string,
    value?:string,
    onChange?:(e:any)=>void
    className?:string
    id?:string
}

export const Input = ({type,placeholder,value,onChange,className, name, id}:InputProps) => {
    return (
        <input 
        name={name}
        type={type} 
        placeholder={placeholder}
        value={value}
        id={id}
        onChange={onChange} 
        className={className}/>
    )
}