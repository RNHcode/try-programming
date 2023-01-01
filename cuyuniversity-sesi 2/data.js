const nama = "revaldo";
let usia = 15;
let = document.getElementById('biodata');
// console.log(nama);
// console.log(usia);
console.log(`nama saya adalah ${nama} dan usia saya ${18} tahun`)
// console.log(`nama saaya adalah`, revaldo);
function generateBiodata() {
    let generasi;
    if (usia > 10 && usia < 18) {
        // console.log('anda remaja');
        //ini adalah kondisi pertama
        generasi = "generasi remaja";
    }
    else if (usia > 18 && usia < 30) {
        // console.log('anda dewasa')
        generasi = "generasi dewasa";
    }
    else if (usia >= 30) {
        // console.log('ah lu mah udah tua bro ahahah')
        generasi = "generasi tua";

    } else if (usia < 10 && usia > 2) {
        // console.log('lu anak anak')
        generasi = "generasi anak anak";
    } else {
        // console.info(' wah anda masih bayi ahahaha');
        generasi = "generasi bayi";
        //ini kondisi ketika tidak terjadi
    }
    // console.log(`nama saya adalah ${nama} dan usia saya ${18} tahun`)
    // return console.log('generasi saya adalah', generasi);
    return biodata.innerHTML = generasi;
}

console.info(nama);
console.info(usia);

generateBiodata();
