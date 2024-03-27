export const type = {
  list: {
    route: '/admin/type',
  },
  current: {
    route: '/admin/type/:id',
    getRoute: (id: number) => `/admin/type/${id}`,
  },
  create: {
    route: '/admin/type/create',
  },
};
