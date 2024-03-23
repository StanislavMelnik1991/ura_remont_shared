import { characteristicCreateScheme } from "schemas";

export const characteristic = {
  create: {
    route: '/api/admin/characteristic',
    scheme: characteristicCreateScheme
  },
  getAllForType: {
    route: '/api/admin/type/:id/characteristic',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/type/${id}/characteristic`,
  }
}
