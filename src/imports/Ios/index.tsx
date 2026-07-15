import svgPaths from "./svg-095rndueai";
import imgHomeScreenIPhone from "./3182eaf85198f8824b7019d54380f16b90da131f.png";
import imgAppIcon from "./69a053925dac89655d4a25e21d1a878ec53ce985.png";
import imgAppIcon1 from "./d402b0eac3cd96fe98dc39ba7393ec616a3f84e4.png";
import imgAppIcon2 from "./133153b09d6a1b2f6153ce206de76ed72af038eb.png";
import imgAppIcon3 from "./9ef33258d22a5d03dc6405b76f585b495ef9cc66.png";
import imgAppIcon4 from "./1302979d2e02f00396a3b596dad312239f69f69c.png";
import imgAppIcon5 from "./74501915e488338e39cd8d3676512c994708dc75.png";
import imgAppIcon6 from "./58e7f457ecb8b0549bf383c6cdb9b02afde7198f.png";
import imgAppIcon7 from "./1fcfcb0fd69816bf2476ffe4e48dbcaffec03c8b.png";
import imgAppIcon8 from "./befeb8af171a344830852e7f8adfd00a63e947b0.png";
import imgAppIcon9 from "./2becdc9cd99e3917b19d381796bab17dc7a9d8fc.png";
import imgAppIcon10 from "./621a4e5709c18fcbfb53de778b07f6e5b1ca8522.png";
import imgAppIcon11 from "./ecf170f7310e130266acc17bad19429704e5f3b8.png";
import imgAppIcon12 from "./4f851d7f1daf5ef7257bd3919581bd911f58e478.png";
import imgAppIcon13 from "./a1e971f26a592df955b03c099f251ff82a9a8af6.png";
import imgAppIcon14 from "./83428566433caff7ce702512221fde83b8cd674e.png";
import imgDockApp1 from "./606a28bed34f111d87e2054c3a29ff1418000cf6.png";
import imgDockApp2 from "./b8585fa4d4096c05896dd31fd6bdce734b241715.png";
import imgDockApp3 from "./5e2e8ce821ccc303efd95cb06f9c70881885a795.png";
import imgDockApp4 from "./e586b7d1f8031c861f09ab954b155c0924540152.png";

function Time() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex items-center justify-center left-[calc(50%+0.5px)] top-1/2" data-name="Time">
      <p className="[word-break:break-word] font-['SF_Pro_Display:Semibold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[17px] text-white tracking-[-0.68px] whitespace-nowrap">9:41</p>
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
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[12px] left-[calc(50%+7.95px)] rounded-[1px] top-1/2 w-[3.2px]" data-name="Bar 4" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[9.6px] left-[calc(50%+2.65px)] rounded-[1px] top-[calc(50%+1.2px)] w-[3.2px]" data-name="Bar 3" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[7px] left-[calc(50%-2.65px)] rounded-[1px] top-[calc(50%+2.5px)] w-[3.2px]" data-name="Bar 2" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[4.6px] left-[calc(50%-7.95px)] rounded-[1px] top-[calc(50%+3.7px)] w-[3.2px]" data-name="Bar 1" />
    </div>
  );
}

function Loading() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[11px] left-1/2 top-1/2 w-[15.675px]" data-name="loading">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.675 11">
        <g id="loading">
          <path d={svgPaths.p1e8a5380} fill="var(--fill-0, white)" id="Path" />
          <path d={svgPaths.p1bf80500} fill="var(--fill-0, white)" id="Path_2" />
          <path d={svgPaths.p33e85b80} fill="var(--fill-0, white)" id="Path_3" />
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
          <rect fill="var(--fill-0, white)" height="9" id="Battery Fill" rx="1.33" width="21" x="2" y="2.5" />
          <path d={svgPaths.p3f1ced00} fill="var(--fill-0, white)" id="Battery Frame" opacity="0.4" />
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

function LogoGollet() {
  return (
    <div className="absolute inset-[5%_6.5%_10%_7.89%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.6663 20.3999">
        <g id="Logo Gollet">
          <g id="Gonnectia">
            <path d={svgPaths.p29f54f80} fill="var(--fill-0, #FF6C3B)" id="Vector" />
            <path d={svgPaths.p26c28700} fill="var(--fill-0, #FF6C3B)" id="Vector_2" />
          </g>
          <path d={svgPaths.p295c6400} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.p1bc9b200} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <div className="absolute bg-[#f7f8fe] inset-0" data-name="No App Icon" />
      </div>
      <div className="absolute inset-[30%_14.17%_30%_12.5%]" data-name="Logo">
        <LogoGollet />
      </div>
    </div>
  );
}

