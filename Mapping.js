var mappingsContract = web3.eth.contract([{"inputs":[],"name":"access","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"addUser","outputs":[],"stateMutability":"nonpayable","type":"function"}]);
var mappings = mappingsContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b5060f38061001f6000396000f3fe6080604052348015600f57600080fd5b506004361060325760003560e01c8063455c928c14603757806371907f1714603f575b600080fd5b603d6057565b005b604560aa565b60408051918252519081900360200190f35b336000818152602081905260408120605a905560018054808201825591527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60180546001600160a01b0319169091179055565b336000908152602081905260409020549056fea2646970667358221220076896923168146c55242901edf0d8ea490bbf1ff5a0ad5222302d3746dd743a64736f6c634300060c0033', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
