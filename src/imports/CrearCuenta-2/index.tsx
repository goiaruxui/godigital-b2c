import svgPaths from "./svg-0urfoi7wfn";

function LogoGollet() {
  return (
    <div className="absolute inset-[6.96%_3.28%_7.94%_4.92%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 56.0003 17.019">
        <g id="Logo Gollet">
          <g id="Gollet">
            <path d={svgPaths.p28b9af80} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p1fe89400} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p141fc280} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p2196fe00} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p83f7f00} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p11e5a300} fill="var(--fill-0, #FF6C3B)" />
          </g>
          <path d={svgPaths.p2a9d0800} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.p3314fe00} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
        </g>
      </svg>
    </div>
  );
}

function TopBar() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="TopBar">
      <button className="content-stretch cursor-pointer flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.175 10">
              <path d={svgPaths.pfe69d00} fill="var(--fill-0, #DF4730)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Volver</p>
      </button>
      <div className="h-[20px] relative shrink-0 w-[61px]" data-name="Logo">
        <LogoGollet />
      </div>
      <div className="content-stretch flex gap-[2px] items-center justify-center opacity-0 relative rounded-[4px] shrink-0" data-name="Field">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-left-s-line">
          <div className="absolute inset-[23.48%_34.26%_23.48%_33.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.48167 10.6067">
              <path d={svgPaths.p1ab30400} fill="var(--fill-0, #DF4730)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Volver</p>
      </div>
    </div>
  );
}

function Mail() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-center leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[14px] text-center w-full" data-name="mail">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 w-full">Enviamos un código al correo electrónico</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 w-full">laura@mail.com</p>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[36px] text-center whitespace-nowrap">324-231</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[197px]" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-center whitespace-nowrap">Ingresa el código</p>
      <Amount1 />
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197 2">
            <path d="M0 1H197" id="Vector 3" stroke="var(--stroke-0, #E1E3ED)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ResendCode() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Resend code">
      <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">{`Reenviar código `}</p>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[14px] text-center whitespace-nowrap">00:00</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px relative w-full" data-name="content">
      <Mail />
      <Amount />
      <ResendCode />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="buttons">
      <div className="bg-[#df4730] h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Verificar código</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] inset-[44px_0_231px_0] items-center pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <TopBar />
      <Content />
      <Buttons />
    </div>
  );
}

function RowNumbers() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start not-italic relative shrink-0 text-black text-center w-full" data-name="row / numbers">
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">1</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">{` `}</p>
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">2</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">ABC</p>
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">3</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">DEF</p>
      </div>
    </div>
  );
}

function RowNumbers1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start not-italic relative shrink-0 text-black text-center w-full" data-name="row / numbers">
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">4</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">GHI</p>
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">5</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">JKL</p>
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">6</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">MNO</p>
      </div>
    </div>
  );
}

function RowNumbers2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[6px] items-start not-italic relative shrink-0 text-black text-center w-full" data-name="row / numbers">
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">7</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">PQRS</p>
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">8</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">TUV</p>
      </div>
      <div className="bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d]" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">9</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">WXYZ</p>
      </div>
    </div>
  );
}

function RowNumbers3() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="row / numbers">
      <div className="flex-[1_0_0] min-w-px relative rounded-[4.6px] self-stretch" data-name="Component / Key">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[7px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] leading-[28px] min-w-px not-italic relative text-[#50555c] text-[22px] text-center">{` `}</p>
          </div>
        </div>
      </div>
      <div className="[word-break:break-word] bg-white content-stretch flex flex-[1_0_0] flex-col h-[46px] items-start min-w-px not-italic overflow-clip relative rounded-[5px] shadow-[0px_1px_0px_0px_#898a8d] text-black text-center" data-name="Component / Key">
        <p className="font-['SF_Pro_Display:Regular',sans-serif] leading-[30px] relative shrink-0 text-[25px] w-full">0</p>
        <p className="font-['SF_Pro_Text:Bold',sans-serif] leading-[12px] relative shrink-0 text-[10px] tracking-[2px] w-full">{` `}</p>
      </div>
      <div className="flex-[1_0_0] min-w-px relative rounded-[4.6px] self-stretch" data-name="Component / Key">
        <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
          <div className="content-stretch flex items-center justify-center p-[7px] relative size-full">
            <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro_Display:Regular',sans-serif] leading-[28px] min-w-px not-italic relative text-[#50555c] text-[22px] text-center">{`\u{10019B}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default function CrearCuenta() {
  return (
    <div className="bg-white relative size-full" data-name="Crear cuenta">
      <Body />
      <div className="absolute backdrop-blur-[10px] bg-[rgba(204,206,211,0.76)] bottom-0 content-stretch flex flex-col gap-[7px] h-[231px] items-start left-0 p-[6px] right-0" data-name="Component 1">
        <RowNumbers />
        <RowNumbers1 />
        <RowNumbers2 />
        <RowNumbers3 />
      </div>
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] right-0 top-0" data-name="StatusBar">
        <LeftArea />
        <div className="h-[44px] mr-[-20.5px] relative shrink-0 w-[210px]" data-name="Notch Area" />
        <RightArea />
      </div>
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col items-start justify-center left-1/2 w-[360px]" data-name="Navigation">
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