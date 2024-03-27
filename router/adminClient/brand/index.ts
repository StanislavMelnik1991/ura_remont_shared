export const brand = {
  list: {
    route: '/admin/brand',
  },
  current: {
    route: '/admin/brand/:id',
    getRoute: (id: number) => `/admin/brand/${id}`,
  },
  create: {
    route: '/admin/brand/create',
  },
};
