// ===== DATA MATA PELAJARAN =====
const semuaMapel = {
    'Agama MKDU': {
        dosen: 'Almirni',
        sks: 2,
        ruangan: 'E210-A'
    },
    'Pengantar Teknologi Komputer dan Informasi': {
        dosen: 'Rayendra, Milla Apriliana',
        sks: 3,
        ruangan: 'E308-LABOR JARINGAN 1'
    },
    'Algoritma dan Pemrograman': {
        dosen: 'Rozi Meri, Yance Sonatha',
        sks: 3,
        ruangan: 'E311-LABOR SISTEM INFORMASI'
    },
    'Basis Data': {
        dosen: 'Meri Azmi, Nurraudya Tuz Zahra, Tri Lestari',
        sks: 3,
        ruangan: 'A402-Labor Komputer'
    },
    'Sistem Informasi': {
        dosen: 'Ade Irma Suryani',
        sks: 3,
        ruangan: 'E209-A'
    },
    'Aljabar Linear': {
        dosen: 'Fazrol Rozi',
        sks: 3,
        ruangan: 'E209-A'
    },
    'Basis Data Praktek': {
        dosen: 'Meri Azmi, Nurraudya Tuz Zahra, Tri Lestari',
        sks: 3,
        ruangan: 'E301-LABOR Pemrograman 1'
    },
    'Pengantar Teknologi Komputer dan Informasi Teori': {
        dosen: 'Rayendra',
        sks: 3,
        ruangan: 'E210-A'
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
    },
    'Pengantar Teknologi Komputer dan Informasi Praktek': {
        dosen: 'Rayendra, Milla Apriliana',
        sks: 3,
        ruangan: 'E202-LABOR PERAKITAN dan INSTALASI'
    },
    'Aljabar Linear Teori': {
        dosen: 'Fazrol Rozi',
        sks: 3,
        ruangan: 'E209-A'
    },
    'Basis Data Teori': {
        dosen: 'Meri Azmi',
        sks: 3,
        ruangan: 'E209-B'
    },
    'Algoritma dan Pemrograman Teori': {
        dosen: 'Rozi Meri',
        sks: 3,
        ruangan: 'C101-A'
    }
};

// ===== JADWAL PER HARI =====
const jadwalPerHari = {
    'SENIN': [
        {
            mapel: 'Agama MKDU',
            waktu: '07:30-08:20',
            type: 'Teori'
        },
        {
            mapel: 'Agama MKDU',
            waktu: '08:20-09:10',
            type: 'Teori'
        },
        {
            mapel: 'Algoritma dan Pemrograman',
            waktu: '09:10-10:00',
            type: 'Praktek'
        },
        {
            mapel: 'Algoritma dan Pemrograman',
            waktu: '10:15-11:05',
            type: 'Praktek'
        },
        {
            mapel: 'Algoritma dan Pemrograman',
            waktu: '11:05-11:55',
            type: 'Praktek'
        },
        {
            mapel: 'Basis Data Praktek',
            waktu: '13:50-14:40',
            type: 'Praktek'
        }
    ],
    'SELASA': [
        {
            mapel: 'Pengantar Teknologi Komputer dan Informasi Praktek',
            waktu: '07:30-08:20',
            type: 'Praktek'
        },
        {
            mapel: 'Pengantar Teknologi Komputer dan Informasi Praktek',
            waktu: '08:20-09:10',
            type: 'Praktek'
        },
        {
            mapel: 'Pengantar Teknologi Komputer dan Informasi Praktek',
            waktu: '09:10-10:00',
            type: 'Praktek'
        },
        {
            mapel: 'Pengantar Teknologi Komputer dan Informasi Praktek',
            waktu: '10:15-11:05',
            type: 'Praktek'
        },
        {
            mapel: 'Pengantar Teknologi Komputer dan Informasi Praktek',
            waktu: '11:05-11:55',
            type: 'Praktek'
        },
        {
            mapel: 'Aljabar Linear Teori',
            waktu: '15:45-16:35',
            type: 'Teori'
        }
    ],
    'RABU': [
        {
            mapel: 'Basis Data Teori',
            waktu: '07:30-08:20',
            type: 'Teori'
        },
        {
            mapel: 'Basis Data Teori',
            waktu: '08:20-09:10',
            type: 'Teori'
        },
        {
            mapel: 'Sistem Informasi',
            waktu: '09:10-10:00',
            type: 'Teori'
        },
        {
            mapel: 'Sistem Informasi',
            waktu: '10:15-11:05',
            type: 'Teori'
        }
    ],
    'KAMIS': [
        {
            mapel: 'Basis Data Praktek',
            waktu: '07:30-08:20',
            type: 'Praktek'
        },
        {
            mapel: 'Pengantar Teknologi Komputer dan Informasi Teori',
            waktu: '08:20-09:10',
            type: 'Teori'
        },
        {
            mapel: 'Algoritma dan Pemrograman Teori',
            waktu: '13:00-13:50',
            type: 'Teori'
        }
    ],
    'JUMAT': [
        {
            mapel: 'Algoritma dan Pemrograman Teori',
            waktu: '07:30-08:20',
            type: 'Teori'
        }
    ],
    'SABTU': [],
    'MINGGU': []
};

// ===== FUNGSI UTAMA =====
function init() {
    updateDateTime();
    updateJadwalHariIni();
    updateTugasHariIni();
    setupBottomNav();
    setupAutoRefresh();
    setInterval(updateDateTime, 1000);
}

