export const apiRouter = {
  tgLogin: {
    route: '/api/auth/telegram',
  },
  // ToDo: to delete
  deleteUser: {
    route: '/api/auth/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/auth/${id}`,
  },
  deleteTelegramUser: {
    route: '/api/auth/telegram/:id',
    mask: 'id',
    getRoute: (id: number) => `/api/auth/telegram/${id}`,
  },
};
