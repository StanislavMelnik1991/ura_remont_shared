import { dictionaryUpdateScheme } from "schemas";

export const dictionary = {
  getOne: {
    route: '/api/admin/dictionary/:id',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/dictionary/${id}`,
  },
  update: {
    route: '/api/admin/dictionary/:id',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/dictionary/${id}`,
    scheme: dictionaryUpdateScheme
  },
}
