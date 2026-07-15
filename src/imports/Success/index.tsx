import svgPaths from "./svg-1nxk8blnvw";
import imgVector76 from "./6dfb8144b90cf4cee2bea8efa08dac40482e2c23.png";
import imgWallmart from "./953f0c08cf8de7fd23882c9d162b4de36db061e0.png";
import { imgMockup, imgMockup1 } from "./svg-tpnzk";

function Face() {
  return (
    <div className="col-1 flex h-[228.991px] items-center justify-center ml-0 mt-0 relative row-1 w-[123.975px]">
      <div className="flex-none rotate-4">
        <div className="h-[221.945px] relative w-[108.758px]" data-name="Face">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.758 221.945">
            <g id="Face">
              <path clipRule="evenodd" d={svgPaths.p147c0900} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" id="Body" />
              <path clipRule="evenodd" d={svgPaths.p3eb9b00} fill="url(#paint0_linear_1_25816)" fillRule="evenodd" id="Body_2" />
              <g id="Speaker">
                <path d={svgPaths.p284b2100} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                <path d={svgPaths.p1740b180} fill="var(--fill-0, #E8E8E8)" id="Vector_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_25816" x1="54.2656" x2="22.1903" y1="1.05354" y2="293.768">
                <stop stopColor="#F5F5F5" />
                <stop offset="1" stopColor="#EBEBEB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function LogoGollet() {
  return (
    <div className="absolute inset-[6.96%_3.28%_7.94%_4.92%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.83 5.41867">
        <g id="Logo Gollet">
          <g id="Gollet">
            <path d={svgPaths.p2703fa00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p297cbb70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p47f9a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p134f1f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3bd4a500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1bd5a700} fill="var(--fill-0, white)" />
          </g>
          <path d={svgPaths.p7d7fc00} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.p37167c00} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
        </g>
      </svg>
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center justify-end min-w-px relative" data-name="right-content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[3.18px] text-right text-white">Dinero en cuenta</p>
    </div>
  );
}

function Top() {
  return (
    <div className="content-stretch flex gap-[2.123px] items-center justify-center relative shrink-0 w-full" data-name="Top">
      <div className="h-[6.368px] relative shrink-0 w-[19.422px]" data-name="Logo">
        <LogoGollet />
      </div>
      <RightContent />
    </div>
  );
}

function Importe() {
  return (
    <div className="content-stretch flex items-center leading-[1.5] relative self-stretch shrink-0" data-name="Importe">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[5.57px] whitespace-nowrap">25.000</p>
      <p className="font-['Sora:Regular',sans-serif] h-[6.633px] relative shrink-0 text-[3.18px] w-[5.572px]">00</p>
    </div>
  );
}

function Price() {
  return (
    <div className="content-stretch flex gap-[1.061px] h-[8.49px] items-start relative shrink-0 text-center text-white w-full" data-name="price">
      <div className="flex flex-col font-['Sora:Regular',sans-serif] justify-center leading-[0] relative self-stretch shrink-0 text-[3.71px] w-[2.653px]">
        <p className="leading-[1.5]">$</p>
      </div>
      <Importe />
    </div>
  );
}

function Balance() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-[31.043px]" data-name="Balance">
      <p className="font-['Sora:Regular',sans-serif] leading-[1.5] mb-[-1.592px] opacity-80 relative shrink-0 text-[#f7f8fe] text-[3.18px] whitespace-nowrap">Disponible</p>
      <Price />
    </div>
  );
}

function Middle() {
  return (
    <div className="content-stretch flex h-[10.613px] items-center relative shrink-0 w-full" data-name="Middle">
      <Balance />
    </div>
  );
}

function Card1() {
  return (
    <div className="bg-[#841a0a] flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="Card 2">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-between p-[5.306px] relative size-full">
          <Top />
          <div className="absolute left-[-10.35px] size-[50.942px] top-[-29.98px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.9424 50.9424">
              <circle cx="25.4712" cy="25.4712" id="Ellipse 12" opacity="0.5" r="25.3385" stroke="var(--stroke-0, #DF4730)" strokeWidth="0.265325" />
            </svg>
          </div>
          <div className="absolute bottom-[-6.37px] right-[-16.18px] size-[42.983px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.9826 42.9826">
              <circle cx="21.4913" cy="21.4913" id="Ellipse 11" opacity="0.5" r="21.3586" stroke="var(--stroke-0, #DF4730)" strokeWidth="0.265325" />
            </svg>
          </div>
          <Middle />
        </div>
      </div>
    </div>
  );
}

function LogoGollet1() {
  return (
    <div className="absolute inset-[6.96%_3.28%_7.94%_4.92%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.83 5.41867">
        <g id="Logo Gollet">
          <g id="Gollet">
            <path d={svgPaths.p2703fa00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p297cbb70} fill="var(--fill-0, white)" />
            <path d={svgPaths.p47f9a00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p134f1f00} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3bd4a500} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1bd5a700} fill="var(--fill-0, white)" />
          </g>
          <path d={svgPaths.p7d7fc00} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.p37167c00} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
        </g>
      </svg>
    </div>
  );
}

function Nfc() {
  return (
    <div className="h-[6.368px] relative shrink-0 w-[4.776px]" data-name="nfc">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.77585 6.3678">
        <g id="nfc">
          <path clipRule="evenodd" d={svgPaths.p374ecc40} fill="var(--fill-0, #F7F8FE)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function RightContent1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.123px] items-center justify-end min-w-px relative" data-name="right-content">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[3.18px] text-right text-white">PREPAGA</p>
      <Nfc />
    </div>
  );
}

function Top1() {
  return (
    <div className="content-stretch flex gap-[2.123px] h-[10.613px] items-start relative shrink-0 w-full" data-name="Top">
      <div className="h-[6.368px] relative shrink-0 w-[19.422px]" data-name="Logo">
        <LogoGollet1 />
      </div>
      <RightContent1 />
    </div>
  );
}

function Importe1() {
  return (
    <div className="content-stretch flex items-center leading-[1.5] relative self-stretch shrink-0" data-name="Importe">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[5.57px] whitespace-nowrap">123.440</p>
      <p className="font-['Sora:Regular',sans-serif] h-[6.633px] relative shrink-0 text-[3.18px] w-[5.572px]">00</p>
    </div>
  );
}

function Price1() {
  return (
    <div className="content-stretch flex gap-[1.061px] h-[8.49px] items-start relative shrink-0 text-center text-white w-full" data-name="price">
      <div className="flex flex-col font-['Sora:Regular',sans-serif] justify-center leading-[0] relative self-stretch shrink-0 text-[3.71px] w-[2.653px]">
        <p className="leading-[1.5]">$</p>
      </div>
      <Importe1 />
    </div>
  );
}

function Balance1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start not-italic relative shrink-0 w-[31.043px]" data-name="Balance">
      <p className="font-['Sora:Regular',sans-serif] leading-[1.5] mb-[-1.592px] opacity-80 relative shrink-0 text-[#f7f8fe] text-[3.18px] whitespace-nowrap">Disponible</p>
      <Price1 />
    </div>
  );
}

function Middle1() {
  return (
    <div className="content-stretch flex h-[10.613px] items-center relative shrink-0 w-full" data-name="Middle">
      <Balance1 />
    </div>
  );
}

function Number() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Number">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[3.71px] text-center text-white whitespace-nowrap">**** 2451</p>
    </div>
  );
}

