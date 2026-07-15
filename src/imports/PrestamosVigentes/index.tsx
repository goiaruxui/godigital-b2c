import svgPaths from "./svg-pc3ssowed4";

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
      <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.175 10">
              <path d={svgPaths.pfe69d00} fill="var(--fill-0, #DF4730)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Volver</p>
      </div>
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

function Typography() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Typography">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[11px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#df4730] text-[14px] text-center">Vigentes</p>
        </div>
      </div>
    </div>
  );
}

function Typography1() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="Typography">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[11px] relative size-full">
          <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#535d66] text-[14px] text-center">Finalizados</p>
        </div>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Tabs">
      <div aria-hidden className="absolute border-[#e1e3ed] border-b border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-center min-w-px relative" data-name="TabItem">
        <Typography />
        <div className="h-0 relative shrink-0 w-full" data-name="Line">
          <div className="absolute inset-[-1px_-0.61%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 166 2">
              <path d="M1 1H165" id="Line" stroke="var(--stroke-0, #DF4730)" strokeLinecap="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[40px] items-center justify-center min-w-px relative" data-name="TabItem">
        <Typography1 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px] text-left">$ 10.000</p>
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
  return <div className="bg-[#df4730] flex-[1_0_0] min-h-px relative w-[49.5px]" data-name="bar" />;
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
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-right w-[94px]">Cuota 4 de 12</p>
    </div>
  );
}

function Div() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative text-left" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">Próxima cuota</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">$ 1.942,51</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative text-left" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">Vencimiento</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">15/10/2024</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="info">
      <Div />
      <Div1 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.175 10">
            <path d={svgPaths.p26359200} fill="var(--fill-0, #FF583F)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <a className="bg-white cursor-pointer relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <TopContent />
        <Progress />
        <Info />
      </div>
    </a>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px]">$ 30.000.000</p>
      <div className="bg-[#f7f8fe] content-stretch flex gap-[2px] items-center px-[6px] relative rounded-[100px] shrink-0" data-name="Chip">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-right whitespace-nowrap">Vigente</p>
      </div>
    </div>
  );
}

function TopContent1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="top-content">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%_4.17%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15">
              <g id="Vector">
                <path d={svgPaths.p18a76300} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p17fdb600} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p25ff8300} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2b7e1780} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p14bf9800} fill="var(--fill-0, #FF583F)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Text1 />
    </div>
  );
}

function Bar1() {
  return <div className="bg-[#df4730] flex-[1_0_0] min-h-px relative w-[95px]" data-name="bar" />;
}

function ProgressBar1() {
  return (
    <div className="bg-[#edeff6] content-stretch flex flex-[1_0_0] flex-col h-[8px] items-start min-w-px overflow-clip relative rounded-[100px]" data-name="ProgressBar">
      <Bar1 />
    </div>
  );
}

function Progress1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Progress">
      <ProgressBar1 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-right w-[94px]">Cuota 15 de 30</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">Próxima cuota</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">$ 190.002,71</p>
    </div>
  );
}

function Div3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">Vencimiento</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">28/06/2024</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="content-stretch flex gap-[32px] items-center relative shrink-0 w-full" data-name="info">
      <Div2 />
      <Div3 />
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="chevron_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.175 10">
            <path d={svgPaths.p26359200} fill="var(--fill-0, #FF583F)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <TopContent1 />
        <Progress1 />
        <Info1 />
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px relative w-full" data-name="content">
      <Card />
      <Card1 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="buttons">
      <div className="bg-[#df4730] h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Nuevo préstamo</p>
          </div>
        </div>
      </div>
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
      <Tabs />
      <Content />
      <Buttons />
    </div>
  );
}

export default function PrestamosVigentes() {
  return (
    <div className="bg-white relative size-full" data-name="Préstamos-Vigentes">
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] right-0 top-0" data-name="StatusBar">
        <LeftArea />
        <div className="h-[44px] mr-[-20.5px] relative shrink-0 w-[210px]" data-name="Notch Area" />
        <RightArea />
      </div>
      <Body />
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