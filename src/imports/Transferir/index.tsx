import svgPaths from "./svg-3fsn124lku";

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

function Back() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="back">
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
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Transferir</p>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[1.5] not-italic relative shrink-0 text-center whitespace-nowrap" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[16px]">Alan Frias</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] text-[14px]">Santander</p>
    </div>
  );
}

function Receiver() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative rounded-[8px] shrink-0" data-name="receiver">
      <div className="bg-[#ffe7e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[64px] shrink-0 size-[56px]" data-name="Avatar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] min-w-px not-italic relative text-[#df4730] text-[21px] text-center">
          <p className="leading-[1.5]">AF</p>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Money() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="money">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[36px] text-center whitespace-nowrap">$</p>
      <div className="h-[38px] relative shrink-0 w-0" data-name="cursor">
        <div className="absolute inset-[0_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 38">
            <path d="M1 0V38" id="cursor" stroke="var(--stroke-0, #191919)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[36px] text-center whitespace-nowrap">0,00</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[197px]" data-name="amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-center whitespace-nowrap">Ingresar importe</p>
      <Money />
      <div className="h-0 relative shrink-0 w-full" data-name="divider">
        <div className="absolute inset-[-1px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 197 2">
            <path d="M0 1H197" id="divider" stroke="var(--stroke-0, #DF4730)" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-center whitespace-nowrap">Saldo disponible: $22.440,00</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px relative w-full" data-name="content">
      <Receiver />
      <Amount />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="buttons">
      <div className="bg-[#edeff6] h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[14px] text-center whitespace-nowrap">Continuar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] inset-[44px_0_231px_0] items-center pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="topbar">
        <Back />
        <Title />
      </div>
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

export default function Transferir() {
  return (
    <div className="bg-white relative size-full" data-name="Transferir">
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] right-0 top-0" data-name="StatusBar">
        <LeftArea />
        <div className="h-[44px] mr-[-20.5px] relative shrink-0 w-[210px]" data-name="Notch Area" />
        <RightArea />
      </div>
      <Body />
      <div className="absolute backdrop-blur-[10px] bg-[rgba(204,206,211,0.76)] bottom-0 content-stretch flex flex-col gap-[7px] h-[231px] items-start left-0 p-[6px] right-0" data-name="Component 1">
        <RowNumbers />
        <RowNumbers1 />
        <RowNumbers2 />
        <RowNumbers3 />
      </div>
      <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-0 right-0" data-name="Navigation">
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