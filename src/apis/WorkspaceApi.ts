/* tslint:disable */
/* eslint-disable */
/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * The version of the OpenAPI document: v1.14.4
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateWorkspaceApiKeyBody,
  CreateWorkspaceBody,
  ErrorGeneric,
  ListWorkspaceProjects,
  ListWorkspaces,
  UpdateWorkspaceBody,
  Workspace,
  WorkspaceApiKey,
} from '../models/index';
import {
    CreateWorkspaceApiKeyBodyFromJSON,
    CreateWorkspaceApiKeyBodyToJSON,
    CreateWorkspaceBodyFromJSON,
    CreateWorkspaceBodyToJSON,
    ErrorGenericFromJSON,
    ErrorGenericToJSON,
    ListWorkspaceProjectsFromJSON,
    ListWorkspaceProjectsToJSON,
    ListWorkspacesFromJSON,
    ListWorkspacesToJSON,
    UpdateWorkspaceBodyFromJSON,
    UpdateWorkspaceBodyToJSON,
    WorkspaceFromJSON,
    WorkspaceToJSON,
    WorkspaceApiKeyFromJSON,
    WorkspaceApiKeyToJSON,
} from '../models/index';

export interface CreateWorkspaceRequest {
    createWorkspaceBody?: CreateWorkspaceBody;
}

export interface CreateWorkspaceApiKeyRequest {
    workspace: string;
    createWorkspaceApiKeyBody?: CreateWorkspaceApiKeyBody;
}

export interface DeleteWorkspaceApiKeyRequest {
    workspace: string;
    tokenId: string;
}

export interface GetWorkspaceRequest {
    workspace: string;
}

export interface ListWorkspaceApiKeysRequest {
    workspace: string;
}

export interface ListWorkspaceProjectsRequest {
    workspace: string;
}

export interface ListWorkspacesRequest {
    pageSize?: number;
    pageToken?: string;
}

export interface UpdateWorkspaceRequest {
    workspace: string;
    updateWorkspaceBody?: UpdateWorkspaceBody;
}

/**
 * 
 */
export class WorkspaceApi extends runtime.BaseAPI {

