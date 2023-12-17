import { HTMLAttributes } from "react"

interface FieldProps extends HTMLAttributes<HTMLDivElement> {}

export const Field: React.FC<FieldProps> = ({...props}) => {
  return (
    <div className="w-full flex flex-col" {...props} />
  )
}