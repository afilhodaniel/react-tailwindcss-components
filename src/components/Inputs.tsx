function CreateInput({
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

export const RedInput = CreateInput({ className: "focus:border-red-500" });
export const OrangeInput = CreateInput({ className: "focus:border-orange-500" });
export const AmberInput = CreateInput({ className: "focus:border-amber-500" });
export const YellowInput = CreateInput({ className: "focus:border-yellow-500" });
export const LimeInput = CreateInput({ className: "focus:border-lime-500" });
export const GreenInput = CreateInput({ className: "focus:border-green-500" });
export const EmeraldInput = CreateInput({ className: "focus:border-emerald-500" });
export const TealInput = CreateInput({ className: "focus:border-teal-500" });
export const CyanInput = CreateInput({ className: "focus:border-cyan-500" });
export const SkyInput = CreateInput({ className: "focus:border-sky-500" });
export const BlueInput = CreateInput({ className: "focus:border-blue-500" });
export const IndigoInput = CreateInput({ className: "focus:border-indigo-500" });
export const VioletInput = CreateInput({ className: "focus:border-violet-500" });
export const PurpleInput = CreateInput({ className: "focus:border-purple-500" });
export const FuchsiaInput = CreateInput({ className: "focus:border-fuchsia-500" });
export const PinkInput = CreateInput({ className: "focus:border-pink-500" });
export const RoseInput = CreateInput({ className: "focus:border-rose-500" });
export const SlateInput = CreateInput({ className: "focus:border-slate-500" });
export const GrayInput = CreateInput({ className: "focus:border-gray-500" });
export const ZincInput = CreateInput({ className: "focus:border-zinc-500" });
export const NeutralInput = CreateInput({ className: "focus:border-neutral-500" });
export const StoneInput = CreateInput({ className: "focus:border-stone-500" });