export declare type ResourceAttribute = {
    identifier: string;
    mutateFrom?: string;
};
declare type Resource = Record<string, any>;
declare type ResourceCollection = Record<string, Resource>;
export { Resource, ResourceCollection };
