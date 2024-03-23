import { typeCreateScheme, typeGetAllScheme } from "schemas";

export const type = {
  create: {
    route: '/api/admin/type',
    scheme: typeCreateScheme
  },
  getAll: {
    route: '/api/admin/type',
    scheme: typeGetAllScheme
  },
  getOne: {
    route: '/api/admin/type/:id',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/type/${id}`
  },
  uploadImage: {
    route: '/api/admin/type/:id',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/type/${id}`
  },
}
