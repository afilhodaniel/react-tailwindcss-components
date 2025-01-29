function CreateBadge({
  className
}: {
  className: React.ComponentProps<"span">["className"]
}) {
  return ({
    classes,
    children
  }: {
    classes?: React.ComponentProps<"span">["className"],
    children: React.ReactNode
  }) => {
    return (
      <span>
        <span className={`inline-block p-1 px-2 rounded-full text-xs ${className} ${classes}`}>
          {children}
        </span>
      </span>
    )
  }
}

export const RedBadge = CreateBadge({ className: 'bg-red-600 text-slate-50' })
export const OrangeBadge = CreateBadge({ className: 'bg-orange-600 text-slate-50' })
export const AmberBadge = CreateBadge({ className: 'bg-amber-600 text-slate-50' })
export const YellowBadge = CreateBadge({ className: 'bg-yellow-600 text-slate-50' })
export const LimeBadge = CreateBadge({ className: 'bg-lime-600 text-slate-50' })
export const GreenBadge = CreateBadge({ className: 'bg-green-600 text-slate-50' })
export const EmeraldBadge = CreateBadge({ className: 'bg-emerald-600 text-slate-50' })
export const TealBadge = CreateBadge({ className: 'bg-teal-600 text-slate-50' })
export const CyanBadge = CreateBadge({ className: 'bg-cyan-600 text-slate-50' })
export const SkyBadge = CreateBadge({ className: 'bg-sky-600 text-slate-50' })
export const BlueBadge = CreateBadge({ className: 'bg-blue-600 text-slate-50' })
export const IndigoBadge = CreateBadge({ className: 'bg-indigo-600 text-slate-50' })
export const VioletBadge = CreateBadge({ className: 'bg-violet-600 text-slate-50' })
export const PurpleBadge = CreateBadge({ className: 'bg-purple-600 text-slate-50' })
export const FuchsiaBadge = CreateBadge({ className: 'bg-fuchsia-600 text-slate-50' })
export const PinkBadge = CreateBadge({ className: 'bg-pink-600 text-slate-50' })
export const RoseBadge = CreateBadge({ className: 'bg-rose-600 text-slate-50' })
export const SlateBadge = CreateBadge({ className: 'bg-slate-600 text-slate-50' })
export const GrayBadge = CreateBadge({ className: 'bg-gray-600 text-slate-50' })
export const ZincBadge = CreateBadge({ className: 'bg-zinc-600 text-slate-50' })
export const NeutralBadge = CreateBadge({ className: 'bg-neutral-600 text-slate-50' })
export const StoneBadge = CreateBadge({ className: 'bg-stone-600 text-slate-50' })