function Info() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Info">
      <Number />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex h-[10.613px] items-end justify-between relative shrink-0 w-full" data-name="Bottom">
      <Info />
      <div className="h-[5.494px] relative shrink-0 w-[16.981px]" data-name="card-brands">
        <div className="absolute inset-[1.75%_51.6%_1.44%_35.23%]" data-name="polygon9">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.23586 5.31813">
            <path d={svgPaths.p1470c00} fill="var(--fill-0, white)" id="polygon9" />
          </svg>
        </div>
        <div className="absolute inset-[0_27.3%_0_48.4%]" data-name="path11">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.12631 5.49379">
            <path d={svgPaths.pc101872} fill="var(--fill-0, white)" id="path11" />
          </svg>
        </div>
        <div className="absolute inset-[1.75%_0_1.44%_70.93%]" data-name="path13">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.93591 5.31806">
            <path d={svgPaths.p26c42600} fill="var(--fill-0, white)" id="path13" />
          </svg>
        </div>
        <div className="absolute inset-[1.75%_62.97%_1.55%_8.47%]" data-name="path15">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.85069 5.31249">
            <path d={svgPaths.p17c9900} fill="var(--fill-0, white)" id="path15" />
          </svg>
        </div>
        <div className="absolute inset-[1.75%_80.33%_45.62%_0]" data-name="path17">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.3395 2.89119">
            <path d={svgPaths.p36cf96c0} fill="var(--fill-0, white)" id="path17" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-[#841a0a] flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="Card 1">
      <div className="flex flex-col items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end justify-between p-[5.306px] relative size-full">
          <Top1 />
          <div className="absolute left-[-10.35px] size-[50.942px] top-[-29.98px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.9424 50.9424">
              <circle cx="25.4712" cy="25.4712" id="Ellipse 12" opacity="0.5" r="25.3385" stroke="var(--stroke-0, #DF4730)" strokeWidth="0.265325" />
            </svg>
          </div>
          <div className="absolute bottom-[-23.35px] right-0 size-[50.942px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50.9424 50.9424">
              <circle cx="25.4712" cy="25.4712" fill="var(--fill-0, #FF583F)" id="Ellipse 10" opacity="0.5" r="25.4712" />
            </svg>
          </div>
          <div className="absolute bottom-[-6.37px] right-[-16.18px] size-[42.983px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42.9826 42.9826">
              <circle cx="21.4913" cy="21.4913" id="Ellipse 11" r="21.3586" stroke="var(--stroke-0, #FFE7E3)" strokeWidth="0.265325" />
            </svg>
          </div>
          <Middle1 />
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function Livello() {
  return (
    <div className="h-[6.102px] relative shrink-0 w-[20.43px]" data-name="Livello_1">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.43 6.10247">
        <g clipPath="url(#clip0_1_25728)" id="Livello_1">
          <path d={svgPaths.p384a1380} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_25728">
            <rect fill="white" height="6.10247" width="20.43" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Nfc1() {
  return (
    <div className="h-[6.368px] relative shrink-0 w-[4.776px]" data-name="nfc">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.77585 6.3678">
        <g id="nfc">
          <path clipRule="evenodd" d={svgPaths.p374ecc40} fill="var(--fill-0, #EDEFF7)" fillRule="evenodd" id="Vector (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function Info1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Info">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[2.123px] items-center pr-[1.061px] relative size-full">
          <Livello />
          <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Regular',sans-serif] leading-[1.5] min-w-px not-italic relative text-[3.18px] text-right text-white">CRÉDITO</p>
          <Nfc1 />
        </div>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Number">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[3.71px] text-center text-white whitespace-nowrap">**** 2765</p>
    </div>
  );
}

function Name() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] gap-[3.184px] items-start leading-[1.5] not-italic relative shrink-0 text-[#fff2f0] text-[3.18px] whitespace-nowrap" data-name="Name">
      <p className="relative shrink-0">LAURA MARTINEZ</p>
      <p className="relative shrink-0">12/29</p>
    </div>
  );
}

function Info2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Info">
      <Number1 />
      <Name />
    </div>
  );
}

function Bottom1() {
  return (
    <div className="content-stretch flex h-[10.613px] items-end justify-between relative shrink-0 w-full" data-name="Bottom">
      <Info2 />
      <div className="h-[10.403px] relative shrink-0 w-[16.981px]" data-name="card-brands">
        <div className="absolute inset-[10.7%_36.51%_10.7%_36.43%]" data-name="rect19">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.59532 8.17737">
            <path d={svgPaths.p2ba3300} fill="var(--fill-0, #FF5A00)" id="rect19" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-1/2 top-0" data-name="XMLID_330_">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.49046 10.4027">
            <path d={svgPaths.pf364680} fill="var(--fill-0, #EB001B)" id="XMLID_330_" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-1/2 right-0 top-0" data-name="path22">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.49046 10.4027">
            <path d={svgPaths.p35038180} fill="var(--fill-0, #F79E1B)" id="path22" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative rounded-[12px]" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 87.027 55.718' preserveAspectRatio='none'><g transform='matrix(-2.2685 3.1751 -4.9258 -4.7733 76.679 22.42)'><foreignObject x='-147.29' y='-147.29' width='294.58' height='294.58'><div xmlns='http://www.w3.org/1999/xhtml' style='background-image: conic-gradient(from 90deg, rgb(91, 90, 90) 0%, rgb(133, 133, 133) 44.533%, rgb(167, 167, 167) 49.713%, rgb(129, 129, 129) 74.857%, rgb(91, 90, 90) 100%); opacity:1; height: 100%; width: 100%;'></div></foreignObject></g></svg>\")" }} data-name="Card 1">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[5.306px] relative size-full">
          <div className="absolute bottom-[-0.53px] right-[-0.8px] top-[-2.39px] w-[31.043px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" height="50.919" src={imgVector76} width="31.043" />
          </div>
          <Info1 />
          <Bottom1 />
        </div>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="bg-[#f7f8fe] flex-[1_0_0] h-full min-w-px relative rounded-[12px]" data-name="Card 1">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[1.061px] items-center justify-center p-[5.306px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[6.368px]" data-name="add_circle_outline">
            <div className="absolute inset-[8.33%]" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.3065 5.3065">
                <path d={svgPaths.p29829300} fill="var(--fill-0, #78838D)" id="Vector" />
              </svg>
            </div>
          </div>
          <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#78838d] text-[3.18px] text-center w-[min-content]">Agregar nueva tarjeta</p>
        </div>
      </div>
      <div aria-hidden className="absolute border-[#e1e3ed] border-[0.265px] border-dashed inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Cards() {
  return (
    <div className="relative shrink-0 w-full" data-name="cards">
      <div className="content-stretch flex gap-[4.245px] items-start px-[3.184px] relative size-full">
        <div className="content-stretch drop-shadow-[0px_0px_2.123px_rgba(0,0,0,0.15)] flex h-[47.758px] items-center justify-end relative shrink-0 w-[80.393px]" data-name="Cards">
          <Card1 />
        </div>
        <div className="content-stretch drop-shadow-[0px_0px_2.123px_rgba(0,0,0,0.15)] flex h-[47.758px] items-center justify-end relative shrink-0 w-[80.393px]" data-name="Cards">
          <Card />
        </div>
        <div className="content-stretch drop-shadow-[0px_0px_2.123px_rgba(0,0,0,0.15)] flex h-[47.758px] items-start relative shrink-0 w-[80.393px]" data-name="Cards">
          <Card2 />
        </div>
        <div className="content-stretch flex h-[47.758px] items-center justify-end relative shrink-0 w-[80.393px]" data-name="Cards">
          <Card3 />
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="h-[2.653px] relative shrink-0 w-[13.266px]" data-name="pagination">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.2662 2.65325">
        <g id="pagination">
          <circle cx="1.32662" cy="1.32662" fill="var(--fill-0, #FF583F)" id="dot" r="1.32662" />
          <circle cx="6.89845" cy="1.32662" fill="var(--fill-0, #EDEFF7)" id="dot_2" r="1.0613" />
          <circle cx="12.2049" cy="1.32662" fill="var(--fill-0, #EDEFF7)" id="dot_3" r="1.0613" />
        </g>
      </svg>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4.245px] items-center min-h-px relative w-full" data-name="content">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Bold',sans-serif] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.71px] w-[min-content]">
        <p className="leading-[1.5]">Elige el medio de pago</p>
      </div>
      <Cards />
      <Pagination />
    </div>
  );
}

