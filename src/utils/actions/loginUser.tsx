'use server';

export const loginUser = async(data)=>{
    const res = await fetch(`${process.env.BACKEND_URL}/login`,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
    const userInfo = await res.json();
    return userInfo;
}