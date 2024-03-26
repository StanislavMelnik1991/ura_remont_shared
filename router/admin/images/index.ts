export const images = {
  deleteCurrent: {
    route: '/api/admin/image/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/image/${id}`,
  },
  updateCurrent: {
    route: '/api/admin/image/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/image/${id}`,
  },
};