function BottomSheet() {
  return (
    <div className="absolute bg-white bottom-0 content-stretch drop-shadow-[0px_2.123px_3.184px_rgba(0,0,0,0.2)] flex flex-col gap-[6.368px] h-[101.885px] items-center justify-end left-0 pb-[10.613px] pt-[4.245px] px-[4.245px] right-0 rounded-tl-[4.245px] rounded-tr-[4.245px]" data-name="BottomSheet">
      <Content1 />
      <div className="h-[11.94px] overflow-clip relative rounded-[1.061px] shrink-0 w-full" data-name="SlideButton">
        <div className="-translate-y-1/2 absolute bg-[#df4730] content-stretch flex gap-[1.061px] h-[11.94px] items-center justify-center left-[11.67px] p-[3.184px] right-0 rounded-br-[1.061px] rounded-tr-[1.061px] top-1/2" data-name="button2">
          <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[3.71px] text-center text-white whitespace-nowrap">Desliza para confirmar</p>
        </div>
        <div className="-translate-y-1/2 absolute bg-[#ff583f] content-stretch flex gap-[1.061px] h-[11.94px] items-center justify-end left-0 p-[3.184px] rounded-bl-[1.061px] rounded-tl-[1.061px] top-1/2" data-name="button1">
          <div className="overflow-clip relative shrink-0 size-[5.306px]" data-name="Style=Outlined">
            <div className="absolute bottom-1/4 left-[20.83%] right-[20.83%] top-1/4" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.09546 2.65325">
                <g id="Vector">
                  <path d={svgPaths.p110e28c0} fill="var(--fill-0, white)" />
                  <path d={svgPaths.pb085c80} fill="var(--fill-0, white)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.13px)] top-1/2" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#191919] text-[4.51px] tracking-[-0.1804px] whitespace-nowrap">9:41</p>
    </div>
  );
}

function LeftArea() {
  return (
    <div className="h-[10.613px] mr-[-20.5px] overflow-clip relative shrink-0 w-[16.715px]" data-name="Left Area">
      <Time />
    </div>
  );
}

function Sim1SingleSim() {
  return (
    <div className="h-[3.715px] overflow-clip relative shrink-0 w-[5.306px]" data-name="SIM / 1 - Single SIM">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[3.184px] left-[calc(50%+2.11px)] rounded-[1px] top-1/2 w-[0.849px]" data-name="Bar 4" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[2.547px] left-[calc(50%+0.7px)] rounded-[1px] top-[calc(50%+0.32px)] w-[0.849px]" data-name="Bar 3" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[1.857px] left-[calc(50%-0.7px)] rounded-[1px] top-[calc(50%+0.66px)] w-[0.849px]" data-name="Bar 2" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[1.22px] left-[calc(50%-2.11px)] rounded-[1px] top-[calc(50%+0.98px)] w-[0.849px]" data-name="Bar 1" />
    </div>
  );
}

function Loading() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[2.919px] left-1/2 top-1/2 w-[4.159px]" data-name="loading">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.15914 2.91864">
        <g id="loading">
          <path d={svgPaths.ped38c00} fill="var(--fill-0, #191919)" id="Path" />
          <path d={svgPaths.p399942c0} fill="var(--fill-0, #191919)" id="Path_2" />
          <path d={svgPaths.p145dca80} fill="var(--fill-0, #191919)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function NetworkWiFiFull() {
  return (
    <div className="h-[3.184px] overflow-clip relative shrink-0 w-[5.306px]" data-name="Network / WiFi Full">
      <Loading />
    </div>
  );
}

function BatteryFullUncharged() {
  return (
    <div className="h-[3.715px] relative shrink-0 w-[7.429px]" data-name="Battery / Full Uncharged">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.4291 3.71455">
        <g id="Battery / Full Uncharged">
          <rect fill="var(--fill-0, #191919)" height="2.38792" id="Battery Fill" rx="0.352882" width="5.57182" x="0.53065" y="0.663312" />
          <path d={svgPaths.p11571200} fill="var(--fill-0, #191919)" id="Battery Frame" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function AutoLayout() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[0.796px] items-center justify-end right-0 top-1/2" data-name="Auto-layout">
      <Sim1SingleSim />
      <NetworkWiFiFull />
      <BatteryFullUncharged />
    </div>
  );
}

function StatusArea() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.715px] left-[calc(50%-0.27px)] top-1/2 w-[19.634px]" data-name="Status Area">
      <AutoLayout />
    </div>
  );
}

function RightArea() {
  return (
    <div className="h-[10.613px] relative shrink-0 w-[21.226px]" data-name="Right Area">
      <StatusArea />
      <div className="absolute left-[1.59px] size-[1.592px] top-[1.59px]" data-name="Privacy Indicator / None">
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
      <div className="content-stretch flex gap-[0.531px] items-center justify-center p-[1.061px] relative rounded-[1.061px] shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[5.306px]" data-name="Style=Outlined">
          <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.63838 2.65325">
              <path d={svgPaths.p3ca7d780} fill="var(--fill-0, #DF4730)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[3.71px] text-center whitespace-nowrap">Volver</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[2.123px] items-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[6.37px]">Pago QR</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[14.858px]" data-name="icon">
      <div className="absolute inset-0 pointer-events-none rounded-[100px]" data-name="Wallmart">
        <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[100px] size-full" src={imgWallmart} />
        <div aria-hidden className="absolute border-[#f7f8fe] border-[0.265px] border-solid inset-[-0.133px] rounded-[100.133px]" />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[1.5] not-italic relative shrink-0 text-center whitespace-nowrap" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[4.25px]">Adidas</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] text-[3.71px]">Tienda</p>
    </div>
  );
}

function Store() {
  return (
    <div className="content-stretch flex gap-[3.184px] items-center justify-center relative rounded-[8px] shrink-0 w-full" data-name="store">
      <Icon />
      <Text />
    </div>
  );
}

function Money() {
  return (
    <div className="content-stretch flex gap-[1.061px] items-center relative shrink-0 text-[#191919] text-[9.55px]" data-name="money">
      <p className="relative shrink-0">$</p>
      <p className="relative shrink-0">2.560,00</p>
    </div>
  );
}

function Amount() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col font-['Sora:Regular',sans-serif] gap-[2.123px] items-center leading-[1.5] not-italic relative shrink-0 text-center w-full whitespace-nowrap" data-name="amount">
      <p className="relative shrink-0 text-[#78838d] text-[3.18px]">Pagar importe</p>
      <Money />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6.368px] items-center min-h-px relative w-full" data-name="content">
      <Store />
      <Amount />
    </div>
  );
}

function Body1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.368px] h-[98.701px] items-center left-0 pb-[10.613px] pt-[4.245px] px-[4.245px] right-0 top-[11.67px]" data-name="body">
      <div className="content-stretch flex flex-col gap-[1.061px] items-start relative shrink-0 w-full" data-name="topbar">
        <Back />
        <Title />
      </div>
      <Content2 />
    </div>
  );
}

function Mockup() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[337.113px_729.83px]" style={{ maskImage: `url("${imgMockup}")` }} data-name="Mockup">
      <div className="absolute bg-white inset-0 overflow-clip" data-name="PagoQR">
        <BottomSheet />
        <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[8.49px] pr-[4.245px] right-0 top-0" data-name="StatusBar">
          <LeftArea />
          <div className="h-[11.674px] mr-[-20.5px] relative shrink-0 w-[55.718px]" data-name="Notch Area" />
          <RightArea />
        </div>
        <Body1 />
        <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start justify-center left-0 w-[95.517px]" data-name="Navigation">
          <div className="relative shrink-0 w-full" data-name="HomeIndicator">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center pb-[2.388px] pt-[1.061px] px-[31.839px] relative size-full">
                <div className="bg-[#535d66] h-[1.327px] relative rounded-[5px] shrink-0 w-[35.554px]" data-name="Indicator" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneFace() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[228.991px] inline-grid ml-[173.32px] mt-[10.42px] place-items-start relative row-1 w-[123.975px]" data-name="Phone face">
      <Face />
      <div className="col-1 flex h-[218.531px] items-center justify-center ml-[5.49px] mt-[4.82px] relative row-1 w-[112.586px]">
        <div className="flex-none rotate-4">
          <div className="h-[212.21px] relative w-[98.021px]" data-name="Mockup-PagoQR">
            <Mockup />
          </div>
        </div>
      </div>
    </div>
  );
}

