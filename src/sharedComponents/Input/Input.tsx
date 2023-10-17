

type InputProps={
    type:string,
    name?:string,
    placeholder?:string,
    value?:string | number,
    onChange?:(e:any)=>void
    className?:string
    id?:string;
    multiple?:boolean;
}

export const Input = ({type,placeholder,value,onChange,className, name, id, multiple}:InputProps) => {
    return (
        <input 
        name={name}
        type={type} 
        placeholder={placeholder}
        value={value}
        multiple={multiple}
        id={id}
        onChange={onChange} 
        className={className}/>
    )
}