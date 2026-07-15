import svgPaths from "./svg-rgzfs891kp";
import { imgRectangle2 } from "./svg-h35fr";

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
      <a className="content-stretch cursor-pointer flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.175 10">
              <path d={svgPaths.pfe69d00} fill="var(--fill-0, #DF4730)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Volver</p>
      </a>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Confirma tu intercambio</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="Price">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[18px]">9,082569 USDT</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="amount">
      <div className="bg-[#f7f8fe] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Coin=USDT">
          <div className="absolute inset-[8.33%_3.06%_8.33%_4.69%]" data-name="vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.4501 16.6667">
              <path clipRule="evenodd" d={svgPaths.p20233f80} fill="var(--fill-0, #78838D)" fillRule="evenodd" id="vector" />
            </svg>
          </div>
        </div>
      </div>
      <Price />
    </div>
  );
}

function Div() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center px-[8px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] w-full">Recibes aproximadamente</p>
          <Amount />
        </div>
      </div>
    </div>
  );
}

function Price1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Sora:Bold',sans-serif] gap-[2px] items-center leading-[1.5] min-w-px not-italic relative text-[#535d66] text-[14px] whitespace-nowrap" data-name="Price">
      <p className="relative shrink-0">10.000</p>
      <p className="relative shrink-0">ARS</p>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="amount">
      <div className="bg-[#f7f8fe] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="relative shrink-0 size-[20px]" data-name="Flag=Argentina">
          <div className="absolute bg-white border-[#f5f5f5] border-[0.5px] border-solid inset-[12.5%_0_16.67%_0] rounded-[2px]" data-name="Mask" />
          <div className="absolute inset-[12.5%_0_63.89%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24px_17px]" style={{ maskImage: `url("${imgRectangle2}")` }}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 4.72222">
              <path clipRule="evenodd" d="M0 4.72222H20V0H0V4.72222Z" fill="var(--fill-0, #88BBE8)" fillRule="evenodd" id="Rectangle 2" />
            </svg>
          </div>
          <div className="absolute inset-[59.72%_0_16.67%_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_-11.333px] mask-size-[24px_17px]" style={{ maskImage: `url("${imgRectangle2}")` }}>
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 4.72222">
              <path clipRule="evenodd" d="M0 4.72222H20V0H0V4.72222Z" fill="var(--fill-0, #88BBE8)" fillRule="evenodd" id="Rectangle 2" />
            </svg>
          </div>
          <div className="absolute inset-[40.83%_42.86%_45%_42.86%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-10.286px_-6.8px] mask-size-[24px_17px]" style={{ maskImage: `url("${imgRectangle2}")` }} data-name="Oval 1">
            <div className="absolute inset-[-23.53%_-23.33%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.19048 4.16667">
                <path d={svgPaths.p1669e300} fill="var(--fill-0, #F4B32E)" id="Oval 1" stroke="var(--stroke-0, #DB7A2C)" strokeWidth="0.666667" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Price1 />
    </div>
  );
}

function Div1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div">
      <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[2px] items-start justify-center px-[8px] py-[12px] relative size-full">
          <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] w-full">A cambio de</p>
          <Amount1 />
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
    </div>
  );
}

function Exchange() {
  return (
    <div className="content-stretch flex gap-[4px] items-start justify-end relative shrink-0 text-[#535d66]" data-name="exchange">
      <p className="relative shrink-0">1 USDT = 998,45</p>
      <p className="relative shrink-0">ARS</p>
    </div>
  );
}

function Il() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="il">
      <p className="relative shrink-0 text-[#78838d]">Tasa de cambio</p>
      <Exchange />
    </div>
  );
}

function Il1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="il">
      <p className="relative shrink-0 text-[#78838d]">Comisión</p>
      <p className="relative shrink-0 text-[#535d66]">0,30% (0,032 USDT)</p>
    </div>
  );
}

function Ul() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Sora:Regular',sans-serif] gap-[8px] items-start leading-[1.5] not-italic relative shrink-0 text-[12px] w-full whitespace-nowrap" data-name="ul">
      <Il />
      <Il1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-center min-h-px relative w-full" data-name="content">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[14px] w-full">
        <p className="leading-[1.5]">Revisa el detalle:</p>
      </div>
      <Detail />
      <Ul />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="buttons">
      <div className="h-[45px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="SlideButton">
        <div className="-translate-y-1/2 absolute bg-[#df4730] content-stretch flex gap-[4px] h-[45px] items-center justify-center left-[44px] p-[12px] right-0 rounded-br-[4px] rounded-tr-[4px] top-1/2" data-name="button2">
          <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Desliza para confirmar</p>
        </div>
        <div className="-translate-y-1/2 absolute bg-[#ff583f] content-stretch flex gap-[4px] h-[45px] items-center justify-end left-0 p-[12px] rounded-bl-[4px] rounded-tl-[4px] top-1/2" data-name="button1">
          <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
            <div className="absolute bottom-1/4 left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 10">
                <g id="Vector">
                  <path d={svgPaths.p26359200} fill="var(--fill-0, white)" />
                  <path d={svgPaths.p33144d00} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
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
      <Content />
      <Buttons />
    </div>
  );
}

export default function ResumenIntercambio() {
  return (
    <div className="relative size-full" data-name="ResumenIntercambio">
      <div className="absolute bg-white h-[800px] left-0 overflow-clip top-0 w-[360px]" data-name="ResumenIntercambio">
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