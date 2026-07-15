import svgPaths from "./svg-i80g3jxva2";

function Back() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="back">
      <div className="content-stretch flex gap-[2px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0" data-name="button">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
          <div className="absolute bottom-1/4 left-[34.56%] right-[34.56%] top-1/4" data-name="Vector">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.175 10">
              <path d={svgPaths.pfe69d00} fill="var(--fill-0, #DF4730)" id="Vector" />
            </svg>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Volver</p>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="title">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Tarjeta virtual</p>
    </div>
  );
}

function LogoGollet() {
  return (
    <div className="absolute inset-[6.96%_3.28%_7.94%_4.92%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 67.2004 20.4228">
        <g id="Logo Gollet">
          <g id="Gollet">
            <path d={svgPaths.p3471bf00} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p21601f70} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p4c23200} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p2b385480} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p3e631000} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p325d7080} fill="var(--fill-0, #FF6C3B)" />
          </g>
          <path d={svgPaths.p2d8474c0} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.p240ca200} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
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

function Buttons() {
  return (
    <div className="content-stretch flex gap-[16px] h-[45px] items-start relative shrink-0 w-full" data-name="buttons">
      <div className="flex-[1_0_0] min-w-px relative rounded-[4px] self-stretch" data-name="button">
        <div aria-hidden className="absolute border border-[#bac2c7] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
              <div className="absolute inset-[16.67%_8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 13.3333">
                  <path d={svgPaths.p17159000} fill="var(--fill-0, #BAC2C7)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[14px] text-center whitespace-nowrap">Ver datos</p>
          </div>
        </div>
      </div>
      <button className="cursor-pointer flex-[1_0_0] min-w-px relative rounded-[4px] self-stretch" data-name="button">
        <div aria-hidden className="absolute border border-[#df4730] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Style=Outlined">
              <div className="absolute inset-[8.33%]" data-name="Vector">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                  <path d={svgPaths.p227aad00} fill="var(--fill-0, #DF4730)" id="Vector" />
                </svg>
              </div>
            </div>
            <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#df4730] text-[14px] text-center whitespace-nowrap">Activar</p>
          </div>
        </div>
      </button>
    </div>
  );
}

function Icon() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Icon">
      <div className="bg-[#f7f8fe] col-1 ml-0 mt-0 relative rounded-[8px] row-1 size-[32px]" />
      <div className="col-1 ml-[6px] mt-[6px] overflow-clip relative row-1 size-[20px]" data-name="Style=Outlined">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
            <path d={svgPaths.p2d52aa80} fill="var(--fill-0, #535D66)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[34px]" data-name="Label">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-full not-italic relative shrink-0 text-[#191919] text-[12px] w-[min-content]">Denunciar tarjeta</p>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-w-px relative" data-name="Left">
      <Icon />
      <Label />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Actions">
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

function ListItems() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List_items">
      <div className="relative shrink-0 w-full" data-name="List item">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between px-[8px] py-[12px] relative size-full">
            <Left />
            <Actions />
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailCustomCard() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="detail-custom_card">
      <Buttons />
      <ListItems />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px relative w-full" data-name="content">
      <div className="content-stretch flex h-[210px] items-center justify-end relative shrink-0 w-full" data-name="Cards">
        <Card />
      </div>
      <DetailCustomCard />
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="icon">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="info">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p32f50700} fill="var(--fill-0, #78838D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative" data-name="Text">
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#78838d] text-[12px] w-full">Tu tarjeta está pausada y no podrás utilizarla para hacer pagos o compras.</p>
    </div>
  );
}

function Body() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] inset-[44px_0_0_0] items-center pb-[40px] pt-[16px] px-[16px]" data-name="body">
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="topbar">
        <Back />
        <Title />
      </div>
      <Content />
      <div className="bg-[#f7f8fe] relative rounded-[8px] shrink-0 w-full" data-name="Snackbar">
        <div aria-hidden className="absolute border border-[#e1e3ed] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[12px] relative size-full">
            <Icon1 />
            <Text />
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

export default function DetalleTarjeta() {
  return (
    <div className="relative size-full" data-name="DetalleTarjeta">
      <div className="absolute bg-white h-[800px] left-0 overflow-clip top-0 w-[360px]" data-name="Tarjetas">
        <Body />
        <div className="absolute bg-white bottom-0 content-stretch flex flex-col items-start justify-center left-0 right-0" data-name="Navigation">
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