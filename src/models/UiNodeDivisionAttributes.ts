/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.0
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * Division sections are used for interactive widgets that require a hook in the DOM / view.
 * @export
 * @interface UiNodeDivisionAttributes
 */
export interface UiNodeDivisionAttributes {
    /**
     * The script MIME type
     * @type {string}
     * @memberof UiNodeDivisionAttributes
     */
    _class?: string;
    /**
     * Data is a map of key-value pairs that are passed to the division.
     * 
     * They may be used for `data-...` attributes.
     * @type {{ [key: string]: string; }}
     * @memberof UiNodeDivisionAttributes
     */
    data?: { [key: string]: string; };
    /**
     * A unique identifier
     * @type {string}
     * @memberof UiNodeDivisionAttributes
     */
    id: string;
    /**
     * NodeType represents this node's types. It is a mirror of `node.type` and
     * is primarily used to allow compatibility with OpenAPI 3.0. In this struct it technically always is "script".
     * text Text
     * input Input
     * img Image
     * a Anchor
     * script Script
     * div Division
     * @type {string}
     * @memberof UiNodeDivisionAttributes
     */
    node_type: UiNodeDivisionAttributesNodeTypeEnum;
}


/**
 * @export
 */
export const UiNodeDivisionAttributesNodeTypeEnum = {
    Text: 'text',
    Input: 'input',
    Img: 'img',
    A: 'a',
    Script: 'script',
    Div: 'div',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type UiNodeDivisionAttributesNodeTypeEnum = typeof UiNodeDivisionAttributesNodeTypeEnum[keyof typeof UiNodeDivisionAttributesNodeTypeEnum];


/**
 * Check if a given object implements the UiNodeDivisionAttributes interface.
 */
export function instanceOfUiNodeDivisionAttributes(value: object): value is UiNodeDivisionAttributes {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('node_type' in value) || value['node_type'] === undefined) return false;
    return true;
}

export function UiNodeDivisionAttributesFromJSON(json: any): UiNodeDivisionAttributes {
    return UiNodeDivisionAttributesFromJSONTyped(json, false);
}

export function UiNodeDivisionAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UiNodeDivisionAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        '_class': json['class'] == null ? undefined : json['class'],
        'data': json['data'] == null ? undefined : json['data'],
        'id': json['id'],
        'node_type': json['node_type'],
    };
}

export function UiNodeDivisionAttributesToJSON(json: any): UiNodeDivisionAttributes {
    return UiNodeDivisionAttributesToJSONTyped(json, false);
}

export function UiNodeDivisionAttributesToJSONTyped(value?: UiNodeDivisionAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'class': value['_class'],
        'data': value['data'],
        'id': value['id'],
        'node_type': value['node_type'],
    };
}

