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

    // ===== BOTTOM NAV FUNCTION =====
function showSection(sectionName) {
    console.log('Menampilkan section:', sectionName);
    
    // Remove active class dari semua button
    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => btn.classList.remove('nav-active'));
    
    // Add active class ke button yang diklik
    const activeBtn = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('nav-active');
    }
    
    // Tambahkan logic untuk menampilkan section yang sesuai
    switch(sectionName) {
        case 'jadwal':
            // Logic untuk jadwal mapel
            alert('Fitur Jadwal Mapel akan datang soon! 📅');
            break;
        case 'home':
            // Logic untuk home (sudah ada)
            window.scrollTo({ top: 0, behavior: 'smooth' });
            break;
        case 'ruangan':
            // Logic untuk info ruangan
            alert('Fitur Info Ruangan akan datang soon! 🚪');
            break;
    }
    
    // Vibration feedback untuk mobile
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

// Setup bottom nav interaction
function setupBottomNav() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Optional: tambahkan efek klik tambahan
            this.style.transform = 'translateY(2px)';
            setTimeout(() => {
                if (this.classList.contains('nav-active')) {
                    this.style.transform = 'translateY(-5px)';
                } else {
                    this.style.transform = 'translateY(0)';
                }
            }, 100);
        });
    });
}

// Panggil di init()
function init() {
    updateDateTime();
    updateJadwalBesok();
    updateTugasHariIni();
    setupBottomNav(); // ⭐ Tambahkan ini
    setInterval(updateDateTime, 1000);
                }

    // ===== DATA MATA PELAJARAN =====
const semuaMapel = {
    'Pemrograman Web': { 
        dosen: 'Dr. Ahmad', 
        sks: 3, 
        ruangan: 'Lab. Komputer A' 
    },
    'Basis Data': { 
        dosen: 'Prof. Sari', 
        sks: 3, 
        ruangan: 'Lab. Database' 
    },
    'Jaringan Komputer': { 
        dosen: 'Ir. Budi', 
        sks: 3, 
        ruangan: 'Lab. Jaringan' 
    },
    'Matematika Diskrit': { 
        dosen: 'Dr. Rina', 
        sks: 2, 
        ruangan: 'Ruang 301' 
    },
    'Pemrograman Mobile': { 
        dosen: 'M. Fajar', 
        sks: 3, 
        ruangan: 'Lab. Mobile' 
    },
    'Sistem Operasi': { 
        dosen: 'Dr. Hendra', 
        sks: 3, 
        ruangan: 'Ruang 201' 
    },
    'UI/UX Design': { 
        dosen: 'Sari, M.Kom', 
        sks: 2, 
        ruangan: 'Lab. Design' 
    },
    'Proyek Perangkat Lunak': { 
        dosen: 'Prof. Anton', 
        sks: 4, 
        ruangan: 'Lab. Project' 
    }
};

// ===== JADWAL PER HARI =====
const jadwalPerHari = {
    'SENIN': [
        { mapel: 'Pemrograman Web', waktu: '08:00-10:00' },
        { mapel: 'Basis Data', waktu: '10:00-12:00' },
        { mapel: 'Jaringan Komputer', waktu: '13:00-15:00' }
    ],
    'SELASA': [
        { mapel: 'Matematika Diskrit', waktu: '08:00-10:00' },
        { mapel: 'Pemrograman Mobile', waktu: '10:00-12:00' }
    ],
    'RABU': [
        { mapel: 'Sistem Operasi', waktu: '08:00-10:00' },
        { mapel: 'UI/UX Design', waktu: '10:00-12:00' }
    ],
    'KAMIS': [
        { mapel: 'Proyek Perangkat Lunak', waktu: '08:00-12:00' }
    ],
    'JUMAT': [
        { mapel: 'Basis Data', waktu: '08:00-10:00' },
        { mapel: 'Pemrograman Web', waktu: '10:00-12:00' }
    ],
    'SABTU': [],
    'MINGGU': []
};

    // ===== TAMPILKAN INFO RUANGAN PER HARI =====
function showRuanganByHari() {
    const hariIni = new Date().getDay();
    const hariList = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
    const hari = hariList[hariIni];
    
    const jadwalHariIni = jadwalPerHari[hari] || [];
    
    let html = `
        <div class="ruangan-header">
            <h3>🔄 INFO RUANGAN - ${hari}</h3>
            <p>${new Date().toLocaleDateString('id-ID')}</p>
        </div>
    `;
    
    if (jadwalHariIni.length === 0) {
        html += '<div class="no-schedule">📭 Tidak ada jadwal hari ini</div>';
    } else {
        jadwalHariIni.forEach(jadwal => {
            const infoMapel = semuaMapel[jadwal.mapel] || {};
            html += `
                <div class="ruangan-item">
                    <div class="mapel-info">
                        <strong>${jadwal.mapel}</strong>
                        <span>${jadwal.waktu}</span>
                    </div>
                    <div class="ruangan-info">
                        <span class="room-badge">🚪 ${infoMapel.ruangan || 'TBA'}</span>
                        <small>👨‍🏫 ${infoMapel.dosen || 'TBA'}</small>
                    </div>
                </div>
            `;
        });
    }

    // ===== TAMPILKAN SEMUA MATA PELAJARAN =====
function showAllMapel() {
    let html = `
        <div class="mapel-header">
            <h3>📚 SEMUA MATA PELAJARAN</h3>
            <p>Total: ${Object.keys(semuaMapel).length} mata pelajaran</p>
        </div>
    `;
    
    Object.entries(semuaMapel).forEach(([namaMapel, info]) => {
        html += `
            <div class="mapel-item">
                <div class="mapel-main">
                    <h4>${namaMapel}</h4>
                    <span class="sks-badge">${info.sks} SKS</span>
                </div>
                <div class="mapel-details">
                    <p>👨‍🏫 ${info.dosen}</p>
                    <p>🚪 ${info.ruangan}</p>
                </div>
            </div>
        `;
    });
    return html;
}
    // ===== UPDATE FUNGSI showSection =====
function showSection(sectionName) {
    // Sembunyikan semua konten
    document.querySelectorAll('.content-container').forEach(container => {
        container.classList.remove('content-active');
    });
    
    // Remove active class dari semua button
    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => btn.classList.remove('nav-active'));
    
    // Add active class ke button yang diklik
    const activeBtn = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('nav-active');
    }
    
    // Tampilkan section yang sesuai
    switch(sectionName) {
        case 'jadwal':
            showJadwalSection();
            break;
        case 'home':
            showHomeSection();
            break;
        case 'ruangan':
            showRuanganSection();
            break;
    }
    
    // Vibration feedback untuk mobile
    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

function showJadwalSection() {
    const container = document.getElementById('jadwal-container');
    container.innerHTML = showAllMapel();
    container.classList.add('content-active');
}

function showHomeSection() {
    document.getElementById('home-container').classList.add('content-active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showRuanganSection() {
    const container = document.getElementById('ruangan-container');
    container.innerHTML = showRuanganByHari();
    container.classList.add('content-active');
                                              }
    
    // ==================== JALANKAN APLIKASI ====================
    init();
});
