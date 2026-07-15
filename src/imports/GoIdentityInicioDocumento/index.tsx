import svgPaths from "./svg-qsl85lindy";

function Add() {
  return (
    <div className="col-1 ml-0 mt-0 relative row-1 size-[22px]" data-name="Add">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Add">
          <circle cx="11" cy="11" fill="var(--fill-0, #FFF2F0)" id="Ellipse 7" r="11" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Add />
      <div className="[word-break:break-word] col-1 flex flex-col font-['Sora:Bold',sans-serif] h-[13px] justify-center ml-[5px] mt-[4px] not-italic relative row-1 text-[#df4730] text-[12px] text-center w-[11px]">
        <p className="leading-[1.5]">1</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative">
      <Group1 />
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Verificación de identidad</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function ProgresBar() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Progres bar">
      <div className="bg-[#ff583f] flex-[1_0_0] h-[2px] min-w-px relative" />
      <div className="bg-[#ff583f] flex-[1_0_0] h-[2px] min-w-px relative" />
      <div className="bg-[#ff583f] flex-[1_0_0] h-[2px] min-w-px relative" />
      <div className="bg-[#ff583f] flex-[1_0_0] h-[2px] min-w-px relative" />
      <div className="bg-[#e1e3ed] flex-[1_0_0] h-[2px] min-w-px relative" />
    </div>
  );
}

function Topbar() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 pt-[10px] right-0 top-[42px]" data-name="topbar">
      <Frame4 />
      <ProgresBar />
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

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[1.5] not-italic relative shrink-0 w-full" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[18px] w-full">Vamos a validar tu documento</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] text-[14px] w-full">Antes de tomar la foto, tené en cuenta los siguientes puntos:</p>
    </div>
  );
}

function Group() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 122">
        <g id="Group 98951">
          <g id="Group 98915">
            <g id="Group 98913">
              <g filter="url(#filter0_d_2_26469)" id="Rectangle 897">
                <path d={svgPaths.p35c3eb80} fill="var(--fill-0, white)" />
              </g>
              <g id="Group 98912">
                <path d={svgPaths.p11d8b700} fill="var(--fill-0, #FFF2F0)" id="Ellipse 201" />
                <path d={svgPaths.p2ea54c80} fill="var(--fill-0, #841A0A)" id="Vector 55" />
                <g id="Group">
                  <path clipRule="evenodd" d={svgPaths.p1a484800} fill="var(--fill-0, #841A0A)" fillRule="evenodd" id="Vector" />
                  <path clipRule="evenodd" d={svgPaths.p1fdbfd00} fill="var(--fill-0, #FFF2F0)" fillRule="evenodd" id="Vector_2" />
                </g>
                <path d={svgPaths.p3ba27770} fill="var(--fill-0, #841A0A)" id="Ellipse 202" />
              </g>
            </g>
            <g id="Group 98914">
              <path d={svgPaths.p258c0900} fill="var(--fill-0, #BAC2C7)" id="Rectangle 904" />
              <path d={svgPaths.p2a43c000} fill="var(--fill-0, #BAC2C7)" id="Rectangle 909" />
              <path d={svgPaths.p2999b100} fill="var(--fill-0, #BAC2C7)" id="Rectangle 905" />
              <path d={svgPaths.p3f67ddc0} fill="var(--fill-0, #BAC2C7)" id="Rectangle 906" />
              <path d={svgPaths.p344d3500} fill="var(--fill-0, #BAC2C7)" id="Rectangle 907" />
              <path d={svgPaths.p35aa1a80} fill="var(--fill-0, #BAC2C7)" id="Rectangle 908" />
              <path d={svgPaths.p89c1280} fill="var(--fill-0, #BAC2C7)" id="Rectangle 910" />
              <path d={svgPaths.p3e264c00} fill="var(--fill-0, #BAC2C7)" id="Rectangle 911" />
              <path d={svgPaths.p3bba58c0} fill="var(--fill-0, #BAC2C7)" id="Rectangle 912" />
              <path d={svgPaths.p102d5c80} fill="var(--fill-0, #BAC2C7)" id="Rectangle 913" />
              <path d={svgPaths.p3156d680} fill="var(--fill-0, #BAC2C7)" id="Rectangle 914" />
              <path d={svgPaths.p1047cc00} fill="var(--fill-0, #BAC2C7)" id="Rectangle 915" />
              <path d={svgPaths.p2abdef00} fill="var(--fill-0, #BAC2C7)" id="Rectangle 916" />
              <path d={svgPaths.p355a800} fill="var(--fill-0, #BAC2C7)" id="Rectangle 917" />
              <path d={svgPaths.p38323000} fill="var(--fill-0, #BAC2C7)" id="Rectangle 918" />
              <path d={svgPaths.p29c37240} fill="var(--fill-0, #BAC2C7)" id="Rectangle 919" />
              <path d={svgPaths.p268c2000} fill="var(--fill-0, #BAC2C7)" id="Rectangle 920" />
              <path d={svgPaths.p2dd9e880} fill="var(--fill-0, #BAC2C7)" id="Rectangle 921" />
            </g>
            <path clipRule="evenodd" d={svgPaths.p2541c000} fill="var(--fill-0, #191919)" fillRule="evenodd" id="Vector 56 (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p20ce6e00} fill="var(--fill-0, #E1E3ED)" fillRule="evenodd" id="Line 35 (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p32bfdf00} fill="var(--fill-0, #E1E3ED)" fillRule="evenodd" id="Line 36 (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p176f3600} fill="var(--fill-0, #E1E3ED)" fillRule="evenodd" id="Line 37 (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.pb7dd980} fill="var(--fill-0, #E1E3ED)" fillRule="evenodd" id="Line 38 (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p12b4c800} fill="var(--fill-0, #E1E3ED)" fillRule="evenodd" id="Line 39 (Stroke)" />
            <path clipRule="evenodd" d={svgPaths.p17be1a80} fill="var(--fill-0, #E1E3ED)" fillRule="evenodd" id="Line 40 (Stroke)" />
            <path d={svgPaths.pe05d500} fill="var(--fill-0, #FF583F)" id="Star 2" />
            <g id="99.999.999">
              <path d={svgPaths.p34e74380} fill="#E1E3ED" />
              <path d={svgPaths.p374f0700} fill="#E1E3ED" />
              <path d={svgPaths.p3ecfff80} fill="#E1E3ED" />
              <path d={svgPaths.p1050b300} fill="#E1E3ED" />
              <path d={svgPaths.p3c792300} fill="#E1E3ED" />
              <path d={svgPaths.p544a100} fill="#E1E3ED" />
              <path d={svgPaths.p37bb2200} fill="#E1E3ED" />
              <path d={svgPaths.p87b8a00} fill="#E1E3ED" />
              <path d={svgPaths.p13672a00} fill="#E1E3ED" />
              <path d={svgPaths.pc3bb6c0} fill="#E1E3ED" />
            </g>
          </g>
          <path clipRule="evenodd" d={svgPaths.p38852e00} fill="var(--fill-0, #841A0A)" fillRule="evenodd" id="Rectangle 9316 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.pf566d00} fill="var(--fill-0, #FF583F)" fillRule="evenodd" id="Arrow 12 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p1fe35620} fill="var(--fill-0, #FF583F)" fillRule="evenodd" id="Arrow 13 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p34b4b600} fill="var(--fill-0, #FF583F)" fillRule="evenodd" id="Arrow 14 (Stroke)" />
          <path clipRule="evenodd" d={svgPaths.p19457680} fill="var(--fill-0, #FF583F)" fillRule="evenodd" id="Arrow 15 (Stroke)" />
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="111.966" id="filter0_d_2_26469" width="175.22" x="15.4219" y="6.78942">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
            <feOffset dx="2" dy="2" />
            <feGaussianBlur stdDeviation="5" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2_26469" />
            <feBlend in="SourceGraphic" in2="effect1_dropShadow_2_26469" mode="normal" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Illustration() {
  return (
    <div className="bg-[#f7f8fe] content-stretch flex flex-col h-[138px] items-center justify-center p-[8px] relative rounded-[5px] shrink-0 w-[216px]" data-name="illustration">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[5px]" />
      <Group />
    </div>
  );
}

function Icon() {
  return (
    <div className="bg-[#fff2f0] content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="light_mode">
        <div className="absolute inset-[4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 18.3333">
            <path d={svgPaths.p12c62640} fill="var(--fill-0, #DF4730)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[14px] w-full">Buscá buena luz, idealmente natural</p>
    </div>
  );
}

function Step() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 w-full" data-name="step">
      <Icon />
      <Frame />
    </div>
  );
}