function Face1() {
  return (
    <div className="col-1 flex h-[228.991px] items-center justify-center ml-0 mt-0 relative row-1 w-[123.975px]">
      <div className="-rotate-4 flex-none">
        <div className="h-[221.945px] relative w-[108.758px]" data-name="Face">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.758 221.945">
            <g id="Face">
              <path clipRule="evenodd" d={svgPaths.p11f454c0} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" id="Body" />
              <path clipRule="evenodd" d={svgPaths.p2f00af80} fill="url(#paint0_linear_1_25677)" fillRule="evenodd" id="Body_2" />
              <g id="Speaker">
                <path d={svgPaths.p37cbed00} fill="var(--fill-0, #E8E8E8)" id="Vector" />
                <path d={svgPaths.p2c648680} fill="var(--fill-0, #E8E8E8)" id="Vector_2" />
              </g>
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_25677" x1="54.2622" x2="22.1868" y1="1.05337" y2="293.768">
                <stop stopColor="#F5F5F5" />
                <stop offset="1" stopColor="#EBEBEB" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[6.53px]">Más</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[3.81px] whitespace-nowrap">Laura Martinez</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="content">
      <div className="bg-[#ffe7e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[64px] shrink-0 size-[13.069px]" data-name="Avatar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] min-w-px not-italic relative text-[#df4730] text-[4.9px] text-center">
          <p className="leading-[1.5]">LM</p>
        </div>
      </div>
      <Label />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex items-center justify-between pl-[4.356px] pr-[6.535px] py-[3.267px] relative rounded-[8px] shrink-0 w-[89.308px]" data-name="profile">
      <div aria-hidden className="absolute border-[#edeff6] border-[0.272px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Content3 />
      <div className="content-stretch flex gap-[0.545px] items-center justify-center p-[1.089px] relative rounded-[1.089px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[3.81px] text-center whitespace-nowrap">Mi perfil</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.63039 4.53798">
            <path d={svgPaths.p25240100} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Pagar servicios</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon1 />
      <Label1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[12.5%_28.79%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2.30983 4.08419">
            <path d={svgPaths.p1b58eaf2} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Préstamos</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon2 />
      <Label2 />
    </div>
  );
}

function Actions1() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[4.17%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.99178 4.99178">
            <path d={svgPaths.p3cbe68c0} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Intercambiar</p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon3 />
      <Label3 />
    </div>
  );
}

function Actions2() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[4.17%_12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08419 4.99178">
            <path d={svgPaths.p126c7f00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Seguros y asistencias</p>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon4 />
      <Label4 />
    </div>
  );
}

function Actions3() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08419 4.08419">
            <path d={svgPaths.p26af90b0} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Beneficios</p>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon5 />
      <Label5 />
    </div>
  );
}

function Actions4() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08419 4.08419">
            <path d={svgPaths.p22e63d00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Reportes</p>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon6 />
      <Label6 />
    </div>
  );
}

function Actions5() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[4.17%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31108 4.99178">
            <g id="Vector">
              <path d={svgPaths.p36c67680} fill="var(--fill-0, #535D66)" />
              <path d={svgPaths.p18ac3680} fill="var(--fill-0, #535D66)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Seguridad</p>
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon7 />
      <Label7 />
    </div>
  );
}

function Actions6() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function TopContent() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="top-content">
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left />
            <Actions />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left1 />
            <Actions1 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left2 />
            <Actions2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left3 />
            <Actions3 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left4 />
            <Actions4 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left5 />
            <Actions5 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left6 />
            <Actions6 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[2.94%_10.42%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.31108 5.12565">
            <path d={svgPaths.p307f2d80} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Centro de ayuda</p>
    </div>
  );
}

function Left7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon8 />
      <Label8 />
    </div>
  );
}

function Actions7() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.53798 4.53798">
            <path d={svgPaths.pe253980} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Asistente virtual</p>
    </div>
  );
}

function Left8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon9 />
      <Label9 />
    </div>
  );
}

function Actions8() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08419 4.08419">
            <path d={svgPaths.p8356200} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Legal</p>
    </div>
  );
}

function Left9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon10 />
      <Label10 />
    </div>
  );
}

function Actions9() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[8.713px]" />
      <div className="col-1 ml-[0.44px] mt-[0.44px] overflow-clip relative row-1 size-[5.446px]" data-name="Style=Outlined">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.08419 4.08419">
            <path d={svgPaths.p8356200} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[9.257px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[3.27px] w-[min-content]">Legal</p>
    </div>
  );
}

function Left10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.178px] items-center min-w-px relative" data-name="Left">
      <Icon11 />
      <Label11 />
    </div>
  );
}

function Actions10() {
  return (
    <div className="content-stretch flex gap-[2.178px] items-center relative shrink-0" data-name="Actions">
      <div className="overflow-clip relative shrink-0 size-[4.356px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.34506 2.17823">
            <path d={svgPaths.pc7dec00} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function BottomContent() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="bottom-content">
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left7 />
            <Actions7 />
          </div>
        </div>
      </div>
      <div className="h-[0.272px] relative shrink-0 w-full" data-name="Divider" />
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left8 />
            <Actions8 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left9 />
            <Actions9 />
          </div>
        </div>
      </div>
      <div className="opacity-0 relative shrink-0 w-full" data-name="Espaciador">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.272px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[2.178px] py-[3.267px] relative size-full">
            <Left10 />
            <Actions10 />
          </div>
        </div>
      </div>
      <div className="h-[0.272px] relative shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Body2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.356px] inset-[11.98px_0_20.15px_0] items-center pb-[10.891px] pt-[4.356px] px-[4.356px]" data-name="body">
      <div className="bg-white content-stretch flex flex-col gap-[1.089px] items-start relative shrink-0 w-full" data-name="topbar">
        <Title1 />
      </div>
      <Profile />
      <TopContent />
      <BottomContent />
    </div>
  );
}

function UnstyledIconButton() {
  return (
    <div className="content-stretch flex items-center p-[3.267px] relative rounded-[48px] shrink-0" data-name="UnstyledIconButton">
      <div className="overflow-clip relative shrink-0 size-[6.535px]" data-name="Style=Outlined">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.90102 4.90102">
            <g id="Vector">
              <path d={svgPaths.pb03400} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2b3a6c00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2ae40980} fill="var(--fill-0, white)" />
              <path d={svgPaths.p68d700} fill="var(--fill-0, white)" />
              <path d={svgPaths.p7729200} fill="var(--fill-0, white)" />
              <path d={svgPaths.p293b2480} fill="var(--fill-0, white)" />
              <path d={svgPaths.p34e79680} fill="var(--fill-0, white)" />
              <path d={svgPaths.pe95da80} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1ef17370} fill="var(--fill-0, white)" />
              <path d={svgPaths.p234e2e00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3f81ec80} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconButton() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ff583f] content-stretch flex flex-col items-center justify-center left-[calc(50%-0.1px)] rounded-[48px] top-[-1.09px]" data-name="IconButton">
      <div aria-hidden className="absolute border-[#fff2f0] border-[0.817px] border-solid inset-[-0.817px] pointer-events-none rounded-[48.817px]" />
      <UnstyledIconButton />
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex h-[15.248px] items-center relative shrink-0 w-full" data-name="Nav">
      <div aria-hidden className="absolute border-[#e1e3ed] border-solid border-t-[0.272px] inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[15.248px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.356px] py-[2.178px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[6.535px]" data-name="Style=Outlined">
              <div className="absolute inset-[14.58%_8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.44558 4.62874">
                  <path d={svgPaths.p3186d600} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[3.27px] text-center whitespace-nowrap">Inicio</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[15.248px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.356px] py-[2.178px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[6.535px]" data-name="Style=Outlined">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.90102 4.90102">
                  <path d={svgPaths.p4fece00} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[3.27px] text-center whitespace-nowrap">Actividad</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[15.248px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.356px] py-[2.178px] relative size-full">
            <IconButton />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[15.248px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.356px] py-[2.178px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[6.535px]" data-name="Style=Outlined">
              <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.44558 4.35646">
                  <path d={svgPaths.p160a6780} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[3.27px] text-center whitespace-nowrap">Tarjetas</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[15.248px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.356px] py-[2.178px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[6.535px]" data-name="Style=Outlined">
              <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.90102 3.26735">
                  <path d={svgPaths.p209c8f80} fill="var(--fill-0, #FF583F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#ff583f] text-[3.27px] text-center whitespace-nowrap">Más</p>
            <div className="absolute h-0 left-0 right-[-0.07px] top-[0.54px]" data-name="line">
              <div className="absolute inset-[-0.54px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 0.544558">
                  <line id="line" stroke="var(--stroke-0, #FF583F)" strokeWidth="0.544558" x2="20" y1="0.272279" y2="0.272279" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Time1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.14px)] top-1/2" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#191919] text-[4.63px] tracking-[-0.1852px] whitespace-nowrap">9:41</p>
    </div>
  );
}

