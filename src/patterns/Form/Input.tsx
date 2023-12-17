import { InputHTMLAttributes } from "react"
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string
}

export const Input: React.FC<InputProps> = ({name, ...props}) => {
  const {register} = useFormContext()
  
  return (
    <input className="w-full bg-inherit" {...register(name)} {...props} />
  )
}