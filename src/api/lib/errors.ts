export class NotFoundError extends Error {
    constructor(entity: string) {
        super(`${entity} not found`);
        this.name = 'NotFoundError';
    }
}

export class ValidationError extends Error {
    constructor(message: string, public field?: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

export class DatabaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
    }
}