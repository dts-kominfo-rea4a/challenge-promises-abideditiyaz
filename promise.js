const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (inputData) => {
  return new Promise((resolve, reject) => {
    if (inputData === null) {
      reject(`Terjadi kesalahan`)
    }else{
      // Ini theaterIXX
      promiseTheaterIXX()
      .then((dataPengunjung)=>{
        // nampung data dari theaterIXX
        const isiDatapengunjungIXX = [dataPengunjung[0].hasil, dataPengunjung[1].hasil, dataPengunjung[2].hasil]

        // // ini theaterVGC
        promiseTheaterVGC()
        .then((dataPengunjung) => {
          const isiDatapengunjungVGC = [dataPengunjung[0].hasil, dataPengunjung[1].hasil, dataPengunjung[2].hasil];

          // gabung 2data
          let isiDataGabungan = isiDatapengunjungIXX.concat(isiDatapengunjungVGC)

          // ngitung data yang sama 
          let itungIsiDataSama = {};
          isiDataGabungan.forEach( jumlah => {
            itungIsiDataSama[jumlah] = (itungIsiDataSama[jumlah]||0) +1
          })

          // pengkondisian
          if (inputData === isiDataGabungan[0]) {
            resolve(`Jumlah pengungjung yang ${inputData} adalah ${itungIsiDataSama.marah}`)
          }else{
            resolve(`Jumlah pengunjung yang ${inputData} adalah ${itungIsiDataSama.marah -2}`)
          }
          // console.log(itungIsiDataSama)
        })

      })

    }
  })
  
};

module.exports = {
  promiseOutput,
};
