document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Website A-TECH CLASS loaded!');
    
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
            { 
                mapel: 'Pemrograman Web', 
                waktu: '08:00-10:00',
                type: 'Teori' 
            },
            { 
                mapel: 'Basis Data', 
                waktu: '10:00-12:00',
                type: 'Praktikum' 
            },
            { 
                mapel: 'Jaringan Komputer', 
                waktu: '13:00-15:00',
                type: 'Teori' 
            }
        ],
        'SELASA': [
            { 
                mapel: 'Matematika Diskrit', 
                waktu: '08:00-10:00',
                type: 'Teori' 
            },
            { 
                mapel: 'Pemrograman Mobile', 
                waktu: '10:00-12:00',
                type: 'Praktikum' 
            }
        ],
        'RABU': [
            { 
                mapel: 'Sistem Operasi', 
                waktu: '08:00-10:00',
                type: 'Teori' 
            },
            { 
                mapel: 'UI/UX Design', 
                waktu: '10:00-12:00',
                type: 'Praktikum' 
            }
        ],
        'KAMIS': [
            { 
                mapel: 'Proyek Perangkat Lunak', 
                waktu: '08:00-12:00',
                type: 'Project' 
            }
        ],
        'JUMAT': [
            { 
                mapel: 'Basis Data', 
                waktu: '08:00-10:00',
                type: 'Teori' 
            },
            { 
                mapel: 'Pemrograman Web', 
                waktu: '10:00-12:00',
                type: 'Praktikum' 
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

    // ===== JADWAL HARI INI =====
    function updateJadwalHariIni() {
        const jadwalList = document.getElementById('jadwal-list');
        if (!jadwalList) return;
        
        const hariIni = new Date().getDay();
        const hariList = ['MINGGU', 'SENIN', 'SELASA', 'RABU', 'KAMIS', 'JUMAT', 'SABTU'];
        const hari = hariList[hariIni];
        
        const jadwalHariIni = jadwalPerHari[hari] || [];
        
        jadwalList.innerHTML = '';
        
        if (jadwalHariIni.length === 0) {
            jadwalList.innerHTML = '<li>🎉 LIBUR! Tidak ada jadwal hari ini</li>';
        } else {
            jadwalHariIni.forEach(jadwal => {
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
            judulSection.textContent = `JADWAL ${hari} :`;
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
        
        return html;
    }

    // ===== SEMUA MATA PELAJARAN =====
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

    // ===== JALANKAN APLIKASI =====
    init();
});
