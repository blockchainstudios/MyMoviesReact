const { HandCashCloudAccount } = require('handcash-connect');

const C
cloudAccount = new HandCashCloudAccount({
    appId: 'Something Something',
    appSecret:'Something Secret',
    userAuthorization: 'user auth token'
});

const paymentParameters = {
    description = 'description',
    payments: [
        { to: 'Jordan', currency: 'GBP', amount: 0.20},
        { to: 'JordanPorter@moneybutton.com', currency: 'USD', amount: 0.50},
        { to: 'Jordan', currency: 'SAT', amount: 0.40},        

    ]
}

const paymentConfirmation = await cloudAccount.payments.pay(paymentParameters);

console.log(paymentConfirmation);

// {
//      transactionId: "8db0234u73fdh29fhcaeeeoc866db"
//      date: "2019-01-20T18:23:02:412Z"
// }
