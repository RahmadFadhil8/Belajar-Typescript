// array
const names: string[] = ['dia', "kamu"];
const image: string[] = ['adsdsdaSD','FDFDFSDFDF'];
const user: string[] = ["dsdsdsadsad","dsadsadsadsad"]

// tuppel
const person: readonly[string, string,number,boolean] = ["","", 1, true]

// union
let data: string | number | boolean = "tess";

data = 1;
data =true;

function pengecekan(value: string|number|boolean) {
    if(typeof value == "string") {
        return value.toUpperCase();
    } else if (typeof value == "number") {
        return value + 10;
    } else {
        return !value;
    }
}

// alias
type categori = {
    id: ID;
    name:string;
    price:number;
    ketegori: string[];
    description?:string;
};

const Categoris: categori = {
    id: "1",
    name:"buku",
    price:1000,
    ketegori:["comedy", "keren"],
}

// alias dengan union
type ID = string|number;


// object type pada kasus sederhana
const personn: {id: string|number, name:string} = {
    id: 1,
    name:"dia"
}

// optional properties
// menggunakan tanda tanya (?) dapat di lihat pada type categori

// tipe data enum
// tipe data yang nilai sudah pasti
enum customerType {
    REGULAR = "REGULAR",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM"
}

type customer = {
    id: string;
    name: string;
    tipe: customerType;
}


const Customer: customer = {
    id: "asdwerwer",
    name: "dia",
    tipe: customerType.GOLD
}

// interface
interface users {
    id:number;
    name:string;
    address: string;
    readonly npwp: number;
}

const User1: users = {
    id:1,
    name:"dia",
    address:"jalan jalan",
    npwp:12324323243
}

console.log(User1.name)

// function interface
interface validasiInput {(value:string):boolean}
const nilai1 = ""
const nilai2 = "haiiii"

const valid:validasiInput = (value:string):boolean => {
    return value.trim() === "loh";
}

console.log(valid(nilai1))
console.log(valid(nilai2))

interface rataRata {
    (value:number[]):number
}

const nilaiSiswa = [80, 90, 70, 100]

const nilaiRataRata:rataRata = (value:number[]):number => {
    if (value.length == 0) {
        return 0
    } 
    const total = value.reduce((sum, item)=> sum +item,0);
    return total / value.length
}

console.log(nilaiRataRata(nilaiSiswa))

interface employee {
    id: number;
    name: string;
    address: string;
}

interface Manager extends employee {
    numberofemployees:number
}

const employ : employee = {
    id:1,
    name:"dia2",
    address:"jalan"
}

const manager: Manager = {
    id:1,
    name:"dia",
    address:"jalan",
    numberofemployees:1
}

// intersection type
interface hasname {
    name:string
}

interface hasid {
    id:number
}

type domain = hasid & hasname;

const Domain: domain = {
    id: 1,
    name:"di"
}
// function
function sayHello(nama:string): string {
    return `hello ${nama}`
}

// function default value
function sayHello2(nama:string = "guest"): string {
    return `hello ${nama}`
}



// function oferloading
function calMe(value:string):string;
function calMe(value:number):number;

function calMe(value:any):any {
    if(typeof value =="string") {
        return value
    } else {
        return value
    }
}

// if else
const nilai4:number = 44;
if (nilai4 == 90) {
    console.log("Selamat kamu lulus")
} else if (nilai4 == 80) {
    console.log("kamu dapat B")
}else {
    console.log('kamu gagal')
}

// ternary operator
const say = nilai4 > 75 ? "Selamat kamu lulus ": "Maaf belum lulus"
console.log(say)

// switce statement

function hay(name:string) :string {
    switch (name) {
        case "dia":
            return "Halo dia";
        case "dodo":
            return "haloo dodo"
        default:
            return "hallo"
    }
}




// console.log(calMe("asddsasad"))
// console.log(calMe(123))
// console.log(sayHello2())
// console.log(sayHello("broooo"))
// console.log(employ)
// console.log(manager)

// console.log(Customer);
// console.log(personn.id)
// console.log(Categoris.ketegori[1]);

// console.log(pengecekan("anda"))
// console.log(pengecekan(100))
// console.log(pengecekan(false))
// console.log(person[3])
// console.log(names)