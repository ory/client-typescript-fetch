/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Is Owner For Project By Slug Request Body
 * @export
 * @interface InternalIsOwnerForProjectBySlugBody
 */
export interface InternalIsOwnerForProjectBySlugBody {
    /**
     * Namespace is the namespace of the subject.
     * @type {string}
     * @memberof InternalIsOwnerForProjectBySlugBody
     */
    namespace: InternalIsOwnerForProjectBySlugBodyNamespaceEnum;
    /**
     * ProjectScope is the project_id resolved from the
     * API Token.
     * @type {string}
     * @memberof InternalIsOwnerForProjectBySlugBody
     */
    project_scope?: string;
    /**
     * ProjectSlug is the project's slug.
     * @type {string}
     * @memberof InternalIsOwnerForProjectBySlugBody
     */
    project_slug: string;
    /**
     * Subject is the subject acting (user or API key).
     * @type {string}
     * @memberof InternalIsOwnerForProjectBySlugBody
     */
    subject: string;
}


/**
 * @export
 */
export const InternalIsOwnerForProjectBySlugBodyNamespaceEnum = {
    User: 'User',
    ApiKey: ' ApiKey'
} as const;
export type InternalIsOwnerForProjectBySlugBodyNamespaceEnum = typeof InternalIsOwnerForProjectBySlugBodyNamespaceEnum[keyof typeof InternalIsOwnerForProjectBySlugBodyNamespaceEnum];


/**
 * Check if a given object implements the InternalIsOwnerForProjectBySlugBody interface.
 */
export function instanceOfInternalIsOwnerForProjectBySlugBody(value: object): value is InternalIsOwnerForProjectBySlugBody {
    if (!('namespace' in value) || value['namespace'] === undefined) return false;
    if (!('project_slug' in value) || value['project_slug'] === undefined) return false;
    if (!('subject' in value) || value['subject'] === undefined) return false;
    return true;
}

export function InternalIsOwnerForProjectBySlugBodyFromJSON(json: any): InternalIsOwnerForProjectBySlugBody {
    return InternalIsOwnerForProjectBySlugBodyFromJSONTyped(json, false);
}

export function InternalIsOwnerForProjectBySlugBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): InternalIsOwnerForProjectBySlugBody {
    if (json == null) {
        return json;
    }
    return {
        
        'namespace': json['namespace'],
        'project_scope': json['project_scope'] == null ? undefined : json['project_scope'],
        'project_slug': json['project_slug'],
        'subject': json['subject'],
    };
}

export function InternalIsOwnerForProjectBySlugBodyToJSON(value?: InternalIsOwnerForProjectBySlugBody | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'namespace': value['namespace'],
        'project_scope': value['project_scope'],
        'project_slug': value['project_slug'],
        'subject': value['subject'],
    };
}

