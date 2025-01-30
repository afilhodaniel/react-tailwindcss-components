import {
  AmberButton, BlueButton, CyanButton, EmeraldButton, FuchsiaButton, GrayButton, GreenButton, IndigoButton, LimeButton, NeutralButton, OrangeButton, PinkButton, PurpleButton, RedButton, RoseButton, SkyButton, SlateButton, StoneButton, TealButton, VioletButton, YellowButton, ZincButton,
  RedInput, OrangeInput, AmberInput, YellowInput, LimeInput, GreenInput, EmeraldInput, TealInput, CyanInput, SkyInput, BlueInput, IndigoInput, VioletInput, PurpleInput, FuchsiaInput, PinkInput, RoseInput, SlateInput, GrayInput, ZincInput, NeutralInput, StoneInput,
  RedSelect, OrangeSelect,
  RedCheckbox, OrangeCheckbox,
  RedRadio, OrangeRadio,
  RedAlert, OrangeAlert, AmberAlert, YellowAlert, LimeAlert, GreenAlert, EmeraldAlert, TealAlert, CyanAlert, SkyAlert, BlueAlert, IndigoAlert, VioletAlert, PurpleAlert, FuchsiaAlert, PinkAlert, RoseAlert, SlateAlert, GrayAlert, ZincAlert, NeutralAlert, StoneAlert,
  RedBadge, OrangeBadge, AmberBadge, YellowBadge, LimeBadge, GreenBadge, EmeraldBadge, TealBadge, CyanBadge, SkyBadge, BlueBadge, IndigoBadge, VioletBadge, PurpleBadge, FuchsiaBadge, PinkBadge, RoseBadge, SlateBadge, GrayBadge, ZincBadge, NeutralBadge, StoneBadge,
  H1, H3, H2, H4, H5, H6,
  WhiteCard, RedCard,
  OrangeCard,
  AmberCard
} from "./components";