function Icon1() {
  return (
    <div className="bg-[#fff2f0] content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="photo_size_select_actual">
        <div className="absolute inset-[12.5%_4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.3333 15">
            <path d={svgPaths.p3c50ce80} fill="var(--fill-0, #DF4730)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[14px] w-full">La foto debe estar nítida y legible</p>
    </div>
  );
}

function Step1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 w-full" data-name="step">
      <Icon1 />
      <Frame1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="bg-[#fff2f0] content-stretch flex items-center justify-center p-[6px] relative rounded-[100px] shrink-0" data-name="Icon">
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="flash_off">
        <div className="absolute inset-[8.33%_14.29%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.2833 16.6667">
            <path d={svgPaths.p1b78ae00} fill="var(--fill-0, #DF4730)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[14px] w-full">No utilices flash</p>
    </div>
  );
}

function Step2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[8px] shrink-0 w-full" data-name="step">
      <Icon2 />
      <Frame2 />
    </div>
  );
}

function Steps() {
  return (
    <div className="relative shrink-0 w-full" data-name="steps">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center px-[40px] relative size-full">
          <Step />
          <Step1 />
          <Step2 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px relative w-full" data-name="content">
      <Text />
      <Illustration />
      <Steps />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="buttons">
      <div className="bg-[#df4730] h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Continuar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] inset-[86px_0_0_0] items-start pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <Content />
      <Buttons />
    </div>
  );
}

export default function GoIdentityInicioDocumento() {
  return (
    <div className="bg-white relative size-full" data-name="GOIdentity-InicioDocumento">
      <Topbar />
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] right-0 top-0" data-name="StatusBar">
        <LeftArea />
        <div className="h-[44px] mr-[-20.5px] relative shrink-0 w-[210px]" data-name="Notch Area" />
        <RightArea />
      </div>
      <Body />
      <div className="-translate-x-1/2 absolute bg-white bottom-0 content-stretch flex flex-col items-start justify-center left-1/2 w-[360px]" data-name="Navigation">
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