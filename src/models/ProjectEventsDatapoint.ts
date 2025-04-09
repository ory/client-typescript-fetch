/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.6
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Attribute } from './Attribute';
import {
    AttributeFromJSON,
    AttributeFromJSONTyped,
    AttributeToJSON,
    AttributeToJSONTyped,
} from './Attribute';

/**
 * 
 * @export
 * @interface ProjectEventsDatapoint
 */
export interface ProjectEventsDatapoint {
    /**
     * Event attributes with details
     * @type {Array<Attribute>}
     * @memberof ProjectEventsDatapoint
     */
    attributes: Array<Attribute>;
    /**
     * Name of the event
     * @type {string}
     * @memberof ProjectEventsDatapoint
     */
    name: string;
    /**
     * Time of occurence
     * @type {Date}
     * @memberof ProjectEventsDatapoint
     */
    timestamp: Date;
}

/**
 * Check if a given object implements the ProjectEventsDatapoint interface.
 */
export function instanceOfProjectEventsDatapoint(value: object): value is ProjectEventsDatapoint {
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined) return false;
    return true;
}

export function ProjectEventsDatapointFromJSON(json: any): ProjectEventsDatapoint {
    return ProjectEventsDatapointFromJSONTyped(json, false);
}

export function ProjectEventsDatapointFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectEventsDatapoint {
    if (json == null) {
        return json;
    }
    return {
        
        'attributes': ((json['attributes'] as Array<any>).map(AttributeFromJSON)),
        'name': json['name'],
        'timestamp': (new Date(json['timestamp'])),
    };
}

export function ProjectEventsDatapointToJSON(json: any): ProjectEventsDatapoint {
    return ProjectEventsDatapointToJSONTyped(json, false);
}

export function ProjectEventsDatapointToJSONTyped(value?: ProjectEventsDatapoint | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'attributes': ((value['attributes'] as Array<any>).map(AttributeToJSON)),
        'name': value['name'],
        'timestamp': ((value['timestamp']).toISOString()),
    };
}

