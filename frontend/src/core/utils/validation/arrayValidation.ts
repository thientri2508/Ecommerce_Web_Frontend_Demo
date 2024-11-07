
// Hàm kiểm tra mảng hợp lệ (không null, không undefined, là mảng và không rỗng)
export function validateNonEmptyArray(value: unknown, ms: string): void {
    if (!value || !Array.isArray(value) || value.length === 0) {
        throw new Error(`Không tìm thấy ${ms}`);
    }
}
