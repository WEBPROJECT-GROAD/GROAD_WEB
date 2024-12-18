

window.onload = () => {
    sortProfiles('latest', document.querySelector('.sort-btn[data-sort="latest"]'));
};

import { profilesState } from './profiles.js';

window.sortProfiles = sortProfiles;
window.renderProfiles = renderProfiles;
window.backToProfiles = backToProfiles;
window.closeReview=closeReview;
window.navigate = navigate;
window.reviewContents =reviewContents;
window.openSidebar =openSidebar;
window.closeSidebar=closeSidebar;

let currentIndex = 0;
const pageSize = 8; // 한 페이지 프로필 수

let isDetailView = false;
let isReviewContents = false;


// 정렬 버튼
function sortProfiles(sortHow, clickedButton) {
    if (sortHow === 'latest') {
        profilesState.profiles.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    } else if (sortHow === 'recommends') {
        profilesState.profiles.sort((a, b) => b.recommends - a.recommends);
    } else if (sortHow === 'scraps') {
        profilesState.profiles.sort((a, b) => b.scraps - a.scraps);
    }

    currentIndex = 0;
    renderProfiles();

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
    container.innerHTML = ' ';

    const currentPage = profilesState.profiles.slice(currentIndex, currentIndex + pageSize);

    // 프로필생성
    currentPage.forEach(profile => {
        const card = document.createElement('div');
        card.className = 'prf-card';
        card.onclick = () => renderProfileDetails(profile);
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


//상세 이력서 화면 //
function renderProfileDetails(profile) {
    const container = document.getElementById('container');
    const filterBar = document.querySelector('.filter-bar');
    filterBar.classList.add('hidden');
    container.innerHTML = '';
    isDetailView = true;

    const qnaHTML = profile.qna && profile.qna.length > 0
        ? profile.qna
            .map(
                (qnaItem) => `
                <div class="qa-block">
                    <img src="img/prf.png" alt="${anonymizeName(qnaItem.questioner)}">
                    <div class= "qaText">
                        <p class="qaName">${anonymizeName(qnaItem.questioner)}</p>
                        <p>${qnaItem.question}</p>
                    </div>
                </div>
                <div class="answerWrap">
                    <img  src="img/answer.png" alt="Answer">
                    <div class="a-block" >
                        <img class="qa-prf" src="img/prf.png" alt="${profile.name}">
                        <p>${qnaItem.answer}</p>
                    </div>
                </div>
                `
            )
            .join("") : '<div class="qa-block"><p>Q&A가 없습니다.</p></div>'

    container.innerHTML = `
        <button id="page-back" onclick="backToProfiles()"> < 이력서 목록 </button>
        <button id="toReviewBtn" onclick = "reviewContents()">후기 작성하기</button>
        <div class="profileDetail">
            <img src="img/prf.png" alt="${profile.name}">
            <div class="info">
                <p>이름 : ${profile.name}</p>
                <p>${profile.university}</p>
                <p>희망진로 : ${profile.job}</p>
            </div>
            <div class="N">
                <p>조회 ${profile.views} 추천${profile.recommends} 스크랩${profile.scraps}</p>
            </div>
        </div>
        <div class="detailPt">
            <h4>portfolio</h4>
            <div class="pf-block">
                <div class = detailText>대외활동</div>
                <p>${profile.d1}</p>
            </div>
            <div class="pf-block">
                <div class = detailText>공모전</div>
                <p>${profile.d2}</p>
            </div>
            <div class="pf-block">
            <div class = detailText>해외경험</div>
                <p>${profile.d3}</p>
            </div>
            <div class="pf-block">
            <div class = detailText>어학/창업</div>
                <p>${profile.d4}</p>
            </div> 
        </div>
        <div class="detailQA">
            <h4 class="qawrap">Q&A</h4>
            ${qnaHTML}    
        </div>
        <div id="askBlock">
            <input id="questionInput" type="text" placeholder="질문을 입력하세요" class="qa-input">
            <button id="submitQuestion">질문 남기기</button>
        </div>
        
    `;
    // 위에 ${profile.name} 데이터 만들면서 바꾸기 //

    // 질문 추가 기능
    const questionInput = document.getElementById("questionInput");
    const submitQuestion = document.getElementById("submitQuestion");
    const detailQA = document.querySelector(".detailQA");

    submitQuestion.addEventListener("click", () => {
        const questionText = questionInput.value.trim();

        if (!questionText) {
            alert("질문을 입력하세요!");
            return;
        }
        const newQuestionBlock = document.createElement("div");
        newQuestionBlock.className = "qa-block";
        newQuestionBlock.innerHTML = `
            <img src="img/prf.png" alt="이름">
            <div class="qaText">
                <p class="qaName">안정후</p>
                <p>${questionText}</p>
            </div>
        `;

        const noQnaBlock = document.querySelector(".detailQA .qa-block");
        if (noQnaBlock && noQnaBlock.textContent.includes("Q&A가 없습니다.")) {
            noQnaBlock.remove();
        }

        detailQA.appendChild(newQuestionBlock);
        questionInput.value = "";
    });
    updateButtons()
}


//이름 가운데 x
function anonymizeName(name) {
    if (name.length <= 1) return name;
    return name[0] + "*" + name.slice(2);
}


// 프로필 리스트로 돌아가기
function backToProfiles() {
    isDetailView = false; // 상태 변경
    renderProfiles(); // 목록 화면 렌더링

    const filterBar = document.querySelector('.filter-bar');
    filterBar.classList.remove('hidden');
}

//리뷰 작성 버튼 // 
function closeReview(){
    isReviewContents = false;
    renderProfiles();
    const filterBar=document.querySelector('.filter-bar');
    filterBar.classList.remove('hidden');
    alert("후기가 등록되었습니다.")
}


function reviewContents(){
    const container = document.getElementById('container');
    const filterBar = document.querySelector('.filter-bar');
    filterBar.classList.add('hidden');
    container.innerHTML = '';
    isReviewContents = true;

    container.innerHTML = `
    <div id="reviewConWrap">
        <div class= "wrTop reviewTextFont">후기 작성하기</div>
        <input id="reviewTitleInput" type ="text" placeholder="제목을 입력해주세요."></input>
        <div class= "reviewTextFont">카테고리 설정</div>
        <div class= "checkBoxWrap">
            <label class="checkBox">
                <input type="radio" name= "category" value="대외활동" checked>
                <span>대외활동</span>
            </label>
            <label class="checkBox">
                <input type="radio" name= "category" value="공모전 후기" checked>
                <span>공모전 후기</span>
            </label>
            <label class="checkBox">
                <input type="radio" name= "category" value="자격증 / 어학 후기" checked>
                <span>자격증 / 어학 후기</span>
            </label>
            <label class="checkBox">
                <input type="radio" name= "category" value="인턴 / 취업 후기" checked>
                <span>인턴 / 취업 후기</span>
            </label>
            <label class="checkBox">
                <input type="radio" name= "category" value="창업 후기" checked>
                <span>창업 후기</span>
            </label>
        </div>
        <div class= "reviewTextFont">내용 입력</div>
        <input id="reviewInput" type="text" placeholder="후기 내용을 입력해주세요. (최대 255자)">
        <button id="reviewBtn" onclick="closeReview()">등록하기</button>
    </div>
    `;
    const inputField = document.getElementById('reviewTitleInput');

    inputField.addEventListener('focus', function () {
        this.dataset.placeholder = this.placeholder; 
        this.placeholder = ''; 
    });

    inputField.addEventListener('blur', function () {
        this.placeholder = this.dataset.placeholder;
    });
    
}







// 탐색 기능
function navigate(direction) {
    if (isDetailView) return;
    const maxIndex = Math.ceil(profilesState.profiles.length / pageSize) - 1;
    currentIndex += direction * pageSize; // 페이지 이동
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex * pageSize) currentIndex = maxIndex * pageSize;
    renderProfiles();
}

// 버튼 활성화/비활성화
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (isDetailView) {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
    } else {
        prevBtn.style.display = '';
        nextBtn.style.display = '';

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + pageSize >= profilesState.profiles.length;
    }
}

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

// 초기 렌더링
renderProfiles();
