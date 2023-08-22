# cloud-api
Greatly reduces the amount of code needed to create an API with API Gateway powered by Lambda functions.

## Project Ideas
- Provide an ApiGateway class that uses the project directory layout to build out the ApiGateawy methods and resources
- Allow the users to provide a custom path to directory that contains all define lambda functions, api gateway integrations, etc
    - The default would be `lib/api-gateway`
- Create a project generator that generates the base structure for the project much like how the CDK, creat-react-app and next-react-app do it
    - This would install all required dependencies and also create the files structure needed
- Create a process that allows the a user to simple replace `RestApi` with the custom `Api` class and change directory layout and start using the project
    - It would be very important for this way to prevent issues with deployments
- An example endpoint file would have the following:
    - Export the NodejsFunction or Function, ApiGateway integration and method options
    - Everything exported would be used to generate the methods/resources at synth and deployment time
    - A longer term idea would be to allow the user to export an object for OpenAPI documentation which could be generated at synth/deploy time and uploaded to a specified location
- When building out methods we can directories to mask as Nested Stacks
    - Example: If you have a path as the following, `feature-a/{id}/update.ts`, then you would create every construct under the `feature-a` directory un a single Nested Stack. This will help prevent getting to that 500 resource limit for a CDK stack.
