import { prototypeCreateScheme } from "schemas";

export const prototype = {
  create: {
    route: '/api/admin/prototype',
    scheme: prototypeCreateScheme
  },
  getOne: {
    route: '/api/admin/prototype/:id',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/prototype/${id}`
  },
  uploadImage: {
    route: '/api/admin/prototype/:id',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/prototype/${id}`
  },
}
