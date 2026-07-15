import svgPaths from "./svg-dy01xv8tqf";

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 whitespace-nowrap" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[16px]">Adidas</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] text-[14px]">Tienda</p>
    </div>
  );
}

function Movement() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[239px]" data-name="movement">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
              <g id="Vector">
                <path d={svgPaths.p10d604f0} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2b60ae00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2a251b00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p215eb200} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p921ad00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2201ee00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2a3a6900} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p3275970} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p16575f00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p30c28e00} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p25ff8300} fill="var(--fill-0, #FF583F)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Text />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="title">
      <Movement />
      <button className="content-stretch cursor-pointer flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Listo</p>
      </button>
    </div>
  );
}

function Amount() {
  return (
    <div className="bg-[#f7f8fe] content-stretch flex flex-col items-center justify-center px-[8px] py-[16px] relative rounded-[8px] shrink-0 w-[328px]" data-name="amount">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[21px] text-right whitespace-nowrap">-$2.560,00</p>
    </div>
  );
}

function Itemlist() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] whitespace-nowrap">Hoy</p>
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#535d66] text-[12px] w-[min-content]">{`26 de marzo de 2024 - 12:32 `}</p>
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

function Itemlist1() {
  return (
    <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Info />
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="content_copy">
        <div className="absolute inset-[4.17%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 22">
            <path d={svgPaths.p10e56200} fill="var(--fill-0, #DF4730)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="content">
      <Amount />
      <Itemlist />
      <Itemlist1 />
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start justify-end pb-[40px] pt-[16px] px-[16px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="BottomSheet">
      <Title />
      <Content />
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
  );
}