function Row4() {
  return (
    <div className="-translate-x-1/2 absolute h-[79px] left-[calc(50%-0.5px)] top-[418px] w-[311px]" data-name="Row 5">
      <div className="absolute content-stretch flex flex-col gap-[5px] items-center left-0 top-0 w-[60px]" data-name="Row 5 - App 1">
        <Frame />
        <p className="[word-break:break-word] font-['Arial:Regular',sans-serif] leading-[normal] not-italic overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white tracking-[-0.2px] whitespace-nowrap">Gollet</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon} />
      </div>
    </div>
  );
}

function Row4App() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 4 - App 1">
      <Frame1 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Maps
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon1} />
      </div>
    </div>
  );
}

function Row4App1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 4 - App 2">
      <Frame2 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Salud
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon2} />
      </div>
    </div>
  );
}

function Row4App2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 4 - App 3">
      <Frame3 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Wallet
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon3} />
      </div>
    </div>
  );
}

function Row4App3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 4 - App 4">
      <Frame4 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Ajustes
      </p>
    </div>
  );
}

function Row3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-start left-1/2 top-[320px]" data-name="Row 4">
      <Row4App />
      <Row4App1 />
      <Row4App2 />
      <Row4App3 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon4} />
      </div>
    </div>
  );
}

function Row3App() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 3 - App 1">
      <Frame5 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        News
      </p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon5} />
      </div>
    </div>
  );
}

function Row3App1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 3 - App 2">
      <Frame6 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        TV
      </p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon6} />
      </div>
    </div>
  );
}

function Row3App2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 3 - App 3">
      <Frame7 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Podcasts
      </p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon7} />
      </div>
    </div>
  );
}

function Row3App3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 3 - App 4">
      <Frame8 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        App Store
      </p>
    </div>
  );
}

function Row2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-start left-1/2 top-[222px]" data-name="Row 3">
      <Row3App />
      <Row3App1 />
      <Row3App2 />
      <Row3App3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon8} />
      </div>
    </div>
  );
}

function Row2App() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 2 - App 1">
      <Frame9 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Mail
      </p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon9} />
      </div>
    </div>
  );
}

function Row2App1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 2 - App 2">
      <Frame10 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Notas
      </p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon10} />
      </div>
    </div>
  );
}

function Row2App2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 2 - App 3">
      <Frame11 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Recordatorios
      </p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon11} />
      </div>
    </div>
  );
}

function Row2App3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 2 - App 4">
      <Frame12 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Reloj
      </p>
    </div>
  );
}

function Row1() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-start left-1/2 top-[124px]" data-name="Row 2">
      <Row2App />
      <Row2App1 />
      <Row2App2 />
      <Row2App3 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon12} />
      </div>
    </div>
  );
}

function Row1App() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 1 - App 1">
      <Frame13 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        FaceTime
      </p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="[word-break:break-word] absolute bg-white leading-[normal] left-0 overflow-clip rounded-[14px] size-[60px] text-center top-0 whitespace-nowrap" data-name="App Icon">
        <p className="absolute font-['SF_Pro:Light',sans-serif] font-[274.31500244140625] inset-[21.67%_30%_3.33%_31.67%] text-[#262626] text-[37.5px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          6
        </p>
        <p className="absolute bottom-[69.44%] font-['SF_Pro:Bold',sans-serif] font-bold left-[26.67%] right-1/4 text-[#ff3a2f] text-[11.5px] top-[7.22%]" style={{ fontVariationSettings: '"wdth" 100' }}>
          MON
        </p>
      </div>
    </div>
  );
}

function Row1App1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 1 - App 2">
      <Frame14 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Calendario
      </p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon13} />
      </div>
    </div>
  );
}

function Row1App2() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 1 - App 3">
      <Frame15 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Fotos
      </p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Frame">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="App Icon">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgAppIcon14} />
      </div>
    </div>
  );
}

function Row1App3() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-[60px]" data-name="Row 1 - App 4">
      <Frame16 />
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal h-[14px] leading-[normal] min-w-full overflow-hidden relative shrink-0 text-[12px] text-center text-ellipsis text-white w-[min-content] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Cámara
      </p>
    </div>
  );
}

function Row() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[24px] items-start left-1/2 top-[26px]" data-name="Row 1">
      <Row1App />
      <Row1App1 />
      <Row1App2 />
      <Row1App3 />
    </div>
  );
}

function AppIcons() {
  return (
    <div className="flex-[1_0_0] min-h-px relative w-full" data-name="App Icons">
      <Row4 />
      <Row3 />
      <Row2 />
      <Row1 />
      <Row />
    </div>
  );
}

