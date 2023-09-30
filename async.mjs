function samplePromise(){
    return Promise.resolve("Aaa");
}

const name = await samplePromise();
console.info(name);