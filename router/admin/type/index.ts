export const type = {
  create: {
    route: '/api/admin/type',
  },
  getAll: {
    route: '/api/admin/type',
  },
  getOne: {
    route: '/api/admin/type/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/type/${id}`,
  },
  deleteOne: {
    route: '/api/admin/type/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/type/${id}`,
  },
  uploadImage: {
    route: '/api/admin/type/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/type/${id}`,
  },
};
