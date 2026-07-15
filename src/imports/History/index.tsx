import svgPaths from "./svg-qgpml4lfd4";

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Actividad</p>
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
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[14px] text-center whitespace-nowrap">Busca un movimiento</p>
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

function Search() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="search">
      <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative" data-name="search">
        <Field />
      </div>
      <div className="relative rounded-[4px] self-stretch shrink-0 w-[89px]" data-name="button">
        <div aria-hidden className="absolute border border-[#e1e3ed] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[6px] items-center justify-center px-[12px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="tune">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                  <path d={svgPaths.p8782f00} fill="var(--fill-0, #535D66)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[14px] text-center whitespace-nowrap">Filtros</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateAndTime() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Hoy</p>
      <p className="relative shrink-0">15:21</p>
    </div>
  );
}

function Name() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] text-left whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Claro</p>
      <DateAndTime />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 16.6667">
              <path d={svgPaths.p3f89ea00} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name />
    </div>
  );
}

function Amount1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] items-start justify-end leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-right whitespace-nowrap" data-name="Amount">
      <p className="relative shrink-0">-</p>
      <p className="relative shrink-0">$7.846,62</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount1 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount />
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

function DateAndTime1() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Hoy</p>
      <p className="relative shrink-0">14:12</p>
    </div>
  );
}

function Name1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] text-left whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Transferencia enviada</p>
      <DateAndTime1 />
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[18.75%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
              <path d={svgPaths.p7d35f80} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name1 />
    </div>
  );
}

function Amount3() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] items-start justify-end leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-right whitespace-nowrap" data-name="Amount">
      <p className="relative shrink-0">-</p>
      <p className="relative shrink-0">$10.000,00</p>
    </div>
  );
}

function Amount2() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount3 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount2 />
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

function DateAndTime2() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Hoy</p>
      <p className="relative shrink-0">12:32</p>
    </div>
  );
}

function Name2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] text-left whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Adidas</p>
      <DateAndTime2 />
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
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
      <Name2 />
    </div>
  );
}

function Amount5() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] items-start justify-end leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] text-right whitespace-nowrap" data-name="Amount">
      <p className="relative shrink-0">-</p>
      <p className="relative shrink-0">$2.560,00</p>
    </div>
  );
}

function Amount4() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount5 />
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount4 />
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

function List() {
  return (
    <div className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <button className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left1 />
            <Right />
          </div>
        </div>
      </button>
      <button className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left2 />
            <Right1 />
          </div>
        </div>
      </button>
      <button className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left3 />
            <Right2 />
          </div>
        </div>
      </button>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start justify-center relative shrink-0 w-full" data-name="div">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[16px] whitespace-nowrap">Hoy</p>
      <List />
    </div>
  );
}

function DateAndTime3() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[4px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Ayer</p>
      <p className="relative shrink-0">14:12</p>
    </div>
  );
}

function Name3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[12px] text-left whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Ingreso de dinero</p>
      <DateAndTime3 />
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[18.75%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5 12.5">
              <path d={svgPaths.p1712b600} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name3 />
    </div>
  );
}

function Amount7() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] items-start justify-end leading-[1.5] not-italic relative shrink-0 text-[#289b4f] text-[12px] text-right whitespace-nowrap" data-name="Amount">
      <p className="relative shrink-0">+</p>
      <p className="relative shrink-0">$25.000,00</p>
    </div>
  );
}

function Amount6() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount7 />
    </div>
  );
}

function Right3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount6 />
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

function List1() {
  return (
    <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left4 />
            <Right3 />
          </div>
        </div>
      </div>
    </button>
  );
}

function Div1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="div">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#535d66] text-[16px] whitespace-nowrap">Ayer</p>
      <List1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px relative w-full" data-name="content">
      <Div />
      <Div1 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] inset-[44px_0_74px_0] items-center pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="topbar">
        <Title />
      </div>
      <Search />
      <Content />
    </div>
  );
}

function UnstyledIconButton() {
  return (
    <div className="content-stretch flex items-center p-[12px] relative rounded-[48px] shrink-0" data-name="UnstyledIconButton">
      <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Style=Outlined">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
            <g id="Vector">
              <path d="M0 8H8V0H0V8ZM2 2H6V6H2V2Z" fill="var(--fill-0, white)" />
              <path d={svgPaths.p286e6700} fill="var(--fill-0, white)" />
              <path d={svgPaths.pe90b000} fill="var(--fill-0, white)" />
              <path d="M18 16H16V18H18V16Z" fill="var(--fill-0, white)" />
              <path d="M12 10H10V12H12V10Z" fill="var(--fill-0, white)" />
              <path d="M14 12H12V14H14V12Z" fill="var(--fill-0, white)" />
              <path d="M12 14H10V16H12V14Z" fill="var(--fill-0, white)" />
              <path d="M14 16H12V18H14V16Z" fill="var(--fill-0, white)" />
              <path d="M16 14H14V16H16V14Z" fill="var(--fill-0, white)" />
              <path d="M16 10H14V12H16V10Z" fill="var(--fill-0, white)" />
              <path d="M18 12H16V14H18V12Z" fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ff583f] content-stretch flex flex-col items-center justify-center left-[calc(50%-0.38px)] rounded-[48px] top-[-4px]" data-name="IconButton">
      <div aria-hidden className="absolute border-3 border-[#fff2f0] border-solid inset-[-3px] pointer-events-none rounded-[51px]" />
      <UnstyledIconButton />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex h-[56px] items-center relative shrink-0 w-full" data-name="Nav">
      <div aria-hidden className="absolute border-[#e1e3ed] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Style=Outlined">
              <div className="absolute inset-[14.58%_8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
                  <path d={svgPaths.p11aa2f00} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-center whitespace-nowrap">Inicio</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Style=Outlined">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p23c2aa80} fill="var(--fill-0, #FF583F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#ff583f] text-[12px] text-center whitespace-nowrap">Actividad</p>
            <div className="absolute h-0 left-0 right-[-0.25px] top-[2px]" data-name="line">
              <div className="absolute inset-[-2px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 2">
                  <line id="line" stroke="var(--stroke-0, #FF583F)" strokeWidth="2" x2="72" y1="1" y2="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
            <IconButton />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[56px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Style=Outlined">
              <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16">
                  <path d={svgPaths.p28173a00} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-center whitespace-nowrap">Tarjetas</p>
          </div>
        </div>
      </div>
      <a className="cursor-pointer flex-[1_0_0] h-[56px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[16px] py-[8px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="Style=Outlined">
              <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 12">
                  <path d={svgPaths.p6b54880} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-center whitespace-nowrap">Más</p>
          </div>
        </div>
      </a>
    </div>
  );
}

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

export default function History() {
  return (
    <div className="bg-white relative size-full" data-name="History">
      <div className="absolute bg-white inset-0 overflow-clip" data-name="Actividad">
        <Body />
        <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start justify-center left-0 right-0" data-name="Navigation">
          <Nav />
          <div className="relative shrink-0 w-full" data-name="HomeIndicator">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center pb-[9px] pt-[4px] px-[120px] relative size-full">
                <div className="bg-[#535d66] h-[5px] relative rounded-[5px] shrink-0 w-[134px]" data-name="Indicator" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] right-0 top-0" data-name="StatusBar">
          <LeftArea />
          <div className="h-[44px] mr-[-20.5px] relative shrink-0 w-[210px]" data-name="Notch Area" />
          <RightArea />
        </div>
      </div>
    </div>
  );
}