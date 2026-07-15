import svgPaths from "./svg-1p3ce9654i";

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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Préstamos</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px]">Personal</p>
      <div className="bg-[#fff6f6] content-stretch flex gap-[2px] items-center px-[6px] relative rounded-[100px] shrink-0" data-name="Chip">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#b83232] text-[12px] text-right whitespace-nowrap">Cuota vencida</p>
      </div>
    </div>
  );
}

function TopContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="top-content">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%_28.79%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.48333 15">
              <path d={svgPaths.p31a76b70} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Bar() {
  return <div className="bg-[#df4730] flex-[1_0_0] min-h-px relative w-[31px]" data-name="bar" />;
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
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-right w-[86px]">Cuota 4 de 30</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] gap-[4px] items-start justify-center min-w-px relative" data-name="text">
      <p className="relative shrink-0 text-[#535d66] text-[14px] whitespace-nowrap">Préstamo</p>
      <p className="min-w-full relative shrink-0 text-[#78838d] text-[12px] w-[min-content]">Solicitado el 26/03/2024</p>
    </div>
  );
}

function Row() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[4px] items-center leading-[1.5] not-italic relative self-stretch shrink-0 w-[312px]" data-name="Row">
      <Text1 />
      <p className="flex-[1_0_0] font-['Sora:Bold',sans-serif] min-w-px relative text-[#191919] text-[14px] text-right">$ 10.000</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="h-[67px] relative shrink-0 w-full" data-name="div">
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
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] whitespace-nowrap">Importe cuota</p>
      <p className="flex-[1_0_0] font-['Sora:Bold',sans-serif] min-w-px relative text-[#191919] text-right">$1.942,51</p>
    </div>
  );
}

function Row2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[21px] items-start relative shrink-0 w-[312px]" data-name="Row">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] whitespace-nowrap">Próximo vencimiento</p>
      <p className="flex-[1_0_0] font-['Sora:Bold',sans-serif] min-w-px relative text-[#191919] text-right">26/05/2024</p>
    </div>
  );
}

function Row3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0 w-[312px]" data-name="Row">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] whitespace-nowrap">Pendientes</p>
      <p className="flex-[1_0_0] font-['Sora:Bold',sans-serif] min-w-px relative text-[#191919] text-right">9 cuotas</p>
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
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Ver contrato</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateAndTime() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0" data-name="Date and time">
      <p className="relative shrink-0">Venció el</p>
      <p className="relative shrink-0">15/07/2024</p>
    </div>
  );
}

function Name() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[12px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0">Cuota 1 de 9</p>
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
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[12px] text-right whitespace-nowrap">$ 1.942,51</p>
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
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0" data-name="Date and time">
      <p className="relative shrink-0">Venció el</p>
      <p className="relative shrink-0">15/08/2024</p>
    </div>
  );
}

function Name1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[12px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0">Cuota 2 de 9</p>
      <DateAndTime1 />
    </div>
  );
}

function Left1() {
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
      <Name1 />
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[12px] text-right whitespace-nowrap">$ 1.942,51</p>
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
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Venció el</p>
      <p className="relative shrink-0">15/09/2024</p>
    </div>
  );
}

function Name2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Cuota 3 de 9</p>
      <DateAndTime2 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#fff6f6] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p10a47380} fill="var(--fill-0, #E05555)" id="Vector" />
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
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-right whitespace-nowrap">$ 1.942,51</p>
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

function DateAndTime3() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Vence el</p>
      <p className="relative shrink-0">15/10/2024</p>
    </div>
  );
}

function Name3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Cuota 4 de 9</p>
      <DateAndTime3 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#fffaec] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%_28.79%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.48333 15">
              <path d={svgPaths.p31a76b70} fill="var(--fill-0, #FDC228)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name3 />
    </div>
  );
}

function Amount7() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-right whitespace-nowrap">$ 1.942,51</p>
    </div>
  );
}

function Amount6() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount7 />
    </div>
  );
}

function Right3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount6 />
    </div>
  );
}

function DateAndTime4() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0" data-name="Date and time">
      <p className="relative shrink-0">Vence el</p>
      <p className="relative shrink-0">15/11/2024</p>
    </div>
  );
}

function Name4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0">Cuota 5 de 9</p>
      <DateAndTime4 />
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#f7f8fe] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p18683880} fill="var(--fill-0, #BAC2C7)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name4 />
    </div>
  );
}

function Amount9() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-right whitespace-nowrap">$ 1.942,51</p>
    </div>
  );
}

function Amount8() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount9 />
    </div>
  );
}

function Right4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount8 />
    </div>
  );
}

function DateAndTime5() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0" data-name="Date and time">
      <p className="relative shrink-0">Vence el</p>
      <p className="relative shrink-0">15/12/2024</p>
    </div>
  );
}

function Name5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0">Cuota 6 de 9</p>
      <DateAndTime5 />
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#f7f8fe] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p18683880} fill="var(--fill-0, #BAC2C7)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name5 />
    </div>
  );
}

function Amount11() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-right whitespace-nowrap">$ 1.942,51</p>
    </div>
  );
}

function Amount10() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount11 />
    </div>
  );
}

function Right5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount10 />
    </div>
  );
}

function DateAndTime6() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0" data-name="Date and time">
      <p className="relative shrink-0">Vence el</p>
      <p className="relative shrink-0">15/12/2024</p>
    </div>
  );
}

function Name6() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0">{`Cuota 7 de 9}`}</p>
      <DateAndTime6 />
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#f7f8fe] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p18683880} fill="var(--fill-0, #BAC2C7)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name6 />
    </div>
  );
}

function Amount13() {
  return (
    <div className="content-stretch flex items-start justify-end relative shrink-0" data-name="Amount">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-right whitespace-nowrap">$ 1.942,51</p>
    </div>
  );
}

function Amount12() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount13 />
    </div>
  );
}

function Right6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount12 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left />
            <Right />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left1 />
            <Right1 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left2 />
            <Right2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left3 />
            <Right3 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left4 />
            <Right4 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left5 />
            <Right5 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left6 />
            <Right6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px overflow-clip relative w-full" data-name="content">
      <Div />
      <List />
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

export default function DetallePrestamos() {
  return (
    <div className="relative size-full" data-name="DetallePréstamos">
      <div className="absolute bg-white h-[800px] left-0 overflow-clip top-0 w-[360px]" data-name="Préstamos">
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