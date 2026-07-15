import svgPaths from "./svg-i8ltmlw54u";
import imgCapturaDePantalla20231024ALaS11035 from "./7643ae74a74f9053e05b02db4ee75353cde67841.png";

function Frame2() {
  return (
    <div className="bg-[#f7f8fe] content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[8px] shrink-0">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[18px] text-center whitespace-nowrap">{`Mira hacia la derecha `}</p>
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="arrow_circle_right">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
            <path d={svgPaths.p36fc5100} fill="var(--fill-0, #191919)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Bullets() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-center min-h-px relative w-full" data-name="bullets">
      <Frame2 />
    </div>
  );
}

function Camera() {
  return (
    <div className="h-[343px] overflow-clip relative rounded-[8px] shrink-0 w-full" data-name="camera">
      <div className="absolute inset-[0.15%_-47.12%_-0.44%_-47.44%] rounded-[8px]" data-name="Captura de pantalla 2023-10-24 a la(s) 11.03 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
          <img alt="" className="absolute h-[167.15%] left-[-20.1%] max-w-none top-[-6.69%] w-[126.37%]" src={imgCapturaDePantalla20231024ALaS11035} />
        </div>
      </div>
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 328 343">
        <path d={svgPaths.p2733c400} fill="var(--fill-0, black)" fillOpacity="0.6" id="Exclude" />
      </svg>
      <div className="absolute inset-[2.62%_8.33%_2.33%_8.65%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 272.282 326">
          <path d={svgPaths.p3dba7e00} id="Ellipse 1174" stroke="var(--stroke-0, white)" strokeWidth="4" />
        </svg>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px relative w-full" data-name="buttons">
      <a className="bg-[#df4730] cursor-pointer h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Tomar foto</p>
          </div>
        </div>
      </a>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] inset-[86px_0_0_0] items-start pb-[24px] pt-[16px] px-[16px]" data-name="body">
      <Bullets />
      <Camera />
      <Buttons />
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

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Add />
      <div className="[word-break:break-word] col-1 flex flex-col font-['Sora:Bold',sans-serif] h-[13px] justify-center ml-[5px] mt-[4px] not-italic relative row-1 text-[#df4730] text-[12px] text-center w-[11px]">
        <p className="leading-[1.5]">2</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center min-w-px relative">
      <Group />
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Verificación de identidad</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] relative size-full">
          <Frame />
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
      <Frame1 />
      <ProgresBar />
    </div>
  );
}

export default function Component() {
  return (
    <div className="bg-white relative size-full" data-name="9">
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
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] right-0 top-0" data-name="StatusBar">
        <LeftArea />
        <div className="h-[44px] mr-[-20.5px] relative shrink-0 w-[210px]" data-name="Notch Area" />
        <RightArea />
      </div>
      <Topbar />
    </div>
  );
}