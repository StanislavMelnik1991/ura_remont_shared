import { propertyCreateScheme } from "schemas";

export const property = {
  getAll: {
    route: '/api/admin/prototype/:id/properties',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/prototype/${id}/properties`,
  },
  createProperty: {
    route: '/api/admin/property',
    scheme: propertyCreateScheme
  },
}
