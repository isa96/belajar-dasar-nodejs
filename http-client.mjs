import https from "https";

// sesuai url hookbin
const endpoint = "https://hookb.in/MqDZ3RzjggfDRWppnYGo";
const request = https.request(endpoint, {
    method: "POST",
    headers: {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    }
}, (response) => {
    response.addListener("data", (data) => {
        console.info(`Receive data : ${data.toString()}`);
    })
});

const body = JSON.stringify({
    firstName: "aaa",
    lastName: "bbb",
})

request.write(body);
request.end();