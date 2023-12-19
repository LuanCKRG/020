import { InputHTMLAttributes, RefObject, useRef } from "react"
import { useFormContext } from 'react-hook-form'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  name: string
}

export const Input: React.FC<InputProps> = ({name, ...props}) => {
  const {register} = useFormContext()
  
  return (
    <input className="w-full bg-transparent"
      {...register(name)}
      {...props}
    />
  )
}


// import { InputHTMLAttributes, forwardRef } from "react"
// import { useFormContext } from 'react-hook-form'

// interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
//   name: string
// }

// export const Input = forwardRef<HTMLInputElement, InputProps>(({name, ...props}, inputRef) => {
//   const {register} = useFormContext()
//   const {ref, ...rest} = register(name)

//   return (
//     <input className="w-full bg-transparent" {...props} {...rest} ref={
//       (e) => {
//         ref(e)
//       }
//     } />
//   )
// })