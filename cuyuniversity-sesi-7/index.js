const http = require('http');
const rupiah = require('rupiah-format');
const host = '127.0.0.1'
const fs = require('fs');
const port = 3002
// request adalah data yang masuk
// respon data yang keluar
const server = http.createServer(function(request, respon){
    const nama = "revaldo";
    const sisaRAM = os.freemem();
    const jumlahCPU = os.cpus();
    let uang = 50000;
    let jajan = 20000;
    let sisa = uang - jajan;
    uang = rupiah.convert(uang)
    jajan = rupiah.convert(jajan)
    sisa = rupiah.convert(sisa)
    fs.appendFile('sisauang.txt', sisa, () =>{
    console.log('data uang telah di simpan')
    });
    function checkCPU(){
        let myCPU =[];
        jumlahCPU.map((cpu, i)=>{
            myCPU.push(cpu.model)
        })
        return myCPU[0]
    }
    console.log(checkCPU())

    const hasil = `<head>
    <title>${nama}</title>
    </head>
    <body>
    <h1 style="background : black; color:white; paddding:20px; text-align: center;">node js uang jajan</h1>
    <p>
    halo nama saya ${nama}. saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi sisa ${sisaRupiah}.
    </p>
    <h5>
    sisa ram pc saya : ${sisaRAM}</h5>
    <h5>
    jumlah cpu pc saya : ${jumlahCPU}</h5>
    </body>`
    <h5>
    merk cpu yang saya pake : ${checkCPU()}</h5>
    </body>`
    respon.statusCode = 200;
respon.end(hasil);
})
server.listen(port, host, '', function(){
    console.log(`server menyala di ${host} : ${port}`);
});




// const namaSaya = "revaldo";

// function getName(){
//     for (let i = 0; i < 5 ; i++){
//         console.log('nama saya adalah', namaSaya)
//     }
    
// };

// getName();

