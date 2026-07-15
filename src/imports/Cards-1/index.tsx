import svgPaths from "./svg-1jw31mp659";
import imgVector76 from "./97c15a6bc7a4c8dd86ebf5ba0a0df1d470d490e9.png";

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Tarjetas</p>
      <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 11.6667">
              <path d={svgPaths.p2f57dbf0} fill="var(--fill-0, #DF4730)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Añadir nueva</p>
      </div>
    </div>
  );
}

function LogoGollet() {
  return (
    <div className="absolute inset-[6.96%_3.28%_7.94%_4.92%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.2003 20.4228">
        <g id="Logo Gollet">
          <g id="Gollet">
            <path d={svgPaths.p321ab100} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.pce86e00} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p373de300} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p291ed280} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p1976d200} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p3801e8f0} fill="var(--fill-0, #FF6C3B)" />
          </g>
          <path d={svgPaths.p1981aa00} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.p370f30f0} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
        </g>
      </svg>
    </div>
  );
}

function Nfc() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18px]" data-name="nfc">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
        <g id="nfc">
          <path clipRule="evenodd" d={svgPaths.p229aa80} fill="var(--fill-0, #3B85F3)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center justify-end min-w-px opacity-50 relative" data-name="right-content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#3b85f3] text-[12px] text-right">PREPAGA</p>
      <Nfc />
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="h-[24px] opacity-50 relative shrink-0 w-[73.2px]" data-name="Logo">
        <LogoGollet />
      </div>
      <RightContent />
    </div>
  );
}

function Importe() {
  return (
    <div className="content-stretch flex items-center relative self-stretch shrink-0" data-name="Importe">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic opacity-50 relative shrink-0 text-[#3b85f3] text-[21px] text-center whitespace-nowrap">12.440</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-start relative shrink-0 w-full" data-name="price">
      <Importe />
    </div>
  );
}

function Balance() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[117px]" data-name="Balance">
      <Price />
    </div>
  );
}

