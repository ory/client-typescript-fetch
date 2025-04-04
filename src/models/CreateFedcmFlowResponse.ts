/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Provider } from './Provider';
import {
    ProviderFromJSON,
    ProviderFromJSONTyped,
    ProviderToJSON,
    ProviderToJSONTyped,
} from './Provider';

/**
 * Contains a list of all available FedCM providers.
 * @export
 * @interface CreateFedcmFlowResponse
 */
export interface CreateFedcmFlowResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateFedcmFlowResponse
     */
    csrf_token?: string;
    /**
     * 
     * @type {Array<Provider>}
     * @memberof CreateFedcmFlowResponse
     */
    providers?: Array<Provider>;
}

/**
 * Check if a given object implements the CreateFedcmFlowResponse interface.
 */
export function instanceOfCreateFedcmFlowResponse(value: object): value is CreateFedcmFlowResponse {
    return true;
}

export function CreateFedcmFlowResponseFromJSON(json: any): CreateFedcmFlowResponse {
    return CreateFedcmFlowResponseFromJSONTyped(json, false);
}

export function CreateFedcmFlowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFedcmFlowResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'csrf_token': json['csrf_token'] == null ? undefined : json['csrf_token'],
        'providers': json['providers'] == null ? undefined : ((json['providers'] as Array<any>).map(ProviderFromJSON)),
    };
}

export function CreateFedcmFlowResponseToJSON(json: any): CreateFedcmFlowResponse {
    return CreateFedcmFlowResponseToJSONTyped(json, false);
}

export function CreateFedcmFlowResponseToJSONTyped(value?: CreateFedcmFlowResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'csrf_token': value['csrf_token'],
        'providers': value['providers'] == null ? undefined : ((value['providers'] as Array<any>).map(ProviderToJSON)),
    };
}

