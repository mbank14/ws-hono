
export type wsSend<T> = {
    type: string;
    message?: string;
    data: T;
}