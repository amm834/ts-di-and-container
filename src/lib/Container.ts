type Callback = (...args: any[]) => any;

export class Container {
    constructor(
        protected registry: Record<string, Callback> = {},
    ) {
    }

    public register(className: string, callback: Callback) {
        this.registry[className] = callback;
    }

    public build(className: string, ...args: any[]) {
        try {
            const callback = this.registry[className];
            return callback(...args);
        } catch (e) {
            throw new Error(`Class ${className} not found`);
        }
    }

    public get(className: string) {
        return this.build(className);
    }
}
