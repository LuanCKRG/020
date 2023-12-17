import { HTMLAttributes } from "react"

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export const InputField: React.FC<FieldProps> = ({...props}) => {
  return (
    <div className="w-full flex gap-x-3 p-3 text-sm bg-primary border-2 border-[#21262b] rounded-md font-semibold " {...props} />
  )
}