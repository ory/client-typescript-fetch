/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Response for a single identity patch
 * @export
 * @interface IdentityPatchResponse
 */
export interface IdentityPatchResponse {
    /**
     * The action for this specific patch
     * create ActionCreate  Create this identity.
     * error ActionError  Error indicates that the patch failed.
     * @type {string}
     * @memberof IdentityPatchResponse
     */
    action?: IdentityPatchResponseActionEnum;
    /**
     * 
     * @type {any}
     * @memberof IdentityPatchResponse
     */
    error?: any | null;
    /**
     * The identity ID payload of this patch
     * @type {string}
     * @memberof IdentityPatchResponse
     */
    identity?: string;
    /**
     * The ID of this patch response, if an ID was specified in the patch.
     * @type {string}
     * @memberof IdentityPatchResponse
     */
    patch_id?: string;
}


/**
 * @export
 */
export const IdentityPatchResponseActionEnum = {
    Create: 'create',
    Error: 'error'
} as const;
export type IdentityPatchResponseActionEnum = typeof IdentityPatchResponseActionEnum[keyof typeof IdentityPatchResponseActionEnum];


/**
 * Check if a given object implements the IdentityPatchResponse interface.
 */
export function instanceOfIdentityPatchResponse(value: object): value is IdentityPatchResponse {
    return true;
}

export function IdentityPatchResponseFromJSON(json: any): IdentityPatchResponse {
    return IdentityPatchResponseFromJSONTyped(json, false);
}

export function IdentityPatchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentityPatchResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'] == null ? undefined : json['action'],
        'error': json['error'] == null ? undefined : json['error'],
        'identity': json['identity'] == null ? undefined : json['identity'],
        'patch_id': json['patch_id'] == null ? undefined : json['patch_id'],
    };
}

export function IdentityPatchResponseToJSON(value?: IdentityPatchResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': value['action'],
        'error': value['error'],
        'identity': value['identity'],
        'patch_id': value['patch_id'],
    };
}

