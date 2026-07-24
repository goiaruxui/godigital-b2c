import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { EASE } from "@/app/routes/transitions";

// Envoltorio común para pantallas tipo bottom sheet (CashInMethodSheet,
// TransactionDetailSheet). El scrim y la tarjeta se animan por separado:
// el scrim solo hace fade (opacity), la tarjeta solo se desliza (y) — así
// el fondo oscuro no "viaja" junto con la tarjeta como pasaba antes.
export function SheetShell({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="relative size-full">
      <motion.div
        className="absolute inset-0 bg-black/40 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: EASE }}
        onClick={() => navigate(-1)}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.26, ease: EASE }}
      >
        {children}
      </motion.div>
    </div>
  );
}
