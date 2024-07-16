/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.0
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { UiNodeMeta } from './UiNodeMeta';
import {
    UiNodeMetaFromJSON,
    UiNodeMetaFromJSONTyped,
    UiNodeMetaToJSON,
} from './UiNodeMeta';
import type { UiNodeAttributes } from './UiNodeAttributes';
import {
    UiNodeAttributesFromJSON,
    UiNodeAttributesFromJSONTyped,
    UiNodeAttributesToJSON,
} from './UiNodeAttributes';
import type { UiText } from './UiText';
import {
    UiTextFromJSON,
    UiTextFromJSONTyped,
    UiTextToJSON,
} from './UiText';

/**
 * Nodes are represented as HTML elements or their native UI equivalents. For example,
 * a node can be an `<img>` tag, or an `<input element>` but also `some plain text`.
 * @export
 * @interface UiNode
 */
export interface UiNode {
    /**
     * 
     * @type {UiNodeAttributes}
     * @memberof UiNode
     */
    attributes: UiNodeAttributes;
    /**
     * Group specifies which group (e.g. password authenticator) this node belongs to.
     * default DefaultGroup
     * password PasswordGroup
     * oidc OpenIDConnectGroup
     * profile ProfileGroup
     * link LinkGroup
     * code CodeGroup
     * totp TOTPGroup
     * lookup_secret LookupGroup
     * webauthn WebAuthnGroup
     * passkey PasskeyGroup
     * identifier_first IdentifierFirstGroup
     * @type {string}
     * @memberof UiNode
     */
    group: UiNodeGroupEnum;
    /**
     * 
     * @type {Array<UiText>}
     * @memberof UiNode
     */
    messages: Array<UiText>;
    /**
     * 
     * @type {UiNodeMeta}
     * @memberof UiNode
     */
    meta: UiNodeMeta;
    /**
     * The node's type
     * text Text
     * input Input
     * img Image
     * a Anchor
     * script Script
     * @type {string}
     * @memberof UiNode
     */
    type: UiNodeTypeEnum;
}


/**
 * @export
 */
export const UiNodeGroupEnum = {
    Default: 'default',
    Password: 'password',
    Oidc: 'oidc',
    Profile: 'profile',
    Link: 'link',
    Code: 'code',
    Totp: 'totp',
    LookupSecret: 'lookup_secret',
    Webauthn: 'webauthn',
    Passkey: 'passkey',
    IdentifierFirst: 'identifier_first'
} as const;
export type UiNodeGroupEnum = typeof UiNodeGroupEnum[keyof typeof UiNodeGroupEnum];

/**
 * @export
 */
export const UiNodeTypeEnum = {
    Text: 'text',
    Input: 'input',
    Img: 'img',
    A: 'a',
    Script: 'script'
} as const;
export type UiNodeTypeEnum = typeof UiNodeTypeEnum[keyof typeof UiNodeTypeEnum];


/**
 * Check if a given object implements the UiNode interface.
 */
export function instanceOfUiNode(value: object): value is UiNode {
    if (!('attributes' in value) || value['attributes'] === undefined) return false;
    if (!('group' in value) || value['group'] === undefined) return false;
    if (!('messages' in value) || value['messages'] === undefined) return false;
    if (!('meta' in value) || value['meta'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function UiNodeFromJSON(json: any): UiNode {
    return UiNodeFromJSONTyped(json, false);
}

export function UiNodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UiNode {
    if (json == null) {
        return json;
    }
    return {
        
        'attributes': UiNodeAttributesFromJSON(json['attributes']),
        'group': json['group'],
        'messages': ((json['messages'] as Array<any>).map(UiTextFromJSON)),
        'meta': UiNodeMetaFromJSON(json['meta']),
        'type': json['type'],
    };
}

export function UiNodeToJSON(value?: UiNode | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'attributes': UiNodeAttributesToJSON(value['attributes']),
        'group': value['group'],
        'messages': ((value['messages'] as Array<any>).map(UiTextToJSON)),
        'meta': UiNodeMetaToJSON(value['meta']),
        'type': value['type'],
    };
}

