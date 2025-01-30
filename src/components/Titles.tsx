function CreateTitle({
  className
}: {
  className: React.ComponentProps<"h1">["className"]
}) {
  return({
    classes,
    children
  }: {
    classes?: React.ComponentProps<"h1">["className"],
    children: React.ReactNode
  }) => {
    return (
      <h1 className={`font-semibold text-slate-950 ${className} ${classes}`}>{children}</h1>
    )
  }
}

export const H1 = CreateTitle({ className: 'text-4xl' })
export const H2 = CreateTitle({ className: 'text-3xl' })
export const H3 = CreateTitle({ className: 'text-2xl' })
export const H4 = CreateTitle({ className: 'text-xl' })
export const H5 = CreateTitle({ className: 'text-lg' })
export const H6 = CreateTitle({ className: 'text-base' })