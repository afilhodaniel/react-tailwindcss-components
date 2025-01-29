function CreateRadio({
  className
}: {
  className: React.ComponentProps<"input">["className"]
}) {
  return ({
    classes,
    children,
    ...props
  }: {
    classes?: React.ComponentProps<"input">["className"]
  } & Omit<React.ComponentProps<"input">, "type">) => {
    return (
      <input
        type="radio"
        className={`appearance-none border border-gray-300 w-[14px] h-[14px] rounded-full ${className} ${classes}`}
        {...props}
      />
    )
  }
}

export const RedRadio = CreateRadio({ className: 'checked:border-4 checked:border-red-500 checked:bg-slate-50' });
export const OrangeRadio = CreateRadio({ className: 'checked:border-4 checked:border-orange-500 checked:bg-slate-50' });
export const AmberRadio = CreateRadio({ className: 'checked:border-4 checked:border-amber-500 checked:bg-slate-50' });
export const YellowRadio = CreateRadio({ className: 'checked:border-4 checked:border-yellow-500 checked:bg-slate-50' });
export const LimeRadio = CreateRadio({ className: 'checked:border-4 checked:border-lime-500 checked:bg-slate-50' });
export const GreenRadio = CreateRadio({ className: 'checked:border-4 checked:border-green-500 checked:bg-slate-50' });
export const EmeraldRadio = CreateRadio({ className: 'checked:border-4 checked:border-emerald-500 checked:bg-slate-50' });
export const TealRadio = CreateRadio({ className: 'checked:border-4 checked:border-teal-500 checked:bg-slate-50' });
export const CyanRadio = CreateRadio({ className: 'checked:border-4 checked:border-cyan-500 checked:bg-slate-50' });
export const SkyRadio = CreateRadio({ className: 'checked:border-4 checked:border-sky-500 checked:bg-slate-50' });
export const BlueRadio = CreateRadio({ className: 'checked:border-4 checked:border-blue-500 checked:bg-slate-50' });
export const IndigoRadio = CreateRadio({ className: 'checked:border-4 checked:border-indigo-500 checked:bg-slate-50' });
export const VioletRadio = CreateRadio({ className: 'checked:border-4 checked:border-violet-500 checked:bg-slate-50' });
export const PurpleRadio = CreateRadio({ className: 'checked:border-4 checked:border-purple-500 checked:bg-slate-50' });
export const FuchsiaRadio = CreateRadio({ className: 'checked:border-4 checked:border-fuchsia-500 checked:bg-slate-50' });
export const PinkRadio = CreateRadio({ className: 'checked:border-4 checked:border-pink-500 checked:bg-slate-50' });
export const RoseRadio = CreateRadio({ className: 'checked:border-4 checked:border-rose-500 checked:bg-slate-50' });
export const SlateRadio = CreateRadio({ className: 'checked:border-4 checked:border-slate-500 checked:bg-slate-50' });
export const GrayRadio = CreateRadio({ className: 'checked:border-4 checked:border-gray-500 checked:bg-slate-50' });
export const ZincRadio = CreateRadio({ className: 'checked:border-4 checked:border-zinc-500 checked:bg-slate-50' });
export const NeutralRadio = CreateRadio({ className: 'checked:border-4 checked:border-neutral-500 checked:bg-slate-50' });
export const StoneRadio = CreateRadio({ className: 'checked:border-4 checked:border-stone-500 checked:bg-slate-50' });