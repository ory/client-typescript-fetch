/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.15.3
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateVerifiableCredentialRequestBody,
  ErrorOAuth2,
  GenericError,
  OAuth2Client,
  OidcConfiguration,
  OidcUserInfo,
  VerifiableCredentialPrimingResponse,
  VerifiableCredentialResponse,
} from '../models/index';
import {
    CreateVerifiableCredentialRequestBodyFromJSON,
    CreateVerifiableCredentialRequestBodyToJSON,
    ErrorOAuth2FromJSON,
    ErrorOAuth2ToJSON,
    GenericErrorFromJSON,
    GenericErrorToJSON,
    OAuth2ClientFromJSON,
    OAuth2ClientToJSON,
    OidcConfigurationFromJSON,
    OidcConfigurationToJSON,
    OidcUserInfoFromJSON,
    OidcUserInfoToJSON,
    VerifiableCredentialPrimingResponseFromJSON,
    VerifiableCredentialPrimingResponseToJSON,
    VerifiableCredentialResponseFromJSON,
    VerifiableCredentialResponseToJSON,
} from '../models/index';

export interface CreateOidcDynamicClientRequest {
    oAuth2Client: OAuth2Client;
}

export interface CreateVerifiableCredentialRequest {
    createVerifiableCredentialRequestBody?: CreateVerifiableCredentialRequestBody;
}

export interface DeleteOidcDynamicClientRequest {
    id: string;
}

export interface GetOidcDynamicClientRequest {
    id: string;
}

export interface SetOidcDynamicClientRequest {
    id: string;
    oAuth2Client: OAuth2Client;
}

/**
 * 
 */
export class OidcApi extends runtime.BaseAPI {

