var enumsContract = web3.eth.contract([{"inputs":[],"name":"completeLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"level","outputs":[{"internalType":"enum Enums.Level","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]);
var enums = enumsContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x60806040526000805460ff1916905534801561001a57600080fd5b5061010a8061002a6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c806305c7fe711460375780636fd5ae1514604f575b600080fd5b603d6075565b60408051918252519081900360200190f35b60556092565b60405180826003811115606457fe5b815260200191505060405180910390f35b6000607d609b565b60005460ff166003811115608d57fe5b905090565b60005460ff1681565b60005460ff16600381111560ab57fe5b600101600381111560b857fe5b6000805460ff1916600183600381111560cd57fe5b021790555056fea2646970667358221220fe6d7539820747211f997ba8a1360c1a4736a58428a6ee45d2d58d4782105a9964736f6c634300060c0033', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