function LeftArea1() {
  return (
    <div className="h-[10.891px] mr-[-20.5px] overflow-clip relative shrink-0 w-[17.154px]" data-name="Left Area">
      <Time1 />
    </div>
  );
}

function Sim1SingleSim1() {
  return (
    <div className="h-[3.812px] overflow-clip relative shrink-0 w-[5.446px]" data-name="SIM / 1 - Single SIM">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[3.267px] left-[calc(50%+2.16px)] rounded-[1px] top-1/2 w-[0.871px]" data-name="Bar 4" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[2.614px] left-[calc(50%+0.72px)] rounded-[1px] top-[calc(50%+0.33px)] w-[0.871px]" data-name="Bar 3" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[1.906px] left-[calc(50%-0.72px)] rounded-[1px] top-[calc(50%+0.68px)] w-[0.871px]" data-name="Bar 2" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[1.252px] left-[calc(50%-2.16px)] rounded-[1px] top-[calc(50%+1.01px)] w-[0.871px]" data-name="Bar 1" />
    </div>
  );
}

function Loading1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[2.995px] left-1/2 top-1/2 w-[4.268px]" data-name="loading">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.26816 2.99507">
        <g id="loading">
          <path d={svgPaths.p1badf680} fill="var(--fill-0, #191919)" id="Path" />
          <path d={svgPaths.p17457700} fill="var(--fill-0, #191919)" id="Path_2" />
          <path d={svgPaths.p3b7aaf80} fill="var(--fill-0, #191919)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function NetworkWiFiFull1() {
  return (
    <div className="h-[3.267px] overflow-clip relative shrink-0 w-[5.446px]" data-name="Network / WiFi Full">
      <Loading1 />
    </div>
  );
}

function BatteryFullUncharged1() {
  return (
    <div className="h-[3.812px] relative shrink-0 w-[7.624px]" data-name="Battery / Full Uncharged">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.62381 3.81191">
        <g id="Battery / Full Uncharged">
          <rect fill="var(--fill-0, #191919)" height="2.45051" id="Battery Fill" rx="0.362131" width="5.71786" x="0.544558" y="0.680698" />
          <path d={svgPaths.p25998800} fill="var(--fill-0, #191919)" id="Battery Frame" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function AutoLayout1() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[0.817px] items-center justify-end right-0 top-1/2" data-name="Auto-layout">
      <Sim1SingleSim1 />
      <NetworkWiFiFull1 />
      <BatteryFullUncharged1 />
    </div>
  );
}

function StatusArea1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.812px] left-[calc(50%-0.27px)] top-1/2 w-[20.149px]" data-name="Status Area">
      <AutoLayout1 />
    </div>
  );
}

function RightArea1() {
  return (
    <div className="h-[10.891px] relative shrink-0 w-[21.782px]" data-name="Right Area">
      <StatusArea1 />
      <div className="absolute left-[1.63px] size-[1.634px] top-[1.63px]" data-name="Privacy Indicator / None">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 4" />
        </svg>
      </div>
    </div>
  );
}

function Mockup1() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[337.113px_729.83px]" style={{ maskImage: `url("${imgMockup}")` }} data-name="Mockup">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[212.21px] left-1/2 overflow-clip top-1/2 w-[98.02px]" data-name="Más">
        <Body2 />
        <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start justify-center left-[0.11px] right-[-0.11px]" data-name="Navigation">
          <Nav />
          <div className="relative shrink-0 w-full" data-name="HomeIndicator">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center pb-[2.451px] pt-[1.089px] px-[32.673px] relative size-full">
                <div className="bg-[#535d66] h-[1.361px] relative rounded-[5px] shrink-0 w-[36.485px]" data-name="Indicator" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[8.713px] pr-[4.356px] right-0 top-0" data-name="StatusBar">
          <LeftArea1 />
          <div className="h-[11.98px] mr-[-20.5px] relative shrink-0 w-[57.179px]" data-name="Notch Area" />
          <RightArea1 />
        </div>
      </div>
    </div>
  );
}

function PhoneFace1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] h-[228.991px] inline-grid ml-0 mt-[10.42px] place-items-start relative row-1 w-[123.975px]" data-name="Phone face">
      <Face1 />
      <div className="col-1 flex h-[218.531px] items-center justify-center ml-[5.46px] mt-[4.79px] relative row-1 w-[112.586px]">
        <div className="-rotate-4 flex-none">
          <div className="h-[212.21px] relative w-[98.021px]" data-name="Mockup-Más">
            <Mockup1 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Face2() {
  return (
    <div className="col-1 h-[240px] ml-0 mt-0 relative row-1 w-[117.606px]" data-name="Face">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 117.606 240">
        <g id="Face">
          <path clipRule="evenodd" d={svgPaths.p221ecb00} fill="var(--fill-0, #FAFAFA)" fillRule="evenodd" id="Body" />
          <path clipRule="evenodd" d={svgPaths.p1f888d00} fill="url(#paint0_linear_1_25650)" fillRule="evenodd" id="Body_2" />
          <g id="Speaker">
            <path d={svgPaths.p15312000} fill="var(--fill-0, #E8E8E8)" id="Vector" />
            <path d={svgPaths.p24270830} fill="var(--fill-0, #E8E8E8)" id="Vector_2" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_25650" x1="58.681" x2="23.9963" y1="1.13869" y2="317.666">
            <stop stopColor="#F5F5F5" />
            <stop offset="1" stopColor="#EBEBEB" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Beneficiary() {
  return (
    <div className="content-stretch flex flex-col gap-[2.296px] items-center relative shrink-0" data-name="Beneficiary">
      <div className="bg-[#ffe7e3] content-stretch flex items-center justify-center overflow-clip p-[2.296px] relative rounded-[64px] shrink-0 size-[18.371px]" data-name="Avatar">
        <div className="overflow-clip relative shrink-0 size-[12.63px]" data-name="add">
          <div className="absolute inset-[20.83%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7.36754 7.36754">
              <path d={svgPaths.p3cabf00} fill="var(--fill-0, #DF4730)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[3.44px] whitespace-nowrap">Nueva</p>
    </div>
  );
}

function Beneficiary1() {
  return (
    <div className="content-stretch flex flex-col gap-[2.296px] items-center relative shrink-0" data-name="Beneficiary">
      <div className="bg-[#edeff6] content-stretch flex items-center justify-center overflow-clip relative rounded-[64px] shrink-0 size-[18.371px]" data-name="Avatar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] min-w-px not-italic relative text-[#535d66] text-[6.89px] text-center">
          <p className="leading-[1.334]">AF</p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[3.44px] whitespace-nowrap">Alan</p>
    </div>
  );
}

function Beneficiaries() {
  return (
    <div className="content-stretch flex gap-[4.593px] items-start relative shrink-0" data-name="Beneficiaries">
      <Beneficiary />
      <Beneficiary1 />
    </div>
  );
}

function Recents() {
  return (
    <div className="content-stretch flex flex-col gap-[4.593px] items-start relative shrink-0 w-full" data-name="Recents">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[4.02px] whitespace-nowrap">Transferencias recientes</p>
      <Beneficiaries />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[94.151px]" data-name="Title">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[4.02px] whitespace-nowrap">Últimas transacciones</p>
      <div className="content-stretch flex gap-[0.574px] items-center justify-center p-[1.148px] relative rounded-[1.148px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[4.02px] text-center whitespace-nowrap">Ver todas</p>
      </div>
    </div>
  );
}

function DateAndTime() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[1.148px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Hoy</p>
      <p className="relative shrink-0">15:21</p>
    </div>
  );
}

function Name1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[3.44px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Claro</p>
      <DateAndTime />
    </div>
  );
}

