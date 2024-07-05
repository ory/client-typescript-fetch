/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.13.2
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * The `Link` HTTP header contains multiple links (`first`, `next`, `last`, `previous`) formatted as:
 * `<https://{project-slug}.projects.oryapis.com/admin/clients?page_size={limit}&page_token={offset}>; rel="{page}"`
 * 
 * For details on pagination please head over to the [pagination documentation](https://www.ory.sh/docs/ecosystem/api-design#pagination).
 * @export
 * @interface TokenPaginationResponseHeaders
 */
export interface TokenPaginationResponseHeaders {
    /**
     * The Link HTTP Header
     * 
     * The `Link` header contains a comma-delimited list of links to the following pages:
     * 
     * first: The first page of results.
     * next: The next page of results.
     * prev: The previous page of results.
     * last: The last page of results.
     * 
     * Pages are omitted if they do not exist. For example, if there is no next page, the `next` link is omitted. Examples:
     * 
     * </clients?page_size=5&page_token=0>; rel="first",</clients?page_size=5&page_token=15>; rel="next",</clients?page_size=5&page_token=5>; rel="prev",</clients?page_size=5&page_token=20>; rel="last"
     * @type {string}
     * @memberof TokenPaginationResponseHeaders
     */
    link?: string;
    /**
     * The X-Total-Count HTTP Header
     * 
     * The `X-Total-Count` header contains the total number of items in the collection.
     * @type {number}
     * @memberof TokenPaginationResponseHeaders
     */
    x_total_count?: number;
}

/**
 * Check if a given object implements the TokenPaginationResponseHeaders interface.
 */
export function instanceOfTokenPaginationResponseHeaders(value: object): value is TokenPaginationResponseHeaders {
    return true;
}

export function TokenPaginationResponseHeadersFromJSON(json: any): TokenPaginationResponseHeaders {
    return TokenPaginationResponseHeadersFromJSONTyped(json, false);
}

export function TokenPaginationResponseHeadersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TokenPaginationResponseHeaders {
    if (json == null) {
        return json;
    }
    return {
        
        'link': json['link'] == null ? undefined : json['link'],
        'x_total_count': json['x-total-count'] == null ? undefined : json['x-total-count'],
    };
}

export function TokenPaginationResponseHeadersToJSON(value?: TokenPaginationResponseHeaders | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'link': value['link'],
        'x-total-count': value['x_total_count'],
    };
}

