import type { Context } from "./context";
export declare type Validator = (config: any, context: any) => Context;
export declare type ValidatorCollection = Record<string, Validator>;
