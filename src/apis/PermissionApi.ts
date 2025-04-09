/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * # Introduction Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers.  ## SDKs This document describes the APIs available in the Ory Network. The APIs are available as SDKs for the following languages:  | Language       | Download SDK                                                     | Documentation                                                                        | | -------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | | Dart           | [pub.dev](https://pub.dev/packages/ory_client)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/dart/README.md)       | | .NET           | [nuget.org](https://www.nuget.org/packages/Ory.Client/)          | [README](https://github.com/ory/sdk/blob/master/clients/client/dotnet/README.md)     | | Elixir         | [hex.pm](https://hex.pm/packages/ory_client)                     | [README](https://github.com/ory/sdk/blob/master/clients/client/elixir/README.md)     | | Go             | [github.com](https://github.com/ory/client-go)                   | [README](https://github.com/ory/sdk/blob/master/clients/client/go/README.md)         | | Java           | [maven.org](https://search.maven.org/artifact/sh.ory/ory-client) | [README](https://github.com/ory/sdk/blob/master/clients/client/java/README.md)       | | JavaScript     | [npmjs.com](https://www.npmjs.com/package/@ory/client)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript/README.md) | | JavaScript (With fetch) | [npmjs.com](https://www.npmjs.com/package/@ory/client-fetch)           | [README](https://github.com/ory/sdk/blob/master/clients/client/typescript-fetch/README.md) |  | PHP            | [packagist.org](https://packagist.org/packages/ory/client)       | [README](https://github.com/ory/sdk/blob/master/clients/client/php/README.md)        | | Python         | [pypi.org](https://pypi.org/project/ory-client/)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/python/README.md)     | | Ruby           | [rubygems.org](https://rubygems.org/gems/ory-client)             | [README](https://github.com/ory/sdk/blob/master/clients/client/ruby/README.md)       | | Rust           | [crates.io](https://crates.io/crates/ory-client)                 | [README](https://github.com/ory/sdk/blob/master/clients/client/rust/README.md)       | 
 *
 * The version of the OpenAPI document: v1.20.5
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  BatchCheckPermissionBody,
  BatchCheckPermissionResult,
  CheckPermissionResult,
  ErrorGeneric,
  ExpandedPermissionTree,
  PostCheckPermissionBody,
  PostCheckPermissionOrErrorBody,
} from '../models/index';
import {
    BatchCheckPermissionBodyFromJSON,
    BatchCheckPermissionBodyToJSON,
    BatchCheckPermissionResultFromJSON,
    BatchCheckPermissionResultToJSON,
    CheckPermissionResultFromJSON,
    CheckPermissionResultToJSON,
    ErrorGenericFromJSON,
    ErrorGenericToJSON,
    ExpandedPermissionTreeFromJSON,
    ExpandedPermissionTreeToJSON,
    PostCheckPermissionBodyFromJSON,
    PostCheckPermissionBodyToJSON,
    PostCheckPermissionOrErrorBodyFromJSON,
    PostCheckPermissionOrErrorBodyToJSON,
} from '../models/index';

export interface BatchCheckPermissionRequest {
    maxDepth?: number;
    batchCheckPermissionBody?: BatchCheckPermissionBody;
}

export interface CheckPermissionRequest {
    namespace?: string;
    object?: string;
    relation?: string;
    subjectId?: string;
    subjectSetNamespace?: string;
    subjectSetObject?: string;
    subjectSetRelation?: string;
    maxDepth?: number;
}

export interface CheckPermissionOrErrorRequest {
    namespace?: string;
    object?: string;
    relation?: string;
    subjectId?: string;
    subjectSetNamespace?: string;
    subjectSetObject?: string;
    subjectSetRelation?: string;
    maxDepth?: number;
}

export interface ExpandPermissionsRequest {
    namespace: string;
    object: string;
    relation: string;
    maxDepth?: number;
}

export interface PostCheckPermissionRequest {
    maxDepth?: number;
    postCheckPermissionBody?: PostCheckPermissionBody;
}

export interface PostCheckPermissionOrErrorRequest {
    maxDepth?: number;
    postCheckPermissionOrErrorBody?: PostCheckPermissionOrErrorBody;
}

/**
 * 
 */
