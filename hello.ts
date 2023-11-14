class Logger{
    log <T>(message:String,additionalInfo:T){
        console.log(`${message}${JSON.stringify(additionalInfo)}`)

    }
}
const logger = new Logger();
logger.log("this is error cause because of the information;",{name:"Shalini",Status: "Still learning"})
logger.log("this is error cause because of the information;",{name:"Shalini"})
/* type User={
    id :number,
    name:string
}
type Customer = User & {address :string}
type Seller = User & {companyName : string}
type Admin = User & {username :string}

class Logger{
    loguser <T extends User>(message:String,user:T){
        console.log(`${message} for user with id ${user.id}and name ${user.name} }`)

    }
}
const logger = new Logger();
const customer :Customer ={
    id:1,
    name: 'shalini',
    address:'shalini address'
}
    const seller : Seller={
        id : 1,
        name :'shalini',
        companyName :'ABC'


    }
    const admin :Admin={
        id :3,
        name : 'sedin',
        username :"Shalini@123"
    }

logger.loguser("this is error cause because of the information;", customer)
logger.loguser("this is error cause because of the information;", seller)
logger.loguser("this is error cause because of the information;", admin) 

/* type Investenment= {  
    investingcompany :string
}

type personal ={
    category : string
}

type ExpenseRecord <T> ={
    info:T,
    amount :Number,
    reason :string

}
const investenments :ExpenseRecord<Investenment>[] =[]
const personalExpense : ExpenseRecord <personal>[] =[] */