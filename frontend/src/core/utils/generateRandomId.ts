export const generateRandomId = (): string => `id-${Math.random().toString(36).substr(2, 9)}`;
