var functionsContract = web3.eth.contract([{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"callSum","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"callSum3","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"register","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]);
var functions = functionsContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405234801561001057600080fd5b50610190806100206000396000f3fe6080604052600436106100435760003560e01c80631aa3a0081461004c5780631aa3d8701461005457806381c059e01461007b578063a87430ba146100905761004a565b3661004a57005b005b61004a6100d7565b34801561006057600080fd5b50610069610105565b60408051918252519081900360200190f35b34801561008757600080fd5b50610069610122565b34801561009c57600080fd5b506100c3600480360360208110156100b357600080fd5b50356001600160a01b031661013b565b604080519115158252519081900360200190f35b670de0b6b3a764000080341061010257336000908152602081905260409020805460ff191660011790555b50565b60006009600a601383610119848484610150565b94505050505090565b60006009600a826101338383610156565b935050505090565b60006020819052908152604090205460ff1681565b91010190565b019056fea26469706673582212206080e364577050ddbec9a05a4199d8e30fa234c98b879ca42b8795210bd2da2e64736f6c63430006080033', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
