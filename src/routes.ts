import { Server } from '@hapi/hapi';
import { defineItemRoutes } from './api/items/routes';

export const defineRoutes = (server: Server) => {
    // Health check endpoint
    server.route({
        method: 'GET',
        path: '/ping',
        handler: () => ({ ok: true })
    });

    // Item routes
    defineItemRoutes(server);
};