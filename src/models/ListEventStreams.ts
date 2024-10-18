/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { EventStream } from './EventStream';
import {
    EventStreamFromJSON,
    EventStreamFromJSONTyped,
    EventStreamToJSON,
} from './EventStream';

/**
 * Event Stream List
 * @export
 * @interface ListEventStreams
 */
export interface ListEventStreams {
    /**
     * 
     * @type {Array<EventStream>}
     * @memberof ListEventStreams
     */
    event_streams?: Array<EventStream>;
}

/**
 * Check if a given object implements the ListEventStreams interface.
 */
export function instanceOfListEventStreams(value: object): value is ListEventStreams {
    return true;
}

export function ListEventStreamsFromJSON(json: any): ListEventStreams {
    return ListEventStreamsFromJSONTyped(json, false);
}

export function ListEventStreamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListEventStreams {
    if (json == null) {
        return json;
    }
    return {
        
        'event_streams': json['event_streams'] == null ? undefined : ((json['event_streams'] as Array<any>).map(EventStreamFromJSON)),
    };
}

export function ListEventStreamsToJSON(value?: ListEventStreams | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'event_streams': value['event_streams'] == null ? undefined : ((value['event_streams'] as Array<any>).map(EventStreamToJSON)),
    };
}

