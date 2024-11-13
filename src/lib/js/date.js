export const formatTanggal = (tanggal) => {
	const dd = String(tanggal.getDate()).padStart(2, '0');
	const mm = String(tanggal.getMonth() + 1).padStart(2, '0');
	const yyyy = tanggal.getFullYear();
	return dd + '/' + mm + '/' + yyyy;
	// 27/10/2023
};

export const date2 = (tanggal) => {
	// membuat objek Date dengan parameter waktu Sat, 06 May 2023 00:00:00 GMT
	const date = new Date(tanggal);
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];
	const day = date.getDate();
	const monthIndex = date.getMonth();
	const year = date.getFullYear();
	const formattedDate = `${day} ${months[monthIndex]} ${year}`;
	return formattedDate;
	// 6 Mei 2023
};

export const getToday = () => {
	let tomorrow = new Date();
	tomorrow.setHours(tomorrow.getHours() + 8);
	tomorrow = tomorrow.toISOString().slice(0, 10);
	return tomorrow;
	// 2023-02-21 tanggal hari ini
};

export const getYesterday = () => {
	let tomorrow = new Date();
	tomorrow.setHours(tomorrow.getHours() - 16);
	tomorrow = tomorrow.toISOString().slice(0, 10);
	return tomorrow;
	// 2023-02-21 tanggal hari ini
};

export function date(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options);
	return result;
	// 'Senin, 20 Februari 2023'
}

export const date3 = (waktu) => {
	// Format input tanggal
	const inputDateString = waktu;
	const inputDate = new Date(inputDateString);

	// Mendapatkan jam dan menit
	const hours = inputDate.getUTCHours();
	const minutes = inputDate.getUTCMinutes();

	// Mengonversi ke format "HH:MM"
	const formattedTime = (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes;

	return formattedTime;

	// convert  Fri, 27 Oct 2023 05:00:00 GMT menjadi 05:00
};

export const date4 = (tanggal) => {
	const parsedDate = new Date(tanggal);
	const formattedDate = `${parsedDate.getDate().toString().padStart(2, '0')}-${(
		parsedDate.getMonth() + 1
	)
		.toString()
		.padStart(2, '0')}-${parsedDate.getFullYear()}`;

	return formattedDate;

	// convert from Fri, 05 May 2023 00:00:00 GMT to 05-05-2023
};

export const date5 = (waktu) => {
	// Format input tanggal
	const inputDateString = waktu;
	const inputDate = new Date(inputDateString);

	// Mendapatkan jam, menit, dan detik
	const hours = inputDate.getUTCHours();
	const minutes = inputDate.getUTCMinutes();
	const seconds = inputDate.getUTCSeconds();

	// Mengonversi ke format "HH:MM:SS"
	const formattedTime =
		(hours < 10 ? '0' : '') +
		hours +
		':' +
		(minutes < 10 ? '0' : '') +
		minutes +
		':' +
		(seconds < 10 ? '0' : '') +
		seconds;

	return formattedTime;
};

export const date6 = (tanggal) => {
	// Tanggal dalam format ISO 8601
	let dateString = tanggal
	// Membuat objek Date dari string tanggal
	let date = new Date(dateString);

	// Mendapatkan tahun, bulan, dan tanggal
	let year = date.getFullYear();
	let month = String(date.getMonth() + 1).padStart(2, '0'); // Ditambah 1 karena Januari dimulai dari 0
	let day = String(date.getDate()).padStart(2, '0');

	// Menggabungkan tahun, bulan, dan tanggal menjadi format YYYY-MM-DD
	let formattedDate = `${year}-${month}-${day}`;

	return formattedDate
	// Convert 2024-03-14T00:00:00Z to 2024-03-14

}

export const getTomorrow = () => {
	const months = [
		'Januari',
		'Februari',
		'Maret',
		'April',
		'Mei',
		'Juni',
		'Juli',
		'Agustus',
		'September',
		'Oktober',
		'November',
		'Desember'
	];

	// Buat objek tanggal untuk tanggal hari ini
	const today = new Date();

	// Tambahkan 1 hari ke tanggal hari ini untuk mendapatkan tanggal besok
	today.setDate(today.getDate() + 1);

	// Dapatkan tanggal besok dalam format "DD NamaBulan YYYY"
	const dd = String(today.getDate()).padStart(2, '0');
	const mm = months[today.getMonth()];
	const yyyy = today.getFullYear();

	const tomorrow = dd + ' ' + mm + ' ' + yyyy;

	return tomorrow;
	// 05 November 2023
};

export const konversiTahunBulan = (angkaDesimal) => {
	// Menghitung jumlah bulan dari angka desimal
	const totalBulan = Math.floor(angkaDesimal * 12);

	// Menghitung tahun dan bulan
	const tahun = Math.floor(totalBulan / 12);
	const bulan = totalBulan % 12;

	return tahun + ' Tahun ' + bulan + ' Bulan';
	// Konversi 5.5 menjadi 5 Tahun 6 Bulan
};

export function convertDate(tanggal) {
	const date = new Date(tanggal);
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
	const result = date.toLocaleDateString('id-ID', options);
	return result;
	// 'Senin, 20 Februari 2023'
}

export const convertTime = (waktu) => {

	// Mengambil jam dan menit dari string ISO
	const hoursMinutes = waktu.slice(11, 16);

	// Parsing jam dan menit
	const hours = parseInt(hoursMinutes.slice(0, 2), 10);
	const minutes = parseInt(hoursMinutes.slice(3, 5), 10);

	// Menentukan AM atau PM
	const ampm = hours >= 12 ? 'PM' : 'AM';

	// Format jam 12-jam dengan 12:00 PM
	const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

	// Mengonversi menit menjadi dua digit
	const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

	// Menggabungkan jam, menit, dan AM/PM menjadi string yang diformat
	return formattedHours + ':' + formattedMinutes + ' ' + ampm;

	// Convert 0000-01-01T08:30:00Z to 08:30 AM 
}

export const getNextDay = (inputDate) => {
	// Mengonversi input tanggal ke objek JavaScript Date
	let date = new Date(inputDate);

	// Menambahkan satu hari
	date.setDate(date.getDate() + 1);

	// Memeriksa apakah tanggal jatuh pada hari Sabtu atau Minggu
	while (date.getDay() === 0 || date.getDay() === 6) {
		// Jika ya, tambahkan satu hari lagi
		date.setDate(date.getDate() + 1);
	}

	// Format hasil sesuai dengan format yang diminta (14 Maret 2024)
	const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
	const day = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();

	return `${day} ${month} ${year}`;
	// 18 Maret 2024
}

