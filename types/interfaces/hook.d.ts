import type { Context } from "./context";
export declare type Hook = (config: any, context: any) => Context;
export declare type HookCollection = Record<string, Hook>;
