/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.15.10
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
     * API key.
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

