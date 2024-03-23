import { productCreateScheme, productUpdateScheme } from "schemas";

export const product = {
  create: {
    route: '/api/admin/product',
    scheme: productCreateScheme
  },
  update: {
    route: '/api/admin/product/:id',
    mask: 'id',
    getRoute: (id: number)=>`/api/admin/product/${id}`,
    scheme: productUpdateScheme,
  },
}