function Left11() {
  return (
    <div className="content-stretch flex gap-[2.296px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[1.722px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[5.741px]" data-name="Style=Outlined">
          <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82729 4.78412">
              <path d={svgPaths.p3a780700} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name1 />
    </div>
  );
}

function Amount2() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] items-start justify-end leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[3.44px] text-right whitespace-nowrap" data-name="Amount">
      <p className="relative shrink-0">-</p>
      <p className="relative shrink-0">$7.846,62</p>
    </div>
  );
}

function Amount1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount2 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[1.148px] items-center relative shrink-0" data-name="Right">
      <Amount1 />
      <div className="overflow-clip relative shrink-0 size-[4.593px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.41801 2.29638">
            <path d={svgPaths.p22101800} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateAndTime1() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[1.148px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Hoy</p>
      <p className="relative shrink-0">14:12</p>
    </div>
  );
}

function Name2() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[3.44px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Transferencia enviada</p>
      <DateAndTime1 />
    </div>
  );
}

function Left12() {
  return (
    <div className="content-stretch flex gap-[2.296px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[1.722px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[5.741px]" data-name="Style=Outlined">
          <div className="absolute inset-[18.75%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.58809 3.58809">
              <path d={svgPaths.p210c0b00} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name2 />
    </div>
  );
}

function Amount4() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] items-start justify-end leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[3.44px] text-right whitespace-nowrap" data-name="Amount">
      <p className="relative shrink-0">-</p>
      <p className="relative shrink-0">$10.000,00</p>
    </div>
  );
}

function Amount3() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount4 />
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[1.148px] items-center relative shrink-0" data-name="Right">
      <Amount3 />
      <div className="overflow-clip relative shrink-0 size-[4.593px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.41801 2.29638">
            <path d={svgPaths.p22101800} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateAndTime2() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[1.148px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Hoy</p>
      <p className="relative shrink-0">12:32</p>
    </div>
  );
}

function Name3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[3.44px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Adidas</p>
      <DateAndTime2 />
    </div>
  );
}

function Left13() {
  return (
    <div className="content-stretch flex gap-[2.296px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[1.722px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[5.741px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.3057 4.3057">
              <g id="Vector">
                <path d={svgPaths.p198f3cc0} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p1b6e1a80} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p96a2570} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.pf8e6200} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p31f8e500} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p160fbbb0} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p212d7000} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p976f200} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p222a9300} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p26774f80} fill="var(--fill-0, #FF583F)" />
                <path d={svgPaths.p2f938300} fill="var(--fill-0, #FF583F)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <Name3 />
    </div>
  );
}

function Amount6() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] items-start justify-end leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[3.44px] text-right whitespace-nowrap" data-name="Amount">
      <p className="relative shrink-0">-</p>
      <p className="relative shrink-0">$2.560,00</p>
    </div>
  );
}

function Amount5() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount6 />
    </div>
  );
}

function Right2() {
  return (
    <div className="content-stretch flex gap-[1.148px] items-center relative shrink-0" data-name="Right">
      <Amount5 />
      <div className="overflow-clip relative shrink-0 size-[4.593px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.41801 2.29638">
            <path d={svgPaths.p22101800} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function DateAndTime3() {
  return (
    <div className="content-stretch flex font-['Sora:Regular',sans-serif] gap-[1.148px] items-start relative shrink-0 text-[#78838d]" data-name="Date and time">
      <p className="relative shrink-0">Ayer</p>
      <p className="relative shrink-0">14:12</p>
    </div>
  );
}

function Name4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[1.5] not-italic relative shrink-0 text-[3.44px] whitespace-nowrap" data-name="Name">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919]">Ingreso de dinero</p>
      <DateAndTime3 />
    </div>
  );
}

function Left14() {
  return (
    <div className="content-stretch flex gap-[2.296px] items-center relative shrink-0" data-name="Left">
      <div className="bg-[#fff2f0] content-stretch flex items-center justify-center overflow-clip p-[1.722px] relative rounded-[64px] shrink-0" data-name="IconItem">
        <div className="overflow-clip relative shrink-0 size-[5.741px]" data-name="Style=Outlined">
          <div className="absolute inset-[12.5%_16.67%]" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82729 4.3057">
              <path d={svgPaths.p3ed96d00} fill="var(--fill-0, #FF583F)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <Name4 />
    </div>
  );
}

function Amount8() {
  return (
    <div className="[word-break:break-word] content-stretch flex font-['Sora:Regular',sans-serif] items-start justify-end leading-[1.5] not-italic relative shrink-0 text-[#289b4f] text-[3.44px] text-right whitespace-nowrap" data-name="Amount">
      <p className="relative shrink-0">+</p>
      <p className="relative shrink-0">$25.000,00</p>
    </div>
  );
}

function Amount7() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount8 />
    </div>
  );
}

function Right3() {
  return (
    <div className="content-stretch flex gap-[1.148px] items-center relative shrink-0" data-name="Right">
      <Amount7 />
      <div className="overflow-clip relative shrink-0 size-[4.593px]" data-name="keyboard_arrow_right">
        <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1.41801 2.29638">
            <path d={svgPaths.p22101800} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Transactions1() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0 w-full" data-name="Transactions">
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.287px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[2.296px] relative size-full">
            <Left11 />
            <Right />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.287px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[2.296px] relative size-full">
            <Left12 />
            <Right1 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.287px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[2.296px] relative size-full">
            <Left13 />
            <Right2 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b-[0.287px] border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[2.296px] relative size-full">
            <Left14 />
            <Right3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Transactions() {
  return (
    <div className="content-stretch flex flex-col gap-[4.593px] items-center relative shrink-0 w-full" data-name="Transactions">
      <Title2 />
      <Transactions1 />
    </div>
  );
}

function Body3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[6.889px] h-[121.134px] items-center left-0 p-[4.593px] right-0 top-[87.26px]" data-name="body">
      <Recents />
      <Transactions />
    </div>
  );
}

function Greeting() {
  return (
    <div className="content-stretch flex gap-[2.296px] items-center relative shrink-0" data-name="Greeting">
      <div className="bg-[#ffe7e3] content-stretch flex items-center justify-center overflow-clip relative rounded-[64px] shrink-0 size-[13.778px]" data-name="Avatar">
        <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] min-w-px not-italic relative text-[#df4730] text-[5.17px] text-center">
          <p className="leading-[1.5]">LM</p>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[4.02px] text-white whitespace-nowrap">¡Hola, Laura!</p>
    </div>
  );
}

function Top2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="top">
      <Greeting />
      <div className="overflow-clip relative shrink-0 size-[8.037px]" data-name="notifications_none">
        <div className="absolute inset-[9.38%_16.67%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.35821 6.53032">
            <path d={svgPaths.p39889180} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[2.296px] items-center min-w-px relative" data-name="Div">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#ffe7e3] text-[4.02px] whitespace-nowrap">Saldo disponible</p>
    </div>
  );
}

function Title3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Title">
      <Div />
      <div className="bg-[#841a0a] content-stretch flex gap-[1.148px] items-center justify-center px-[2.296px] py-[0.861px] relative rounded-[1.148px] shrink-0" data-name="button">
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[3.44px] text-center text-white whitespace-nowrap">Tu CVU</p>
      </div>
    </div>
  );
}

function Number2() {
  return (
    <div className="flex flex-row items-center self-stretch">
      <div className="[word-break:break-word] content-stretch flex h-full items-start leading-[1.5] not-italic relative shrink-0 text-center text-white whitespace-nowrap" data-name="number">
        <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[10.33px]">82.443</p>
        <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[5.17px]">00</p>
      </div>
    </div>
  );
}