function SearchField() {
  return (
    <div className="content-stretch flex h-[30px] items-start overflow-clip px-[11px] py-[7px] relative rounded-[100px] shrink-0" data-name="Search Field">
      <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[100px]">
        <div className="absolute bg-[rgba(191,191,191,0.44)] inset-0 rounded-[100px]" />
        <div className="absolute backdrop-blur-[25px] bg-[#0d0d0d] inset-0 mix-blend-color-dodge rounded-[100px]" />
      </div>
      <p className="[word-break:break-word] font-['SF_Pro:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[12px] text-center text-white tracking-[-0.4px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{`\u{1002AB} Buscar`}</p>
    </div>
  );
}

function DockApp() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Dock App 1">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="Dock App 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDockApp1} />
      </div>
    </div>
  );
}

function DockApp1() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Dock App 2">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="Dock App 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDockApp2} />
      </div>
    </div>
  );
}

function DockApp2() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Dock App 3">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="Dock App 3">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDockApp3} />
      </div>
    </div>
  );
}

function DockApp3() {
  return (
    <div className="relative shrink-0 size-[60px]" data-name="Dock App 4">
      <div className="absolute left-0 overflow-clip rounded-[14px] size-[60px] top-0" data-name="Dock App 4">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgDockApp4} />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
      <div className="flex-[1_0_0] h-full min-w-px relative rounded-[41px]" data-name="Background">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[41px]">
          <div className="absolute bg-[rgba(191,191,191,0.44)] inset-0 rounded-[41px]" />
          <div className="absolute backdrop-blur-[25px] bg-[#0d0d0d] inset-0 mix-blend-color-dodge rounded-[41px]" />
        </div>
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[20px] items-center justify-center py-[19px] relative size-full">
            <DockApp />
            <DockApp1 />
            <DockApp2 />
            <DockApp3 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Dock() {
  return (
    <div className="h-[122px] relative rounded-[41px] shrink-0 w-full" data-name="Dock">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[11px] py-[12px] relative size-full">
          <Background />
        </div>
      </div>
    </div>
  );
}

function InicipoApp() {
  return (
    <div className="absolute h-[800px] left-0 top-0 w-[360px]" data-name="InicipoApp">
      <div className="-translate-x-1/2 absolute bottom-0 content-stretch flex flex-col gap-[10px] items-center left-1/2 overflow-clip top-0 w-[360px]" data-name="Home Screen - iPhone">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHomeScreenIPhone} />
        <div className="content-stretch flex items-center justify-between pl-[32px] pr-[16px] relative shrink-0 w-[360px]" data-name="StatusBar">
          <LeftArea />
          <div className="h-[44px] mr-[-20.5px] relative shrink-0 w-[210px]" data-name="Notch Area" />
          <RightArea />
        </div>
        <AppIcons />
        <SearchField />
        <Dock />
      </div>
    </div>
  );
}

function LogoGollet1() {
  return (
    <div className="absolute inset-[6.96%_3.28%_7.94%_4.92%]" data-name="Logo Gollet">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 0.466725 0.0638011">
        <g id="Logo Gollet">
          <g id="Gollet">
            <path d={svgPaths.pf7ddc80} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p1e9fae80} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.pc85e00} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p3a4c8300} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.pebc3f00} fill="var(--fill-0, #FF6C3B)" />
            <path d={svgPaths.p3a6e4700} fill="var(--fill-0, #FF6C3B)" />
          </g>
          <path d={svgPaths.p6f8ed80} fill="var(--fill-0, #FDC228)" id="Ellipse 20" />
          <path d={svgPaths.pf348b00} fill="var(--fill-0, #FDC228)" id="Ellipse 21" />
        </g>
      </svg>
    </div>
  );
}

export default function Ios() {
  return (
    <div className="relative size-full" data-name="IOS">
      <InicipoApp />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white left-[calc(50%-126px)] opacity-0 overflow-clip rounded-[14px] size-[60px] top-[calc(50%+102px)]" data-name="Splash">
        <div className="absolute bottom-[49.88%] left-[49.44%] opacity-0 right-[49.71%] top-1/2" data-name="Logo">
          <LogoGollet1 />
        </div>
        <div className="absolute bottom-0 content-stretch flex flex-col items-start justify-center left-0 opacity-0 right-0" data-name="Navigation">
          <div className="relative shrink-0 w-full" data-name="HomeIndicator">
            <div className="flex flex-col items-center justify-center size-full">
              <div className="content-stretch flex flex-col items-center justify-center pb-[9px] pt-[4px] px-[120px] relative size-full">
                <div className="bg-[#535d66] h-[5px] relative rounded-[5px] shrink-0 w-[134px]" data-name="Indicator" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}