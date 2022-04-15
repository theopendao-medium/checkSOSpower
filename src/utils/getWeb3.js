import Web3 from 'web3'
var web3 = new Web3('wss://mainnet.infura.io/ws/v3/6ac4888a37b64ea3bcdeec85f63ec577');

export default async function getweb3() {

    // find contract name
 //   const name = await contract.methods.name().call()
  
    // find eth balance
    const user ="0x2D1E7B6E6284409e16991dE76d2A82847a7d61C5"
    const ethBalance = await web3.eth.getBalance(user)
  
    // message, signature
    const walletThatSigned = web3.eth.accounts.recover('Some data', '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c');
  
    // find SOSPower
 //   const sospowerEth = await sospowereth.methods.balanceOf(user).call()
  
    // find Genesis NFT
 //   const nftbalance = await opendaogenesis.methods.balanceOfBatch([user,user,user,user],[0,1,2,3]).call()
  
    return {
  //    name: name,
      balance: ethBalance,
      readableETH: ethBalance * Math.pow(10,-18),
      walletThatSigned: walletThatSigned,
 //     sospowerEth: sospowerEth,
 //     readableSOS: sospowerEth * Math.pow(10,-27),
 //     nftbalance: nftbalance
    }
  }
  