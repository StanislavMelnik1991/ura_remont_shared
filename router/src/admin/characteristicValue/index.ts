import { characteristicValueCreateScheme } from "schemas";

export const characteristicValues = {
  create: {
    route: '/api/admin/characteristic/value',
    scheme: characteristicValueCreateScheme
  },
}
