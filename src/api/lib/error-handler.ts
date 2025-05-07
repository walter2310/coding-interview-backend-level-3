import { ResponseToolkit } from '@hapi/hapi';
import { NotFoundError, ValidationError, DatabaseError } from './errors';

export const handleError = (error: unknown, h: ResponseToolkit) => {
    if (error instanceof NotFoundError) {
        return h.response({
            message: error.message
        }).code(404);
    }

    if (error instanceof ValidationError) {
        return h.response({
            errors: [{
                field: error.field || 'general',
                message: error.message
            }]
        }).code(400);
    }

    if (error instanceof DatabaseError) {
        return h.response({
            message: 'Database error',
            details: error.message
        }).code(500);
    }

    // Error no reconocido
    console.error('Unhandled error:', error);
    return h.response({
        message: 'Internal server error'
    }).code(500);
};