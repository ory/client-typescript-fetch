/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProjectApiKey
 */
export interface ProjectApiKey {
    /**
     * The token's creation date
     * @type {Date}
     * @memberof ProjectApiKey
     */
    readonly created_at?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ProjectApiKey
     */
    expires_at?: Date;
    /**
     * The token's ID.
     * @type {string}
     * @memberof ProjectApiKey
     */
    readonly id: string;
    /**
     * The Token's Name
     * 
     * Set this to help you remember, for example, where you use the token.
     * @type {string}
     * @memberof ProjectApiKey
     */
    name: string;
    /**
     * The token's owner
     * @type {string}
     * @memberof ProjectApiKey
     */
    readonly owner_id: string;
    /**
     * The Token's Project ID
     * @type {string}
     * @memberof ProjectApiKey
     */
    readonly project_id?: string;
    /**
     * The token's last update date
     * @type {Date}
     * @memberof ProjectApiKey
     */
    readonly updated_at?: Date;
    /**
     * The token's value
     * @type {string}
     * @memberof ProjectApiKey
     */
    readonly value?: string;
}

/**
 * Check if a given object implements the ProjectApiKey interface.
 */
export function instanceOfProjectApiKey(value: object): value is ProjectApiKey {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('owner_id' in value) || value['owner_id'] === undefined) return false;
    return true;
}

export function ProjectApiKeyFromJSON(json: any): ProjectApiKey {
    return ProjectApiKeyFromJSONTyped(json, false);
}

export function ProjectApiKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectApiKey {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'expires_at': json['expires_at'] == null ? undefined : (new Date(json['expires_at'])),
        'id': json['id'],
        'name': json['name'],
        'owner_id': json['owner_id'],
        'project_id': json['project_id'] == null ? undefined : json['project_id'],
        'updated_at': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function ProjectApiKeyToJSON(value?: Omit<ProjectApiKey, 'created_at'|'id'|'owner_id'|'project_id'|'updated_at'|'value'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'expires_at': value['expires_at'] == null ? undefined : ((value['expires_at']).toISOString()),
        'name': value['name'],
    };
}

