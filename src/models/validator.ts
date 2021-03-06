export default interface ErrorType {
    isLength(length: number): this;
    max(limit: number): this;
    min(limit: number): this;
    isNumber(): this;
    isAlpha(): this;
    isEmpty(): this;
}