function Middle() {
  return (
    <div className="content-stretch flex h-[40px] items-center relative shrink-0 w-full" data-name="Middle">
      <Balance />
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Number">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic opacity-50 relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">**** 2451</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic opacity-50 relative shrink-0 text-[#3b85f3] text-[12px] whitespace-nowrap">LAURA MARTINEZ</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Info">
      <Number />
      <Name />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Bottom">
      <Info />
      <div className="h-[20.706px] opacity-50 relative shrink-0 w-[64px]" data-name="card-brands">
        <div className="absolute inset-[1.75%_51.6%_1.44%_35.23%]" data-name="polygon9">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.42689 20.0438">
            <path d={svgPaths.p2a4b97a0} fill="var(--fill-0, #E1E3ED)" id="polygon9" />
          </svg>
        </div>
        <div className="absolute inset-[0_27.3%_0_48.4%]" data-name="path11">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5519 20.7059">
            <path d={svgPaths.p273c6d00} fill="var(--fill-0, #E1E3ED)" id="path11" />
          </svg>
        </div>
        <div className="absolute inset-[1.75%_0_1.44%_70.93%]" data-name="path13">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.6033 20.0436">
            <path d={svgPaths.pf77aa00} fill="var(--fill-0, #E1E3ED)" id="path13" />
          </svg>
        </div>
        <div className="absolute inset-[1.75%_62.97%_1.55%_8.47%]" data-name="path15">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.2821 20.0226">
            <path d={svgPaths.p3c39cb00} fill="var(--fill-0, #E1E3ED)" id="path15" />
          </svg>
        </div>
        <div className="absolute inset-[1.75%_80.33%_45.62%_0]" data-name="path17">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5865 10.8968">
            <path d={svgPaths.p1c6402c0} fill="var(--fill-0, #E1E3ED)" id="path17" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#f5f9ff] flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="Card 1">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-between p-[20px] relative size-full">
          <Top />
          <div className="absolute left-[-38px] size-[192px] top-[-98px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 192">
              <circle cx="96" cy="96" id="Ellipse 12" opacity="0.5" r="95.5" stroke="var(--stroke-0, #E4EFFF)" />
            </svg>
          </div>
          <div className="absolute bottom-[-88px] right-0 size-[192px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 192 192">
              <circle cx="96" cy="96" fill="var(--fill-0, white)" id="Ellipse 10" opacity="0.5" r="96" />
            </svg>
          </div>
          <div className="absolute bottom-[-24px] right-[-61px] size-[162px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 162 162">
              <circle cx="81" cy="81" id="Ellipse 11" r="80.5" stroke="var(--stroke-0, white)" />
            </svg>
          </div>
          <Middle />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function Livello() {
  return (
    <div className="h-[23px] relative shrink-0 w-[77px]" data-name="Livello_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77 23">
        <g clipPath="url(#clip0_1_6041)" id="Livello_1">
          <path d={svgPaths.p1178d80} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_6041">
            <rect fill="white" height="23" width="77" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Nfc1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[18px]" data-name="nfc">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 24">
        <g id="nfc">
          <path clipRule="evenodd" d={svgPaths.p229aa80} fill="var(--fill-0, #EDEFF7)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Info1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Info">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center pr-[4px] relative size-full">
          <Livello />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[12px] text-right text-white">CRÉDITO</p>
          <Nfc1 />
        </div>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Number">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">**** 2765</p>
    </div>
  );
}

function Name1() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] gap-[12px] items-start leading-[1.5] not-italic relative shrink-0 text-[#fff2f0] text-[12px] whitespace-nowrap" data-name="Name">
      <p className="relative shrink-0">LAURA MARTINEZ</p>
      <p className="relative shrink-0">12/29</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Info">
      <Number1 />
      <Name1 />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex h-[40px] items-end justify-between relative shrink-0 w-full" data-name="Bottom">
      <Info2 />
      <div className="h-[39.207px] relative shrink-0 w-[64px]" data-name="card-brands">
        <div className="absolute inset-[10.7%_36.51%_10.7%_36.43%]" data-name="rect19">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.3196 30.8202">
            <path d={svgPaths.p33504ab0} fill="var(--fill-0, #FF5A00)" id="rect19" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-1/2 top-0" data-name="XMLID_330_">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0002 39.2073">
            <path d={svgPaths.pc83d600} fill="var(--fill-0, #EB001B)" id="XMLID_330_" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-1/2 right-0 top-0" data-name="path22">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.0002 39.2073">
            <path d={svgPaths.p17f6d900} fill="var(--fill-0, #F79E1B)" id="path22" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[12px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 328 210' preserveAspectRatio='none'><g transform='matrix(-8.55 11.967 -18.565 -17.99 289 84.5)'><foreignObject x='-147.29' y='-147.29' width='294.58' height='294.58'><div xmlns='http://www.w3.org/1999/xhtml' style='background-image: conic-gradient(from 90deg, rgb(91, 90, 90) 0%, rgb(133, 133, 133) 44.533%, rgb(167, 167, 167) 49.713%, rgb(129, 129, 129) 74.857%, rgb(91, 90, 90) 100%); opacity:1; height: 100%; width: 100%;'></div></foreignObject></g></svg>\")" }} data-name="Card 1">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[20px] relative size-full">
          <div className="absolute bottom-[-2px] right-[-3px] top-[-9px] w-[117px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="221" src={imgVector76} width="117" />
          </div>
          <Info1 />
          <Bottom1 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px relative w-full" data-name="content">
      <div className="content-stretch flex h-[210px] items-center justify-end relative shrink-0 w-full" data-name="Cards">
        <Card />
      </div>
      <div className="content-stretch drop-shadow-[0px_0px_8px_rgba(0,0,0,0.15)] flex h-[210px] items-start relative shrink-0 w-full" data-name="Cards">
        <Card1 />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] inset-[44px_0_0_0] items-center pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="topbar">
        <Title />
      </div>
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
                  <path d={svgPaths.p23c2aa80} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] text-center whitespace-nowrap">Actividad</p>
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
                  <path d={svgPaths.p28173a00} fill="var(--fill-0, #FF583F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#ff583f] text-[12px] text-center whitespace-nowrap">Tarjetas</p>
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
      </div>
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

export default function Cards() {
  return (
    <div className="bg-white relative size-full" data-name="Cards">
      <div className="absolute bg-white inset-0 overflow-clip" data-name="Tarjetas">
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