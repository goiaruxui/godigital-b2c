import svgPaths from "./svg-k02s0rx4bf";

function Time() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] top-1/2" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#191919] text-[17px] tracking-[-0.68px] whitespace-nowrap">9:41</p>
    </div>
  );
}

function LeftArea() {
  return (
    <div className="h-[40px] mr-[-20.5px] overflow-clip relative shrink-0 w-[63px]" data-name="Left Area">
      <Time />
    </div>
  );
}

function Sim1SingleSim() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-[20px]" data-name="SIM / 1 - Single SIM">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[12px] left-[calc(50%+7.95px)] rounded-[1px] top-1/2 w-[3.2px]" data-name="Bar 4" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[9.6px] left-[calc(50%+2.65px)] rounded-[1px] top-[calc(50%+1.2px)] w-[3.2px]" data-name="Bar 3" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[7px] left-[calc(50%-2.65px)] rounded-[1px] top-[calc(50%+2.5px)] w-[3.2px]" data-name="Bar 2" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[4.6px] left-[calc(50%-7.95px)] rounded-[1px] top-[calc(50%+3.7px)] w-[3.2px]" data-name="Bar 1" />
    </div>
  );
}

function Loading() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11px] left-1/2 top-1/2 w-[15.675px]" data-name="loading">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.675 11">
        <g id="loading">
          <path d={svgPaths.p1e8a5380} fill="var(--fill-0, #191919)" id="Path" />
          <path d={svgPaths.p1bf80500} fill="var(--fill-0, #191919)" id="Path_2" />
          <path d={svgPaths.p33e85b80} fill="var(--fill-0, #191919)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function NetworkWiFiFull() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-[20px]" data-name="Network / WiFi Full">
      <Loading />
    </div>
  );
}

function BatteryFullUncharged() {
  return (
    <div className="h-[14px] relative shrink-0 w-[28px]" data-name="Battery / Full Uncharged">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 14">
        <g id="Battery / Full Uncharged">
          <rect fill="var(--fill-0, #191919)" height="9" id="Battery Fill" rx="1.33" width="21" x="2" y="2.5" />
          <path d={svgPaths.p3f1ced00} fill="var(--fill-0, #191919)" id="Battery Frame" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function AutoLayout() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[3px] items-center justify-end right-0 top-1/2" data-name="Auto-layout">
      <Sim1SingleSim />
      <NetworkWiFiFull />
      <BatteryFullUncharged />
    </div>
  );
}

function StatusArea() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%-1px)] top-1/2 w-[74px]" data-name="Status Area">
      <AutoLayout />
    </div>
  );
}

function RightArea() {
  return (
    <div className="h-[40px] relative shrink-0 w-[80px]" data-name="Right Area">
      <StatusArea />
      <div className="absolute left-[6px] size-[6px] top-[6px]" data-name="Privacy Indicator / None">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 4" />
        </svg>
      </div>
    </div>
  );
}

function LogoGollet() {
  return (
    <div className="absolute inset-[6.96%_3.28%_7.94%_4.92%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.9514 23.8266">
        <g id="Logo Gollet">
          <g id="Gollet">
            <path d={svgPaths.p2ba83f00} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p2a940b00} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p1f5a3672} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.pa64b680} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p228dc00} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p1d683300} fill="var(--fill-0, #FF6C3B)" />
          </g>
          <path d={svgPaths.pa80080} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.p1aacc800} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
        </g>
      </svg>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center pb-[20px] pt-[8px] relative shrink-0 w-full" data-name="header">
      <div className="h-[28px] relative shrink-0 w-[86px]" data-name="Logo">
        <LogoGollet />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-center whitespace-nowrap">Correo electrónico</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[14px] text-center whitespace-nowrap">laura@mail.com</p>
    </div>
  );
}

function Field() {
  return (
    <div className="h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden className="absolute border border-[#e1e3ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Left />
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Title">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-center whitespace-nowrap">Contraseña</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[14px] text-center whitespace-nowrap">•••••••••|</p>
    </div>
  );
}

function Field1() {
  return (
    <div className="h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden className="absolute border-2 border-[#ff583f] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative size-full">
          <Left1 />
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
            <div className="absolute inset-[10.1%_4.17%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15.9583">
                <path d={svgPaths.p1c01e080} fill="var(--fill-0, #191919)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-h-px relative w-full" data-name="form">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="mail">
        <Title />
        <Field />
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="password">
        <Title1 />
        <Field1 />
      </div>
      <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="reset">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Recuperar contraseña</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="buttons">
      <div className="bg-[#df4730] h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Iniciar sesión</p>
          </div>
        </div>
      </div>
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Utilizar datos biométricos</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[21px] w-full">¡Hola de nuevo!</p>
        <Form />
        <Buttons />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] inset-[44px_0_0_0] items-start pb-[40px]" data-name="body">
      <Header />
      <Content />
    </div>
  );
}

export default function Login() {
  return (
    <div className="bg-white relative size-full" data-name="Login">
      <div className="absolute content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] right-0 top-0" data-name="StatusBar">
        <LeftArea />
        <div className="h-[44px] mr-[-20.5px] relative shrink-0 w-[210px]" data-name="Notch Area" />
        <RightArea />
      </div>
      <Body />
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start justify-center left-0 right-0" data-name="Navigation">
        <div className="relative shrink-0 w-full" data-name="HomeIndicator">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center pb-[9px] pt-[4px] px-[120px] relative size-full">
              <div className="bg-[#535d66] h-[5px] relative rounded-[5px] shrink-0 w-[134px]" data-name="Indicator" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}