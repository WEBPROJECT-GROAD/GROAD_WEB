

import { profilesState } from '../../resumeboard/js/profiles.js';

window.showTab1 = showTab1;
window.showTab2 = showTab2;
window.openSidebar = openSidebar;
window.closeSidebar=closeSidebar;
window.backToProfiles = backToProfiles;
window.reviewContents = reviewContents;
window.closeReview = closeReview;

let isDetailView = false;
let isReviewContents = false;


function showTab1(tabId) {
    const tabs = document.querySelectorAll('.tab1');
    const contents = document.querySelectorAll('.con1-con');

    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.style.display = 'none');

    document.querySelector(`.tab1[onclick="showTab1('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).style.display = 'block';
}


function showTab2(tabId) {
    const tabs = document.querySelectorAll('.tab2');
    const contents = document.querySelectorAll('.con2-con');

    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.style.display = 'none');

    document.querySelector(`.tab2[onclick="showTab2('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).style.display = 'block';
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



// 상세 이력서 //
document.addEventListener('DOMContentLoaded', () => {
    

    document.body.addEventListener('click', (event) => {
        const clickedProfile = event.target.closest('.clickPrf');
        
        
        if (clickedProfile) {
            const profileId = parseInt(clickedProfile.getAttribute('data-id'));
            const profileData = profilesState.profiles.find(profile => profile.id === profileId);

            if (profileData) {
                renderProfileDetails(profileData);
            } else {
                console.error(`Profile with ID ${profileId} not found.`);
            }
        }
    });
});




//상세 이력서
function renderProfileDetails(profile) {
    const contentsWrap = document.querySelector('.contents-wr');
    const block = document.querySelector('.block');
    const container = document.getElementById('container');
    
    container.innerHTML = ''; // 기존 내용 제거
    isDetailView = true;

    container.style.display = 'flex';
    contentsWrap.style.display = 'none';
    block.style.display = 'none';
    const qnaHTML = profile.qna && profile.qna.length > 0
        ? profile.qna
            .map(
                (qnaItem) => `
                <div class="qa-block">
                    <img src="../../resumeboard/img/prf.png" alt="${anonymizeName(qnaItem.questioner)}">
                    <div class="qaText">
                        <p class="qaName">${anonymizeName(qnaItem.questioner)}</p>
                        <p>${qnaItem.question}</p>
                    </div>
                </div>
                <div class="answerWrap">
                    <img src="../../resumeboard/img/answer.png" alt="Answer">
                    <div class="a-block">
                        <img class="qa-prf" src="../../resumeboard/img/prf.png" alt="${profile.name}">
                        <p>${qnaItem.answer}</p>
                    </div>
                </div>
                `
            )
            .join("")
        : '<div class="qa-block"><p>Q&A가 없습니다.</p></div>';

    container.innerHTML = `
        <button id="page-back" onclick="backToProfiles()"> < 이력서 목록 </button>
        <button id="toReviewBtn" onclick="reviewContents()">후기 작성하기</button>
        <div class="profileDetail" style="margin-top:90px">
            <img src="../../resumeboard/img/prf.png" alt="${profile.name}">
            <div class="info">
                <p>이름 : ${profile.name}</p>
                <p>${profile.university}</p>
                <p>희망진로 : ${profile.job}</p>
            </div>
            <div class="N">
                <p>조회 ${profile.views} 추천 ${profile.recommends} 스크랩 ${profile.scraps}</p>
            </div>
        </div>
        <div class="detailPt">
            <h4>portfolio</h4>
            <div class="pf-block">
                <div class="detailText">대외활동</div>
                <p>${profile.d1}</p>
            </div>
            <div class="pf-block">
                <div class="detailText">공모전</div>
                <p>${profile.d2}</p>
            </div>
            <div class="pf-block">
                <div class="detailText">해외경험</div>
                <p>${profile.d3}</p>
            </div>
            <div class="pf-block">
                <div class="detailText">어학/창업</div>
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
            <img src="../../resumeboard/img/prf.png" alt="이름">
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
}


// 메인으로 돌아가기
function backToProfiles() {

    const contentsWrap = document.querySelector('.contents-wr');
    const container = document.getElementById('container');
    const block = document.querySelector('.block');


    // 상태 초기화
    isDetailView = false;
    isReviewContents = false;

    container.style.removeProperty('display');
    contentsWrap.style.removeProperty('display');
    block.style.removeProperty('display');

    container.innerHTML = '';
    container.style.display = 'none';
    contentsWrap.style.display = 'flex';
    block.style.display = 'flex';

}




//이름 가운데 x
function anonymizeName(name) {
    if (name.length <= 1) return name;
    return name[0] + "*" + name.slice(2);
}


//상세 프로필 후기 작성 페이지
function reviewContents() {
    const container = document.getElementById('container');
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
//리뷰 작성 버튼 // 
function closeReview() {
    alert("후기가 등록되었습니다.")
    backToProfiles()
}