// ===== DATE & TIME =====
function updateDateTime() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;

    const hariList = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
    const hari = hariList[now.getDay()];
    const tanggal = String(now.getDate()).padStart(2, '0');
    const bulan = String(now.getMonth() + 1).padStart(2, '0');
    const tahun = now.getFullYear();
    const dateString = `${hari} ${tanggal}:${bulan}:${tahun}`;

    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    if (timeElement) timeElement.textContent = timeString;
    if (dateElement) dateElement.textContent = dateString;
}

// ===== JADWAL BESOK =====
function updateJadwalHariIni() {
    const jadwalList = document.getElementById('jadwal-list');
    if (!jadwalList) return;

    const hariIni = new Date().getDay();
    const hariList = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
    const hariBesokIndex = (hariIni + 1) % 7;
    const hariBesok = hariList[hariBesokIndex];

    const jadwalBesok = jadwalPerHari[hariBesok] || [];

    jadwalList.innerHTML = '';

    if (jadwalBesok.length === 0) {
        jadwalList.innerHTML = '<li>🎉 LIBUR! Tidak ada jadwal besok</li>';
    } else {
        jadwalBesok.forEach(jadwal => {
            const infoMapel = semuaMapel[jadwal.mapel] || {};
            const li = document.createElement('li');

            li.innerHTML = `
                <div class="jadwal-item">
                    <div class="jadwal-header">
                        <strong>${jadwal.mapel}</strong>
                        <span class="jadwal-type ${jadwal.type.toLowerCase()}">${jadwal.type}</span>
                    </div>
                    <span class="jadwal-waktu">⏰ ${jadwal.waktu}</span>
                    <span class="jadwal-ruangan">🚪 ${infoMapel.ruangan || 'TBA'}</span>
                    <small class="jadwal-dosen">👨‍🏫 ${infoMapel.dosen || 'TBA'}</small>
                </div>
            `;

            jadwalList.appendChild(li);
        });
    }

    const judulSection = document.querySelector('.schedule-section h2');
    if (judulSection) {
        judulSection.textContent = `JADWAL BESOK (${hariBesok}) :`;
    }
}

// ===== TUGAS HARI INI =====
function updateTugasHariIni() {
    const tugasList = document.getElementById('tugas-list');
    if (!tugasList) return;

    const tugasData = [
        'Project Website E-Commerce - Deadline: 15/05/2025',
        'Laporan Basis Data - Deadline: 16/05/2025',
        'Presentasi Jaringan Komputer - Deadline: 17/05/2025',
        'Tugas Matematika Diskrit - Deadline: 18/05/2025'
    ];

    tugasList.innerHTML = '';

    tugasData.forEach(tugas => {
        const li = document.createElement('li');
        li.textContent = tugas;
        tugasList.appendChild(li);
    });
}

// ===== INFO RUANGAN =====
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
        html += '<div class="no-schedule">📭 Tidak ada jadwal hari ini!</div>';
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

    return html;
}

// ===== JADWAL PER HARI =====
function showAllMapel() {
    const hariList = ['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU', 'MINGGU'];

    // Find max number of mapel rows in any day except Jumat (libur)
    let maxRows = 0;
    hariList.forEach(hari => {
        if (hari === 'JUMAT') return; // skip Jumat
        const count = jadwalPerHari[hari] ? jadwalPerHari[hari].length : 0;
        if (count > maxRows) maxRows = count;
    });

    let html = `
        <div class="mapel-header">
            <h3>📚 JADWAL MAPEL HARIAN</h3>
            <p>Senin - Kamin | Jumat Libur</p>
        </div>
        <table class="jadwal-table" border="1" cellspacing="0" cellpadding="5" style="width: 100%; text-align: center;">
            <thead>
                <tr>
    `;

    hariList.forEach(hari => {
        if (hari === 'JUMAT') {
            html += `<th>${hari} (Libur)</th>`;
        } else {
            html += `<th>${hari}</th>`;
        }
    });

    html += `
                </tr>
            </thead>
            <tbody>
    `;

    for (let row = 0; row < maxRows; row++) {
        html += '<tr>';
        hariList.forEach(hari => {
if (hari === 'JUMAT') {
    html += '<td>Libur</td>';
} else {
                const jadwalHari = jadwalPerHari[hari] || [];
                if (jadwalHari[row]) {
                    const jadwal = jadwalHari[row];
                    const infoMapel = semuaMapel[jadwal.mapel] || {};
                    html += `
                        <td>
                            <strong>${jadwal.mapel}</strong><br/>
                            <small>${jadwal.waktu}</small><br/>
                            <small>${jadwal.type}</small><br/>
                            <small>👨‍🏫 ${infoMapel.dosen || 'TBA'}</small><br/>
                            <small>🚪 ${infoMapel.ruangan || 'TBA'}</small>
                        </td>
                    `;
                } else {
                    html += '<td></td>';
                }
            }
        });
        html += '</tr>';
    }

    html += `
            </tbody>
        </table>
    `;

    return html;
}

// ===== AUTO REFRESH =====
function setupAutoRefresh() {
    // Refresh setiap jam
    setInterval(updateJadwalHariIni, 3600000);

    // Refresh setiap hari jam 00:00
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 1, 0);

    const timeUntilMidnight = tomorrow - now;

    setTimeout(() => {
        updateJadwalHariIni();
        setInterval(updateJadwalHariIni, 86400000);
    }, timeUntilMidnight);
}

// ===== BOTTOM NAV FUNCTION =====
function showSection(sectionName) {
    document.querySelectorAll('.content-container').forEach(container => {
        container.classList.remove('content-active');
    });

    const allButtons = document.querySelectorAll('.nav-btn');
    allButtons.forEach(btn => btn.classList.remove('nav-active'));

    const activeBtn = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('nav-active');
    }

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

function setupBottomNav() {
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
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

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Website A-TECH CLASS loaded!');

    // ===== JALANKAN APLIKASI =====
    init();
});
