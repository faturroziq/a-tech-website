document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Website A-TECH CLASS loaded!');
    
    // ==================== FUNGSI UTAMA ====================
    function init() {
        updateDateTime();
        updateJadwalBesok();
        updateTugasHariIni();
        
        // Update waktu setiap detik
        setInterval(updateDateTime, 1000);
        
        // Update jadwal setiap 30 detik (untuk demo)
        setInterval(updateJadwalBesok, 30000);
    }
    
    // ==================== FUNGSI DATE & TIME ====================
    function updateDateTime() {
        const now = new Date();
        
        // Format waktu (00:00:00)
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeString = `${hours}:${minutes}:${seconds}`;
        
        // Format tanggal (SEMA 01:01:2025)
        const hariList = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
        const hari = hariList[now.getDay()];
        const tanggal = String(now.getDate()).padStart(2, '0');
        const bulan = String(now.getMonth() + 1).padStart(2, '0');
        const tahun = now.getFullYear();
        const dateString = `${hari} ${tanggal}:${bulan}:${tahun}`;
        
        // ✅ NULL CHECKING - penting banget!
        const timeElement = document.getElementById('time');
        const dateElement = document.getElementById('date');
        
        if (timeElement) {
            timeElement.textContent = timeString;
        }
        
        if (dateElement) {
            dateElement.textContent = dateString;
        }
    }
    
    // ==================== FUNGSI JADWAL BESOK ====================
    function updateJadwalBesok() {
        const jadwalList = document.getElementById('jadwal-list');
        if (!jadwalList) return;
        
        const besok = new Date();
        besok.setDate(besok.getDate() + 1);
        
        const hariList = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
        const hariBesok = hariList[besok.getDay()];
        
        // Data jadwal dummy (bisa diganti dengan API/database)
        const jadwalData = {
            'SENIN': [
                { matkul: 'Pemrograman Web', waktu: '08:00-10:00' },
                { matkul: 'Basis Data', waktu: '10:00-12:00' },
                { matkul: 'Jaringan Komputer', waktu: '13:00-15:00' }
            ],
            'SELASA': [
                { matkul: 'Matematika Diskrit', waktu: '08:00-10:00' },
                { matkul: 'Struktur Data', waktu: '10:00-12:00' }
            ],
            'RABU': [
                { matkul: 'Pemrograman Mobile', waktu: '08:00-10:00' },
                { matkul: 'Kewirausahaan', waktu: '10:00-12:00' }
            ],
            'KAMIS': [
                { matkul: 'Sistem Operasi', waktu: '08:00-10:00' },
                { matkul: 'Proyek Perangkat Lunak', waktu: '10:00-12:00' }
            ],
            'JUMAT': [
                { matkul: 'UI/UX Design', waktu: '08:00-10:00' },
                { matkul: 'Bahasa Inggris', waktu: '10:00-12:00' }
            ],
            'SABTU': [
                { matkul: 'Libur', waktu: '00:00-00:00' }
            ],
            'MINGGU': [
                { matkul: 'Libur', waktu: '00:00-00:00' }
            ]
        };
        
        const jadwalHariIni = jadwalData[hariBesok] || [];
        
        jadwalList.innerHTML = '';
        
        if (jadwalHariIni.length === 0) {
            jadwalList.innerHTML = '<li>TIDAK ADA JADWAL</li>';
        } else {
            jadwalHariIni.forEach(jadwal => {
                const li = document.createElement('li');
                li.innerHTML = `${jadwal.matkul} | ${jadwal.waktu}`;
                jadwalList.appendChild(li);
            });
        }
        
        // Update judul section
        const judulSection = document.querySelector('.schedule-section h2');
        if (judulSection) {
            judulSection.textContent = `JADWAL ${hariBesok} :`;
        }
    }
    
    // ==================== FUNGSI TUGAS HARI INI ====================
    function updateTugasHariIni() {
        const tugasList = document.getElementById('tugas-list');
        if (!tugasList) return;
        
        // Data tugas dummy
        const tugasData = ['TUGAS SISTEM INFORMASI            | DEADLINE = SENIN PAGI',
                           'TUGAS PTKI (BUAT MODULE KOMPUTER  | DEADLINE SENIN'
        ];
        
        tugasList.innerHTML = '';
        
        tugasData.forEach(tugas => {
            const li = document.createElement('li');
            li.textContent = tugas;
            tugasList.appendChild(li);
        });
    }
    
    // ==================== JALANKAN APLIKASI ====================
    init();
});
