import Hapi from '@hapi/hapi'
import { defineRoutes } from './routes'
import { envs } from './config/envs'

const getServer = () => {
    const server = Hapi.server({
        host: envs.host,
        port: envs.port,
    })

    defineRoutes(server)

    return server
}

export const initializeServer = async () => {
    const server = getServer()
    await server.initialize()
    return server
}

export const startServer = async () => {
    const server = getServer()
    await server.start()
    console.log(`Server running on ${server.info.uri}`)
    return server
};