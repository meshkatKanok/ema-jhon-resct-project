 const localStoreget=(id)=>{
    let shoppingCart={};
    const storedata=localStorage.getItem("shoppingCart");
    if(storedata){
        shoppingCart=JSON.parse(storedata);
    }
const quentity=shoppingCart[id];
if(quentity){
    const newData=quentity+1;
    shoppingCart[id]=newData
}
else{
    shoppingCart[id]=1;
}

    localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart))

 }

const getStore=()=>{
    let shoppingCart={};
    const sotoreData=localStorage.getItem("shoppingCart");
    if(sotoreData){
        shoppingCart=JSON.parse(sotoreData)
    }
    return shoppingCart;
}
 export {localStoreget,getStore}