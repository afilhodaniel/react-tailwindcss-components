function CreateCard({
  className
}: {
  className: React.ComponentProps<"div">["className"]
}) {
  return ({
    classes,
    children
  }: {
    classes?: React.ComponentProps<"div">["className"],
    children: React.ReactNode | React.ReactNode[]
  }) => {
    return (
      <div
        className={`border-1 p-4 rounded shadow-md ${className} ${classes}`}
      >
        {children}
      </div>
    )
  }
}

export const WhiteCard = CreateCard({ className: 'bg-white border-gray-300' })
export const RedCard = CreateCard({ className: 'bg-red-200 border-red-300' })
export const OrangeCard = CreateCard({ className: 'bg-orange-200 border-orange-300' })
export const AmberCard = CreateCard({ className: 'bg-amber-200 border-amber-300' })
export const YellowCard = CreateCard({ className: 'bg-yellow-200 border-yellow-300' })
export const LimeCard = CreateCard({ className: 'bg-lime-200 border-lime-300' })
export const GreenCard = CreateCard({ className: 'bg-green-200 border-green-300' })
export const EmeraldCard = CreateCard({ className: 'bg-emerald-200 border-emerald-300' })
export const TealCard = CreateCard({ className: 'bg-teal-200 border-teal-300' })
export const CyanCard = CreateCard({ className: 'bg-cyan-200 border-cyan-300' })
export const SkyCard = CreateCard({ className: 'bg-sky-200 border-sky-300' })
export const BlueCard = CreateCard({ className: 'bg-blue-200 border-blue-300' })
export const IndigoCard = CreateCard({ className: 'bg-indigo-200 border-indigo-300' })
export const VioletCard = CreateCard({ className: 'bg-violet-200 border-violet-300' })
export const PurpleCard = CreateCard({ className: 'bg-purple-200 border-purple-300' })
export const FuchsiaCard = CreateCard({ className: 'bg-fuchsia-200 border-fuchsia-300' })
export const PinkCard = CreateCard({ className: 'bg-pink-200 border-pink-300' })
export const RoseCard = CreateCard({ className: 'bg-rose-200 border-rose-300' })
export const SlateCard = CreateCard({ className: 'bg-slate-200 border-slate-300' })
export const GrayCard = CreateCard({ className: 'bg-gray-200 border-gray-300' })
export const ZincCard = CreateCard({ className: 'bg-zinc-200 border-zinc-300' })
export const NeutralCard = CreateCard({ className: 'bg-neutral-200 border-neutral-300' })
export const StoneCard = CreateCard({ className: 'bg-stone-200 border-stone-300' })