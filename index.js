const user = {
    name: 'Mariana',
    transactions: [],
    balance: 0
  }

  //Adicionar Transações

    //  {
    //    type: 'credit',
    //    value: 50.5
    //  }

  function createTransaction(transaction) {
    user.transactions.push(transaction)
    
    if(transaction.type == `credit`) {
    user.balance = user.balance + transaction.value
    } else {
    user.balance = user.balance - transaction.value
    }
  }

  createTransaction({ type: 'credit', value: 50 })
  createTransaction({ type: 'credit', value: 120 })
  createTransaction({ type: 'debit', value: 80 })
  createTransaction({ type: 'debit', value: 30 })

  //Relatorios

  function getHigherTransactionByType(type) {
    for(let transaction of user.transactions) {
    if(type == transaction.type){
        console.table(transaction)
    }
    }

  }

  getHigherTransactionByType('credit')
