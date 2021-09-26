import web3 from "./web3";
import Manager from "./build/Manager.json";

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0x1DB8672eE5B615366A6BDe85034Dcf521A439836"
);

export default instance;
