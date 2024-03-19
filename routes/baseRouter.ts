export class BaseRouter {
  baseRoute: string;
  constructor(routes: Array<string>) {
    this.baseRoute = routes.join('/');
  }
}
