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


import * as runtime from '../runtime';
import type {
  CreateProjectApiKeyRequest,
  CreateProjectBody,
  ErrorGeneric,
  GenericError,
  GetOrganizationResponse,
  JsonPatch,
  ListOrganizationsResponse,
  Organization,
  OrganizationBody,
  Project,
  ProjectApiKey,
  ProjectMember,
  ProjectMetadata,
  SetProject,
  SuccessfulProjectUpdate,
} from '../models/index';
import {
    CreateProjectApiKeyRequestFromJSON,
    CreateProjectApiKeyRequestToJSON,
    CreateProjectBodyFromJSON,
    CreateProjectBodyToJSON,
    ErrorGenericFromJSON,
    ErrorGenericToJSON,
    GenericErrorFromJSON,
    GenericErrorToJSON,
    GetOrganizationResponseFromJSON,
    GetOrganizationResponseToJSON,
    JsonPatchFromJSON,
    JsonPatchToJSON,
    ListOrganizationsResponseFromJSON,
    ListOrganizationsResponseToJSON,
    OrganizationFromJSON,
    OrganizationToJSON,
    OrganizationBodyFromJSON,
    OrganizationBodyToJSON,
    ProjectFromJSON,
    ProjectToJSON,
    ProjectApiKeyFromJSON,
    ProjectApiKeyToJSON,
    ProjectMemberFromJSON,
    ProjectMemberToJSON,
    ProjectMetadataFromJSON,
    ProjectMetadataToJSON,
    SetProjectFromJSON,
    SetProjectToJSON,
    SuccessfulProjectUpdateFromJSON,
    SuccessfulProjectUpdateToJSON,
} from '../models/index';

export interface CreateOrganizationRequest {
    projectId: string;
    organizationBody?: OrganizationBody;
}

export interface CreateProjectRequest {
    createProjectBody?: CreateProjectBody;
}

export interface CreateProjectApiKeyOperationRequest {
    project: string;
    createProjectApiKeyRequest?: CreateProjectApiKeyRequest;
}

export interface DeleteOrganizationRequest {
    projectId: string;
    organizationId: string;
}

export interface DeleteProjectApiKeyRequest {
    project: string;
    tokenId: string;
}

export interface GetOrganizationRequest {
    projectId: string;
    organizationId: string;
}

export interface GetProjectRequest {
    projectId: string;
}

export interface GetProjectMembersRequest {
    project: string;
}

export interface ListOrganizationsRequest {
    projectId: string;
    pageSize?: number;
    pageToken?: string;
    domain?: string;
}

export interface ListProjectApiKeysRequest {
    project: string;
}

export interface PatchProjectRequest {
    projectId: string;
    jsonPatch?: Array<JsonPatch>;
}

export interface PurgeProjectRequest {
    projectId: string;
}

export interface RemoveProjectMemberRequest {
    project: string;
    member: string;
}

export interface SetProjectRequest {
    projectId: string;
    setProject?: SetProject;
}

export interface UpdateOrganizationRequest {
    projectId: string;
    organizationId: string;
    organizationBody?: OrganizationBody;
}

/**
 * 
 */
export class ProjectApi extends runtime.BaseAPI {

