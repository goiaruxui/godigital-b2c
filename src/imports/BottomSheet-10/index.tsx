import svgPaths from "./svg-b5fh90nd3d";

function Info() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Info">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">Datos de tu tarjeta</p>
    </div>
  );
}

function Merchant() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[239px]" data-name="Merchant">
      <Info />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
      <Merchant />
      <button className="content-stretch cursor-pointer flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Listo</p>
      </button>
    </div>
  );
}

function Info1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-name="Info">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d]">Número de la tarjeta</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#535d66]">4517 2563 3167 2451</p>
    </div>
  );
}

function Itemlist() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Info1 />
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

function Info2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-name="Info">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d]">Nombre y apellido</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#535d66]">Martinez Laura</p>
    </div>
  );
}

function Itemlist1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Info2 />
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

function Info3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-name="Info">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d]">Fecha de vencimiento</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#535d66]">04/30</p>
    </div>
  );
}

function Itemlist2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Info3 />
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

function Info4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] whitespace-nowrap" data-name="Info">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d]">Código de seguridad</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#535d66]">•••</p>
    </div>
  );
}

function Itemlist3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] py-[12px] relative size-full">
          <Info4 />
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="remove_red_eye">
            <div className="absolute inset-[18.75%_4.17%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 15">
                <path d={svgPaths.p2b2cd700} fill="var(--fill-0, #DF4730)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="content">
      <Itemlist />
      <Itemlist1 />
      <Itemlist2 />
      <Itemlist3 />
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[16px] px-[16px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="BottomSheet">
      <Title />
      <Content />
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