    /**
     * This endpoint behaves like the administrative counterpart (`createOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  Please note that using this endpoint you are not able to choose the `client_secret` nor the `client_id` as those values will be server generated when specifying `token_endpoint_auth_method` as `client_secret_basic` or `client_secret_post`.  The `client_secret` will be returned in the response and you will not be able to retrieve it later on. Write the secret down and keep it somewhere safe.
     * Register OAuth2 Client using OpenID Dynamic Client Registration
     */
    async createOidcDynamicClientRaw(requestParameters: CreateOidcDynamicClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuth2Client>> {
        if (requestParameters['oAuth2Client'] == null) {
            throw new runtime.RequiredError(
                'oAuth2Client',
                'Required parameter "oAuth2Client" was null or undefined when calling createOidcDynamicClient().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/oauth2/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OAuth2ClientToJSON(requestParameters['oAuth2Client']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuth2ClientFromJSON(jsonValue));
    }

    /**
     * This endpoint behaves like the administrative counterpart (`createOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  Please note that using this endpoint you are not able to choose the `client_secret` nor the `client_id` as those values will be server generated when specifying `token_endpoint_auth_method` as `client_secret_basic` or `client_secret_post`.  The `client_secret` will be returned in the response and you will not be able to retrieve it later on. Write the secret down and keep it somewhere safe.
     * Register OAuth2 Client using OpenID Dynamic Client Registration
     */
    async createOidcDynamicClient(requestParameters: CreateOidcDynamicClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuth2Client> {
        const response = await this.createOidcDynamicClientRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint creates a verifiable credential that attests that the user authenticated with the provided access token owns a certain public/private key pair.  More information can be found at https://openid.net/specs/openid-connect-userinfo-vc-1_0.html.
     * Issues a Verifiable Credential
     */
    async createVerifiableCredentialRaw(requestParameters: CreateVerifiableCredentialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VerifiableCredentialResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/credentials`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateVerifiableCredentialRequestBodyToJSON(requestParameters['createVerifiableCredentialRequestBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => VerifiableCredentialResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint creates a verifiable credential that attests that the user authenticated with the provided access token owns a certain public/private key pair.  More information can be found at https://openid.net/specs/openid-connect-userinfo-vc-1_0.html.
     * Issues a Verifiable Credential
     */
    async createVerifiableCredential(requestParameters: CreateVerifiableCredentialRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VerifiableCredentialResponse> {
        const response = await this.createVerifiableCredentialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint behaves like the administrative counterpart (`deleteOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Delete OAuth 2.0 Client using the OpenID Dynamic Client Registration Management Protocol
     */
    async deleteOidcDynamicClientRaw(requestParameters: DeleteOidcDynamicClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling deleteOidcDynamicClient().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/oauth2/register/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint behaves like the administrative counterpart (`deleteOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol. This feature needs to be enabled in the configuration. This endpoint is disabled by default. It can be enabled by an administrator.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Delete OAuth 2.0 Client using the OpenID Dynamic Client Registration Management Protocol
     */
    async deleteOidcDynamicClient(requestParameters: DeleteOidcDynamicClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteOidcDynamicClientRaw(requestParameters, initOverrides);
    }

    /**
     * A mechanism for an OpenID Connect Relying Party to discover the End-User\'s OpenID Provider and obtain information needed to interact with it, including its OAuth 2.0 endpoint locations.  Popular libraries for OpenID Connect clients include oidc-client-js (JavaScript), go-oidc (Golang), and others. For a full list of clients go here: https://openid.net/developers/certified/
     * OpenID Connect Discovery
     */
    async discoverOidcConfigurationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OidcConfiguration>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/.well-known/openid-configuration`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OidcConfigurationFromJSON(jsonValue));
    }

    /**
     * A mechanism for an OpenID Connect Relying Party to discover the End-User\'s OpenID Provider and obtain information needed to interact with it, including its OAuth 2.0 endpoint locations.  Popular libraries for OpenID Connect clients include oidc-client-js (JavaScript), go-oidc (Golang), and others. For a full list of clients go here: https://openid.net/developers/certified/
     * OpenID Connect Discovery
     */
    async discoverOidcConfiguration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OidcConfiguration> {
        const response = await this.discoverOidcConfigurationRaw(initOverrides);
        return await response.value();
    }

    /**
     * This endpoint behaves like the administrative counterpart (`getOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.
     * Get OAuth2 Client using OpenID Dynamic Client Registration
     */
    async getOidcDynamicClientRaw(requestParameters: GetOidcDynamicClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuth2Client>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling getOidcDynamicClient().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/oauth2/register/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuth2ClientFromJSON(jsonValue));
    }

    /**
     * This endpoint behaves like the administrative counterpart (`getOAuth2Client`) but is capable of facing the public internet directly and can be used in self-service. It implements the OpenID Connect Dynamic Client Registration Protocol.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.
     * Get OAuth2 Client using OpenID Dynamic Client Registration
     */
    async getOidcDynamicClient(requestParameters: GetOidcDynamicClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuth2Client> {
        const response = await this.getOidcDynamicClientRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns the payload of the ID Token, including `session.id_token` values, of the provided OAuth 2.0 Access Token\'s consent request.  In the case of authentication error, a WWW-Authenticate header might be set in the response with more information about the error. See [the spec](https://datatracker.ietf.org/doc/html/rfc6750#section-3) for more details about header format.
     * OpenID Connect Userinfo
     */
    async getOidcUserInfoRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OidcUserInfo>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("oauth2", []);
        }

        const response = await this.request({
            path: `/userinfo`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OidcUserInfoFromJSON(jsonValue));
    }

    /**
     * This endpoint returns the payload of the ID Token, including `session.id_token` values, of the provided OAuth 2.0 Access Token\'s consent request.  In the case of authentication error, a WWW-Authenticate header might be set in the response with more information about the error. See [the spec](https://datatracker.ietf.org/doc/html/rfc6750#section-3) for more details about header format.
     * OpenID Connect Userinfo
     */
    async getOidcUserInfo(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OidcUserInfo> {
        const response = await this.getOidcUserInfoRaw(initOverrides);
        return await response.value();
    }

    /**
     * This endpoint initiates and completes user logout at the Ory OAuth2 & OpenID provider and initiates OpenID Connect Front- / Back-channel logout:  https://openid.net/specs/openid-connect-frontchannel-1_0.html https://openid.net/specs/openid-connect-backchannel-1_0.html  Back-channel logout is performed asynchronously and does not affect logout flow.
     * OpenID Connect Front- and Back-channel Enabled Logout
     */
    async revokeOidcSessionRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/oauth2/sessions/logout`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This endpoint initiates and completes user logout at the Ory OAuth2 & OpenID provider and initiates OpenID Connect Front- / Back-channel logout:  https://openid.net/specs/openid-connect-frontchannel-1_0.html https://openid.net/specs/openid-connect-backchannel-1_0.html  Back-channel logout is performed asynchronously and does not affect logout flow.
     * OpenID Connect Front- and Back-channel Enabled Logout
     */
    async revokeOidcSession(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.revokeOidcSessionRaw(initOverrides);
    }

    /**
     * This endpoint behaves like the administrative counterpart (`setOAuth2Client`) but is capable of facing the public internet directly to be used by third parties. It implements the OpenID Connect Dynamic Client Registration Protocol.  This feature is disabled per default. It can be enabled by a system administrator.  If you pass `client_secret` the secret is used, otherwise the existing secret is used. If set, the secret is echoed in the response. It is not possible to retrieve it later on.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Set OAuth2 Client using OpenID Dynamic Client Registration
     */
    async setOidcDynamicClientRaw(requestParameters: SetOidcDynamicClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<OAuth2Client>> {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError(
                'id',
                'Required parameter "id" was null or undefined when calling setOidcDynamicClient().'
            );
        }

        if (requestParameters['oAuth2Client'] == null) {
            throw new runtime.RequiredError(
                'oAuth2Client',
                'Required parameter "oAuth2Client" was null or undefined when calling setOidcDynamicClient().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/oauth2/register/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: OAuth2ClientToJSON(requestParameters['oAuth2Client']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OAuth2ClientFromJSON(jsonValue));
    }

    /**
     * This endpoint behaves like the administrative counterpart (`setOAuth2Client`) but is capable of facing the public internet directly to be used by third parties. It implements the OpenID Connect Dynamic Client Registration Protocol.  This feature is disabled per default. It can be enabled by a system administrator.  If you pass `client_secret` the secret is used, otherwise the existing secret is used. If set, the secret is echoed in the response. It is not possible to retrieve it later on.  To use this endpoint, you will need to present the client\'s authentication credentials. If the OAuth2 Client uses the Token Endpoint Authentication Method `client_secret_post`, you need to present the client secret in the URL query. If it uses `client_secret_basic`, present the Client ID and the Client Secret in the Authorization header.  OAuth 2.0 clients are used to perform OAuth 2.0 and OpenID Connect flows. Usually, OAuth 2.0 clients are generated for applications which want to consume your OAuth 2.0 or OpenID Connect capabilities.
     * Set OAuth2 Client using OpenID Dynamic Client Registration
     */
    async setOidcDynamicClient(requestParameters: SetOidcDynamicClientRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<OAuth2Client> {
        const response = await this.setOidcDynamicClientRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
