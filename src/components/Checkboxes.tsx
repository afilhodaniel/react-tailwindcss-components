function CreateCheckbox({
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
        type="checkbox"
        className={`appearance-none border border-gray-300 w-[14px] h-[14px] rounded-xs ${className} ${classes}`}
        {...props}
      />
    )
  }
}

export const RedCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-red-500' });
export const OrangeCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-orange-500' });
export const AmberCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-amber-500' });
export const YellowCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-yellow-500' });
export const LimeCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-lime-500' });
export const GreenCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-green-500' });
export const EmeraldCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-emerald-500' });
export const TealCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-teal-500' });
export const CyanCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-cyan-500' });
export const SkyCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-sky-500' });
export const BlueCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-blue-500' });
export const IndigoCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-indigo-500' });
export const VioletCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-violet-500' });
export const PurpleCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-purple-500' });
export const FuchsiaCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-fuchsia-500' });
export const PinkCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-pink-500' });
export const RoseCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-rose-500' });
export const SlateCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-slate-500' });
export const GrayCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-gray-500' });
export const ZincCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-zinc-500' });
export const NeutralCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-neutral-500' });
export const StoneCheckbox = CreateCheckbox({ className: 'checked:appearance-auto checked:accent-stone-500' });