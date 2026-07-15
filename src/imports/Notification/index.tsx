import svgPaths from "./svg-3yaxl427lo";

function LogoGollet() {
  return (
    <div className="absolute inset-[5%_6.5%_10%_7.89%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.8557 12.92">
        <g id="Logo Gollet">
          <g id="Gonnectia">
            <path d={svgPaths.p39037e00} fill="var(--fill-0, white)" id="Vector" />
            <path d={svgPaths.p23ba6c00} fill="var(--fill-0, white)" id="Vector_2" />
          </g>
          <path d={svgPaths.p193db00} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.p24bc9780} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[38px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[8.867px] size-[38px] top-0" data-name="App Icon">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(189.713deg, rgb(255, 88, 63) 7.7436%, rgb(223, 71, 48) 116.22%)" }} data-name="No App Icon" />
      </div>
      <div className="absolute inset-[30%_14.17%_30%_12.5%]" data-name="Logo">
        <LogoGollet />
      </div>
    </div>
  );
}

function TitleAndTime() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title and Time">
      <div className="[word-break:break-word] content-stretch flex gap-[16px] items-start leading-[20px] pr-[8px] relative size-full">
        <p className="flex-[1_0_0] font-['Roboto:SemiBold',sans-serif] font-semibold min-w-px relative text-[15px] text-black tracking-[-0.4px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Ingresaste $25.000
        </p>
        <p className="font-['Roboto:Regular',sans-serif] font-normal relative shrink-0 text-[#3d3d3d] text-[13px] text-right whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          9:41 AM
        </p>
      </div>
    </div>
  );
}

function TitleTimeAndDescription() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-w-px relative self-stretch" data-name="Title, Time and Description">
      <TitleAndTime />
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[15px] text-black tracking-[-0.4px] w-full" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ya tienes disponible el dinero que has ingresado para utilizarlo cómo quieras.
      </p>
    </div>
  );
}

function Notification1() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full" data-name="Notification">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[24px]">
        <div className="absolute bg-[rgba(166,166,166,0.7)] inset-0 rounded-[24px]" />
        <div className="absolute backdrop-blur-[75px] bg-[#333] inset-0 mix-blend-color-dodge rounded-[24px]" />
      </div>
      <div className="content-stretch flex gap-[10px] items-start pb-[12px] pt-[14px] px-[14px] relative size-full">
        <div className="content-stretch flex flex-col gap-[3.167px] items-center relative shrink-0 w-[38px]" data-name="iconapp">
          <Frame />
        </div>
        <TitleTimeAndDescription />
      </div>
    </div>
  );
}

export default function Notification() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center pt-[40px] relative size-full" data-name="Notification">
      <div className="content-stretch flex flex-col items-start relative shrink-0 w-[338px]" data-name="Notification">
        <Notification1 />
      </div>
    </div>
  );
}