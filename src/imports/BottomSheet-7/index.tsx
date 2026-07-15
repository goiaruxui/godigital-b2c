function Info() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] font-['Sora:Bold',sans-serif] gap-[4px] items-start leading-[1.5] min-w-px not-italic relative text-[#191919] text-[16px] whitespace-nowrap" data-name="Info">
      <p className="relative shrink-0">Límite de tu tarjeta</p>
      <p className="relative shrink-0">Gollet</p>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="title">
      <Info />
      <button className="content-stretch cursor-pointer flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Cerrar</p>
      </button>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#535d66] text-[14px]">Desde aquí puedes revisar y ajustar los límites de tus compras diarias con la tarjeta.</p>
    </div>
  );
}

function Value() {
  return (
    <div className="content-stretch flex gap-[2px] items-center justify-end relative shrink-0" data-name="value">
      <div className="content-stretch flex flex-col items-center relative rounded-[6px] shrink-0" data-name="Slider Value Label">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">500.000</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center relative rounded-[6px] shrink-0" data-name="Slider Value Label">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[18px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">ARS</p>
        </div>
      </div>
    </div>
  );
}

function Limit() {
  return (
    <div className="content-stretch flex items-baseline justify-between relative shrink-0 w-full" data-name="limit">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#191919] text-[16px] whitespace-nowrap">
        <p className="leading-[1.5]">Límite diario</p>
      </div>
      <Value />
    </div>
  );
}

function Marks() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-start justify-between left-0 right-0 top-1/2" data-name="Marks">
      <div className="relative rounded-[2px] shrink-0 size-[2px]" data-name="Slider Mark">
        <div className="absolute bg-[#df4730] left-0 rounded-[2px] size-[2px] top-0" data-name="Rec" />
        <div className="absolute bg-white left-0 opacity-80 rounded-[2px] size-[2px] top-0" data-name="Rec" />
      </div>
      <div className="relative rounded-[2px] shrink-0 size-[2px]" data-name="Slider Mark">
        <div className="absolute bg-[#df4730] left-0 rounded-[2px] size-[2px] top-0" data-name="Rec" />
        <div className="absolute bg-white left-0 opacity-80 rounded-[2px] size-[2px] top-0" data-name="Rec" />
      </div>
      <div className="relative rounded-[2px] shrink-0 size-[2px]" data-name="Slider Mark">
        <div className="absolute bg-[#df4730] left-0 rounded-[2px] size-[2px] top-0" data-name="Rec" />
      </div>
      <div className="relative rounded-[2px] shrink-0 size-[2px]" data-name="Slider Mark">
        <div className="absolute bg-[#df4730] left-0 rounded-[2px] size-[2px] top-0" data-name="Rec" />
      </div>
      <div className="relative rounded-[2px] shrink-0 size-[2px]" data-name="Slider Mark">
        <div className="absolute bg-[#df4730] left-0 rounded-[2px] size-[2px] top-0" data-name="Rec" />
      </div>
      <div className="relative rounded-[2px] shrink-0 size-[2px]" data-name="Slider Mark">
        <div className="absolute bg-[#df4730] left-0 rounded-[2px] size-[2px] top-0" data-name="Rec" />
      </div>
      <div className="relative rounded-[2px] shrink-0 size-[2px]" data-name="Slider Mark">
        <div className="absolute bg-[#df4730] left-0 rounded-[2px] size-[2px] top-0" data-name="Rec" />
      </div>
    </div>
  );
}

function Slider() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Slider">
      <div className="-translate-y-1/2 absolute bg-[#df4730] h-[4px] left-0 opacity-38 right-0 rounded-[12px] top-1/2" data-name="Slider Rail" />
      <div className="-translate-y-1/2 absolute bg-[#df4730] h-[6px] left-0 rounded-[12px] top-1/2 w-[40px]" data-name="Slider Track" />
      <Marks />
      <div className="-translate-y-1/2 absolute bg-[#df4730] left-[38px] overflow-clip rounded-[20px] size-[20px] top-1/2" data-name="Slider Thumb">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="Color">
          <div className="absolute inset-[-20%_-25%_-30%_-25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
              <g filter="url(#filter0_ddd_21_1730)" id="Color">
                <circle cx="15" cy="14" fill="var(--fill-0, #DF4730)" r="10" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30" id="filter0_ddd_21_1730" width="30" x="0" y="0">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="2.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                  <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_21_1730" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="1" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0" />
                  <feBlend in2="effect1_dropShadow_21_1730" mode="normal" result="effect2_dropShadow_21_1730" />
                  <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                  <feMorphology in="SourceAlpha" operator="erode" radius="2" result="effect3_dropShadow_21_1730" />
                  <feOffset dy="3" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                  <feBlend in2="effect2_dropShadow_21_1730" mode="normal" result="effect3_dropShadow_21_1730" />
                  <feBlend in="SourceGraphic" in2="effect3_dropShadow_21_1730" mode="normal" result="shape" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function StartValue() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative" data-name="start value">
      <div className="content-stretch flex flex-col items-center relative rounded-[6px] shrink-0" data-name="Slider Value Label">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535d66] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">0</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center relative rounded-[6px] shrink-0" data-name="Slider Value Label">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535d66] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">ARS</p>
        </div>
      </div>
    </div>
  );
}

function FinalValue() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center justify-end min-w-px relative" data-name="final value">
      <div className="content-stretch flex flex-col items-center relative rounded-[6px] shrink-0" data-name="Slider Value Label">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535d66] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">3.000.000</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-center relative rounded-[6px] shrink-0" data-name="Slider Value Label">
        <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#535d66] text-[14px] text-center whitespace-nowrap">
          <p className="leading-[1.5]">ARS</p>
        </div>
      </div>
    </div>
  );
}

function Values() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Values">
      <StartValue />
      <FinalValue />
    </div>
  );
}

function Select() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Select">
      <Limit />
      <div className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-name="Slider">
        <Slider />
        <Values />
      </div>
    </div>
  );
}

function Buttons() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col gap-[8px] items-start justify-end relative shrink-0 w-full" data-name="buttons">
      <div className="bg-[#df4730] h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Confirmar</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default function BottomSheet() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start pb-[40px] pt-[16px] px-[16px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="BottomSheet">
      <Title />
      <Content />
      <Select />
      <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start justify-center left-0 right-0" data-name="Navigation">
        <div className="relative shrink-0 w-full" data-name="HomeIndicator">
          <div className="flex flex-col items-center justify-center size-full">
            <div className="content-stretch flex flex-col items-center justify-center pb-[9px] pt-[4px] px-[120px] relative size-full">
              <div className="bg-[#535d66] h-[5px] relative rounded-[5px] shrink-0 w-[134px]" data-name="Indicator" />
            </div>
          </div>
        </div>
      </div>
      <Buttons />
    </div>
  );
}