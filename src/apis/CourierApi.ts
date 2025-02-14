/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.16.7
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CourierMessageStatus,
  ErrorGeneric,
  Message,
} from '../models/index';
import {
    CourierMessageStatusFromJSON,
    CourierMessageStatusToJSON,
    ErrorGenericFromJSON,
    ErrorGenericToJSON,
    MessageFromJSON,
    MessageToJSON,
} from '../models/index';

export interface GetCourierMessageRequest {
    id: string;
}

export interface ListCourierMessagesRequest {
    pageSize?: number;
    pageToken?: string;
    status?: CourierMessageStatus;
    recipient?: string;
}

/**
 * 
 */
export class CourierApi extends runtime.BaseAPI {

    /**
     * Gets a specific messages by the given ID.
     * Get a Message
     */
    async getCourierMessageRaw(requestParameters: GetCourierMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Message>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getCourierMessage().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryAccessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/admin/courier/messages/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MessageFromJSON(jsonValue));
    }

    /**
     * Gets a specific messages by the given ID.
     * Get a Message
     */
    async getCourierMessage(requestParameters: GetCourierMessageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Message> {
        const response = await this.getCourierMessageRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists all messages by given status and recipient.
     * List Messages
     */
    async listCourierMessagesRaw(requestParameters: ListCourierMessagesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Message>>> {
        const queryParameters: any = {};

        if (requestParameters['pageSize'] != null) {
            queryParameters['page_size'] = requestParameters['pageSize'];
        }

        if (requestParameters['pageToken'] != null) {
            queryParameters['page_token'] = requestParameters['pageToken'];
        }

        if (requestParameters['status'] != null) {
            queryParameters['status'] = requestParameters['status'];
        }

        if (requestParameters['recipient'] != null) {
            queryParameters['recipient'] = requestParameters['recipient'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryAccessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/admin/courier/messages`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MessageFromJSON));
    }

    /**
     * Lists all messages by given status and recipient.
     * List Messages
     */
    async listCourierMessages(requestParameters: ListCourierMessagesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Message>> {
        const response = await this.listCourierMessagesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
