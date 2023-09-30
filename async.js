function samplePromise(){
    return Promise.resolve("Aaa");
}

async function run(){
    const name = await samplePromise();
    console.info(name);
}

run();