import svgPaths from "./svg-j0d55btxhs";

function Icon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="icon">
      <div className="col-1 ml-0 mt-0 relative row-1 size-[48px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
          <circle cx="24" cy="24" fill="var(--fill-0, #FFE7E3)" id="Ellipse 7" r="24" />
        </svg>
      </div>
      <div className="col-1 ml-[12px] mt-[12px] overflow-clip relative row-1 size-[24px]" data-name="account_balance">
        <div className="absolute inset-[8.33%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
            <path d={svgPaths.pc7ff540} fill="var(--fill-0, #FF583F)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[16px] w-full">Alan Frias</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] text-[14px] w-full">CUIT/CUIL: 20-12345678-0</p>
    </div>
  );
}

function Receiver() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-w-px relative" data-name="receiver">
      <Icon />
      <Text />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="title">
      <Receiver />
      <button className="content-stretch cursor-pointer flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Cerrar</p>
      </button>
    </div>
  );
}

function Itemlist() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic px-[16px] py-[12px] relative size-full text-[12px]">
        <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] w-full">Banco</p>
        <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#535d66] w-full">Santander</p>
      </div>
    </div>
  );
}

function Itemlist1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic px-[16px] py-[12px] relative size-full text-[12px]">
        <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] w-full">Tipo de cuenta</p>
        <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#535d66] w-full">Caja de ahorro</p>
      </div>
    </div>
  );
}

function Info() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative text-[12px]" data-name="Info">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] w-full">CBU/CVU</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#535d66] w-full">0700340000005456928347</p>
    </div>
  );
}

function Itemlist2() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <Info />
        </div>
      </div>
    </div>
  );
}

function Info1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[1.5] min-w-px not-italic relative text-[12px]" data-name="Info">
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] w-full">Alias</p>
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#535d66] w-full">alan.frias</p>
    </div>
  );
}

function Itemlist3() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name="itemlist">
      <div aria-hidden className="absolute border border-[#edeff6] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <Info1 />
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

function Buttons() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="buttons">
      <a className="bg-[#df4730] cursor-pointer h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Continuar</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[16px] px-[16px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="BottomSheet">
      <Title />
      <Content />
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