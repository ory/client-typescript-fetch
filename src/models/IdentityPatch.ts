/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.1
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { CreateIdentityBody } from './CreateIdentityBody';
import {
    CreateIdentityBodyFromJSON,
    CreateIdentityBodyFromJSONTyped,
    CreateIdentityBodyToJSON,
} from './CreateIdentityBody';

/**
 * Payload for patching an identity
 * @export
 * @interface IdentityPatch
 */
export interface IdentityPatch {
    /**
     * 
     * @type {CreateIdentityBody}
     * @memberof IdentityPatch
     */
    create?: CreateIdentityBody;
    /**
     * The ID of this patch.
     * 
     * The patch ID is optional. If specified, the ID will be returned in the
     * response, so consumers of this API can correlate the response with the
     * patch.
     * @type {string}
     * @memberof IdentityPatch
     */
    patch_id?: string;
}

/**
 * Check if a given object implements the IdentityPatch interface.
 */
export function instanceOfIdentityPatch(value: object): value is IdentityPatch {
    return true;
}

export function IdentityPatchFromJSON(json: any): IdentityPatch {
    return IdentityPatchFromJSONTyped(json, false);
}

export function IdentityPatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityPatch {
    if (json == null) {
        return json;
    }
    return {
        
        'create': json['create'] == null ? undefined : CreateIdentityBodyFromJSON(json['create']),
        'patch_id': json['patch_id'] == null ? undefined : json['patch_id'],
    };
}

export function IdentityPatchToJSON(value?: IdentityPatch | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'create': CreateIdentityBodyToJSON(value['create']),
        'patch_id': value['patch_id'],
    };
}

