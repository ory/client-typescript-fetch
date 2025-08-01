/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.21.1
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Together the name and identity uuid are a unique index constraint.
 * This prevents a user from having schemas with the same name.
 * This also allows schemas to have the same name across the system.
 * @export
 * @interface ManagedIdentitySchema
 */
export interface ManagedIdentitySchema {
    /**
     * The gcs file name
     * 
     * This is a randomly generated name which is used to uniquely identify the file on the blob storage
     * @type {string}
     * @memberof ManagedIdentitySchema
     */
    blob_name: string;
    /**
     * The publicly accessible url of the schema
     * @type {string}
     * @memberof ManagedIdentitySchema
     */
    blob_url: string;
    /**
     * The Content Hash
     * 
     * Contains a hash of the schema's content.
     * @type {string}
     * @memberof ManagedIdentitySchema
     */
    content_hash?: string;
    /**
     * The Schema's Creation Date
     * @type {Date}
     * @memberof ManagedIdentitySchema
     */
    readonly created_at: Date;
    /**
     * The schema's ID.
     * @type {string}
     * @memberof ManagedIdentitySchema
     */
    readonly id: string;
    /**
     * The schema name
     * 
     * This is set by the user and is for them to easily recognise their schema
     * @type {string}
     * @memberof ManagedIdentitySchema
     */
    name: string;
    /**
     * Last Time Schema was Updated
     * @type {Date}
     * @memberof ManagedIdentitySchema
     */
    readonly updated_at: Date;
}

/**
 * Check if a given object implements the ManagedIdentitySchema interface.
 */
export function instanceOfManagedIdentitySchema(value: object): value is ManagedIdentitySchema {
    if (!('blob_name' in value) || value['blob_name'] === undefined) return false;
    if (!('blob_url' in value) || value['blob_url'] === undefined) return false;
    if (!('created_at' in value) || value['created_at'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('updated_at' in value) || value['updated_at'] === undefined) return false;
    return true;
}

export function ManagedIdentitySchemaFromJSON(json: any): ManagedIdentitySchema {
    return ManagedIdentitySchemaFromJSONTyped(json, false);
}

export function ManagedIdentitySchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ManagedIdentitySchema {
    if (json == null) {
        return json;
    }
    return {
        
        'blob_name': json['blob_name'],
        'blob_url': json['blob_url'],
        'content_hash': json['content_hash'] == null ? undefined : json['content_hash'],
        'created_at': (new Date(json['created_at'])),
        'id': json['id'],
        'name': json['name'],
        'updated_at': (new Date(json['updated_at'])),
    };
}

export function ManagedIdentitySchemaToJSON(json: any): ManagedIdentitySchema {
    return ManagedIdentitySchemaToJSONTyped(json, false);
}

export function ManagedIdentitySchemaToJSONTyped(value?: Omit<ManagedIdentitySchema, 'created_at'|'id'|'updated_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'blob_name': value['blob_name'],
        'blob_url': value['blob_url'],
        'content_hash': value['content_hash'],
        'name': value['name'],
    };
}

