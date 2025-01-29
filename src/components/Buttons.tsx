function CreateButton({
  className
}: {
  className: React.ComponentProps<"button">["className"]
}) {
  return ({
    classes,
    children,
    ...props
  }: {
    classes?: React.ComponentProps<"button">["className"],
    children: React.ReactNode
  } & React.ComponentProps<"button">) => {
    return (
      <button
        className={`transition-all duration-300 cursor-pointer py-2 px-3 rounded shadow-md text-slate-100 ${className} ${classes}`}
        {...props}
      >
        {children}
      </button>
    )
  }
}

export const RedButton = CreateButton({ className: "bg-red-600 hover:bg-red-700 active:bg-red-800" });
export const OrangeButton = CreateButton({ className: "bg-orange-600 hover:bg-orange-700 active:bg-orange-800" });
export const AmberButton = CreateButton({ className: "bg-amber-600 hover:bg-amber-700 active:bg-amber-800" });
export const YellowButton = CreateButton({ className: "bg-yellow-600 hover:bg-yellow-700 active:bg-yellow-800" });
export const LimeButton = CreateButton({ className: "bg-lime-600 hover:bg-lime-700 active:bg-lime-800" });
export const GreenButton = CreateButton({ className: "bg-green-600 hover:bg-green-700 active:bg-green-800" });
export const EmeraldButton = CreateButton({ className: "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800" });
export const TealButton = CreateButton({ className: "bg-teal-600 hover:bg-teal-700 active:bg-teal-800" });
export const CyanButton = CreateButton({ className: "bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800" });
export const SkyButton = CreateButton({ className: "bg-sky-600 hover:bg-sky-700 active:bg-sky-800" });
export const BlueButton = CreateButton({ className: "bg-blue-600 hover:bg-blue-700 active:bg-blue-800" });
export const IndigoButton = CreateButton({ className: "bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800" });
export const VioletButton = CreateButton({ className: "bg-violet-600 hover:bg--violet700 active:bg-violet-800" });
export const PurpleButton = CreateButton({ className: "bg-purple-600 hover:bg-purple-700 active:bg-purple-800" });
export const FuchsiaButton = CreateButton({ className: "bg-fuchsia-600 hover:bg-fuchsia-700 active:bg-fuchsia-800" });
export const PinkButton = CreateButton({ className: "bg-pink-600 hover:bg-pink-700 active:bg-pink-800" });
export const RoseButton = CreateButton({ className: "bg-rose-600 hover:bg-rose-700 active:bg-rose-800" });
export const SlateButton = CreateButton({ className: "bg-slate-600 hover:bg-slate-700 active:bg-slate-800" });
export const GrayButton = CreateButton({ className: "bg-gray-600 hover:bg-gray-700 active:bg-gray-800" });
export const ZincButton = CreateButton({ className: "bg-zinc-600 hover:bg-zinc-700 active:bg-zinc-800" });
export const NeutralButton = CreateButton({ className: "bg-neutral-600 hover:bg-neutral-700 active:bg-neutral-800" });
export const StoneButton = CreateButton({ className: "bg-stone-600 hover:bg-stone-700 active:bg-stone-800" });