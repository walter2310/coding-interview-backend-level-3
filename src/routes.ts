import { Server } from "@hapi/hapi"
import { defineItemRoutes } from "./items/router"

export const defineRoutes = (server: Server) => {
    server.route({
        method: 'GET',
        path: '/ping',
        handler: async (request, h) => {
            return {
                ok: true
            }
        }
    })

    defineItemRoutes(server)
}