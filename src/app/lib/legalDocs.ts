/**
 * Catálogo de documentos legales. Contenido placeholder con estructura realista
 * (secciones, versión, fecha) — el texto final de cada documento lo define el
 * equipo legal de Gonnectia, esto no es contenido jurídico real.
 */

export type LegalCategory = { id: string; label: string };

export type LegalDocSection = { heading: string; body: string };

export type LegalDoc = {
  id: string;
  categoryId: string;
  title: string;
  version: string;
  updatedAt: string;
  requiresAcceptance?: boolean;
  sections?: LegalDocSection[];
  table?: { concept: string; cost: string }[];
};

export const LEGAL_CATEGORIES: LegalCategory[] = [
  { id: "contratos", label: "Contratos" },
  { id: "privacidad", label: "Privacidad y datos" },
  { id: "costos", label: "Costos y transparencia" },
  { id: "usuario", label: "Vos como usuario" },
  { id: "institucional", label: "Institucional" },
];

export const TERMS_DOC_ID = "terminos-generales";
export const PRIVACY_DOC_ID = "politica-privacidad";

export const LEGAL_DOCS: LegalDoc[] = [
  {
    id: TERMS_DOC_ID,
    categoryId: "contratos",
    title: "Términos y Condiciones Generales",
    version: "1.0",
    updatedAt: "2026-01-15",
    requiresAcceptance: true,
    sections: [
      { heading: "Objeto", body: "Estos términos regulan el uso de la aplicación y los servicios ofrecidos por Gonnectia a través de la billetera digital." },
      { heading: "Aceptación", body: "El uso de la aplicación implica la aceptación plena de estos términos y de sus futuras actualizaciones." },
      { heading: "Uso de la cuenta", body: "El usuario es responsable de mantener la confidencialidad de sus credenciales y de toda actividad realizada desde su cuenta." },
      { heading: "Modificaciones", body: "Gonnectia podrá actualizar estos términos, notificando los cambios relevantes dentro de la aplicación." },
    ],
  },
  {
    id: "contrato-cuenta-pago",
    categoryId: "contratos",
    title: "Contrato de Cuenta de Pago (CVU)",
    version: "1.0",
    updatedAt: "2026-01-15",
    sections: [
      { heading: "Apertura de la cuenta", body: "Al completar el registro se habilita una Cuenta de Pago con un CVU y alias asociados, a nombre del usuario." },
      { heading: "Naturaleza de los fondos", body: "Los fondos depositados no constituyen un depósito bancario y no generan intereses, salvo que se indique lo contrario." },
      { heading: "Movimientos", body: "El usuario puede recibir y enviar transferencias, realizar pagos y consultar su historial de movimientos dentro de la aplicación." },
    ],
  },
  {
    id: "terminos-tarjeta",
    categoryId: "contratos",
    title: "Términos de Tarjeta Prepaga",
    version: "1.0",
    updatedAt: "2026-01-15",
    sections: [
      { heading: "Emisión", body: "La tarjeta prepaga se emite asociada a los fondos disponibles en la Cuenta de Pago del usuario." },
      { heading: "Límites", body: "El usuario puede configurar un límite de compra mensual y pausar la tarjeta en cualquier momento desde la aplicación." },
      { heading: "Seguridad", body: "El usuario es responsable de reportar la pérdida, robo o uso no autorizado de la tarjeta a la brevedad posible." },
    ],
  },
  {
    id: "terminos-creditos",
    categoryId: "contratos",
    title: "Términos de Préstamos y Adelantos",
    version: "1.0",
    updatedAt: "2026-01-15",
    sections: [
      { heading: "Préstamos", body: "El otorgamiento de un préstamo está sujeto a la evaluación crediticia del usuario y a las condiciones informadas antes de confirmar la solicitud." },
      { heading: "Adelantos", body: "Un adelanto se otorga contra una cuota específica de un préstamo vigente, descontando el interés correspondiente del monto acreditado." },
      { heading: "Costo financiero", body: "La tasa de interés aplicable se informa antes de la confirmación de cada operación." },
    ],
  },
  {
    id: "terminos-intercambio",
    categoryId: "contratos",
    title: "Términos de Intercambio Cripto",
    version: "1.0",
    updatedAt: "2026-01-15",
    sections: [
      { heading: "Naturaleza del servicio", body: "El intercambio de criptoactivos se ejecuta a través de un proveedor externo habilitado y está sujeto a la volatilidad propia de estos activos." },
      { heading: "Riesgo", body: "El valor de los criptoactivos puede fluctuar significativamente. El usuario reconoce y asume este riesgo al operar." },
      { heading: "Irrevocabilidad", body: "Las operaciones de intercambio confirmadas no pueden revertirse." },
    ],
  },
  {
    id: PRIVACY_DOC_ID,
    categoryId: "privacidad",
    title: "Política de Privacidad",
    version: "1.0",
    updatedAt: "2026-01-15",
    requiresAcceptance: true,
    sections: [
      { heading: "Datos que recolectamos", body: "Recolectamos datos identificatorios, de contacto y de uso de la aplicación, necesarios para prestar el servicio." },
      { heading: "Finalidad", body: "Los datos se utilizan para verificar la identidad del usuario, prevenir fraude y mejorar la experiencia del producto." },
      { heading: "Derechos del titular", body: "El usuario puede solicitar el acceso, rectificación o eliminación de sus datos personales conforme a la Ley 25.326." },
      { heading: "Terceros", body: "Compartimos datos únicamente con proveedores necesarios para operar el servicio, bajo acuerdos de confidencialidad." },
    ],
  },
  {
    id: "politica-pld",
    categoryId: "privacidad",
    title: "Prevención de Lavado de Dinero (PLD/FT)",
    version: "1.0",
    updatedAt: "2026-01-15",
    sections: [
      { heading: "Marco regulatorio", body: "Gonnectia aplica políticas de prevención de lavado de activos y financiamiento del terrorismo conforme a la normativa vigente del BCRA y la UIF." },
      { heading: "Conocimiento del cliente", body: "Se solicita información y documentación para validar la identidad del usuario antes de habilitar determinadas operaciones." },
      { heading: "Monitoreo", body: "Las operaciones son monitoreadas para detectar patrones inusuales, pudiendo solicitarse información adicional." },
    ],
  },
  {
    id: "tasas-comisiones",
    categoryId: "costos",
    title: "Tasas, Comisiones y Costos",
    version: "1.0",
    updatedAt: "2026-01-15",
    table: [
      { concept: "Apertura y mantenimiento de cuenta", cost: "Sin costo" },
      { concept: "Transferencias enviadas", cost: "Sin costo" },
      { concept: "Pago de servicios", cost: "Sin costo" },
      { concept: "Emisión de tarjeta prepaga", cost: "Sin costo" },
      { concept: "Adelanto sobre cuota", cost: "5% sobre el monto solicitado" },
      { concept: "Intercambio de criptoactivos", cost: "Según cotización vigente al momento de la operación" },
    ],
  },
  {
    id: "defensa-consumidor",
    categoryId: "usuario",
    title: "Defensa del Consumidor Financiero",
    version: "1.0",
    updatedAt: "2026-01-15",
    sections: [
      { heading: "Tus derechos", body: "Como usuario de servicios financieros tenés derecho a recibir información clara, a no sufrir cargos no informados y a presentar reclamos." },
      { heading: "Portal de Usuarios Financieros", body: "Podés consultar tus derechos y presentar consultas en el Portal de Usuarios Financieros del BCRA." },
    ],
  },
  {
    id: "canales-reclamo",
    categoryId: "usuario",
    title: "Canales de Reclamo",
    version: "1.0",
    updatedAt: "2026-01-15",
    sections: [
      { heading: "Atención al cliente", body: "Podés iniciar un reclamo desde cualquier pantalla de éxito de la aplicación mediante la opción \"Reportar un problema\", o contactando a nuestro servicio de atención." },
      { heading: "Plazos de respuesta", body: "Los reclamos se responden dentro de los plazos establecidos por la normativa vigente." },
      { heading: "Instancia regulatoria", body: "Si no estás conforme con la respuesta recibida, podés recurrir al Banco Central de la República Argentina." },
    ],
  },
  {
    id: "info-institucional",
    categoryId: "institucional",
    title: "Información Institucional",
    version: "1.0",
    updatedAt: "2026-01-15",
    sections: [
      { heading: "Razón social", body: "Goiar Fintech S.A. — Proveedor de Servicios de Pago (PSP)." },
      { heading: "Domicilio legal", body: "Ciudad Autónoma de Buenos Aires, Argentina." },
      { heading: "Supervisión", body: "Entidad supervisada por el Banco Central de la República Argentina en su carácter de Proveedor de Servicios de Pago." },
    ],
  },
];

export function getLegalDoc(id: string): LegalDoc | undefined {
  return LEGAL_DOCS.find((d) => d.id === id);
}

export function getLegalDocsByCategory(categoryId: string): LegalDoc[] {
  return LEGAL_DOCS.filter((d) => d.categoryId === categoryId);
}
