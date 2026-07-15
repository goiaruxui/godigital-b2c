import svgPaths from "./svg-o9v8s3689u";
import imgIconItem from "./88b8531ea4f63104322c13114a03af212df956dc.png";
import imgIconItem1 from "./1f8a30b9ed9cd3217e57ef97ae5876720835ecee.png";
import imgIconItem2 from "./2b84fd745a18a7c8b84fae276dc66ef547f20980.png";
import imgIconItem3 from "./a5a84f64406b7979d19a6b9683ad8df18580bbe7.png";
import imgIconItem4 from "./dca07cd3cc7c3fc8c5d2bdf5aeed2600874917e9.png";
import imgIconItem5 from "./027d835c0476faaeb8a6c77e5836157eb2376338.png";
import imgIconItem6 from "./846bebc76310137e13a11394c8b90144febbf956.png";
import imgIconItem7 from "./5a3104f2ae9bd253dcb9f5f962d754244c21d2a1.png";
import imgIconItem8 from "./f3a79539da3b1b7b4338c422bbae09d1bbdc7be2.png";
import imgIconItem9 from "./6e7ee68fdc6c2c27980b94c4c3dcec6a542eae9b.png";
import imgIconItem10 from "./9682ed06ec9b63155c48e2e0e4b92f6b7806fe0f.png";
import imgIconItem11 from "./8bcda8f49e00392bcf1ba60527fac1803c11a899.png";

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
      <p className="[word-break:break-word] flex-[1_0_0] font-['Sora:Bold',sans-serif] leading-[1.5] min-w-px not-italic relative text-[#191919] text-[24px]">Buscar un servicio</p>
      <div className="content-stretch flex gap-[2px] h-[29px] items-center justify-center p-[4px] relative rounded-[4px] shrink-0 w-[70px]" data-name="button" />
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
      <p className="[word-break:break-word] font-['Sora:Regular',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#bac2c7] text-[14px] text-center whitespace-nowrap">Busca entre más de 4.000 empresas</p>
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

function Title1() {
  return (
    <div className="content-stretch flex gap-[141px] items-center relative shrink-0 w-[328px]" data-name="Title">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[14px] whitespace-nowrap">Telefonía / TV / Internet</p>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">{`AT&T`}</p>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgIconItem} />
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name />
    </div>
  );
}

function Amount1() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
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

function Name1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Claro</p>
    </div>
  );
}

function Left2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[64px]">
          <img alt="" className="absolute max-w-none object-cover rounded-[64px] size-full" src={imgIconItem1} />
          <img alt="" className="absolute max-w-none object-cover rounded-[64px] size-full" src={imgIconItem2} />
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name1 />
    </div>
  );
}

function Amount3() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
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

function Name2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Direct TV</p>
    </div>
  );
}

function Left3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgIconItem3} />
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name2 />
    </div>
  );
}

function Amount5() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
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

function Name3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Movistar</p>
    </div>
  );
}

function Left4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[64px]">
          <div className="absolute bg-white inset-0 rounded-[64px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[64px] size-full" src={imgIconItem4} />
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name3 />
    </div>
  );
}

function Amount7() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
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

function Name4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Oredoo</p>
    </div>
  );
}

function Left5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <div aria-hidden className="absolute inset-0 pointer-events-none rounded-[64px]">
          <div className="absolute bg-white inset-0 rounded-[64px]" />
          <img alt="" className="absolute max-w-none object-cover rounded-[64px] size-full" src={imgIconItem5} />
        </div>
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name4 />
    </div>
  );
}

function Amount9() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
}

function Amount8() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount9 />
    </div>
  );
}

function Right4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount8 />
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

function Name5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Personal</p>
    </div>
  );
}

function Left6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgIconItem6} />
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name5 />
    </div>
  );
}

function Amount11() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
}

function Amount10() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount11 />
    </div>
  );
}

function Right5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount10 />
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

function Name6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Starlink</p>
    </div>
  );
}

function Left7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgIconItem7} />
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name6 />
    </div>
  );
}

function Amount13() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
}

function Amount12() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount13 />
    </div>
  );
}

function Right6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount12 />
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

function Name7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Supercanal</p>
    </div>
  );
}

function Left8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgIconItem8} />
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name7 />
    </div>
  );
}

function Amount15() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
}

function Amount14() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount15 />
    </div>
  );
}

function Right7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount14 />
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

function Name8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Telecentro</p>
    </div>
  );
}

function Left9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgIconItem9} />
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name8 />
    </div>
  );
}

function Amount17() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
}

function Amount16() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount17 />
    </div>
  );
}

function Right8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount16 />
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

function Name9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">Tigo</p>
    </div>
  );
}

function Left10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgIconItem10} />
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name9 />
    </div>
  );
}

function Amount19() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
}

function Amount18() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount19 />
    </div>
  );
}

function Right9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount18 />
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

function Name10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name">
      <p className="[word-break:break-word] font-['Sora:Bold',sans-serif] leading-[1.5] not-italic relative shrink-0 text-[#191919] text-[12px] whitespace-nowrap">VTR</p>
    </div>
  );
}

function Left11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <div className="relative rounded-[64px] shrink-0 size-[32px]" data-name="IconItem">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[64px] size-full" src={imgIconItem11} />
        <div className="content-stretch flex items-center justify-center overflow-clip p-[6px] relative rounded-[inherit] size-full" />
        <div aria-hidden className="absolute border border-[#f7f8fe] border-solid inset-[-0.5px] pointer-events-none rounded-[64.5px]" />
      </div>
      <Name10 />
    </div>
  );
}

function Amount21() {
  return <div className="content-stretch flex h-[18px] items-start justify-end relative shrink-0 w-[61px]" data-name="Amount" />;
}

function Amount20() {
  return (
    <div className="content-stretch flex flex-col items-end justify-center relative shrink-0" data-name="amount">
      <Amount21 />
    </div>
  );
}

function Right10() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right">
      <Amount20 />
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="list">
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left1 />
            <Right />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left2 />
            <Right1 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between p-[8px] relative shrink-0 w-[328px]" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <Left3 />
        <Right2 />
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left4 />
            <Right3 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left5 />
            <Right4 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left6 />
            <Right5 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left7 />
            <Right6 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left8 />
            <Right7 />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left9 />
            <Right8 />
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-center justify-between p-[8px] relative shrink-0 w-[328px]" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <Left10 />
        <Right9 />
      </div>
      <div className="relative shrink-0 w-full" data-name="Transaction">
        <div aria-hidden className="absolute border-[#edeff6] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-between p-[8px] relative size-full">
            <Left11 />
            <Right10 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[546px] items-start overflow-clip relative shrink-0 w-full" data-name="div">
      <Title1 />
      <List />
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
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-[328px]" data-name="search">
        <Field />
      </div>
      <Div />
    </div>
  );
}

export default function BuscarServicio() {
  return (
    <div className="bg-white relative size-full" data-name="BuscarServicio1">
      <div className="absolute bg-white content-stretch flex items-center justify-between left-0 pl-[32px] pr-[16px] right-0 top-0" data-name="StatusBar">
        <LeftArea />
        <div className="h-[44px] mr-[-20.5px] relative shrink-0 w-[210px]" data-name="Notch Area" />
        <RightArea />
      </div>
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
    </div>
  );
}