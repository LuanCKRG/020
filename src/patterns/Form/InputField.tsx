import { HTMLAttributes } from "react"

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export const InputField: React.FC<FieldProps> = ({...props}) => {
  return (
    <div className="w-full flex gap-x-3 p-3 text-sm bg-primary dark:bg-white/10 dark:focus-within:bg-white/20 border-2 dark:border-none border-secundary rounded-md font-semibold " {...props} />
  )
}