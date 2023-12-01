export interface Strategy {
    execute(a: number, b: number): number;
}

export class Sum implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}

export class Sub implements Strategy {
    execute(a: number, b: number): number {
        return a - b;
    }
}

export class Multi implements Strategy {
    execute(a: number, b: number): number {
        return a * b;
    }
}