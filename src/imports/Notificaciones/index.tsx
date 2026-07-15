import svgPaths from "./svg-rqmk59gp8z";

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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Notificaciones</p>
      <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
              <path d={svgPaths.p2dd60180} fill="var(--fill-0, #DF4730)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Limpiar</p>
      </div>
    </div>
  );
}

function DateAndTime() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Date and time">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#78838d] text-[12px]">A Alan Frias, cuenta de Santander.</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Ya enviamos tu transferencia.</p>
      <DateAndTime />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[18.75%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
              <path d={svgPaths.p7d35f80} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name />
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-right whitespace-nowrap">Hoy</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount1 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount />
    </div>
  );
}

function DateAndTime1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Date and time">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#78838d] text-[12px]">Pagaste con QR $2.560 a Adidas</p>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Se ha acreditado tu pago</p>
      <DateAndTime1 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <g id="Vector">
                <path d={svgPaths.p10d604f0} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2b60ae00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2a251b00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p215eb200} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p921ad00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2201ee00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2a3a6900} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p3275970} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p16575f00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p30c28e00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p25ff8300} fill="var(--fill-0, #FF583F)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Name1 />
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-right whitespace-nowrap">Hoy</p>
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount3 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount2 />
    </div>
  );
}

function DateAndTime2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-full" data-name="Date and time">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#78838d] text-[12px]">Ingresaste $25.000 desde tu cuenta de BBVA</p>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Tu dinero está disponible</p>
      <DateAndTime2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 15">
              <path d={svgPaths.p2697f162} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name2 />
    </div>
  );
}

function Amount5() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-right whitespace-nowrap">Hoy</p>
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount5 />
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount4 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between px-[8px] py-[12px] relative size-full">
            <Left />
            <Right />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between px-[8px] py-[12px] relative size-full">
            <Left1 />
            <Right1 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row justify-center size-full">
          <div className="content-stretch flex items-start justify-between px-[8px] py-[12px] relative size-full">
            <Left2 />
            <Right2 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="content">
      <List />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] inset-[44px_0_0_0] items-start pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="topbar">
        <Back />
        <Title />
      </div>
      <Content />
    </div>
  );
}

export default function Notificaciones() {
  return (
    <div className="bg-white relative size-full" data-name="Notificaciones">
      <div className="absolute bg-white inset-0 overflow-clip" data-name="Notificaciones">
        <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] right-0 top-0" data-name="StatusBar">
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
    </div>
  );
}