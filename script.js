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
        },
        {
            mapel: 'Basis Data Praktek',
            waktu: '14:40-15:30',
            type: 'Praktek'
        },
        {
            mapel: 'Sistem Operasi',
            waktu: '15:45-16:35',
            type: 'Teori'
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
            waktu: '13:50-14:40',
            type: 'Teori'
        },
        {
            mapel: 'Aljabar Linear Teori',
            waktu: '14:40-15:30',
            type: 'Teori'
        },
        {
            mapel: 'UI/UX Design',
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
        },
        {
            mapel: 'Sistem Informasi',
            waktu: '11:05-11:55',
            type: 'Teori'
        },
        {
            mapel: 'Proyek Perangkat Lunak',
            waktu: '13:50-14:40',
            type: 'Praktek'
        },
        {
            mapel: 'Proyek Perangkat Lunak',
            waktu: '14:40-15:30',
            type: 'Praktek'
        },
        {
            mapel: 'Proyek Perangkat Lunak',
            waktu: '15:45-16:35',
            type: 'Praktek'
        }
    ],
    'KAMIS': [
        {
            mapel: 'Basis Data Praktek',
            waktu: '07:30-08:20',
            type: 'Praktek'
        },
        {
            mapel: 'Basis Data Praktek',
            waktu: '08:20-09:10',
            type: 'Praktek'
        },
        {
            mapel: 'Pengantar Teknologi Komputer dan Informasi Teori',
            waktu: '09:10-10:00',
            type: 'Teori'
        },
        {
            mapel: 'Pengantar Teknologi Komputer dan Informasi Teori',
            waktu: '10:15-11:05',
            type: 'Teori'
        },
        {
            mapel: 'Algoritma dan Pemrograman Teori',
            waktu: '11:05-11:55',
            type: 'Teori'
        },
        {
            mapel: 'Algoritma dan Pemrograman Teori',
            waktu: '13:50-14:40',
            type: 'Teori'
        },
        {
            mapel: 'Basis Data Teori',
            waktu: '14:40-15:30',
            type: 'Teori'
        },
        {
            mapel: 'Basis Data Teori',
            waktu: '15:45-16:35',
            type: 'Teori'
        }
    ],
    'JUMAT': [],
    'SABTU': [],
    'MINGGU': []
};

// ===== FUNGSI UTAMA =====
function init() {
    console.log('🚀 Initializing A-TECH CLASS website...');
    updateDateTime();
    updateJadwalWithButtons();
    updateTugasHariIni();
    setupBottomNav();
    setupAutoRefresh();

    // Start the time update interval
    const timeInterval = setInterval(updateDateTime, 1000);
    console.log('⏰ Time update interval started:', timeInterval);

    console.log('✅ Initialization complete!');
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

    if (timeElement) {
        timeElement.textContent = timeString;
        console.log('Time updated:', timeString); // Debug log
    }
    if (dateElement) {
        dateElement.textContent = dateString;
        console.log('Date updated:', dateString); // Debug log
    }
}

