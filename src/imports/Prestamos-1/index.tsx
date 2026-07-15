import svgPaths from "./svg-d5lfx44zbz";

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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Detalle</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px]">$30.000.000</p>
      <div className="bg-[#e6f6ec] content-stretch flex gap-[2px] items-center px-[6px] relative rounded-[100px] shrink-0" data-name="Chip">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#289b4f] text-[12px] text-right whitespace-nowrap">Vigente</p>
      </div>
    </div>
  );
}

function TopContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="top-content">
      <div className="bg-[#ebf1ff] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%_28.79%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.48333 15">
              <path d={svgPaths.p31a76b70} fill="var(--fill-0, #0072BC)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Bar() {
  return <div className="bg-[#005794] flex-[1_0_0] min-h-px relative w-[31px]" data-name="bar" />;
}

function ProgressBar() {
  return (
    <div className="bg-[#edeff6] content-stretch flex flex-[1_0_0] flex-col h-[8px] items-start min-w-px overflow-clip relative rounded-[100px]" data-name="ProgressBar">
      <Bar />
    </div>
  );
}

function Progress() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Progress">
      <ProgressBar />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-right w-[86px]">Cuota 2 de 3</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[14px] whitespace-nowrap">{`Disponible `}</p>
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative self-stretch shrink-0 w-[312px]" data-name="Row">
      <Text1 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[14px] text-right">$20.000.000</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[45px] relative shrink-0 w-full" data-name="div">
      <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start px-[8px] py-[12px] relative size-full">
        <Row />
      </div>
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[312px]" data-name="Row">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] whitespace-nowrap">Tasa anual</p>
      <p className="flex-[1_0_0] font-['Sora:Bold',sans-serif] min-w-px relative text-[#191919] text-right">33,71%</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[21px] items-start relative shrink-0 w-[312px]" data-name="Row">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] whitespace-nowrap">Vencimiento</p>
      <p className="flex-[1_0_0] font-['Sora:Bold',sans-serif] min-w-px relative text-[#191919] text-right">15/06/2026</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[312px]" data-name="Row">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] whitespace-nowrap">Dias pendientes</p>
      <p className="flex-[1_0_0] font-['Sora:Bold',sans-serif] min-w-px relative text-[#191919] text-right">30 días</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
      <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[1.5] not-italic px-[8px] py-[12px] relative size-full text-[14px]">
        <Row1 />
        <Row2 />
        <Row3 />
      </div>
    </div>
  );
}

function Il() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="il">
      <Div1 />
      <Div2 />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="div">
      <TopContent />
      <Progress />
      <Il />
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#005794] text-[14px] text-center whitespace-nowrap">Simular adelanto</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateAndTime() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0" data-name="Date and time">
      <p className="relative shrink-0">Pedido el</p>
      <p className="relative shrink-0">30/04/2026</p>
    </div>
  );
}

function Name() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0">$10.000.000</p>
      <DateAndTime />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#e9fffb] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[22.06%_13.35%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6583 11.175">
              <path d={svgPaths.p2a7d1380} fill="var(--fill-0, #4DA66B)" id="Vector" />
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
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#b83232] text-[12px] text-right whitespace-nowrap">$415.620,00</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[12px] whitespace-pre">{`Intereses  `}</p>
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

function Transaction() {
  return (
    <div className="relative shrink-0 w-full" data-name="Transaction">
      <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
          <Left />
          <Right />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px overflow-clip relative w-full" data-name="content">
      <Div />
      <Transaction />
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
    </div>
  );
}

export default function Prestamos() {
  return (
    <div className="bg-white relative size-full" data-name="Préstamos">
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