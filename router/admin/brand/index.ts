export const brand = {
  create: {
    route: '/api/admin/brand',
  },
  getAll: {
    route: '/api/admin/brand',
  },
  getOne: {
    route: '/api/admin/brand/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/brand/${id}`,
  },
  deleteOne: {
    route: '/api/admin/brand/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/brand/${id}`,
  },
  uploadImage: {
    route: '/api/admin/brand/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/brand/${id}`,
  },
};