    /**
     * Create a B2B SSO Organization
     */
    async createOrganizationRaw(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Organization>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling createOrganization().'
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
            path: `/projects/{project_id}/organizations`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrganizationBodyToJSON(requestParameters['organizationBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationFromJSON(jsonValue));
    }

    /**
     * Create a B2B SSO Organization
     */
    async createOrganization(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Organization> {
        const response = await this.createOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Creates a new project.
     * Create a Project
     */
    async createProjectRaw(requestParameters: CreateProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Project>> {
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
            path: `/projects`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateProjectBodyToJSON(requestParameters['createProjectBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
    }

    /**
     * Creates a new project.
     * Create a Project
     */
    async createProject(requestParameters: CreateProjectRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Project> {
        const response = await this.createProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create an API token for a project.
     * Create project API token
     */
    async createProjectApiKeyRaw(requestParameters: CreateProjectApiKeyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ProjectApiKey>> {
        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling createProjectApiKey().'
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
            path: `/projects/{project}/tokens`.replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateProjectApiKeyRequestToJSON(requestParameters['createProjectApiKeyRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectApiKeyFromJSON(jsonValue));
    }

    /**
     * Create an API token for a project.
     * Create project API token
     */
    async createProjectApiKey(requestParameters: CreateProjectApiKeyOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ProjectApiKey> {
        const response = await this.createProjectApiKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a B2B SSO Organization for a project
     */
    async deleteOrganizationRaw(requestParameters: DeleteOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling deleteOrganization().'
            );
        }

        if (requestParameters['organizationId'] == null) {
            throw new runtime.RequiredError(
                'organizationId',
                'Required parameter "organizationId" was null or undefined when calling deleteOrganization().'
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
            path: `/projects/{project_id}/organizations/{organization_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters['organizationId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a B2B SSO Organization for a project
     */
    async deleteOrganization(requestParameters: DeleteOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteOrganizationRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes an API token and immediately removes it.
     * Delete project API token
     */
    async deleteProjectApiKeyRaw(requestParameters: DeleteProjectApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling deleteProjectApiKey().'
            );
        }

        if (requestParameters['tokenId'] == null) {
            throw new runtime.RequiredError(
                'tokenId',
                'Required parameter "tokenId" was null or undefined when calling deleteProjectApiKey().'
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
            path: `/projects/{project}/tokens/{token_id}`.replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))).replace(`{${"token_id"}}`, encodeURIComponent(String(requestParameters['tokenId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes an API token and immediately removes it.
     * Delete project API token
     */
    async deleteProjectApiKey(requestParameters: DeleteProjectApiKeyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteProjectApiKeyRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a B2B SSO Organization for a project by its ID
     */
    async getOrganizationRaw(requestParameters: GetOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetOrganizationResponse>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling getOrganization().'
            );
        }

        if (requestParameters['organizationId'] == null) {
            throw new runtime.RequiredError(
                'organizationId',
                'Required parameter "organizationId" was null or undefined when calling getOrganization().'
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
            path: `/projects/{project_id}/organizations/{organization_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters['organizationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetOrganizationResponseFromJSON(jsonValue));
    }

    /**
     * Returns a B2B SSO Organization for a project by its ID
     */
    async getOrganization(requestParameters: GetOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetOrganizationResponse> {
        const response = await this.getOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a projects you have access to by its ID.
     * Get a Project
     */
    async getProjectRaw(requestParameters: GetProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Project>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling getProject().'
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
            path: `/projects/{project_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectFromJSON(jsonValue));
    }

    /**
     * Get a projects you have access to by its ID.
     * Get a Project
     */
    async getProject(requestParameters: GetProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Project> {
        const response = await this.getProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint requires the user to be a member of the project with the role `OWNER` or `DEVELOPER`.
     * Get all members associated with this project
     */
    async getProjectMembersRaw(requestParameters: GetProjectMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectMember>>> {
        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling getProjectMembers().'
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
            path: `/projects/{project}/members`.replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectMemberFromJSON));
    }

    /**
     * This endpoint requires the user to be a member of the project with the role `OWNER` or `DEVELOPER`.
     * Get all members associated with this project
     */
    async getProjectMembers(requestParameters: GetProjectMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectMember>> {
        const response = await this.getProjectMembersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all B2B SSO Organizations for a project
     */
    async listOrganizationsRaw(requestParameters: ListOrganizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ListOrganizationsResponse>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling listOrganizations().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['pageSize'] != null) {
            queryParameters['page_size'] = requestParameters['pageSize'];
        }

        if (requestParameters['pageToken'] != null) {
            queryParameters['page_token'] = requestParameters['pageToken'];
        }

        if (requestParameters['domain'] != null) {
            queryParameters['domain'] = requestParameters['domain'];
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
            path: `/projects/{project_id}/organizations`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListOrganizationsResponseFromJSON(jsonValue));
    }

    /**
     * List all B2B SSO Organizations for a project
     */
    async listOrganizations(requestParameters: ListOrganizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ListOrganizationsResponse> {
        const response = await this.listOrganizationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * A list of all the project\'s API tokens.
     * List a project\'s API Tokens
     */
    async listProjectApiKeysRaw(requestParameters: ListProjectApiKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectApiKey>>> {
        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling listProjectApiKeys().'
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
            path: `/projects/{project}/tokens`.replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectApiKeyFromJSON));
    }

    /**
     * A list of all the project\'s API tokens.
     * List a project\'s API Tokens
     */
    async listProjectApiKeys(requestParameters: ListProjectApiKeysRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectApiKey>> {
        const response = await this.listProjectApiKeysRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Lists all projects you have access to.
     * List All Projects
     */
    async listProjectsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ProjectMetadata>>> {
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
            path: `/projects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectMetadataFromJSON));
    }

    /**
     * Lists all projects you have access to.
     * List All Projects
     */
    async listProjects(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ProjectMetadata>> {
        const response = await this.listProjectsRaw(initOverrides);
        return await response.value();
    }

    /**
     * Deprecated: Use the `patchProjectWithRevision` endpoint instead to specify the exact revision the patch was generated for.  This endpoints allows you to patch individual Ory Network project configuration keys for Ory\'s services (identity, permission, ...). The configuration format is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.
     * Patch an Ory Network Project Configuration
     */
    async patchProjectRaw(requestParameters: PatchProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessfulProjectUpdate>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling patchProject().'
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
            path: `/projects/{project_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters['jsonPatch']!.map(JsonPatchToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessfulProjectUpdateFromJSON(jsonValue));
    }

    /**
     * Deprecated: Use the `patchProjectWithRevision` endpoint instead to specify the exact revision the patch was generated for.  This endpoints allows you to patch individual Ory Network project configuration keys for Ory\'s services (identity, permission, ...). The configuration format is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.
     * Patch an Ory Network Project Configuration
     */
    async patchProject(requestParameters: PatchProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessfulProjectUpdate> {
        const response = await this.patchProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * !! Use with extreme caution !!  Using this API endpoint you can purge (completely delete) a project and its data. This action can not be undone and will delete ALL your data.  !! Use with extreme caution !!
     * Irrecoverably purge a project
     */
    async purgeProjectRaw(requestParameters: PurgeProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling purgeProject().'
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
            path: `/projects/{project_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * !! Use with extreme caution !!  Using this API endpoint you can purge (completely delete) a project and its data. This action can not be undone and will delete ALL your data.  !! Use with extreme caution !!
     * Irrecoverably purge a project
     */
    async purgeProject(requestParameters: PurgeProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.purgeProjectRaw(requestParameters, initOverrides);
    }

    /**
     * This also sets their invite status to `REMOVED`. This endpoint requires the user to be a member of the project with the role `OWNER`.
     * Remove a member associated with this project
     */
    async removeProjectMemberRaw(requestParameters: RemoveProjectMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['project'] == null) {
            throw new runtime.RequiredError(
                'project',
                'Required parameter "project" was null or undefined when calling removeProjectMember().'
            );
        }

        if (requestParameters['member'] == null) {
            throw new runtime.RequiredError(
                'member',
                'Required parameter "member" was null or undefined when calling removeProjectMember().'
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
            path: `/projects/{project}/members/{member}`.replace(`{${"project"}}`, encodeURIComponent(String(requestParameters['project']))).replace(`{${"member"}}`, encodeURIComponent(String(requestParameters['member']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This also sets their invite status to `REMOVED`. This endpoint requires the user to be a member of the project with the role `OWNER`.
     * Remove a member associated with this project
     */
    async removeProjectMember(requestParameters: RemoveProjectMemberRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.removeProjectMemberRaw(requestParameters, initOverrides);
    }

    /**
     * This endpoints allows you to update the Ory Network project configuration for individual services (identity, permission, ...). The configuration is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.  Be aware that updating any service\'s configuration will completely override your current configuration for that service!
     * Update an Ory Network Project Configuration
     */
    async setProjectRaw(requestParameters: SetProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SuccessfulProjectUpdate>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling setProject().'
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
            path: `/projects/{project_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SetProjectToJSON(requestParameters['setProject']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SuccessfulProjectUpdateFromJSON(jsonValue));
    }

    /**
     * This endpoints allows you to update the Ory Network project configuration for individual services (identity, permission, ...). The configuration is fully compatible with the open source projects for the respective services (e.g. Ory Kratos for Identity, Ory Keto for Permissions).  This endpoint expects the `version` key to be set in the payload. If it is unset, it will try to import the config as if it is from the most recent version.  If you have an older version of a configuration, you should set the version key in the payload!  While this endpoint is able to process all configuration items related to features (e.g. password reset), it does not support operational configuration items (e.g. port, tracing, logging) otherwise available in the open source.  For configuration items that can not be translated to the Ory Network, this endpoint will return a list of warnings to help you understand which parts of your config could not be processed.  Be aware that updating any service\'s configuration will completely override your current configuration for that service!
     * Update an Ory Network Project Configuration
     */
    async setProject(requestParameters: SetProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SuccessfulProjectUpdate> {
        const response = await this.setProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a B2B SSO Organization for a project
     */
    async updateOrganizationRaw(requestParameters: UpdateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Organization>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling updateOrganization().'
            );
        }

        if (requestParameters['organizationId'] == null) {
            throw new runtime.RequiredError(
                'organizationId',
                'Required parameter "organizationId" was null or undefined when calling updateOrganization().'
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
            path: `/projects/{project_id}/organizations/{organization_id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters['projectId']))).replace(`{${"organization_id"}}`, encodeURIComponent(String(requestParameters['organizationId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: OrganizationBodyToJSON(requestParameters['organizationBody']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationFromJSON(jsonValue));
    }

    /**
     * Update a B2B SSO Organization for a project
     */
    async updateOrganization(requestParameters: UpdateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Organization> {
        const response = await this.updateOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
