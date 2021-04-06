export const ambientes = [
  { codigo: "1", nombre: "PRUEBAS" },
  { codigo: "2", nombre: "Pruebas" }
];

export const tipo_identificacion = [
  { codigo: 1, nombre: "RUC" },
  { codigo: 2, nombre: "CEDULA" },
  { codigo: 3, nombre: "PASAPORTE" },
  { codigo: 4, nombre: "CONSUMIDOR FINAL" },
  { codigo: 5, nombre: "IDENTIFICACION DEL EXTERIOR" }
];

export const estado_comprobante = [
  { codigo: "1", nombre: "EN PROCESAMIENTO", siglas: "PPR" },
  { codigo: "2", nombre: "AUTORIZADO", siglas: "AUT" },
  { codigo: "3", nombre: "NO AUTORIZADO", siglas: "NAT" }
];

export const tipo_producto = [
  { codigo: "1", nombre: "PRODUCTO" },
  { codigo: "2", nombre: "SERVICIO" }
];

export const iva = [
  { codigo: null, nombre: "--" },
  { codigo: "0", nombre: "0 %" },
  { codigo: "2", nombre: "GRABA IVA" },
  { codigo: "6", nombre: "NO OBJETO DE IMPUESTO" },
  { codigo: "7", nombre: "EXENTO" }
];

export const ice = [
  { codigo: null, nombre: "--" },
  { codigo: "0", nombre: "0 %" }
];

export const irbpnr = [
  { codigo: null, nombre: "--" },
  { codigo: "5001", nombre: "BOTELLAS PLASTICAS NO RETORNABLES" }
];
