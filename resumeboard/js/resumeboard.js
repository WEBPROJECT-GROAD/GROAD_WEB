

window.onload = () => {
    sortProfiles('latest', document.querySelector('.sort-btn[data-sort="latest"]'));
};

// 프로필 데이터 
let profiles = [
    { id: 1, name: '가가가', university: '명지대학교 디자인 4학년', job: '디자이너', recommends: 3, scraps: 2, link: '#', timestamp: '2023-11-15T12:00:00' },
    { id: 2, name: '나나나', university: '서울대학교 컴퓨터공학과', job: '개발자', recommends: 10, scraps: 5,  link: '#', timestamp: '2023-11-14T14:30:00' },
    { id: 3, name: '다다다', university: '연세대학교 경영학과', job: '마케터', recommends: 7, scraps: 3,  link: '#', timestamp: '2023-11-16T08:45:00' },
    { id: 4, name: '라라라', university: '고려대학교 기계공학과', job: '엔지니어', recommends: 6, scraps: 4, link: '#', timestamp: '2023-11-13T09:00:00' },
    { id: 5, name: '바바바', university: '이화여자대학교 심리학과', job: '상담사', recommends: 8, scraps: 6, link: '#', timestamp: '2023-11-15T10:00:00' },
    { id: 6, name: '사사사', university: '한양대학교 화학공학과', job: '연구원', recommends: 12, scraps: 8,  link: '#', timestamp: '2023-11-12T16:00:00' },
    { id: 7, name: '아아아', university: '명지대학교 디자인 4학년', job: '디자이너', recommends:4 , scraps: 7, link: '#', timestamp: '2023-11-15T12:00:00' },
    { id: 8, name: '자자자', university: '서울대학교 컴퓨터공학과', job: '개발자', recommends: 11, scraps: 4,  link: '#', timestamp: '2023-11-14T14:30:00' },
    { id: 9, name: '차차차', university: '연세대학교 경영학과', job: '마케터', recommends: 1, scraps: 13,  link: '#', timestamp: '2023-11-16T08:45:00' },
    { id: 10, name: '카카카', university: '고려대학교 기계공학과', job: '엔지니어', recommends: 15, scraps: 24, link: '#', timestamp: '2023-11-13T09:00:00' },
    { id: 11, name: '파파파', university: '이화여자대학교 심리학과', job: '상담사', recommends: 8, scraps: 7,  link: '#', timestamp: '2023-11-15T10:00:00' },
    { id: 12, name: '하하하', university: '한양대학교 화학공학과', job: '연구원', recommends: 2, scraps: 18,   link: '#', timestamp: '2023-1-12T16:00:00' },
    { id: 13, name: '고고고', university: '이화여자대학교 심리학과', job: '상담사', recommends: 18, scraps: 17,  link: '#', timestamp: '2023-11-15T10:00:00' },
    { id: 14, name: '노노노', university: '한양대학교 화학공학과', job: '연구원', recommends: 12, scraps: 8,   link: '#', timestamp: '2023-11-12T16:00:00' },
    { id: 12, name: '도도도', university: '한양대학교 화학공학과', job: '연구원', recommends: 2, scraps: 18,   link: '#', timestamp: '2023-1-12T16:00:00' },
    { id: 13, name: '로로로', university: '이화여자대학교 심리학과', job: '상담사', recommends: 18, scraps: 17,  link: '#', timestamp: '2023-3-15T10:00:00' },
    { id: 14, name: '보보보', university: '한양대학교 화학공학과', job: '연구원', recommends: 12, scraps: 8,   link: '#', timestamp: '2023-7-12T16:00:00' }

];



let currentIndex = 0; 
const pageSize = 8; // 한 페이지 프로필 수


// 정렬 버튼
function sortProfiles(sortHow, clickedButton) {
    if (sortHow === 'latest') {
        profiles.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); 
    } else if (sortHow === 'recommends') {
        profiles.sort((a, b) => b.recommends - a.recommends); 
    } else if (sortHow === 'scraps') {
        profiles.sort((a, b) => b.scraps - a.scraps); 
    }

    currentIndex = 0; 
    renderProfiles(); // 정렬된 데이터로 렌더링

    updateActiveButton(clickedButton);
}


// 버튼 활성화 상태 업데이트
function updateActiveButton(btn) {
    const buttons = document.getElementsByClassName('sort-btn');
    Array.from(buttons).forEach(button => button.classList.remove('btnActive'));

    btn.classList.add('btnActive');
}



// 프로필 렌더링
function renderProfiles() {
    const container = document.getElementById('container');
    container.innerHTML = ''; 

    const currentPage = profiles.slice(currentIndex, currentIndex + pageSize);

    // 프로필생성
    currentPage.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'prf-card'; 
        card.onclick = () => window.open(profile.link, '_self'); 
        card.innerHTML = `
            <img class= "more" src="../main/img/btn_to.png" alt=">">
            <img class="prf-img" src="img/prf.png" alt="${profile.name}">
            <h3>${profile.name}</h3>
            <p>${profile.university}</p>
            <p>${profile.job}</p>
            <span>추천 ${profile.recommends} | 스크랩 ${profile.scraps}</span>
        `;
        container.appendChild(card);
    });

    updateButtons();
}

// 탐색 기능
function navigate(direction) {
    currentIndex += direction * pageSize; // 페이지 이동
    renderProfiles();
}

// 버튼 활성화/비활성화
function updateButtons() {
    document.getElementById('prevBtn').disabled = currentIndex === 0;
    document.getElementById('nextBtn').disabled = currentIndex + pageSize >= profiles.length;
}

// 초기 렌더링
renderProfiles();
