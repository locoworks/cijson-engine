import { Config, Context } from '../interfaces';
declare const validator: (config: Config, context: Context, constraints: any, pickOneError?: boolean) => Promise<unknown>;
export default validator;