function Price2() {
  return (
    <div className="content-stretch flex gap-[1.148px] h-[15.501px] items-center relative shrink-0 w-full" data-name="price">
      <div className="[word-break:break-word] flex flex-col font-['Sora:Regular',sans-serif] h-full justify-center leading-[0] not-italic relative shrink-0 text-[6.03px] text-center text-white w-[4.019px]">
        <p className="leading-[1.5]">$</p>
      </div>
      <Number2 />
    </div>
  );
}

function Info3() {
  return (
    <div className="content-stretch flex flex-col gap-[2.296px] items-start relative shrink-0 w-full" data-name="info">
      <Title3 />
      <Price2 />
    </div>
  );
}

function CashIn() {
  return (
    <div className="content-stretch flex flex-col gap-[2.296px] items-center relative shrink-0" data-name="CashIn">
      <div className="flex items-center justify-center relative shrink-0 size-[4.593px]">
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[4.593px]" data-name="keyboard_tab">
            <div className="absolute bottom-1/4 left-[6.25%] right-[6.25%] top-1/4" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.01866 2.29638">
                <path d={svgPaths.p1e2c8600} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[3.44px] text-center text-white whitespace-nowrap">Ingresar</p>
    </div>
  );
}

function Withdraw() {
  return (
    <div className="content-stretch flex flex-col gap-[2.296px] items-center relative shrink-0" data-name="Withdraw">
      <div className="flex items-center justify-center relative shrink-0 size-[4.593px]">
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[4.593px]" data-name="start">
            <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82729 2.29638">
                <path d={svgPaths.p1488bbc0} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[3.44px] text-center text-white whitespace-nowrap">Retirar</p>
    </div>
  );
}

function Transfer() {
  return (
    <div className="content-stretch flex flex-col gap-[2.296px] items-center relative shrink-0" data-name="Transfer">
      <div className="overflow-clip relative shrink-0 size-[4.593px]" data-name="sync_alt">
        <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.82729 3.06183">
            <g id="Vector">
              <path d={svgPaths.p1732f600} fill="var(--fill-0, white)" />
              <path d={svgPaths.p34e06900} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[3.44px] text-center text-white whitespace-nowrap">Transferir</p>
    </div>
  );
}

function Actions11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[4.593px] relative size-full">
          <CashIn />
          <div className="h-[6.889px] relative shrink-0 w-0" data-name="divider">
            <div className="absolute inset-[0_-0.14px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.287047 6.88913">
                <path d="M0.143523 0V6.88913" id="divider" stroke="var(--stroke-0, #841A0A)" strokeWidth="0.287047" />
              </svg>
            </div>
          </div>
          <Withdraw />
          <div className="h-[6.889px] relative shrink-0 w-0" data-name="divider">
            <div className="absolute inset-[0_-0.14px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.287047 6.88913">
                <path d="M0.143523 0V6.88913" id="divider" stroke="var(--stroke-0, #841A0A)" strokeWidth="0.287047" />
              </svg>
            </div>
          </div>
          <Transfer />
        </div>
      </div>
    </div>
  );
}

function Balance2() {
  return (
    <div className="bg-[#df4730] relative rounded-[16px] shrink-0 w-full" data-name="balance">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[3.445px] items-center p-[4.593px] relative size-full">
          <Info3 />
          <Actions11 />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#ff583f] content-stretch flex flex-col gap-[4.593px] items-center justify-end left-0 overflow-clip pb-[4.593px] pt-[2.296px] px-[4.593px] right-0 top-[12.63px]" data-name="header">
      <Top2 />
      <Balance2 />
    </div>
  );
}

function Time2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.14px)] top-1/2" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[4.88px] text-white tracking-[-0.1952px] whitespace-nowrap">9:41</p>
    </div>
  );
}

function LeftArea2() {
  return (
    <div className="h-[11.482px] mr-[-20.5px] overflow-clip relative shrink-0 w-[18.084px]" data-name="Left Area">
      <Time2 />
    </div>
  );
}

function Sim1SingleSim2() {
  return (
    <div className="h-[4.019px] overflow-clip relative shrink-0 w-[5.741px]" data-name="SIM / 1 - Single SIM">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[3.445px] left-[calc(50%+2.28px)] rounded-[1px] top-1/2 w-[0.919px]" data-name="Bar 4" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[2.756px] left-[calc(50%+0.76px)] rounded-[1px] top-[calc(50%+0.34px)] w-[0.919px]" data-name="Bar 3" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[2.009px] left-[calc(50%-0.76px)] rounded-[1px] top-[calc(50%+0.72px)] w-[0.919px]" data-name="Bar 2" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[1.32px] left-[calc(50%-2.28px)] rounded-[1px] top-[calc(50%+1.06px)] w-[0.919px]" data-name="Bar 1" />
    </div>
  );
}

function Loading2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[3.158px] left-1/2 top-1/2 w-[4.499px]" data-name="loading">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.49956 3.15759">
        <g id="loading">
          <path d={svgPaths.p7736900} fill="var(--fill-0, white)" id="Path" />
          <path d={svgPaths.p2855a500} fill="var(--fill-0, white)" id="Path_2" />
          <path d={svgPaths.p662200} fill="var(--fill-0, white)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function NetworkWiFiFull2() {
  return (
    <div className="h-[3.445px] overflow-clip relative shrink-0 w-[5.741px]" data-name="Network / WiFi Full">
      <Loading2 />
    </div>
  );
}

function BatteryFullUncharged2() {
  return (
    <div className="h-[4.019px] relative shrink-0 w-[8.037px]" data-name="Battery / Full Uncharged">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.03732 4.01866">
        <g id="Battery / Full Uncharged">
          <rect fill="var(--fill-0, white)" height="2.58342" id="Battery Fill" rx="0.381772" width="6.02799" x="0.574094" y="0.717617" />
          <path d={svgPaths.p39d1edf0} fill="var(--fill-0, white)" id="Battery Frame" opacity="0.4" />
        </g>
      </svg>
    </div>
  );
}

function AutoLayout2() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[0.861px] items-center justify-end right-0 top-1/2" data-name="Auto-layout">
      <Sim1SingleSim2 />
      <NetworkWiFiFull2 />
      <BatteryFullUncharged2 />
    </div>
  );
}

function StatusArea2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4.019px] left-[calc(50%-0.29px)] top-1/2 w-[21.241px]" data-name="Status Area">
      <AutoLayout2 />
    </div>
  );
}

function RightArea2() {
  return (
    <div className="h-[11.482px] relative shrink-0 w-[22.964px]" data-name="Right Area">
      <StatusArea2 />
      <div className="absolute left-[1.72px] size-[1.722px] top-[1.72px]" data-name="Privacy Indicator / None">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 4" />
        </svg>
      </div>
    </div>
  );
}

