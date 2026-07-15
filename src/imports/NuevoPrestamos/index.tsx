import svgPaths from "./svg-ja9brcsstx";

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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Nuevo préstamo</p>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px]">Compras</p>
    </div>
  );
}

function TopContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="top-content">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[4.17%_22.92%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.8333 18.3333">
              <path d={svgPaths.p181f1a00} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">Hasta</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">$ 500.000</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">TNA</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">98%</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[34px]" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">TEA</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">115%</p>
    </div>
  );
}

function Info() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[32px] items-center leading-[1.5] not-italic relative shrink-0 w-full" data-name="info">
      <Div />
      <Div1 />
      <Div2 />
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <TopContent />
        <Info />
        <div className="relative rounded-[4px] shrink-0 w-full" data-name="button">
          <div aria-hidden className="absolute border border-[#df4730] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Simular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px]">Personal</p>
    </div>
  );
}

function TopContent1() {
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
      <Text1 />
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">Hasta</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">$ 2.500.000</p>
    </div>
  );
}

function Div4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">TNA</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">98%</p>
    </div>
  );
}

function Div5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[34px]" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">TEA</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">115%</p>
    </div>
  );
}

function Info1() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[32px] items-center leading-[1.5] not-italic relative shrink-0 w-full" data-name="info">
      <Div3 />
      <Div4 />
      <Div5 />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <TopContent1 />
        <Info1 />
        <a className="cursor-pointer relative rounded-[4px] shrink-0 w-full" data-name="button">
          <div aria-hidden className="absolute border border-[#df4730] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Simular</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px]">Prendario</p>
    </div>
  );
}

function TopContent2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="top-content">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[16.67%_12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 13.3333">
              <g id="Vector">
                <path d={svgPaths.p1b75c500} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p1b33bc30} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p11401a00} fill="var(--fill-0, #FF583F)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Text2 />
    </div>
  );
}

function Div6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">Hasta</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">$ 20.000.000</p>
    </div>
  );
}

function Div7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[31px]" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">TNA</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">85%</p>
    </div>
  );
}

function Div8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[31px]" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">TEA</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">85%</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[32px] items-center leading-[1.5] not-italic relative shrink-0 w-full" data-name="info">
      <Div6 />
      <Div7 />
      <Div8 />
    </div>
  );
}

function Card2() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <TopContent2 />
        <Info2 />
        <div className="relative rounded-[4px] shrink-0 w-full" data-name="button">
          <div aria-hidden className="absolute border border-[#df4730] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Simular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-name="text">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px]">Hipotecario</p>
    </div>
  );
}

function TopContent3() {
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
      <Text3 />
    </div>
  );
}

function Div9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">Hasta</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">$ 100.000.000</p>
    </div>
  );
}

function Div10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">TNA</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">69%</p>
    </div>
  );
}

function Div11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[32px]" data-name="div">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[12px] w-full">TEA</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[14px] w-full">69%</p>
    </div>
  );
}

function Info3() {
  return (
    <div className="[word-break:break-word] content-stretch flex gap-[32px] items-center leading-[1.5] not-italic relative shrink-0 w-full" data-name="info">
      <Div9 />
      <Div10 />
      <Div11 />
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="card">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[16px] relative size-full">
        <TopContent3 />
        <Info3 />
        <div className="relative rounded-[4px] shrink-0 w-full" data-name="button">
          <div aria-hidden className="absolute border border-[#df4730] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[8px] relative size-full">
              <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Simular</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px overflow-clip relative w-full" data-name="content">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
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

export default function NuevoPrestamos() {
  return (
    <div className="bg-white relative size-full" data-name="Nuevo préstamos">
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