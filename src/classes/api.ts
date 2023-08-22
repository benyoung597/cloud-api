import { RestApi, RestApiProps } from 'aws-cdk-lib/aws-apigateway'
import { Construct } from 'constructs'

export interface ApiProps extends RestApiProps {
    /** 
     * An optional path that points to ta directory that contains all the endpoints/lambda
     * functions that need to be parsed.
     *
     * @default from the root directory of the CDK project `lib/api-gateway/`
     */
    endpointDir?: string
}

export class Api extends RestApi {
    constructor(scope: Construct, id: string, props: ApiProps) {
        super(scope, id, props)

        // Get all file paths in provided directory

        // Build out methods given the list of file paths
    }
}
