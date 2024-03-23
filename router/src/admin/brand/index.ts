import { brandCreateScheme, brandGetAllScheme } from "schemas";

export const brand = {
  create: {
    route: '/api/admin/brand',
    scheme: brandCreateScheme
  },
  getAll: {
    route: '/api/admin/brand',
    scheme: brandGetAllScheme
  },
  getOne: {
    route: '/api/admin/type/:id',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/brand/${id}`
  },
  uploadImage: {
    route: '/api/admin/type/:id',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/brand/${id}`
  },
}
