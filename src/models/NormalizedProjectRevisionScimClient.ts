/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * SCIMClient represents a SCIM client configuration to be used by an external
 * identity provider.
 * @export
 * @interface NormalizedProjectRevisionScimClient
 */
export interface NormalizedProjectRevisionScimClient {
    /**
     * The secret that the client uses in the authorization header to authenticate itself.
     * @type {string}
     * @memberof NormalizedProjectRevisionScimClient
     */
    authorization_header_secret: string;
    /**
     * The unique ID of the SCIM server.
     * @type {string}
     * @memberof NormalizedProjectRevisionScimClient
     */
    client_id: string;
    /**
     * The SCIM client's creation time
     * @type {Date}
     * @memberof NormalizedProjectRevisionScimClient
     */
    readonly created_at?: Date;
    /**
     * The SCIM server's label
     * @type {string}
     * @memberof NormalizedProjectRevisionScimClient
     */
    label: string;
    /**
     * Mapper specifies the JSONNet code snippet which uses the SCIM provider's data
     * to hydrate the identity's data.
     * @type {string}
     * @memberof NormalizedProjectRevisionScimClient
     */
    mapper_url: string;
    /**
     * OrganizationID is the organization ID for this SCIM server.
     * @type {string}
     * @memberof NormalizedProjectRevisionScimClient
     */
    organization_id: string;
    /**
     * State indicates the state of the SCIM server
     * 
     * Only servers with state `enabled` will be available for SCIM provisioning.
     * enabled ThirdPartyProviderStateEnabled
     * disabled ThirdPartyProviderStateDisabled
     * @type {string}
     * @memberof NormalizedProjectRevisionScimClient
     */
    state?: NormalizedProjectRevisionScimClientStateEnum;
    /**
     * Last time the SCIM client was updated
     * @type {Date}
     * @memberof NormalizedProjectRevisionScimClient
     */
    readonly updated_at?: Date;
}


/**
 * @export
 */
export const NormalizedProjectRevisionScimClientStateEnum = {
    Enabled: 'enabled',
    Disabled: 'disabled',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type NormalizedProjectRevisionScimClientStateEnum = typeof NormalizedProjectRevisionScimClientStateEnum[keyof typeof NormalizedProjectRevisionScimClientStateEnum];


/**
 * Check if a given object implements the NormalizedProjectRevisionScimClient interface.
 */
export function instanceOfNormalizedProjectRevisionScimClient(value: object): value is NormalizedProjectRevisionScimClient {
    if (!('authorization_header_secret' in value) || value['authorization_header_secret'] === undefined) return false;
    if (!('client_id' in value) || value['client_id'] === undefined) return false;
    if (!('label' in value) || value['label'] === undefined) return false;
    if (!('mapper_url' in value) || value['mapper_url'] === undefined) return false;
    if (!('organization_id' in value) || value['organization_id'] === undefined) return false;
    return true;
}

export function NormalizedProjectRevisionScimClientFromJSON(json: any): NormalizedProjectRevisionScimClient {
    return NormalizedProjectRevisionScimClientFromJSONTyped(json, false);
}

export function NormalizedProjectRevisionScimClientFromJSONTyped(json: any, ignoreDiscriminator: boolean): NormalizedProjectRevisionScimClient {
    if (json == null) {
        return json;
    }
    return {
        
        'authorization_header_secret': json['authorization_header_secret'],
        'client_id': json['client_id'],
        'created_at': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'label': json['label'],
        'mapper_url': json['mapper_url'],
        'organization_id': json['organization_id'],
        'state': json['state'] == null ? undefined : json['state'],
        'updated_at': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function NormalizedProjectRevisionScimClientToJSON(json: any): NormalizedProjectRevisionScimClient {
    return NormalizedProjectRevisionScimClientToJSONTyped(json, false);
}

export function NormalizedProjectRevisionScimClientToJSONTyped(value?: Omit<NormalizedProjectRevisionScimClient, 'created_at'|'updated_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'authorization_header_secret': value['authorization_header_secret'],
        'client_id': value['client_id'],
        'label': value['label'],
        'mapper_url': value['mapper_url'],
        'organization_id': value['organization_id'],
        'state': value['state'],
    };
}