export default function App() {
  return (
    <div className="grid grid-cols-8 p-4 gap-4">
      <div className="col-span-2"></div>
      <div className="col-span-6">
        <div className="grid grid-cols-4 gap-4 mb-8">
          <H2 classes="col-span-4">Cards</H2>
          <WhiteCard>
            I'm a White Card
          </WhiteCard>
          <RedCard>
            I'm a Red Card
          </RedCard>
          <OrangeCard>
            I'm a Orange Card
          </OrangeCard>
          <AmberCard>
            I'm a Amber Card
          </AmberCard>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <H2 classes="col-span-4">Headings</H2>
          <WhiteCard classes="col-span-4">
            <H1 classes="mb-2">Heading H1</H1>
            <H2 classes="mb-2">Heading H2</H2>
            <H3 classes="mb-2">Heading H3</H3>
            <H4 classes="mb-2">Heading H4</H4>
            <H5 classes="mb-2">Heading H5</H5>
            <H6>Heading H6</H6>
          </WhiteCard>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <H2 classes="col-span-4">Alerts</H2>
          <RedAlert classes="col-span-2">I'm a Red Alert</RedAlert>
          <OrangeAlert classes="col-span-2">I'm a Orange Alert</OrangeAlert>
          <AmberAlert classes="col-span-2">I'm a Amber Alert</AmberAlert>
          <YellowAlert classes="col-span-2">I'm a Yellow Alert</YellowAlert>
          <LimeAlert classes="col-span-2">I'm a Lime Alert</LimeAlert>
          <GreenAlert classes="col-span-2">I'm a Green Alert</GreenAlert>
          <EmeraldAlert classes="col-span-2">I'm a Emeral Alert</EmeraldAlert>
          <TealAlert classes="col-span-2">I'm a Teal Alert</TealAlert>
          <CyanAlert classes="col-span-2">I'm a Cyan Alert</CyanAlert>
          <SkyAlert classes="col-span-2">I'm a Sky Alert</SkyAlert>
          <BlueAlert classes="col-span-2">I'm a Blue Alert</BlueAlert>
          <IndigoAlert classes="col-span-2">I'm a Indigo Alert</IndigoAlert>
          <VioletAlert classes="col-span-2">I'm a Violet Alert</VioletAlert>
          <PurpleAlert classes="col-span-2">I'm a Purple Alert</PurpleAlert>
          <FuchsiaAlert classes="col-span-2">I'm a Fuchsia Alert</FuchsiaAlert>
          <PinkAlert classes="col-span-2">I'm a Pink Alert</PinkAlert>
          <RoseAlert classes="col-span-2">I'm a Rose Alert</RoseAlert>
          <SlateAlert classes="col-span-2">I'm a Slate Alert</SlateAlert>
          <GrayAlert classes="col-span-2">I'm a Gray Alert</GrayAlert>
          <ZincAlert classes="col-span-2">I'm a Zinc Alert</ZincAlert>
          <NeutralAlert classes="col-span-2">I'm a Neutral Alert</NeutralAlert>
          <StoneAlert classes="col-span-2">I'm a Stone Alert</StoneAlert>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="col-span-4">
            <H2 classes="col-span-4">Badges</H2>
            <RedBadge classes="mr-2 mb-2">Red Badge</RedBadge>
            <OrangeBadge classes="mr-2 mb-2">Orange Badge</OrangeBadge>
            <AmberBadge classes="mr-2 mb-2">Amber Badge</AmberBadge>
            <YellowBadge classes="mr-2 mb-2">Yellow Badge</YellowBadge>
            <LimeBadge classes="mr-2 mb-2">Lime Badge</LimeBadge>
            <GreenBadge classes="mr-2 mb-2">Green Badge</GreenBadge>
            <EmeraldBadge classes="mr-2 mb-2">Emerald Badge</EmeraldBadge>
            <TealBadge classes="mr-2 mb-2">Teal Badge</TealBadge>
            <CyanBadge classes="mr-2 mb-2">Cyan Badge</CyanBadge>
            <SkyBadge classes="mr-2 mb-2">Sky Badge</SkyBadge>
            <BlueBadge classes="mr-2 mb-2">Blue Badge</BlueBadge>
            <IndigoBadge classes="mr-2 mb-2">Indigo Badge</IndigoBadge>
            <VioletBadge classes="mr-2 mb-2">Violet Badge</VioletBadge>
            <PurpleBadge classes="mr-2 mb-2">Purple Badge</PurpleBadge>
            <FuchsiaBadge classes="mr-2 mb-2">Fuchsia Badge</FuchsiaBadge>
            <PinkBadge classes="mr-2 mb-2">Pink Badge</PinkBadge>
            <RoseBadge classes="mr-2 mb-2">Rose Badge</RoseBadge>
            <SlateBadge classes="mr-2 mb-2">Slate Badge</SlateBadge>
            <GrayBadge classes="mr-2 mb-2">Gray Badge</GrayBadge>
            <ZincBadge classes="mr-2 mb-2">Zinc Badge</ZincBadge>
            <NeutralBadge classes="mr-2 mb-2">Neutral Badge</NeutralBadge>
            <StoneBadge classes="mr-2 mb-2">Stone Badge</StoneBadge>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <H2 classes="col-span-4">Buttons</H2>
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
        <div className="grid grid-cols-4 gap-4 mb-8">
          <H2 classes="col-span-4">Forms</H2>
          <RedInput type="number" placeholder="I'm Red Focused Input" />
          <OrangeInput type="file" placeholder="I'm Orange Focused Input" />
          <AmberInput type="email" placeholder="I'm Amber Focused Input" />
          <YellowInput type="search" placeholder="I'm Yellow Focused Input" />
          <LimeInput type="date" placeholder="I'm Lime Focused Input" />
          <GreenInput type="time" placeholder="I'm Green Focused Input" />
          <EmeraldInput type="datetime-local" placeholder="I'm Emerald Focused Input" />
          <TealInput type="month" placeholder="I'm Teal Focused Input" />
          <CyanInput type="password" placeholder="I'm Cyan Focused Input" />
          <SkyInput type="tel" placeholder="I'm Sky Focused Input" />
          <BlueInput type="url" placeholder="I'm Blue Focused Input" />
          <IndigoInput type="week" placeholder="I'm Indigo Focused Input" />
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
        <div className="grid grid-cols-4 gap-4 mb-8">
          <RedSelect>
            <option value="">I'm Red Focused Select</option>
          </RedSelect>
          <OrangeSelect>
            <option value="">I'm Orange Focused Select</option>
          </OrangeSelect>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="relative">
            <RedCheckbox classes="relative mr-2 top-[1px]" id="check-red" />
            <label htmlFor="check-red">I'm a Red Checkbox</label>
          </div>
          <div className="relative">
            <OrangeCheckbox classes="relative mr-2 top-[1px]" id="check-orange" />
            <label htmlFor="check-orange">I'm a Orange Checkbox</label>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <label htmlFor="radio-red">
            <RedRadio classes="relative mr-2 top-[1px]" id="radio-red" name="radio" />
            I'm a Red Radio
          </label>
          <label htmlFor="radio-orange">
            <OrangeRadio classes="relative mr-2 top-[1px]" id="radio-orange" name="radio" />
            I'm a Orange Radio
          </label>
        </div>
      </div>
    </div>
  )
}