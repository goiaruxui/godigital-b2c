import { useNavigate } from "react-router";
import { ChevronRight } from "lucide-react";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { useAuth } from "@/app/store/AuthContext";
import { getLegalDoc, TERMS_DOC_ID, PRIVACY_DOC_ID } from "@/app/lib/legalDocs";
import { formatShortDate } from "@/app/lib/format";

export function LegalConsentsPage() {
  const navigate = useNavigate();
  const { state } = useAuth();
  const { termsAcceptedAt, termsVersion, privacyAcceptedAt, privacyVersion } = state.registration;

  const consents = [
    { doc: getLegalDoc(TERMS_DOC_ID), acceptedAt: termsAcceptedAt, version: termsVersion },
    { doc: getLegalDoc(PRIVACY_DOC_ID), acceptedAt: privacyAcceptedAt, version: privacyVersion },
  ].filter((c) => c.doc);

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title="Mis consentimientos" onBack={() => navigate("/legal")} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[12px] pb-[24px]">
        {consents.every((c) => !c.acceptedAt) && (
          <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d]">
            Todavía no aceptaste ningún documento.
          </p>
        )}
        {consents.map(
          (c) =>
            c.doc &&
            c.acceptedAt && (
              <button
                key={c.doc.id}
                type="button"
                onClick={() => navigate(`/legal/${c.doc!.id}`)}
                className="w-full flex items-center gap-[12px] py-[12px] px-[16px] border border-[#EDEFF7] rounded-[8px] cursor-pointer text-left"
              >
                <div className="flex-1">
                  <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{c.doc.title}</p>
                  <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">
                    Aceptado el {formatShortDate(c.acceptedAt)} · v{c.version}
                  </p>
                </div>
                <ChevronRight size={18} color="#78838d" />
              </button>
            ),
        )}
      </div>
    </div>
  );
}
