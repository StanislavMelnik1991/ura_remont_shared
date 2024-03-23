export const product = {
  create: {
    route: '/api/admin/product',
  },
  update: {
    route: '/api/admin/product/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/admin/product/${id}`,
  },
};
