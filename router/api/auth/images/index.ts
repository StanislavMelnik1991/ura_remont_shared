export const images = {
  get: {
    route: '/api/image/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/image/${id}`,
  },
};
