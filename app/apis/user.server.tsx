export const apiUrl="http://159.75.212.177:83/";


export interface LoginModel{
    userName:string,
    password:string
}

export async function login(form:LoginModel)
{
   var res= await fetch(`${apiUrl}/api/v1/Account/login`,{
        body:JSON.stringify(form)
    });
    if(res.ok){
        var result=res.json();
        console.log(result)
    }

    return 1;
}