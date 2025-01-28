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
import type { ProjectEventsDatapoint } from './ProjectEventsDatapoint';
import {
    ProjectEventsDatapointFromJSON,
    ProjectEventsDatapointFromJSONTyped,
    ProjectEventsDatapointToJSON,
} from './ProjectEventsDatapoint';

/**
 * Response of the getProjectEvents endpoint
 * @export
 * @interface GetProjectEventsResponse
 */
export interface GetProjectEventsResponse {
    /**
     * The list of data points.
     * @type {Array<ProjectEventsDatapoint>}
     * @memberof GetProjectEventsResponse
     */
    readonly events: Array<ProjectEventsDatapoint>;
    /**
     * Pagination token to be included in next page request
     * @type {string}
     * @memberof GetProjectEventsResponse
     */
    readonly page_token?: string;
}

/**
 * Check if a given object implements the GetProjectEventsResponse interface.
 */
export function instanceOfGetProjectEventsResponse(value: object): value is GetProjectEventsResponse {
    if (!('events' in value) || value['events'] === undefined) return false;
    return true;
}

export function GetProjectEventsResponseFromJSON(json: any): GetProjectEventsResponse {
    return GetProjectEventsResponseFromJSONTyped(json, false);
}

export function GetProjectEventsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProjectEventsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'events': ((json['events'] as Array<any>).map(ProjectEventsDatapointFromJSON)),
        'page_token': json['page_token'] == null ? undefined : json['page_token'],
    };
}

export function GetProjectEventsResponseToJSON(value?: Omit<GetProjectEventsResponse, 'events'|'page_token'> | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

