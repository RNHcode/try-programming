// // const myName = "revaldo";
// // // const myAddres = "jalan ceger";
// // let i = 0;

// // // myName = "aldo"
// // // console.log(myAddres);
// // // console.log(myName);

// // // function getDetailHuman(){
// // // console.log(`nama saya ${myName} dan alamat saya di ${myAddres}`)
// // // }
// // // standar function
// // function getDetailHuman(data1, data2){
// //     i += 1
// //     if(i > 5){
// //         console.log('console lebih dari 5 kali di klik')
// //     }else{
// //         console.log('jatah klik masih ada');
// //     }
// //     // console.log(`data 1 adalah ${data1} dan data 2 adalah ${data2}`)
// //     // console.log(`function dipanggil sebanyak ${i} kali`)
// // }
// // // array function
// // const getDetailHuman2 = () => {
// //     i += 1
// //     i > 5 ? console.log('lebih dari 5x bro human2') : console.log('jatah masih ada human2')

// // // console.log('getDetailHuman2')
// // }
// // getDetailHuman(myName, myAddres)

// const mahasiswa = [
//     {
//     nama : "revaldo",
//     alamat : "ceger",
//     usia : 20,
//     semester : 3
// },
// {
//     nama : "aldo",
//     alamat : "padang",
//     usia : 21,
//     semester : 4
// }]
// // console.log(datas.alamat)


// let i = 0;
// function getDetailData(){
//     // mahasiswa.map(function(result, i){
//     //     console.table(result)
//     // })
//     mahasiswa.forEach(result => {
//         console.table(result)
        
//     });
//     // console.log(`data yang anda cari adalah : ${datas.nama}`)
// }

class Hewan {
    warna
    keahlian
    constructor(nama){
this.nama = nama
    }
    set newColor(color) {
        this.warna = color
    }
    set newSkill(skill){
        this.keahlian = skill
    }
    get detail(){
        return `hai saya ${this.nama}, saya berwarna ${this.warna}, keahlian saya ${this.keahlian}`
    }
}

const kucing = new Hewan('jojo')
kucing.newColor = "red";
kucing.newSkill = "lari kenceng";
console.log(kucing.detail)