// ===== JADWAL BESOK & HARI INI DENGAN BUTTON =====
function updateJadwalWithButtons() {
    const container = document.querySelector('.schedule-section');
    if (!container) return;

    const hariIniIndex = new Date().getDay();
    const hariList = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
    const hariIni = hariList[hariIniIndex];
    const hariBesokIndex = (hariIniIndex + 1) % 7;
    const hariBesok = hariList[hariBesokIndex];

    container.innerHTML = `
        <div class="day-buttons-container">
            <button id="btn-hari-ini" class="day-btn active" aria-pressed="true">Jadwal Hari Ini</button>
            <button id="btn-hari-besok" class="day-btn" aria-pressed="false">Jadwal Besok</button>
        </div>
        <ul class="schedule-list" id="jadwal-list"></ul>
    `;

    const jadwalList = container.querySelector('#jadwal-list');

    function renderJadwal(hari, transitionType = 'up') {
        const jadwal = jadwalPerHari[hari] || [];

        // Add transition out animation first
        jadwalList.classList.add('schedule-transition-down');

        setTimeout(() => {
            jadwalList.innerHTML = '';

            if (jadwal.length === 0) {
                const li = document.createElement('li');
                li.innerHTML = `🎉 LIBUR! Tidak ada jadwal ${hari.toLowerCase()}`;
                li.style.animationDelay = '0.2s';
                li.style.opacity = '1';
                jadwalList.appendChild(li);
            } else {
                jadwal.forEach((jadwalItem, index) => {
                    const infoMapel = semuaMapel[jadwalItem.mapel] || {};
                    const li = document.createElement('li');
                    li.innerHTML = `
                        <div class="jadwal-item">
                            <div class="jadwal-header">
                                <strong>${jadwalItem.mapel}</strong>
                                <span class="jadwal-type ${jadwalItem.type.toLowerCase()}">${jadwalItem.type}</span>
                            </div>
                            <span class="jadwal-waktu">⏰ ${jadwalItem.waktu}</span>
                            <span class="jadwal-ruangan">🚪 ${infoMapel.ruangan || 'TBA'}</span>
                            <small class="jadwal-dosen">👨‍🏫 ${infoMapel.dosen || 'TBA'}</small>
                        </div>
                    `;
                    li.style.animationDelay = `${0.2 + (index * 0.1)}s`;
                    li.style.opacity = '1';
                    jadwalList.appendChild(li);
                });
            }

            // Remove transition classes and add transition in
            jadwalList.classList.remove('schedule-transition-down');
            jadwalList.classList.add('schedule-transition-up');

            // Clean up transition class after animation
            setTimeout(() => {
                jadwalList.classList.remove('schedule-transition-up');
            }, 600);
        }, 400);
    }

    // Initial render for hari ini (without transition)
    const jadwal = jadwalPerHari[hariIni] || [];
    jadwalList.innerHTML = '';

    if (jadwal.length === 0) {
        const li = document.createElement('li');
        li.innerHTML = `🎉 LIBUR! Tidak ada jadwal ${hariIni.toLowerCase()}`;
        li.style.animationDelay = '0.1s';
        li.style.opacity = '1';
        jadwalList.appendChild(li);
    } else {
        jadwal.forEach((jadwalItem, index) => {
            const infoMapel = semuaMapel[jadwalItem.mapel] || {};
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="jadwal-item">
                    <div class="jadwal-header">
                        <strong>${jadwalItem.mapel}</strong>
                        <span class="jadwal-type ${jadwalItem.type.toLowerCase()}">${jadwalItem.type}</span>
                    </div>
                    <span class="jadwal-waktu">⏰ ${jadwalItem.waktu}</span>
                    <span class="jadwal-ruangan">🚪 ${infoMapel.ruangan || 'TBA'}</span>
                    <small class="jadwal-dosen">👨‍🏫 ${infoMapel.dosen || 'TBA'}</small>
                </div>
            `;
            li.style.animationDelay = `${(index + 1) * 0.1}s`;
            li.style.opacity = '1';
            jadwalList.appendChild(li);
        });
    }

    // Button event listeners with 3D hover animation and smooth transitions
    const btnHariIni = document.getElementById('btn-hari-ini');
    const btnHariBesok = document.getElementById('btn-hari-besok');

    btnHariIni.addEventListener('click', () => {
        if (btnHariIni.classList.contains('active')) return; // Prevent double-click

        // Add click animation
        btnHariIni.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btnHariIni.style.transform = '';
        }, 150);

        btnHariIni.classList.add('active');
        btnHariIni.setAttribute('aria-pressed', 'true');
        btnHariBesok.classList.remove('active');
        btnHariBesok.setAttribute('aria-pressed', 'false');
        renderJadwal(hariIni, 'up');
    });

    btnHariBesok.addEventListener('click', () => {
        if (btnHariBesok.classList.contains('active')) return; // Prevent double-click

        // Add click animation
        btnHariBesok.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btnHariBesok.style.transform = '';
        }, 150);

        btnHariBesok.classList.add('active');
        btnHariBesok.setAttribute('aria-pressed', 'true');
        btnHariIni.classList.remove('active');
        btnHariIni.setAttribute('aria-pressed', 'false');
        renderJadwal(hariBesok, 'up');
    });
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

// ===== JADWAL PER HARI DENGAN ANIMASI =====
function showAllMapel() {
    const hariList = ['SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT'];

    let html = `
        <div class="mapel-header">
            <h3>📚 JADWAL MAPEL HARIAN</h3>
            <p>Senin - Kamis | Jumat Libur</p>
        </div>
        <div class="day-buttons-container">
    `;

    hariList.forEach(hari => {
        const isActive = hari === 'SENIN'; // Default to Senin
        html += `
            <button class="day-btn ${isActive ? 'active' : ''}" onclick="showMapelByDay('${hari}')">
                <span class="day-icon">${getDayIcon(hari)}</span>
                <span class="day-name">${hari}</span>
            </button>
        `;
    });

    html += `
        </div>
        <div id="mapel-content" class="mapel-content">
            ${generateMapelContent('SENIN')}
        </div>
    `;

    return html;
}

function getDayIcon(hari) {
    const icons = {
        'SENIN': '🌅',
        'SELASA': '☀️',
        'RABU': '🌤️',
        'KAMIS': '⛅',
        'JUMAT': '🎉'
    };
    return icons[hari] || '📅';
}

function showMapelByDay(hari) {
    // Update active button
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.closest('.day-btn').classList.add('active');

    // Update content with animation
    const content = document.getElementById('mapel-content');
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';

    setTimeout(() => {
        content.innerHTML = generateMapelContent(hari);
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }, 300);
}

function generateMapelContent(hari) {
    const jadwalHari = jadwalPerHari[hari] || [];

    if (jadwalHari.length === 0) {
        return `
            <div class="no-schedule glitch-text">
                <h4>🎉 LIBUR!</h4>
                <p>Tidak ada jadwal hari ${hari}</p>
            </div>
        `;
    }

    // Group by type
    const groupedMapel = {
        'Teori': [],
        'Praktek': []
    };

    jadwalHari.forEach(jadwal => {
        const type = jadwal.type;
        if (!groupedMapel[type]) groupedMapel[type] = [];
        groupedMapel[type].push(jadwal);
    });

    let html = `<div class="day-title glitch-text">${hari}</div>`;

    Object.keys(groupedMapel).forEach(type => {
        const mapels = groupedMapel[type];
        if (mapels.length === 0) return;

        html += `
            <div class="category-section">
                <h4 class="category-title ${type.toLowerCase()}">${type}</h4>
                <div class="mapel-grid">
        `;

        mapels.forEach((jadwal, index) => {
            const infoMapel = semuaMapel[jadwal.mapel] || {};
            html += `
                <div class="mapel-card" style="animation-delay: ${index * 0.1}s">
                    <div class="mapel-header-card">
                        <h5>${jadwal.mapel}</h5>
                        <span class="mapel-time">⏰ ${jadwal.waktu}</span>
                    </div>
                    <div class="mapel-details">
                        <div class="detail-item">
                            <span class="detail-icon">👨‍🏫</span>
                            <span>${infoMapel.dosen || 'TBA'}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">🚪</span>
                            <span>${infoMapel.ruangan || 'TBA'}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-icon">📚</span>
                            <span>${infoMapel.sks || 0} SKS</span>
                        </div>
                    </div>
                </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    return html;
}


// ===== AUTO REFRESH =====
function setupAutoRefresh() {
    // Refresh setiap jam - update jadwal buttons
    setInterval(() => {
        // Only update the content, not recreate buttons
        const hariIniIndex = new Date().getDay();
        const hariList = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
        const hariIni = hariList[hariIniIndex];
        const hariBesokIndex = (hariIniIndex + 1) % 7;
        const hariBesok = hariList[hariBesokIndex];

        // Update active button based on current time
        const btnHariIni = document.getElementById('btn-hari-ini');
        const btnHariBesok = document.getElementById('btn-hari-besok');

        if (btnHariIni && btnHariBesok) {
            // If it's after 6 PM, switch to tomorrow's schedule
            const currentHour = new Date().getHours();
            if (currentHour >= 18) {
                btnHariBesok.classList.add('active');
                btnHariBesok.setAttribute('aria-pressed', 'true');
                btnHariIni.classList.remove('active');
                btnHariIni.setAttribute('aria-pressed', 'false');
            } else {
                btnHariIni.classList.add('active');
                btnHariIni.setAttribute('aria-pressed', 'true');
                btnHariBesok.classList.remove('active');
                btnHariBesok.setAttribute('aria-pressed', 'false');
            }
        }
    }, 3600000); // Every hour

    // Refresh setiap hari jam 00:00
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 1, 0);

    const timeUntilMidnight = tomorrow - now;

    setTimeout(() => {
        // Full refresh at midnight
        updateJadwalWithButtons();
        setInterval(updateJadwalWithButtons, 86400000);
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
