/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.2
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
 * @interface UiNodeScriptAttributes
 */
export interface UiNodeScriptAttributes {
    /**
     * The script async type
     * @type {boolean}
     * @memberof UiNodeScriptAttributes
     */
    async: boolean;
    /**
     * The script cross origin policy
     * @type {string}
     * @memberof UiNodeScriptAttributes
     */
    crossorigin: string;
    /**
     * A unique identifier
     * @type {string}
     * @memberof UiNodeScriptAttributes
     */
    id: string;
    /**
     * The script's integrity hash
     * @type {string}
     * @memberof UiNodeScriptAttributes
     */
    integrity: string;
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
     * @memberof UiNodeScriptAttributes
     */
    node_type: UiNodeScriptAttributesNodeTypeEnum;
    /**
     * Nonce for CSP
     * 
     * A nonce you may want to use to improve your Content Security Policy.
     * You do not have to use this value but if you want to improve your CSP
     * policies you may use it. You can also choose to use your own nonce value!
     * @type {string}
     * @memberof UiNodeScriptAttributes
     */
    nonce: string;
    /**
     * The script referrer policy
     * @type {string}
     * @memberof UiNodeScriptAttributes
     */
    referrerpolicy: string;
    /**
     * The script source
     * @type {string}
     * @memberof UiNodeScriptAttributes
     */
    src: string;
    /**
     * The script MIME type
     * @type {string}
     * @memberof UiNodeScriptAttributes
     */
    type: string;
}


/**
 * @export
 */
export const UiNodeScriptAttributesNodeTypeEnum = {
    Text: 'text',
    Input: 'input',
    Img: 'img',
    A: 'a',
    Script: 'script',
    Div: 'div',
    UnknownDefaultOpenApi: '11184809'
} as const;
export type UiNodeScriptAttributesNodeTypeEnum = typeof UiNodeScriptAttributesNodeTypeEnum[keyof typeof UiNodeScriptAttributesNodeTypeEnum];


/**
 * Check if a given object implements the UiNodeScriptAttributes interface.
 */
export function instanceOfUiNodeScriptAttributes(value: object): value is UiNodeScriptAttributes {
    if (!('async' in value) || value['async'] === undefined) return false;
    if (!('crossorigin' in value) || value['crossorigin'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('integrity' in value) || value['integrity'] === undefined) return false;
    if (!('node_type' in value) || value['node_type'] === undefined) return false;
    if (!('nonce' in value) || value['nonce'] === undefined) return false;
    if (!('referrerpolicy' in value) || value['referrerpolicy'] === undefined) return false;
    if (!('src' in value) || value['src'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function UiNodeScriptAttributesFromJSON(json: any): UiNodeScriptAttributes {
    return UiNodeScriptAttributesFromJSONTyped(json, false);
}

export function UiNodeScriptAttributesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UiNodeScriptAttributes {
    if (json == null) {
        return json;
    }
    return {
        
        'async': json['async'],
        'crossorigin': json['crossorigin'],
        'id': json['id'],
        'integrity': json['integrity'],
        'node_type': json['node_type'],
        'nonce': json['nonce'],
        'referrerpolicy': json['referrerpolicy'],
        'src': json['src'],
        'type': json['type'],
    };
}

export function UiNodeScriptAttributesToJSON(json: any): UiNodeScriptAttributes {
    return UiNodeScriptAttributesToJSONTyped(json, false);
}

export function UiNodeScriptAttributesToJSONTyped(value?: UiNodeScriptAttributes | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'async': value['async'],
        'crossorigin': value['crossorigin'],
        'id': value['id'],
        'integrity': value['integrity'],
        'node_type': value['node_type'],
        'nonce': value['nonce'],
        'referrerpolicy': value['referrerpolicy'],
        'src': value['src'],
        'type': value['type'],
    };
}

