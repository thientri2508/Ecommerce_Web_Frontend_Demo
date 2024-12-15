export interface APIResponse<T>{
    total?: number;
    list?: T[];
    success?: string;
}