AWS.config.update({region:"us-west-2"});
AWS.config.credentials = new AWS.Credentials({
    "accessKeyId":"AKIAILCJXWICYDKP6LJQ",
    "secretAccessKey":"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"
});

// output = callLambda({"key1":"value1", "key2":"value2", "key3":"value3"});
function callLambda(input)
{
    var ret_val;
    var params = {                                              //formatted params to send to lambda
        FunctionName: "hello-world-python",                           //Lambda function name (CHANGE THIS!)
        InvocationType: "RequestResponse",
        LogType: "None",
        Payload: JSON.stringify(input)
    };
    var lambda = new AWS.Lambda({region:"us-west-2",apiVersion:'2015-03-31'});//init lambda object
    var output = lambda.invoke(params, function(err, data) {    //call lambda w/ params
        if (err)
        {
            console.log(err, err.stack);                            //an error occured
            return err;                                             //return lamda error msg
        }
        else
        {
            console.log("Lambda success.");                          //log lambda call was successfull
            console.log(data.Payload);
            return data.Payload;                                     //return lambda data

        }
    });
}
