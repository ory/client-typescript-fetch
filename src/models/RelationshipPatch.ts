/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.18.5
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Relationship } from './Relationship';
import {
    RelationshipFromJSON,
    RelationshipFromJSONTyped,
    RelationshipToJSON,
    RelationshipToJSONTyped,
} from './Relationship';

/**
 * Payload for patching a relationship
 * @export
 * @interface RelationshipPatch
 */
export interface RelationshipPatch {
    /**
     * 
     * @type {string}
     * @memberof RelationshipPatch
     */
    action?: RelationshipPatchActionEnum;
    /**
     * 
     * @type {Relationship}
     * @memberof RelationshipPatch
     */
    relation_tuple?: Relationship;
}


/**
 * @export
 */
export const RelationshipPatchActionEnum = {
    Insert: 'insert',
    Delete: 'delete',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type RelationshipPatchActionEnum = typeof RelationshipPatchActionEnum[keyof typeof RelationshipPatchActionEnum];


/**
 * Check if a given object implements the RelationshipPatch interface.
 */
export function instanceOfRelationshipPatch(value: object): value is RelationshipPatch {
    return true;
}

export function RelationshipPatchFromJSON(json: any): RelationshipPatch {
    return RelationshipPatchFromJSONTyped(json, false);
}

export function RelationshipPatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipPatch {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'] == null ? undefined : json['action'],
        'relation_tuple': json['relation_tuple'] == null ? undefined : RelationshipFromJSON(json['relation_tuple']),
    };
}

export function RelationshipPatchToJSON(json: any): RelationshipPatch {
    return RelationshipPatchToJSONTyped(json, false);
}

export function RelationshipPatchToJSONTyped(value?: RelationshipPatch | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'action': value['action'],
        'relation_tuple': RelationshipToJSON(value['relation_tuple']),
    };
}

