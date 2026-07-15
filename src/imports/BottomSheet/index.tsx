function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[14px]">Selecciona cómo ingresar dinero</p>
      <button className="content-stretch cursor-pointer flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Cerrar</p>
      </button>
    </div>
  );
}

function Itemlist() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[21px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[12px] w-full">Transferencia</p>
    </div>
  );
}

function Itemlist1() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[21px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[12px] w-full">Débito inmediato</p>
    </div>
  );
}

function Itemlist2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[16px] py-[21px] relative rounded-[8px] shrink-0 w-[328px]" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[12px] w-full">Efectivo</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0" data-name="List">
      <Itemlist />
      <Itemlist1 />
      <Itemlist2 />
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[16px] px-[16px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="BottomSheet">
      <Title />
      <List />
      <div className="absolute bg-white bottom-[-56px] content-stretch flex flex-col items-start justify-center left-0 right-0" data-name="Navigation">
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