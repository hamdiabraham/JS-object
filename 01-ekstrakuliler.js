/* 
  Pada sebuah sekolah, terdapat banyak club ekstrakurikuler. Setiap siswa wajib untuk mengikuti minimal 1 club ekstrakulikuler tersebut.
  Sekolah ini membutuhkan sebuah aplikasi yang dapat mengelompokan data berdasarkan nama club yang di ikuti oleh siswa beserta kelasnya.

  [instruction]
  1. Buatlah sebuah fungsi untuk memproses data sehingga bisa mengeluarkan output seperti dengan sample. Untuk fungsi pertama ini hanya boleh menggunakan looping for, dilarang menggunakan build in function javascript (.filter(), .map(), .reduce(), .includes(), .indexOf() . forEach, dan semua function ES6 lainnya)
  2. Hanya boleh diselesaikan dengan looping, conditional, .push() atau .unshift()
*/

function ekstrakurikuler(data) {
  let output = {};
  for (let el of data) {
    let nama = el.name;
    let kelas = el.class;
    for (let ment of el.club) {
      let eskul = ment;
      if (!output[eskul]) output[eskul] = {};
      if (!output[eskul][kelas]) output[eskul][kelas] = [];
      output[eskul][kelas].push(nama);
    }
  }
  return output;
}

const data = [
  {
    name: "Adi",
    class: "Mawar",
    club: ["Bola", "Bulutangkis"],
  },
  {
    name: "Cinthya",
    class: "Melati",
    club: ["Membaca", "Bulutangkis"],
  },
  {
    name: "Andika",
    class: "Mawar",
    club: ["Bulutangkis", "Membaca"],
  },
  {
    name: "Daniel",
    class: "Mawar",
    club: ["Bola", "Renang"],
  },
];

console.log(ekstrakurikuler(data));

/* example output:
{
  Bola: {
    Mawar: ['Adi', 'Daniel']
  },
  Bulutangkis: {
    Mawar: ['Adi', 'Andika'],
    Melati: ['Cinthya']
  },
  Membaca: {
    Melati: ['Cinthya'],
    Mawar: ['Andika']
  },
  Renang: {
    Mawar: ['Daniel']
  }
} */
