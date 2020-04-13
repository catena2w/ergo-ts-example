import {Address, Client} from "@coinbarn/ergo-ts";


async function f() {
  const client = new Client();
  const sk = '8e6993a4999f009c03d9457ffcf8ff3d840ae78332c959c8e806a53fbafbbee1';
  console.log(`My address: ${Address.fromSk(sk).address}`);
  const resp  = await client.transfer(sk,
    '9i6Yq6BDp6p9oVyC1hmUTS3cWZKae6BV2ZVc2NL577yxKPbYWKx',
    0.001,
    'ERG');
  console.log(resp)

}

f();
