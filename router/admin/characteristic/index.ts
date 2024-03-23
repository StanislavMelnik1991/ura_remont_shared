export const characteristic = {
  create: {
    route: '/api/admin/characteristic',
  },
  getAllForType: {
    route: '/api/admin/type/:id/characteristic',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/type/${id}/characteristic`,
  },
};
