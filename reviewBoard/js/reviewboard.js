window.onload = ()=>{
    activeReview('all', document.querySelector('.sort-tab[data-category="all"]'));
    sortReviews('latest', document.querySelector('.sort-btn[data-sort="latest"]'));
};

import {reviewState} from './reviewdata.js';

window.sortReviews = sortReviews;
window.renderFilteredReviews = renderFilteredReviews;
window.activeReview = activeReview;

let currentIndex = 0;
const pageSize = 4;
let activeCategory = null;


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
    if(sortHow==='latest'){
        reviewState.reviews.sort((a,b)=> new Date(b.timestamp) - new Date(a.timestamp));
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

    const currentPage = filteredReviews.slice(currentIndex, currentIndex + pageSize);

    //리뷰 생성
    currentPage.forEach(review =>{
        const card = document.createElement('div');
        card.className = 'reviewCard';
        card.onclick = () => renderReviewDetails(review); //!만들어야함//
        card.innerHTML = `
            <h3>${review.id}</h3>
        `;
        container.appendChild(card);
    });

};




