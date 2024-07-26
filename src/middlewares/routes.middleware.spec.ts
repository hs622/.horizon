import { RoutesMiddleware } from './routes.middleware';

describe('RoutesMiddleware', () => {
  it('should be defined', () => {
    expect(new RoutesMiddleware()).toBeDefined();
  });
});
