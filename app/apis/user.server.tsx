
export const apiUrl="http://159.75.212.177:83";


export interface LoginModel{
    account:string,
    password:string
}

declare type BaseModel={
    token:string
}

export async function login(form:LoginModel)
{

  


   var res= await fetch(`${apiUrl}/api/v1/Account/login`,{
        body:JSON.stringify({
            userName:form.account,
            password:form.password
        }),
        method:'post',
        headers:{
            "Content-Type": "application/json",
        }
    });
 
    var result= await res.json();
    return result;
}


export async function getProfile(model:BaseModel){

    await new Promise((resolve)=>{
        setTimeout(() => {
            resolve("1")
        }, 2000);
    })

    var res= await fetch(`${apiUrl}/api/v1/Account/profile`,{
        method:'get',
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${model.token}`,
        }
    });
    
    var result= await res.json();
    if(result.code==0){
        return result.data;
    }
    else{
        throw new Error("profile error");
    }

}
