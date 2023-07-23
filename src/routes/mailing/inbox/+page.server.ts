// use https://transform.tools/json-to-typescript
export interface Root {
    users: User[]
    total: number
    skip: number
    limit: number
}

export interface User {
    id: number
    firstName: string
    lastName: string
    maidenName: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup: string
    height: number
    weight: number
    eyeColor: string
    hair: Hair
    domain: string
    ip: string
    address: Address
    macAddress: string
    university: string
    bank: Bank
    company: Company
    ein: string
    ssn: string
    userAgent: string
}

export interface Hair {
    color: string
    type: string
}

export interface Address {
    address: string
    city: string
    coordinates: Coordinates
    postalCode: string
    state: string
}

export interface Coordinates {
    lat: number
    lng: number
}

export interface Bank {
    cardExpire: string
    cardNumber: string
    cardType: string
    currency: string
    iban: string
}

export interface Company {
    address: Address2
    department: string
    name: string
    title: string
}

export interface Address2 {
    address: string
    city: string
    coordinates: Coordinates2
    postalCode: string
    state: string
}

export interface Coordinates2 {
    lat: number
    lng: number
}


export async function load({ fetch, params }) {
    
    // cara 1: use provided data 
    // const messsages = dataMessages
    
    // cara 2: call API
    // var url = 'https://64bc7b987b33a35a4447379d.mockapi.io/andieni/messsages'
    
    // const res = await fetch(url);
    // const messages:Messages = await res.json();
    
    // var result = {
    //     'messages' : messages
    // }
    
    // cara 3: more dynamic API
    var baseUrl = "https://dummyjson.com/users";    
    var filter = "?limit=10";
    var url = baseUrl+filter
    
    // call API    
    const res = await fetch(url);
    const result : Root = await res.json();    
    
    return result
}