import {URL} from "url";

const pzn = new URL("https://www.facebook.com/");

pzn.host = "www.facebook.com";
pzn.searchParams.append("status", "premium");

console.info(pzn.toString());
console.info(pzn.href);
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);