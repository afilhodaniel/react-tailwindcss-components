import { AmberButton, BlueButton, CyanButton, EmeraldButton, FuchsiaButton, GrayButton, GreenButton, IndigoButton, LimeButton, NeutralButton, OrangeButton, PinkButton, PurpleButton, RedButton, RoseButton, SkyButton, SlateButton, StoneButton, TealButton, VioletButton, YellowButton, ZincButton } from "./components";

export default function App() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <RedButton>I'm a Red Button</RedButton>
      <OrangeButton>I'm a Orange Button</OrangeButton>
      <AmberButton>I'm a Amber Button</AmberButton>
      <YellowButton>I'm a Yellow Button</YellowButton>
      <LimeButton>I'm a Lime Button</LimeButton>
      <GreenButton>I'm a Green Button</GreenButton>
      <EmeraldButton>I'm a Emerald Button</EmeraldButton>
      <TealButton>I'm a Teal Button</TealButton>
      <CyanButton>I'm a Cyan Button</CyanButton>
      <SkyButton>I'm a Sky Button</SkyButton>
      <BlueButton>I'm a Blue Button</BlueButton>
      <IndigoButton>I'm a Indigo Button</IndigoButton>
      <VioletButton >I'm a Violet Button</VioletButton>
      <PurpleButton>I'm a Purple Button</PurpleButton>
      <FuchsiaButton>I'm a Fuchsia Button</FuchsiaButton>
      <div className="col-span-1"></div>
      <PinkButton>I'm a Pink Button</PinkButton>
      <RoseButton>I'm a Rose Button</RoseButton>
      <div className="col-span-2"></div>
      <SlateButton>I'm a Slate Button</SlateButton>
      <GrayButton>I'm a Gray Button</GrayButton>
      <ZincButton>I'm a Zinc Button</ZincButton>
      <div className="col-span-1"></div>
      <NeutralButton>I'm a Neutral Button</NeutralButton>
      <StoneButton>I'm a Stone Button</StoneButton>
    </div>
  )
}