    /**
     * Create a new workspace
     */
    async createWorkspaceRaw(requestParameters: CreateWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Workspace>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryWorkspaceApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/workspaces`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateWorkspaceBodyToJSON(requestParameters['createWorkspaceBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkspaceFromJSON(jsonValue));
    }

    /**
     * Create a new workspace
     */
    async createWorkspace(requestParameters: CreateWorkspaceRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Workspace> {
        const response = await this.createWorkspaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an API key for a workspace.
     * Create workspace API key
     */
    async createWorkspaceApiKeyRaw(requestParameters: CreateWorkspaceApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WorkspaceApiKey>> {
        if (requestParameters['workspace'] == null) {
            throw new runtime.RequiredError(
                'workspace',
                'Required parameter "workspace" was null or undefined when calling createWorkspaceApiKey().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryWorkspaceApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/workspaces/{workspace}/tokens`.replace(`{${"workspace"}}`, encodeURIComponent(String(requestParameters['workspace']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateWorkspaceApiKeyBodyToJSON(requestParameters['createWorkspaceApiKeyBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkspaceApiKeyFromJSON(jsonValue));
    }

    /**
     * Create an API key for a workspace.
     * Create workspace API key
     */
    async createWorkspaceApiKey(requestParameters: CreateWorkspaceApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WorkspaceApiKey> {
        const response = await this.createWorkspaceApiKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes an API token and immediately removes it.
     * Delete workspace API token
     */
    async deleteWorkspaceApiKeyRaw(requestParameters: DeleteWorkspaceApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['workspace'] == null) {
            throw new runtime.RequiredError(
                'workspace',
                'Required parameter "workspace" was null or undefined when calling deleteWorkspaceApiKey().'
            );
        }

        if (requestParameters['tokenId'] == null) {
            throw new runtime.RequiredError(
                'tokenId',
                'Required parameter "tokenId" was null or undefined when calling deleteWorkspaceApiKey().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryWorkspaceApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/workspaces/{workspace}/tokens/{token_id}`.replace(`{${"workspace"}}`, encodeURIComponent(String(requestParameters['workspace']))).replace(`{${"token_id"}}`, encodeURIComponent(String(requestParameters['tokenId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an API token and immediately removes it.
     * Delete workspace API token
     */
    async deleteWorkspaceApiKey(requestParameters: DeleteWorkspaceApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteWorkspaceApiKeyRaw(requestParameters, initOverrides);
    }

    /**
     * Any workspace member can access this endpoint.
     * Get a workspace
     */
    async getWorkspaceRaw(requestParameters: GetWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Workspace>> {
        if (requestParameters['workspace'] == null) {
            throw new runtime.RequiredError(
                'workspace',
                'Required parameter "workspace" was null or undefined when calling getWorkspace().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryWorkspaceApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/workspaces/{workspace}`.replace(`{${"workspace"}}`, encodeURIComponent(String(requestParameters['workspace']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkspaceFromJSON(jsonValue));
    }

    /**
     * Any workspace member can access this endpoint.
     * Get a workspace
     */
    async getWorkspace(requestParameters: GetWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Workspace> {
        const response = await this.getWorkspaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * A list of all the workspace\'s API tokens.
     * List a workspace\'s API Tokens
     */
    async listWorkspaceApiKeysRaw(requestParameters: ListWorkspaceApiKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<WorkspaceApiKey>>> {
        if (requestParameters['workspace'] == null) {
            throw new runtime.RequiredError(
                'workspace',
                'Required parameter "workspace" was null or undefined when calling listWorkspaceApiKeys().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryWorkspaceApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/workspaces/{workspace}/tokens`.replace(`{${"workspace"}}`, encodeURIComponent(String(requestParameters['workspace']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(WorkspaceApiKeyFromJSON));
    }

    /**
     * A list of all the workspace\'s API tokens.
     * List a workspace\'s API Tokens
     */
    async listWorkspaceApiKeys(requestParameters: ListWorkspaceApiKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<WorkspaceApiKey>> {
        const response = await this.listWorkspaceApiKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Any workspace member can access this endpoint.
     * List all projects of a workspace
     */
    async listWorkspaceProjectsRaw(requestParameters: ListWorkspaceProjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListWorkspaceProjects>> {
        if (requestParameters['workspace'] == null) {
            throw new runtime.RequiredError(
                'workspace',
                'Required parameter "workspace" was null or undefined when calling listWorkspaceProjects().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryWorkspaceApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/workspaces/{workspace}/projects`.replace(`{${"workspace"}}`, encodeURIComponent(String(requestParameters['workspace']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListWorkspaceProjectsFromJSON(jsonValue));
    }

    /**
     * Any workspace member can access this endpoint.
     * List all projects of a workspace
     */
    async listWorkspaceProjects(requestParameters: ListWorkspaceProjectsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListWorkspaceProjects> {
        const response = await this.listWorkspaceProjectsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List workspaces the user is a member of
     */
    async listWorkspacesRaw(requestParameters: ListWorkspacesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListWorkspaces>> {
        const queryParameters: any = {};

        if (requestParameters['pageSize'] != null) {
            queryParameters['page_size'] = requestParameters['pageSize'];
        }

        if (requestParameters['pageToken'] != null) {
            queryParameters['page_token'] = requestParameters['pageToken'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryWorkspaceApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/workspaces`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListWorkspacesFromJSON(jsonValue));
    }

    /**
     * List workspaces the user is a member of
     */
    async listWorkspaces(requestParameters: ListWorkspacesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListWorkspaces> {
        const response = await this.listWorkspacesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Workspace members with the role `OWNER` can access this endpoint.
     * Update an workspace
     */
    async updateWorkspaceRaw(requestParameters: UpdateWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Workspace>> {
        if (requestParameters['workspace'] == null) {
            throw new runtime.RequiredError(
                'workspace',
                'Required parameter "workspace" was null or undefined when calling updateWorkspace().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("oryWorkspaceApiKey", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/workspaces/{workspace}`.replace(`{${"workspace"}}`, encodeURIComponent(String(requestParameters['workspace']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateWorkspaceBodyToJSON(requestParameters['updateWorkspaceBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WorkspaceFromJSON(jsonValue));
    }

    /**
     * Workspace members with the role `OWNER` can access this endpoint.
     * Update an workspace
     */
    async updateWorkspace(requestParameters: UpdateWorkspaceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Workspace> {
        const response = await this.updateWorkspaceRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
