var structureContract = web3.eth.contract([{"inputs":[],"name":"c","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"regEmployee","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"nonpayable","type":"function"}]);
var structure = structureContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405260126003556032600455600060055534801561001f57600080fd5b506101208061002f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c80631225e557146037578063c3da42b81460af575b600080fd5b603d60c7565b6040805160208082528351818301528351919283929083019185019080838360005b838110156075578181015183820152602001605f565b50505050905090810190601f16801560a15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60b560e4565b60408051918252519081900360200190f35b606060005b600a81101560e057600581905560010160cc565b5090565b6005548156fea2646970667358221220dc0b0c37e4d6fb2078e7c7d79e1e08fb3789869055e686409ebbc8ffdd7ad57064736f6c634300060c0033', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
