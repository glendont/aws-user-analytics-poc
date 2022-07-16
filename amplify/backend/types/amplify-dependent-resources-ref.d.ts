export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "cyfirmademo": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string"
        }
    },
    "analytics": {
        "cyfirmademo": {
            "Region": "string",
            "Id": "string",
            "appName": "string"
        },
        "cyfirmademoKinesis": {
            "kinesisStreamArn": "string",
            "kinesisStreamId": "string",
            "kinesisStreamShardCount": "string"
        }
    }
}