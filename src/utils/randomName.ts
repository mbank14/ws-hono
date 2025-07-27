

export const randomString = ():string =>{
    const random = Math.random().toString(36).substring(2,10);
    return random;
};