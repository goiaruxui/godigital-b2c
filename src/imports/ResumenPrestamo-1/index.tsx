import svgPaths from "./svg-od2apicvn7";

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
              <path d={svgPaths.pfe69d00} fill="var(--fill-0, #005794)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#005794] text-[14px] text-center whitespace-nowrap">Volver</p>
      </button>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Adelantos</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 text-[18px] whitespace-nowrap" data-name="Price">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0">$</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0">10.000.000,00</p>
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[1.5] not-italic px-[8px] py-[12px] relative size-full text-[#191919]">
          <p className="flex-[1_0_0] font-['Sora:Regular',sans-serif] min-w-px relative text-[16px]">Adelanto</p>
          <Price />
        </div>
      </div>
    </div>
  );
}

function Price1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[18px] whitespace-nowrap" data-name="Price">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0">$</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0">-415.620,00</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0" data-name="Column">
      <Price1 />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Column />
    </div>
  );
}

function Div1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex gap-[2px] items-start px-[8px] py-[12px] relative size-full">
        <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px]">Intereses</p>
        <Row />
      </div>
    </div>
  );
}

function Price2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[2px] items-center leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[18px] whitespace-nowrap" data-name="Price">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0">$</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0">9.584.380,00</p>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Row">
      <Price2 />
    </div>
  );
}

function Div2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2px] items-center px-[8px] py-[12px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px]">Recibes</p>
          <Row1 />
        </div>
      </div>
    </div>
  );
}

function Detail() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="detail">
      <Div />
      <Div1 />
      <Div2 />
    </div>
  );
}

function Il() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] items-start justify-between leading-[1.5] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="il">
      <p className="relative shrink-0 text-[#78838d]">Tasa anual</p>
      <p className="relative shrink-0 text-[#535d66]">33,71%</p>
    </div>
  );
}

function Ul() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="ul">
      <Il />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px relative w-full" data-name="content">
      <Detail />
      <Ul />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="buttons">
      <a className="bg-[#005794] cursor-pointer h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Solicitar adelanto</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] inset-[44px_0_0_0] items-center pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="topbar">
        <Back />
        <Title />
      </div>
      <Content />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[0] not-italic relative shrink-0 text-[#535d66] text-[0px] text-center w-full">
        <span className="leading-[1.5] text-[14px]">{`Al confirmar aceptas los `}</span>
        <span className="leading-[1.5] text-[#005794] text-[14px]">términos generales</span>
        <span className="leading-[1.5] text-[14px]">{` y las `}</span>
        <span className="leading-[1.5] text-[#005794] text-[14px]">condiciones específicas</span>
        <span className="leading-[1.5] text-[14px]">{` de este préstamo.`}</span>
      </p>
      <Buttons />
    </div>
  );
}

export default function ResumenPrestamo() {
  return (
    <div className="bg-white relative size-full" data-name="ResumenPréstamo">
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
  );
}