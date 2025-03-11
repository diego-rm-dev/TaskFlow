export class ValidateError extends Error {
    status: number;
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
        this.status = 400;
    }
}
export class InternalServerError extends Error {
    status: number;
    constructor(message: string) {
        super(message);
        this.name = 'InternalServerError';
        this.status = 500;
    }
}
export class AuthenticationError extends Error {
    status: number;
    constructor(message: string) {
        super(message);
        this.name = 'AuthenticationError';
        this.status = 401;
    }
}
export class AuthorizationError extends Error {
    status: number;
    constructor(message: string) {
        super(message);
        this.name = 'AuthorizationError';
        this.status = 403;
    }
}
export class NotFoundError extends Error {
    status: number;
    constructor(message: string) {
        super(message);
        this.name = 'NotFoundError';
        this.status = 404;
    }
}
export class CastError extends Error {
    status: number;
    constructor(message: string) {
        super(message);
        this.name = 'CastError';
        this.status = 400;
    }
}