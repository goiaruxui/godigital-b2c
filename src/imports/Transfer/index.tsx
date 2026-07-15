import svgPaths from "./svg-zzsqykajrg";

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

function Add() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Add">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #FFE7E3)" id="Ellipse 7" r="24" />
        </svg>
      </div>
      <div className="col-1 ml-[12px] mt-[12px] overflow-clip relative row-1 size-[24px]" data-name="account_balance">
        <div className="absolute inset-[8.33%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
            <path d={svgPaths.pc7ff540} fill="var(--fill-0, #FF583F)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Itemlist() {
  return (
    <a className="content-stretch cursor-pointer flex gap-[8px] items-center relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <Add />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-left whitespace-nowrap">Mediante CBU, CVU o Alias</p>
    </a>
  );
}

function LogoGollet() {
  return (
    <div className="absolute inset-[5%_6.5%_10%_7.89%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.3937 14.1036">
        <g id="Logo Gollet">
          <g id="Gonnectia">
            <path d={svgPaths.p1a426200} fill="var(--fill-0, #FF6C3B)" id="Vector" />
            <path d={svgPaths.p3faf2200} fill="var(--fill-0, #FF6C3B)" id="Vector_2" />
          </g>
          <path d={svgPaths.p3c1f38b0} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.p1b844b00} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
        </g>
      </svg>
    </div>
  );
}

function Add1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Add">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #FFE7E3)" id="Ellipse 7" r="24" />
        </svg>
      </div>
      <div className="col-1 h-[16.593px] ml-[8px] mt-[15px] relative row-1 w-[32px]" data-name="Logo">
        <LogoGollet />
      </div>
    </div>
  );
}

function Itemlist1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <Add1 />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Con celular, mail, nombre o apellido</p>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div">
      <Itemlist />
      <Itemlist1 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
        <div className="absolute inset-[13.56%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.575 14.575">
            <path d={svgPaths.p3863c300} fill="var(--fill-0, #191919)" id="Vector" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[14px] text-center whitespace-nowrap">Busca un contacto</p>
    </div>
  );
}

function Field() {
  return (
    <div className="h-[37px] relative rounded-[4px] shrink-0 w-full" data-name="Field">
      <div aria-hidden className="absolute border border-[#e1e3ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative size-full">
          <Left />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative text-[#535d66] text-[12px]" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 w-[156px]">Aiden Penna</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 w-[156px]">Banco Frances</p>
    </div>
  );
}

function Itemlist2() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[7px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-[#ffe7e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] min-w-px not-italic relative text-[#df4730] text-[14px] text-center">
          <p className="leading-[1.5]">AP</p>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative text-[#535d66] text-[12px]" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 w-[156px]">Louis Deldotto</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 w-[156px]">Banco de Galicia</p>
    </div>
  );
}

function Itemlist3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[7px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-[#ffe7e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] min-w-px not-italic relative text-[#df4730] text-[14px] text-center">
          <p className="leading-[1.5]">LD</p>
        </div>
      </div>
      <Text1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative text-[#535d66] text-[12px]" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 w-[156px]">Thomas Grebe</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 w-[156px]">Banco Santander Río</p>
    </div>
  );
}

function Itemlist4() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[7px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-[#ffe7e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] min-w-px not-italic relative text-[#df4730] text-[14px] text-center">
          <p className="leading-[1.5]">TG</p>
        </div>
      </div>
      <Text2 />
    </div>
  );
}

function Text3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative text-[#535d66] text-[12px]" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 w-[156px]">Miriam Serrey</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 w-[156px]">Gollet</p>
    </div>
  );
}

function Itemlist5() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[7px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-[#ffe7e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] min-w-px not-italic relative text-[#df4730] text-[14px] text-center">
          <p className="leading-[1.5]">MS</p>
        </div>
      </div>
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative text-[#535d66] text-[12px]" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 w-[156px]">Laura Martinez</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 w-[156px]">Brubank</p>
    </div>
  );
}

function Itemlist6() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center px-[16px] py-[7px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="bg-[#ffe7e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] min-w-px not-italic relative text-[#df4730] text-[14px] text-center">
          <p className="leading-[1.5]">LM</p>
        </div>
      </div>
      <Text4 />
      <div className="bg-[#fff2f0] content-stretch flex gap-[2px] items-center px-[6px] relative rounded-[100px] shrink-0" data-name="Chip">
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[12px] text-right whitespace-nowrap">Tú</p>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="list">
      <Itemlist2 />
      <Itemlist3 />
      <Itemlist4 />
      <Itemlist5 />
      <Itemlist6 />
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="div">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#535d66] text-[14px] w-[min-content]">Cuentas frecuentes</p>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[328px]" data-name="search">
        <Field />
      </div>
      <List />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="content">
      <Div />
      <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Divider">
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Divider">
          <div className="absolute bg-[#edeff6] inset-0" data-name="Divider/Thin" />
        </div>
        <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] whitespace-nowrap">o</p>
        <div className="flex-[1_0_0] h-px min-w-px relative" data-name="Divider">
          <div className="absolute bg-[#edeff6] inset-0" data-name="Divider/Thin" />
        </div>
      </div>
      <Div1 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] inset-[44px_-0.42px_0_0.42px] items-start pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="topbar">
        <Back />
        <Title />
      </div>
      <Content />
    </div>
  );
}

export default function Transfer() {
  return (
    <div className="relative size-full" data-name="Transfer">
      <div className="absolute bg-white inset-0 overflow-clip" data-name="Transfer">
        <div className="absolute bg-white content-stretch flex items-center justify-between left-[0.42px] pl-[32px] pr-[16px] right-[-0.42px] top-0" data-name="StatusBar">
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