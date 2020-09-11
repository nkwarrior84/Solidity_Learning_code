var loopsContract = web3.eth.contract([{"inputs":[],"name":"loops","outputs":[],"stateMutability":"nonpayable","type":"function"}]);
var loops = loopsContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x608060405260076000556000600155348015601957600080fd5b506082806100286000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c8063938b9ceb14602d575b600080fd5b60336035565b005b60005b600781116046576001016038565b505b604856fea26469706673582212203e6c352d319fabd6e03dc596778d2c8f63117a5de06d1edc687a2630c89b9f6a64736f6c634300060c0033', 
     gas: '4700000'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
