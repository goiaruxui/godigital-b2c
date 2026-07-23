import { useNavigate, useParams } from "react-router";
import { StatusBar } from "@/app/components/layout/StatusBar";
import { TopBar } from "@/app/components/layout/TopBar";
import { useAuth } from "@/app/store/AuthContext";
import { getLegalDoc, TERMS_DOC_ID, PRIVACY_DOC_ID } from "@/app/lib/legalDocs";
import { formatShortDate } from "@/app/lib/format";
import { useRedirect } from "@/app/lib/useRedirect";

export function LegalDocumentPage() {
  const navigate = useNavigate();
  const { docId } = useParams();
  const { state } = useAuth();
  const doc = docId ? getLegalDoc(docId) : undefined;

  useRedirect(!doc, "/legal");
  if (!doc) return null;

  const acceptedAt =
    doc.id === TERMS_DOC_ID
      ? state.registration.termsAcceptedAt
      : doc.id === PRIVACY_DOC_ID
        ? state.registration.privacyAcceptedAt
        : "";

  return (
    <div className="relative size-full bg-white">
      <StatusBar dark background="#ffffff" />
      <TopBar dark title={doc.title} onBack={() => navigate(-1)} />
      <div className="absolute top-[112px] left-0 right-0 bottom-0 px-[24px] overflow-y-auto flex flex-col gap-[16px] pb-[24px]">
        <p className="font-['Sora:Regular',sans-serif] text-[12px] text-[#78838d]">
          Última actualización: {formatShortDate(doc.updatedAt)}
        </p>

        {doc.requiresAcceptance && acceptedAt && (
          <div className="border border-[#289B4F] bg-[#EAF3DE] rounded-[8px] px-[16px] py-[12px]">
            <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#289B4F]">
              Aceptado el {formatShortDate(acceptedAt)} (v{doc.version})
            </p>
          </div>
        )}

        {doc.table ? (
          <div className="border border-[#e1e3ed] rounded-[8px] overflow-hidden">
            {doc.table.map((row, i) => (
              <div
                key={row.concept}
                className={`flex items-center justify-between px-[16px] py-[12px] ${i > 0 ? "border-t border-[#e1e3ed]" : ""}`}
              >
                <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#191919] pr-[12px]">{row.concept}</p>
                <p className="font-['Sora:Bold',sans-serif] text-[13px] text-[#191919] text-right shrink-0">{row.cost}</p>
              </div>
            ))}
          </div>
        ) : (
          doc.sections?.map((section) => (
            <div key={section.heading} className="flex flex-col gap-[4px]">
              <p className="font-['Sora:Bold',sans-serif] text-[14px] text-[#191919]">{section.heading}</p>
              <p className="font-['Sora:Regular',sans-serif] text-[13px] text-[#78838d] leading-[1.5]">{section.body}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
