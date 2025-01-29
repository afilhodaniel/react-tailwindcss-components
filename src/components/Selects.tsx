import { ChevronDownIcon } from '@heroicons/react/24/solid'

function CreateSelect({
  className
}: {
  className: React.ComponentProps<"select">["className"]
}) {
  return ({
    classes,
    children,
    ...props
  }: {
    classes?: React.ComponentProps<"select">["className"],
    children: React.ReactNode
  } & React.ComponentProps<"select">) => {
    return (
      <div className='relative w-full'>
        <select
          className={`cursor-pointer w-full appearance-none border-2 border-gray-300 text-slate-950 rounded p-2 h-[44px] ${className}`}
          {...props}
        > 
          {children}
        </select>
        <div className="pointer-events-none absolute top-3 right-3">
          <ChevronDownIcon className='size-5 text-gray-300' />
        </div>
      </div>
    )
  }
}

export const RedSelect = CreateSelect({ className: 'focus:border-red-500' });
export const OrangeSelect = CreateSelect({ className: "focus:border-orange-500" });
export const AmberSelect = CreateSelect({ className: "focus:border-amber-500" });
export const YellowSelect = CreateSelect({ className: "focus:border-yellow-500" });
export const LimeSelect = CreateSelect({ className: "focus:border-lime-500" });
export const GreenSelect = CreateSelect({ className: "focus:border-green-500" });
export const EmeraldSelect = CreateSelect({ className: "focus:border-emerald-500" });
export const TealSelect = CreateSelect({ className: "focus:border-teal-500" });
export const CyanSelect = CreateSelect({ className: "focus:border-cyan-500" });
export const SkySelect = CreateSelect({ className: "focus:border-sky-500" });
export const BlueSelect = CreateSelect({ className: "focus:border-blue-500" });
export const IndigoSelect = CreateSelect({ className: "focus:border-indigo-500" });
export const VioletSelect = CreateSelect({ className: "focus:border-violet-500" });
export const PurpleSelect = CreateSelect({ className: "focus:border-purple-500" });
export const FuchsiaSelect = CreateSelect({ className: "focus:border-fuchsia-500" });
export const PinkSelect = CreateSelect({ className: "focus:border-pink-500" });
export const RoseSelect = CreateSelect({ className: "focus:border-rose-500" });
export const SlateSelect = CreateSelect({ className: "focus:border-slate-500" });
export const GraySelect = CreateSelect({ className: "focus:border-gray-500" });
export const ZincSelect = CreateSelect({ className: "focus:border-zinc-500" });
export const NeutralSelect = CreateSelect({ className: "focus:border-neutral-500" });
export const StoneSelect = CreateSelect({ className: "focus:border-stone-500" });