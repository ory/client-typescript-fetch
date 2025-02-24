/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.17.1
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
 * @interface OAuth2ConsentSessionExpiresAt
 */
export interface OAuth2ConsentSessionExpiresAt {
    /**
     * 
     * @type {Date}
     * @memberof OAuth2ConsentSessionExpiresAt
     */
    access_token?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OAuth2ConsentSessionExpiresAt
     */
    authorize_code?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OAuth2ConsentSessionExpiresAt
     */
    id_token?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OAuth2ConsentSessionExpiresAt
     */
    par_context?: Date;
    /**
     * 
     * @type {Date}
     * @memberof OAuth2ConsentSessionExpiresAt
     */
    refresh_token?: Date;
}

/**
 * Check if a given object implements the OAuth2ConsentSessionExpiresAt interface.
 */
export function instanceOfOAuth2ConsentSessionExpiresAt(value: object): value is OAuth2ConsentSessionExpiresAt {
    return true;
}

export function OAuth2ConsentSessionExpiresAtFromJSON(json: any): OAuth2ConsentSessionExpiresAt {
    return OAuth2ConsentSessionExpiresAtFromJSONTyped(json, false);
}

export function OAuth2ConsentSessionExpiresAtFromJSONTyped(json: any, ignoreDiscriminator: boolean): OAuth2ConsentSessionExpiresAt {
    if (json == null) {
        return json;
    }
    return {
        
        'access_token': json['access_token'] == null ? undefined : (new Date(json['access_token'])),
        'authorize_code': json['authorize_code'] == null ? undefined : (new Date(json['authorize_code'])),
        'id_token': json['id_token'] == null ? undefined : (new Date(json['id_token'])),
        'par_context': json['par_context'] == null ? undefined : (new Date(json['par_context'])),
        'refresh_token': json['refresh_token'] == null ? undefined : (new Date(json['refresh_token'])),
    };
}

export function OAuth2ConsentSessionExpiresAtToJSON(value?: OAuth2ConsentSessionExpiresAt | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'access_token': value['access_token'] == null ? undefined : ((value['access_token']).toISOString()),
        'authorize_code': value['authorize_code'] == null ? undefined : ((value['authorize_code']).toISOString()),
        'id_token': value['id_token'] == null ? undefined : ((value['id_token']).toISOString()),
        'par_context': value['par_context'] == null ? undefined : ((value['par_context']).toISOString()),
        'refresh_token': value['refresh_token'] == null ? undefined : ((value['refresh_token']).toISOString()),
    };
}

