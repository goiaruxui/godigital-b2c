import svgPaths from "./svg-y35jkf4oz9";

function TopSection() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full" data-name="Top section">
      <div className="bg-[#fff6f6] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
              <path d={svgPaths.p10a47380} fill="var(--fill-0, #B83232)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[16px] text-center w-[min-content]">Estás por activar tu tarjeta</p>
      <div className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#535d66] text-[14px] text-center w-[min-content]">
        <p className="leading-[1.5] mb-0">Podrás volver a utilizarla para hacer pagos o compras en comercios y tiendas online.</p>
        <p className="leading-[1.5]">¿Deseas continuar?</p>
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="buttons">
      <div className="bg-[#df4730] h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Si, activar tarjeta</p>
          </div>
        </div>
      </div>
      <div className="h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div aria-hidden className="absolute border border-[#df4730] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">No, cancelar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-center pb-[40px] pt-[16px] px-[16px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="BottomSheet">
      <TopSection />
      <Buttons />
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