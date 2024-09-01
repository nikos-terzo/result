export type Ok<T> = {
    type: 'ok';
    data: T;
}

export type Err<E> = {
    type: 'err';
    error: E;
}

export type Result<T, E> = Ok<T> | Err<E>;
