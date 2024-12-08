window.onload = ()=>{
    activeReview('all', document.querySelector('.sort-tab[data-category="all"]'));
    sortReviews('latest', document.querySelector('.sort-btn[data-sort="latest"]'));


};

import {reviewState} from './reviewdata.js';

window.sortReviews = sortReviews;
window.renderFilteredReviews = renderFilteredReviews;
window.activeReview = activeReview;
window.backToReviews = backToReviews;
window.openSidebar =openSidebar;
window.closeSidebar=closeSidebar;

let currentIndex = 0;
let activeCategory = null;
let isDetailView = false;


//리뷰 종류 탭
function activeReview(category, clickedButton) {
    activeCategory = category;

    const buttons = document.getElementsByClassName('sort-tab');
    Array.from(buttons).forEach(button => button.classList.remove('tabActive'));

    clickedButton.classList.add('tabActive');

    const filteredReviews = category === 'all' 
        ? reviewState.reviews 
        : reviewState.reviews.filter(review => review.category === category);

    renderFilteredReviews(filteredReviews);
}



//정렬
function sortReviews(sortHow,clickedButton) { 

    const parseDate = (timestamp) => {
        const [year, month, day] = timestamp.split('.').map(Number);
        return new Date(`20${year}-${month}-${day}`);
    };

    if(sortHow==='latest'){
        reviewState.reviews.sort((a, b) => parseDate(b.timestamp) - parseDate(a.timestamp));
    } else if ( sortHow === 'recommends'){
        reviewState.reviews.sort((a,b)=>b.recommends - a.recommends);
    } else if (sortHow === 'scraps'){
        reviewState.reviews.sort((a,b)=>b.scraps - a.scraps);
    }
    currentIndex = 0;

    const filteredReviews = activeCategory === 'all'
        ? reviewState.reviews
        : reviewState.reviews.filter(review => review.category === activeCategory);

    renderFilteredReviews(filteredReviews);
    updateActiveButton(clickedButton);
}



// 버튼 활성화 상태 업데이트
function updateActiveButton(btn) {
    const buttons = document.getElementsByClassName('sort-btn');
    Array.from(buttons).forEach(button => button.classList.remove('btnActive'));

    btn.classList.add('btnActive');
}




//review
function renderFilteredReviews(filteredReviews){
    const container = document.getElementById('container');
    container.innerHTML = '';

   
    //리뷰 생성
    filteredReviews.forEach(review =>{
        const card = document.createElement('div');
        card.className = 'reviewCard';
        card.onclick = () => renderReviewDetails(review); //!만들어야함//
        card.innerHTML = `
        <div id="reviewWrap">
            <div id="reviewCategory">${review.catName}</div>
            <div id="reviewPrf">
                <img src="../resumeBoard/img/prf.png">
                <p>${review.name}</p>
            </div>
            <div id="reviewContent">
                <h4>${review.title}</h4>
                <p>${review.con}</p>
            </div>
            <div id="reviewDate">
                ${review.timestamp}
            </div>
            <div id="reviewInfo">
                조회 ${review.views} 추천 ${review.recommends} 스크랩 ${review.scraps}
            </div>
            <div>
        </div>            
        `;
        container.appendChild(card);
    });

};


//위로 가는 버튼
document.getElementById('scrollToTop').addEventListener('click', function (event) {
    event.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth', 
    });
});


// 세부 리뷰 화면
function renderReviewDetails(review){
    const container = document.getElementById('container');
    const contentTab = document.querySelector('.contentTab');
    const scrollToTop= document.getElementById('scrollToTop');
    contentTab.classList.add('hidden');
    scrollToTop.classList.add('hidden');
    container.innerHTML=``;
    isDetailView = true;

    container.innerHTML=`
    <div id="detailReviewWrap">
        <button id="page-back" onclick="backToReviews()">X</button>
        <div id="detailTopWrap">
            <div id="detailCategory">${review.catName}</div>
            <div id="detailTop">
                <div id="detailPrf">
                    <img src="../resumeBoard/img/prf.png">
                        <p>${review.name}</p>
                </div>
                <div id="detailInfo">
                    <h4>${review.title}</h4>
                    <p>${review.timestamp}</p>
                    <p>조회 ${review.views} 추천 ${review.recommends} 스크랩 ${review.scraps}</p>
                </div>
            </div>
        </div>
        <div id="detailBottom">
            <p>${review.con}</p>
        </div>
        <div id="detailBtns">
            <button class="detail-Btns">추천하기</button>
            <button class="detail-Btns">스크랩</button>
        </div>
    </div>
    `;
}


//리뷰 목록으로 돌아가기
function backToReviews(){
    isDetailView = false;

    const filteredReviews = activeCategory === 'all' 
        ? reviewState.reviews 
        : reviewState.reviews.filter(review => review.category === activeCategory);

    renderFilteredReviews(filteredReviews);

    const contentTab = document.querySelector('.contentTab');
    const scrollToTop = document.getElementById('scrollToTop');
    contentTab.classList.remove('hidden');
    scrollToTop.classList.remove('hidden');
}

document.getElementById('container').addEventListener('click', (event) => {
        if (event.target.classList.contains('detail-Btns')) {
            event.target.classList.toggle('detailbtnActive');
    }
});


// 사이드 바 마이페이지 함수
function openSidebar() {
    document.getElementById('myPageSidebar').classList.add('active');
    document.getElementById('sidebarOverlay').classList.add('active');
}

function closeSidebar() {
    document.getElementById('myPageSidebar').classList.remove('active');
    document.getElementById('sidebarOverlay').classList.remove('active');
}

document.getElementById('sidebarOverlay').addEventListener('click', closeSidebar);

