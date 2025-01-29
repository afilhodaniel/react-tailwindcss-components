function CreateFormInput({
  className
}: {
  className: React.ComponentProps<"input">["className"]
}) {
  return ({
    classes,
    ...props
  }: {
    classes?: React.ComponentProps<"input">["className"]
  } & React.ComponentProps<"input">) => {
    return (
      <input
        className={`transition-all duration-300 border-2 border-gray-300 text-slate-950 rounded p-2 ${className}`}
        {...props}
      />
    )
  }
}

export const RedInput = CreateFormInput({ className: "focus:border-red-500" })
export const OrangeInput = CreateFormInput({ className: "focus:border-orange-500" })
export const AmberInput = CreateFormInput({ className: "focus:border-amber-500" })
export const YellowInput = CreateFormInput({ className: "focus:border-yellow-500" })
export const LimeInput = CreateFormInput({ className: "focus:border-lime-500" })
export const GreenInput = CreateFormInput({ className: "focus:border-green-500" })
export const EmeraldInput = CreateFormInput({ className: "focus:border-emerald-500" })
export const TealInput = CreateFormInput({ className: "focus:border-teal-500" })
export const CyanInput = CreateFormInput({ className: "focus:border-cyan-500" })
export const SkyInput = CreateFormInput({ className: "focus:border-sky-500" })
export const BlueInput = CreateFormInput({ className: "focus:border-blue-500" })
export const IndigoInput = CreateFormInput({ className: "focus:border-indigo-500" })
export const VioletInput = CreateFormInput({ className: "focus:border-violet-500" })
export const PurpleInput = CreateFormInput({ className: "focus:border-purple-500" })
export const FuchsiaInput = CreateFormInput({ className: "focus:border-fuchsia-500" })
export const PinkInput = CreateFormInput({ className: "focus:border-pink-500" })
export const RoseInput = CreateFormInput({ className: "focus:border-rose-500" })
export const SlateInput = CreateFormInput({ className: "focus:border-slate-500" })
export const GrayInput = CreateFormInput({ className: "focus:border-gray-500" })
export const ZincInput = CreateFormInput({ className: "focus:border-zinc-500" })
export const NeutralInput = CreateFormInput({ className: "focus:border-neutral-500" })
export const StoneInput = CreateFormInput({ className: "focus:border-stone-500" })