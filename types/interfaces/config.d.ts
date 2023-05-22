import type { HookCollection } from "./hook";
import type { ValidatorCollection } from "./validator";
import type { ResourceCollection } from "./resource";
export interface Config {
    resources: ResourceCollection;
    mixins: ResourceCollection;
    hooks: HookCollection;
    validators: ValidatorCollection;
    operator: any;
}
