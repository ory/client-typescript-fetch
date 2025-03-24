/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.19.0
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
 * @interface NormalizedProjectRevisionSAMLProvider
 */
export interface NormalizedProjectRevisionSAMLProvider {
    /**
     * The Project's Revision Creation Date
     * @type {Date}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    readonly created_at?: Date;
    /**
     * 
     * @type {string}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    id?: string;
    /**
     * Label represents an optional label which can be used in the UI generation.
     * @type {string}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    label?: string;
    /**
     * Mapper specifies the JSONNet code snippet which uses the OpenID Connect Provider's data (e.g. GitHub or Google
     * profile information) to hydrate the identity's data.
     * @type {string}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    mapper_url?: string;
    /**
     * 
     * @type {string}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    organization_id?: string | null;
    /**
     * The Revision's ID this schema belongs to
     * @type {string}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    project_revision_id?: string;
    /**
     * ID is the provider's ID
     * @type {string}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    provider_id?: string;
    /**
     * RawIDPMetadataXML is the raw XML metadata of the IDP.
     * @type {string}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    raw_idp_metadata_xml?: string;
    /**
     * State indicates the state of the provider
     * 
     * Only providers with state `enabled` will be used for authentication
     * enabled ThirdPartyProviderStateEnabled
     * disabled ThirdPartyProviderStateDisabled
     * @type {string}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    state?: NormalizedProjectRevisionSAMLProviderStateEnum;
    /**
     * Last Time Project's Revision was Updated
     * @type {Date}
     * @memberof NormalizedProjectRevisionSAMLProvider
     */
    readonly updated_at?: Date;
}


/**
 * @export
 */
export const NormalizedProjectRevisionSAMLProviderStateEnum = {
    Enabled: 'enabled',
    Disabled: 'disabled',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type NormalizedProjectRevisionSAMLProviderStateEnum = typeof NormalizedProjectRevisionSAMLProviderStateEnum[keyof typeof NormalizedProjectRevisionSAMLProviderStateEnum];


/**
 * Check if a given object implements the NormalizedProjectRevisionSAMLProvider interface.
 */
export function instanceOfNormalizedProjectRevisionSAMLProvider(value: object): value is NormalizedProjectRevisionSAMLProvider {
    return true;
}

export function NormalizedProjectRevisionSAMLProviderFromJSON(json: any): NormalizedProjectRevisionSAMLProvider {
    return NormalizedProjectRevisionSAMLProviderFromJSONTyped(json, false);
}

export function NormalizedProjectRevisionSAMLProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): NormalizedProjectRevisionSAMLProvider {
    if (json == null) {
        return json;
    }
    return {
        
        'created_at': json['created_at'] == null ? undefined : (new Date(json['created_at'])),
        'id': json['id'] == null ? undefined : json['id'],
        'label': json['label'] == null ? undefined : json['label'],
        'mapper_url': json['mapper_url'] == null ? undefined : json['mapper_url'],
        'organization_id': json['organization_id'] == null ? undefined : json['organization_id'],
        'project_revision_id': json['project_revision_id'] == null ? undefined : json['project_revision_id'],
        'provider_id': json['provider_id'] == null ? undefined : json['provider_id'],
        'raw_idp_metadata_xml': json['raw_idp_metadata_xml'] == null ? undefined : json['raw_idp_metadata_xml'],
        'state': json['state'] == null ? undefined : json['state'],
        'updated_at': json['updated_at'] == null ? undefined : (new Date(json['updated_at'])),
    };
}

export function NormalizedProjectRevisionSAMLProviderToJSON(json: any): NormalizedProjectRevisionSAMLProvider {
    return NormalizedProjectRevisionSAMLProviderToJSONTyped(json, false);
}

export function NormalizedProjectRevisionSAMLProviderToJSONTyped(value?: Omit<NormalizedProjectRevisionSAMLProvider, 'created_at'|'updated_at'> | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'label': value['label'],
        'mapper_url': value['mapper_url'],
        'organization_id': value['organization_id'],
        'project_revision_id': value['project_revision_id'],
        'provider_id': value['provider_id'],
        'raw_idp_metadata_xml': value['raw_idp_metadata_xml'],
        'state': value['state'],
    };
}

