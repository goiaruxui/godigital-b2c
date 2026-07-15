import svgPaths from "./svg-8o1erc0l9v";

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

function Lines() {
  return (
    <div className="h-[18px] relative shrink-0 w-[32px]" data-name="Lines">
      <div className="absolute inset-[-5.56%_-12.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 20">
          <g id="Lines">
            <path d="M4 1H36" id="Vector 5" stroke="var(--stroke-0, #BAC2C7)" strokeLinecap="round" strokeWidth="2" />
            <path d="M1 10H39" id="Vector 6" stroke="var(--stroke-0, #BAC2C7)" strokeLinecap="round" strokeWidth="2" />
            <path d="M4 19H36" id="Vector 7" stroke="var(--stroke-0, #BAC2C7)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Bill() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[8px] items-center justify-center ml-[46px] mt-[40px] px-[16px] py-[10px] relative rounded-[8px] row-1" data-name="Bill">
      <div className="overflow-clip relative shrink-0 size-[40px]" data-name="check-line">
        <div className="absolute bottom-1/4 left-[15.15%] right-[14.14%] top-[24.91%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.285 20.035">
            <path d={svgPaths.p228f2570} fill="var(--fill-0, #4DA66B)" id="Vector" />
          </svg>
        </div>
      </div>
      <Lines />
    </div>
  );
}

function Illustration() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Illustration">
      <div className="col-1 ml-[19px] mt-0 relative row-1 size-[126px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 126">
          <circle cx="63" cy="63" fill="var(--fill-0, #4DA66B)" id="Ellipse 15" r="63" />
        </svg>
      </div>
      <Bill />
      <div className="col-1 ml-[5px] mt-0 relative row-1 size-[16px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #E6F7EC)" id="Ellipse 16" r="8" />
        </svg>
      </div>
      <div className="col-1 ml-[147px] mt-[92px] relative row-1 size-[16px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <circle cx="8" cy="8" fill="var(--fill-0, #E6F7EC)" id="Ellipse 16" r="8" />
        </svg>
      </div>
      <div className="col-1 ml-0 mt-[95px] relative row-1 size-[9px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #E6F7EC)" id="Ellipse 18" r="4.5" />
        </svg>
      </div>
      <div className="col-1 ml-[150px] mt-[8px] relative row-1 size-[9px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 9">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #E6F7EC)" id="Ellipse 18" r="4.5" />
        </svg>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[4px] items-center leading-[1.5] not-italic relative shrink-0 text-center w-full" data-name="Text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[16px] w-full">¡Pago exitoso!</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#535d66] text-[14px] w-full">El pago se ha realizado correctamente.</p>
    </div>
  );
}

function Itemlist() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic px-[16px] py-[12px] relative size-full text-[12px]">
        <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] whitespace-nowrap">Empresa</p>
        <p className="font-['Sora:Bold',sans-serif] min-w-full relative shrink-0 text-[#535d66] w-[min-content]">Adidas</p>
      </div>
    </div>
  );
}

function Itemlist1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic px-[16px] py-[12px] relative size-full text-[12px]">
        <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] whitespace-nowrap">Importe</p>
        <p className="font-['Sora:Bold',sans-serif] min-w-full relative shrink-0 text-[#535d66] w-[min-content]">$2.560,00</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-name="Info">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d]">Nº transacción</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#535d66]">23010412432431</p>
    </div>
  );
}

function Itemlist2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Info />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="content_copy">
            <div className="absolute inset-[4.17%_10.42%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 22">
                <path d={svgPaths.p10e56200} fill="var(--fill-0, #DF4730)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center justify-center relative shrink-0 w-full" data-name="list">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[14px] w-full">Detalle del pago</p>
      <Itemlist />
      <Itemlist1 />
      <Itemlist2 />
      <div className="relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
              <div className="absolute inset-[14.58%_18.75%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 14.1667">
                  <path d={svgPaths.p1c3d8c00} fill="var(--fill-0, #DF4730)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Reportar un problema</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center justify-center min-h-px relative w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[16px] items-center justify-center py-[8px] relative shrink-0 w-full" data-name="StatusIllustration">
        <Illustration />
        <Text />
      </div>
      <List />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="buttons">
      <div className="h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div aria-hidden className="absolute border border-[#df4730] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Ver actividad</p>
          </div>
        </div>
      </div>
      <div className="bg-[#df4730] h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Ir al inicio</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] inset-[44px_0_0_0] items-center justify-center pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <Content />
      <Buttons />
    </div>
  );
}

export default function PagoQrSuccess() {
  return (
    <div className="relative size-full" data-name="PagoQR-Success">
      <div className="absolute bg-white inset-0 overflow-clip" data-name="PagoQR-Success">
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