/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.17.2
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { UiText } from './UiText';
import {
    UiTextFromJSON,
    UiTextFromJSONTyped,
    UiTextToJSON,
} from './UiText';
import type { UiNode } from './UiNode';
import {
    UiNodeFromJSON,
    UiNodeFromJSONTyped,
    UiNodeToJSON,
} from './UiNode';

/**
 * Container represents a HTML Form. The container can work with both HTTP Form and JSON requests
 * @export
 * @interface UiContainer
 */
export interface UiContainer {
    /**
     * Action should be used as the form action URL `<form action="{{ .Action }}" method="post">`.
     * @type {string}
     * @memberof UiContainer
     */
    action: string;
    /**
     * 
     * @type {Array<UiText>}
     * @memberof UiContainer
     */
    messages?: Array<UiText>;
    /**
     * Method is the form method (e.g. POST)
     * @type {string}
     * @memberof UiContainer
     */
    method: string;
    /**
     * 
     * @type {Array<UiNode>}
     * @memberof UiContainer
     */
    nodes: Array<UiNode>;
}

/**
 * Check if a given object implements the UiContainer interface.
 */
export function instanceOfUiContainer(value: object): value is UiContainer {
    if (!('action' in value) || value['action'] === undefined) return false;
    if (!('method' in value) || value['method'] === undefined) return false;
    if (!('nodes' in value) || value['nodes'] === undefined) return false;
    return true;
}

export function UiContainerFromJSON(json: any): UiContainer {
    return UiContainerFromJSONTyped(json, false);
}

export function UiContainerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UiContainer {
    if (json == null) {
        return json;
    }
    return {
        
        'action': json['action'],
        'messages': json['messages'] == null ? undefined : ((json['messages'] as Array<any>).map(UiTextFromJSON)),
        'method': json['method'],
        'nodes': ((json['nodes'] as Array<any>).map(UiNodeFromJSON)),
    };
}

export function UiContainerToJSON(value?: UiContainer | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'action': value['action'],
        'messages': value['messages'] == null ? undefined : ((value['messages'] as Array<any>).map(UiTextToJSON)),
        'method': value['method'],
        'nodes': ((value['nodes'] as Array<any>).map(UiNodeToJSON)),
    };
}

