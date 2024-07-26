import { Injectable } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Injectable()
export class AppService {
  constructor(private readonly httpAdapterHost: HttpAdapterHost) {}

  private routes = [];

  onModuleInit() {
    const server = this.httpAdapterHost.httpAdapter.getInstance();
    const uniqueRoutes = new Set();

    server._router.stack.forEach((layer) => {
      if (layer.route) {
        const path = layer.route.path;
        const method = Object.keys(layer.route.methods)[0].toUpperCase();
        const routeLayer = `${method} - ${path}`;

        if (!uniqueRoutes.has(routeLayer)) {
          uniqueRoutes.add(routeLayer);
          this.routes.push(routeLayer);
        }
      }
    });

    // .filter(layer => layer.route)
    // .map(layer => this.layerRoute(layer));
    // .map(layer => Object.keys(layer.route.methods)[0].toUpperCase() +' - '+ '/api'+layer.route.path );
  }

  layerRoute(layer) {
    if (layer) console.log(layer.route);
    return (
      Object.keys(layer.route.methods)[0].toUpperCase() +
      ' - ' +
      '/api' +
      layer.route.path
    );
  }

  getRoutes() {
    return this.routes;
  }
}