function UnstyledIconButton1() {
  return (
    <div className="content-stretch flex items-center p-[3.445px] relative rounded-[48px] shrink-0" data-name="UnstyledIconButton">
      <div className="overflow-clip relative shrink-0 size-[6.889px]" data-name="Style=Outlined">
        <div className="absolute inset-[12.5%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.16685 5.16685">
            <g id="Vector">
              <path d={svgPaths.p2a5b7900} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3137c280} fill="var(--fill-0, white)" />
              <path d={svgPaths.p140f9c00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2cedc100} fill="var(--fill-0, white)" />
              <path d={svgPaths.p2238fe40} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3c24d980} fill="var(--fill-0, white)" />
              <path d={svgPaths.p10e05780} fill="var(--fill-0, white)" />
              <path d={svgPaths.p3ea41d00} fill="var(--fill-0, white)" />
              <path d={svgPaths.p22992400} fill="var(--fill-0, white)" />
              <path d={svgPaths.p1ecfbac0} fill="var(--fill-0, white)" />
              <path d={svgPaths.p7730532} fill="var(--fill-0, white)" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#ff583f] content-stretch flex flex-col items-center justify-center left-[calc(50%-0.11px)] rounded-[48px] top-[-1.15px]" data-name="IconButton">
      <div aria-hidden className="absolute border-[#fff2f0] border-[0.861px] border-solid inset-[-0.861px] pointer-events-none rounded-[48.861px]" />
      <UnstyledIconButton1 />
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex h-[16.075px] items-center relative shrink-0 w-full" data-name="Nav">
      <div aria-hidden className="absolute border-[#e1e3ed] border-solid border-t-[0.287px] inset-0 pointer-events-none" />
      <div className="flex-[1_0_0] h-[16.075px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.593px] py-[2.296px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[6.889px]" data-name="Style=Outlined">
              <div className="absolute inset-[14.58%_8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.74094 4.8798">
                  <path d={svgPaths.p3915a600} fill="var(--fill-0, #FF583F)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#ff583f] text-[3.44px] text-center whitespace-nowrap">Inicio</p>
            <div className="absolute h-0 left-0 right-[-0.07px] top-[0.57px]" data-name="line">
              <div className="absolute inset-[-0.57px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 0.574094">
                  <line id="line" stroke="var(--stroke-0, #FF583F)" strokeWidth="0.574094" x2="21" y1="0.287047" y2="0.287047" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[16.075px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.593px] py-[2.296px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[6.889px]" data-name="Style=Outlined">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.16685 5.16685">
                  <path d={svgPaths.p23a4e980} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[3.44px] text-center whitespace-nowrap">Actividad</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[16.075px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.593px] py-[2.296px] relative size-full">
            <IconButton1 />
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[16.075px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.593px] py-[2.296px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[6.889px]" data-name="Style=Outlined">
              <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.74094 4.59275">
                  <path d={svgPaths.pd149300} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[3.44px] text-center whitespace-nowrap">Tarjetas</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[16.075px] min-w-px relative" data-name=".item-menu">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[4.593px] py-[2.296px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[6.889px]" data-name="Style=Outlined">
              <div className="absolute inset-[16.67%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.59275 4.59275">
                  <path d={svgPaths.p1de88800} fill="var(--fill-0, #78838D)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[3.44px] text-center whitespace-nowrap">Mi perfil</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Mockup2() {
  return (
    <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[337.113px_729.83px]" style={{ maskImage: `url("${imgMockup1}")` }} data-name="Mockup">
      <div className="absolute bg-white inset-0 overflow-clip" data-name="Home">
        <Body3 />
        <Header />
        <div className="absolute bg-[#ff583f] content-stretch flex items-center justify-between left-0 pl-[9.186px] pr-[4.593px] right-0 top-0" data-name="StatusBar">
          <LeftArea2 />
          <div className="h-[12.63px] mr-[-20.5px] relative shrink-0 w-[60.28px]" data-name="Notch Area" />
          <RightArea2 />
        </div>
        <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start justify-center left-0 right-0" data-name="Navigation">
          <Nav1 />
          <div className="relative shrink-0 w-full" data-name="HomeIndicator">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center pb-[2.583px] pt-[1.148px] px-[34.446px] relative size-full">
                <div className="bg-[#535d66] h-[1.435px] relative rounded-[5px] shrink-0 w-[38.464px]" data-name="Indicator" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneFace2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[89.85px] mt-0 place-items-start relative row-1" data-name="Phone face">
      <Face2 />
      <div className="col-1 h-[229.584px] ml-[5.93px] mt-[5.21px] relative row-1 w-[106.046px]" data-name="Mockup-Home">
        <Mockup2 />
      </div>
    </div>
  );
}

function Ilustration() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="ilustration">
      <PhoneFace />
      <PhoneFace1 />
      <PhoneFace2 />
    </div>
  );
}

function Text1() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col gap-[16px] items-center leading-[1.5] not-italic relative shrink-0 text-center w-full" data-name="text">
      <p className="font-['Sora:Bold',sans-serif] relative shrink-0 text-[#191919] text-[21px] w-full">¡Tu cuenta está lista!</p>
      <p className="font-['Sora:Regular',sans-serif] relative shrink-0 text-[#78838d] text-[14px] w-full">Accede a tu cuenta o valida tu identidad para comenzar a operar.</p>
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-center justify-center min-h-px relative w-full" data-name="content">
      <Ilustration />
      <Text1 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="buttons">
      <div className="bg-[#df4730] h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[14px] text-center text-white whitespace-nowrap">Validar mi identidad</p>
          </div>
        </div>
      </div>
      <div className="h-[45px] relative rounded-[4px] shrink-0 w-full" data-name="button">
        <div aria-hidden className="absolute border border-[#df4730] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Ir a mi billetera</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] inset-[44px_0_24px_0] items-center p-[24px]" data-name="body">
      <Content />
      <Buttons />
    </div>
  );
}

function GestureNavigation1() {
  return (
    <div className="absolute bg-white inset-0" data-name="Gesture Navigation">
      <div className="-translate-x-1/2 absolute bg-[#949494] h-[2px] left-1/2 rounded-[32px] top-[8px] w-[64px]" data-name="Rectangle" />
    </div>
  );
}

function GestureNavigation() {
  return (
    <div className="h-[14px] relative shrink-0 w-full" data-name="Gesture Navigation">
      <GestureNavigation1 />
    </div>
  );
}

function Time3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] top-1/2" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#191919] text-[17px] tracking-[-0.68px] whitespace-nowrap">9:41</p>
    </div>
  );
}

function LeftArea3() {
  return (
    <div className="h-[40px] mr-[-12px] overflow-clip relative shrink-0 w-[63px]" data-name="Left Area">
      <Time3 />
    </div>
  );
}

function Sim1SingleSim3() {
  return (
    <div className="h-[14px] overflow-clip relative shrink-0 w-[20px]" data-name="SIM / 1 - Single SIM">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[12px] left-[calc(50%+7.95px)] rounded-[1px] top-1/2 w-[3.2px]" data-name="Bar 4" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[9.6px] left-[calc(50%+2.65px)] rounded-[1px] top-[calc(50%+1.2px)] w-[3.2px]" data-name="Bar 3" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[7px] left-[calc(50%-2.65px)] rounded-[1px] top-[calc(50%+2.5px)] w-[3.2px]" data-name="Bar 2" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#191919] h-[4.6px] left-[calc(50%-7.95px)] rounded-[1px] top-[calc(50%+3.7px)] w-[3.2px]" data-name="Bar 1" />
    </div>
  );
}

function Group() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11px] left-1/2 top-1/2 w-[15.675px]">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.675 11">
        <g id="Group 3">
          <path d={svgPaths.p1e8a5380} fill="var(--fill-0, #191919)" id="Path" />
          <path d={svgPaths.p1bf80500} fill="var(--fill-0, #191919)" id="Path_2" />
          <path d={svgPaths.p33e85b80} fill="var(--fill-0, #191919)" id="Path_3" />
        </g>
      </svg>
    </div>
  );
}

function NetworkWiFiFull3() {
  return (
    <div className="h-[12px] overflow-clip relative shrink-0 w-[20px]" data-name="Network / WiFi Full">
      <Group />
    </div>
  );
}

function BatteryFullUncharged3() {
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

function AutoLayout3() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex gap-[3px] items-center justify-end right-0 top-1/2" data-name="Auto-layout">
      <Sim1SingleSim3 />
      <NetworkWiFiFull3 />
      <BatteryFullUncharged3 />
    </div>
  );
}

function StatusArea3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[14px] left-[calc(50%-0.5px)] top-1/2 w-[74px]" data-name="Status Area">
      <AutoLayout3 />
    </div>
  );
}

function RightArea3() {
  return (
    <div className="h-[40px] relative shrink-0 w-[63px]" data-name="Right Area">
      <StatusArea3 />
      <div className="absolute left-[6px] size-[6px] top-[6px]" data-name="Privacy Indicator / None">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g id="Ellipse 4" />
        </svg>
      </div>
    </div>
  );
}

export default function Success() {
  return (
    <div className="bg-white relative size-full" data-name="Success">
      <Body />
      <div className="-translate-x-1/2 absolute bg-white content-stretch flex flex-col items-center justify-center left-1/2 overflow-clip top-[786px] w-[360px]" data-name="Android Bottom Navigation Bar">
        <GestureNavigation />
      </div>
      <div className="absolute content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] top-0 w-[360px]" data-name="iPhone with Notch">
        <LeftArea3 />
        <div className="h-[44px] mr-[-12px] relative shrink-0 w-[210px]" data-name="Notch Area" />
        <RightArea3 />
      </div>
    </div>
  );
}