export class PermissionApi extends runtime.BaseAPI {

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Batch check permissions
     */
    async batchCheckPermissionRaw(requestParameters: BatchCheckPermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<BatchCheckPermissionResult>> {
        const queryParameters: any = {};

        if (requestParameters['maxDepth'] != null) {
            queryParameters['max-depth'] = requestParameters['maxDepth'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryAccessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/relation-tuples/batch/check`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BatchCheckPermissionBodyToJSON(requestParameters['batchCheckPermissionBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BatchCheckPermissionResultFromJSON(jsonValue));
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Batch check permissions
     */
    async batchCheckPermission(requestParameters: BatchCheckPermissionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<BatchCheckPermissionResult> {
        const response = await this.batchCheckPermissionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     */
    async checkPermissionRaw(requestParameters: CheckPermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckPermissionResult>> {
        const queryParameters: any = {};

        if (requestParameters['namespace'] != null) {
            queryParameters['namespace'] = requestParameters['namespace'];
        }

        if (requestParameters['object'] != null) {
            queryParameters['object'] = requestParameters['object'];
        }

        if (requestParameters['relation'] != null) {
            queryParameters['relation'] = requestParameters['relation'];
        }

        if (requestParameters['subjectId'] != null) {
            queryParameters['subject_id'] = requestParameters['subjectId'];
        }

        if (requestParameters['subjectSetNamespace'] != null) {
            queryParameters['subject_set.namespace'] = requestParameters['subjectSetNamespace'];
        }

        if (requestParameters['subjectSetObject'] != null) {
            queryParameters['subject_set.object'] = requestParameters['subjectSetObject'];
        }

        if (requestParameters['subjectSetRelation'] != null) {
            queryParameters['subject_set.relation'] = requestParameters['subjectSetRelation'];
        }

        if (requestParameters['maxDepth'] != null) {
            queryParameters['max-depth'] = requestParameters['maxDepth'];
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
            path: `/relation-tuples/check/openapi`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckPermissionResultFromJSON(jsonValue));
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     */
    async checkPermission(requestParameters: CheckPermissionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckPermissionResult> {
        const response = await this.checkPermissionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     */
    async checkPermissionOrErrorRaw(requestParameters: CheckPermissionOrErrorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckPermissionResult>> {
        const queryParameters: any = {};

        if (requestParameters['namespace'] != null) {
            queryParameters['namespace'] = requestParameters['namespace'];
        }

        if (requestParameters['object'] != null) {
            queryParameters['object'] = requestParameters['object'];
        }

        if (requestParameters['relation'] != null) {
            queryParameters['relation'] = requestParameters['relation'];
        }

        if (requestParameters['subjectId'] != null) {
            queryParameters['subject_id'] = requestParameters['subjectId'];
        }

        if (requestParameters['subjectSetNamespace'] != null) {
            queryParameters['subject_set.namespace'] = requestParameters['subjectSetNamespace'];
        }

        if (requestParameters['subjectSetObject'] != null) {
            queryParameters['subject_set.object'] = requestParameters['subjectSetObject'];
        }

        if (requestParameters['subjectSetRelation'] != null) {
            queryParameters['subject_set.relation'] = requestParameters['subjectSetRelation'];
        }

        if (requestParameters['maxDepth'] != null) {
            queryParameters['max-depth'] = requestParameters['maxDepth'];
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
            path: `/relation-tuples/check`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckPermissionResultFromJSON(jsonValue));
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     */
    async checkPermissionOrError(requestParameters: CheckPermissionOrErrorRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckPermissionResult> {
        const response = await this.checkPermissionOrErrorRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Use this endpoint to expand a relationship tuple into permissions.
     * Expand a Relationship into permissions.
     */
    async expandPermissionsRaw(requestParameters: ExpandPermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ExpandedPermissionTree>> {
        if (requestParameters['namespace'] == null) {
            throw new runtime.RequiredError(
                'namespace',
                'Required parameter "namespace" was null or undefined when calling expandPermissions().'
            );
        }

        if (requestParameters['object'] == null) {
            throw new runtime.RequiredError(
                'object',
                'Required parameter "object" was null or undefined when calling expandPermissions().'
            );
        }

        if (requestParameters['relation'] == null) {
            throw new runtime.RequiredError(
                'relation',
                'Required parameter "relation" was null or undefined when calling expandPermissions().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['namespace'] != null) {
            queryParameters['namespace'] = requestParameters['namespace'];
        }

        if (requestParameters['object'] != null) {
            queryParameters['object'] = requestParameters['object'];
        }

        if (requestParameters['relation'] != null) {
            queryParameters['relation'] = requestParameters['relation'];
        }

        if (requestParameters['maxDepth'] != null) {
            queryParameters['max-depth'] = requestParameters['maxDepth'];
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
            path: `/relation-tuples/expand`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ExpandedPermissionTreeFromJSON(jsonValue));
    }

    /**
     * Use this endpoint to expand a relationship tuple into permissions.
     * Expand a Relationship into permissions.
     */
    async expandPermissions(requestParameters: ExpandPermissionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ExpandedPermissionTree> {
        const response = await this.expandPermissionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     */
    async postCheckPermissionRaw(requestParameters: PostCheckPermissionRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckPermissionResult>> {
        const queryParameters: any = {};

        if (requestParameters['maxDepth'] != null) {
            queryParameters['max-depth'] = requestParameters['maxDepth'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryAccessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/relation-tuples/check/openapi`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostCheckPermissionBodyToJSON(requestParameters['postCheckPermissionBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckPermissionResultFromJSON(jsonValue));
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     */
    async postCheckPermission(requestParameters: PostCheckPermissionRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckPermissionResult> {
        const response = await this.postCheckPermissionRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     */
    async postCheckPermissionOrErrorRaw(requestParameters: PostCheckPermissionOrErrorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CheckPermissionResult>> {
        const queryParameters: any = {};

        if (requestParameters['maxDepth'] != null) {
            queryParameters['max-depth'] = requestParameters['maxDepth'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryAccessToken", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/relation-tuples/check`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostCheckPermissionOrErrorBodyToJSON(requestParameters['postCheckPermissionOrErrorBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CheckPermissionResultFromJSON(jsonValue));
    }

    /**
     * To learn how relationship tuples and the check works, head over to [the documentation](https://www.ory.sh/docs/keto/concepts/api-overview).
     * Check a permission
     */
    async postCheckPermissionOrError(requestParameters: PostCheckPermissionOrErrorRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CheckPermissionResult> {
        const response = await this.postCheckPermissionOrErrorRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
