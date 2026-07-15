import svgPaths from "./svg-ldsrusgnpz";

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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Preguntas frecuentes</p>
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
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[14px] text-center whitespace-nowrap">Busca sobre un tema</p>
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

function Name() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] w-full">¿Cómo puedo ingresar dinero a mi billetera virtual?</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Name />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94 8">
            <path d={svgPaths.p1bd83a00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] w-full">Ingreso de dinero</p>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <Left1 />
            <Right />
          </div>
        </div>
      </div>
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[12px] w-[min-content]">¿Cómo puedo transferir dinero a otras cuentas bancarias?</p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Name1 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94 8">
            <path d={svgPaths.p1bd83a00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] w-full">Transferencias</p>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <Left2 />
            <Right1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[12px] w-[min-content]">¿Cómo puedo pagar con QR en comercios?</p>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Name2 />
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94 8">
            <path d={svgPaths.p1bd83a00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[12px] w-[min-content]">¿Cómo puedo pagar servicios con mi billetera virtual?</p>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Name3 />
    </div>
  );
}

function Right3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94 8">
            <path d={svgPaths.p1bd83a00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[12px] w-[min-content]">¿Cómo puedo ver mi actividad en la billetera virtual?</p>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Name4 />
    </div>
  );
}

function Right4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94 8">
            <path d={svgPaths.p1bd83a00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[12px] w-[min-content]">¿Cómo puedo obtener una tarjeta prepaga asociada a mi billetera virtual?</p>
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Name5 />
    </div>
  );
}

function Right5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94 8">
            <path d={svgPaths.p1bd83a00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] w-full">Pagos</p>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <Left3 />
            <Right2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <Left4 />
            <Right3 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <Left5 />
            <Right4 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <Left6 />
            <Right5 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Name6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[12px] w-[min-content]">¿Cómo puedo cambiar mi contraseña de la billetera virtual?</p>
    </div>
  );
}

function Left7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Name6 />
    </div>
  );
}

function Right6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94 8">
            <path d={svgPaths.p1bd83a00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Name7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[12px] w-[min-content]">¿Qué debo hacer si pierdo mi teléfono o me lo roban?</p>
    </div>
  );
}

function Left8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Name7 />
    </div>
  );
}

function Right7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94 8">
            <path d={svgPaths.p1bd83a00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Name8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[12px] w-[min-content]">¿Dónde puedo encontrar más información sobre la billetera virtual?</p>
    </div>
  );
}

function Left9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Name8 />
    </div>
  );
}

function Right8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.94 8">
            <path d={svgPaths.p1bd83a00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div3() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="div">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] w-full">Otros</p>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <Left7 />
            <Right6 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <Left8 />
            <Right7 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center p-[8px] relative size-full">
            <Left9 />
            <Right8 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px overflow-clip relative w-full" data-name="content">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="search">
        <Field />
      </div>
      <Div />
      <Div1 />
      <Div2 />
      <Div3 />
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

export default function FaQs() {
  return (
    <div className="relative size-full" data-name="FAQs1">
      <div className="absolute bg-white h-[800px] left-0 overflow-clip top-0 w-[360px]" data-name="FAQs">
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