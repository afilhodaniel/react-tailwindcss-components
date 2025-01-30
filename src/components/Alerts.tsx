function CreateAlert({
  className
}: {
  className: React.ComponentProps<"div">["className"],
}) {
  return ({
    classes,
    children
  }: {
    classes?: React.ComponentProps<"div">["className"],
    children: React.ReactNode
  }) => {
    return (  
      <div className={`border rounded shadow-md brightness-120 p-3 ${className} ${classes}`}>
        {children}
      </div>
    )
  }
}

export const RedAlert = CreateAlert({ className: 'border-red-600 bg-red-400 text-red-900' })
export const OrangeAlert = CreateAlert({ className: 'border-orange-600 bg-orange-400 text-orange-900' })
export const AmberAlert = CreateAlert({ className: 'border-amber-600 bg-amber-400 text-amber-900' })
export const YellowAlert = CreateAlert({ className: 'border-yellow-600 bg-yellow-400 text-yellow-900' })
export const LimeAlert = CreateAlert({ className: 'border-lime-600 bg-lime-400 text-lime-900' })
export const GreenAlert = CreateAlert({ className: 'border-green-600 bg-green-400 text-green-900' })
export const EmeraldAlert = CreateAlert({ className: 'border-emerald-600 bg-emerald-400 text-emerald-900' })
export const TealAlert = CreateAlert({ className: 'border-teal-600 bg-teal-400 text-teal-900' })
export const CyanAlert = CreateAlert({ className: 'border-cyan-600 bg-cyan-400 text-cyan-900' })
export const SkyAlert = CreateAlert({ className: 'border-sky-600 bg-sky-400 text-sky-900' })
export const BlueAlert = CreateAlert({ className: 'border-blue-600 bg-blue-400 text-blue-900' })
export const IndigoAlert = CreateAlert({ className: 'border-indigo-600 bg-indigo-400 text-indigo-900' })
export const VioletAlert = CreateAlert({ className: 'border-violet-600 bg-violet-400 text-violet-900' })
export const PurpleAlert = CreateAlert({ className: 'border-purple-600 bg-purple-400 text-purple-900' })
export const FuchsiaAlert = CreateAlert({ className: 'border-fuchsia-600 bg-fuchsia-400 text-fuchsia-900' })
export const PinkAlert = CreateAlert({ className: 'border-pink-600 bg-pink-400 text-pink-900' })
export const RoseAlert = CreateAlert({ className: 'border-rose-600 bg-rose-400 text-rose-900' })
export const SlateAlert = CreateAlert({ className: 'border-slate-600 bg-slate-400 text-slate-900' })
export const GrayAlert = CreateAlert({ className: 'border-gray-600 bg-gray-400 text-gray-900' })
export const ZincAlert = CreateAlert({ className: 'border-zinc-600 bg-zinc-400 text-zinc-900' })
export const NeutralAlert = CreateAlert({ className: 'border-neutral-600 bg-neutral-400 text-neutral-900' })
export const StoneAlert = CreateAlert({ className: 'border-stone-600 bg-stone-400 text-stone-900' })