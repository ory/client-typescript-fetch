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
 * VerifiableAddress is an identity's verifiable address
 * @export
 * @interface VerifiableIdentityAddress
 */
export interface VerifiableIdentityAddress {
    /**
     * When this entry was created
     * @type {Date}
     * @memberof VerifiableIdentityAddress
     */
    created_at?: Date;
    /**
     * The ID
     * @type {string}
     * @memberof VerifiableIdentityAddress
     */
    id?: string;
    /**
     * VerifiableAddressStatus must not exceed 16 characters as that is the limitation in the SQL Schema
     * @type {string}
     * @memberof VerifiableIdentityAddress
     */
    status: string;
    /**
     * When this entry was last updated
     * @type {Date}
     * @memberof VerifiableIdentityAddress
     */
    updated_at?: Date;
    /**
     * The address value
     * 
     * example foo@user.com
     * @type {string}
     * @memberof VerifiableIdentityAddress
     */
    value: string;
    /**
     * Indicates if the address has already been verified
     * @type {boolean}
     * @memberof VerifiableIdentityAddress
     */
    verified: boolean;
    /**
     * 
     * @type {Date}
     * @memberof VerifiableIdentityAddress
     */
    verified_at?: Date;
    /**
     * The delivery method
     * @type {string}
     * @memberof VerifiableIdentityAddress
     */
    via: VerifiableIdentityAddressViaEnum;
}


/**
 * @export
 */
export const VerifiableIdentityAddressViaEnum = {
    Email: 'email',
    Sms: 'sms'
} as const;
export type VerifiableIdentityAddressViaEnum = typeof VerifiableIdentityAddressViaEnum[keyof typeof VerifiableIdentityAddressViaEnum];


/**
 * Check if a given object implements the VerifiableIdentityAddress interface.
 */
export function instanceOfVerifiableIdentityAddress(value: object): value is VerifiableIdentityAddress {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    if (!('verified' in value) || value['verified'] === undefined) return false;
    if (!('via' in value) || value['via'] === undefined) return false;
    return true;
}

export function VerifiableIdentityAddressFromJSON(json: any): VerifiableIdentityAddress {
    return VerifiableIdentityAddressFromJSONTyped(json, false);
}

export function VerifiableIdentityAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifiableIdentityAddress {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'id': json['id'] == null ? undefined : json['id'],
        'status': json['status'],
        'updated_at': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
        'value': json['value'],
        'verified': json['verified'],
        'verified_at': json['verified_at'] == null ? undefined : (new Date(json['verified_at'])),
        'via': json['via'],
    };
}

export function VerifiableIdentityAddressToJSON(value?: VerifiableIdentityAddress | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created_at': value['created_at'] == null ? undefined : ((value['created_at']).toISOString()),
        'id': value['id'],
        'status': value['status'],
        'updated_at': value['updated_at'] == null ? undefined : ((value['updated_at']).toISOString()),
        'value': value['value'],
        'verified': value['verified'],
        'verified_at': value['verified_at'] == null ? undefined : ((value['verified_at']).toISOString()),
        'via': value['via'],
    };
}

