import {
  AmberButton, BlueButton, CyanButton, EmeraldButton, FuchsiaButton, GrayButton, GreenButton, IndigoButton, LimeButton, NeutralButton, OrangeButton, PinkButton, PurpleButton, RedButton, RoseButton, SkyButton, SlateButton, StoneButton, TealButton, VioletButton, YellowButton, ZincButton,
  RedInput, OrangeInput, AmberInput, YellowInput, LimeInput, GreenInput, EmeraldInput, TealInput, CyanInput, SkyInput, BlueInput, IndigoInput, VioletInput, PurpleInput, FuchsiaInput, PinkInput, RoseInput, SlateInput, GrayInput, ZincInput, NeutralInput, StoneInput
} from "./components";

export default function App() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 mb-8">
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
      <div className="grid grid-cols-4 gap-4">
        <RedInput type="number" placeholder="I'm Red Focused Input" />
        <OrangeInput placeholder="I'm Orange Focused Input" />
        <AmberInput type="email" placeholder="I'm Amber Focused Input" />
        <YellowInput type="search" placeholder="I'm Yellow Focused Input" />
        <LimeInput placeholder="I'm Lime Focused Input" />
        <GreenInput placeholder="I'm Green Focused Input" />
        <EmeraldInput placeholder="I'm Emerald Focused Input" />
        <TealInput placeholder="I'm Teal Focused Input" />
        <CyanInput placeholder="I'm Cyan Focused Input" />
        <SkyInput placeholder="I'm Sky Focused Input" />
        <BlueInput placeholder="I'm Blue Focused Input" />
        <IndigoInput placeholder="I'm Indigo Focused Input" />
        <VioletInput placeholder="I'm Violet Focused Input" />
        <PurpleInput placeholder="I'm Purple Focused Input" />
        <FuchsiaInput placeholder="I'm Fuchsia Focused Input" />
        <div className="col-span-1"></div>
        <PinkInput placeholder="I'm Pink Focused Input" />
        <RoseInput placeholder="I'm Rose Focused Input" />
        <div className="col-span-2"></div>
        <SlateInput placeholder="I'm Slate Focused Input" />
        <GrayInput placeholder="I'm Gray Focused Input" />
        <ZincInput placeholder="I'm Zinc Focused Input" />
        <div className="col-span-1"></div>
        <NeutralInput placeholder="I'm Neutral Focused Input" />
        <StoneInput placeholder="I'm Stone Focused Input" />
      </div>
    </>
  )
}