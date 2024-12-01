document.addEventListener("DOMContentLoaded", () => {
    // 나의 정보 관련 변수
    const addInfoBtn = document.getElementById("addInfoBtn");
    const popup = document.getElementById("popup");
    const closePopupBtn = document.getElementById("closePopupBtn");
    const saveInfoBtn = document.getElementById("saveInfoBtn");

    const universityField = document.getElementById("university");
    const departmentField = document.getElementById("department");
    const admissionYearField = document.getElementById("admissionYear");
    const gradeField = document.getElementById("grade");
    const careerFieldField = document.getElementById("careerField");
    const desiredCompanyField = document.getElementById("desiredCompany");

    // 나의 정보 팝업 열기
    addInfoBtn.addEventListener("click", () => {
        popup.classList.remove("hidden");
    });

    // 나의 정보 팝업 닫기
    closePopupBtn.addEventListener("click", () => {
        popup.classList.add("hidden");
    });

    // 나의 정보 팝업 저장
    saveInfoBtn.addEventListener("click", () => {
        const universityInput = document.getElementById("universityInput").value;
        const departmentInput = document.getElementById("departmentInput").value;
        const admissionYearInput = document.getElementById("admissionYearInput").value;
        const gradeInput = document.getElementById("gradeInput").value;
        const careerFieldInput = document.getElementById("careerFieldInput").value;
        const desiredCompanyInput = document.getElementById("desiredCompanyInput").value;

        if (
            universityInput &&
            departmentInput &&
            admissionYearInput &&
            gradeInput &&
            careerFieldInput &&
            desiredCompanyInput
        ) {
            universityField.textContent = universityInput;
            departmentField.textContent = departmentInput;
            admissionYearField.textContent = admissionYearInput;
            gradeField.textContent = gradeInput;
            careerFieldField.textContent = careerFieldInput;
            desiredCompanyField.textContent = desiredCompanyInput;

            popup.classList.add("hidden");
        } else {
            alert("모든 필드를 입력해주세요!");
        }
    });

    // 자기소개서 관련 변수
    const addSelfIntroBtn = document.getElementById("addSelfIntroBtn");
    const selfIntroPopup = document.getElementById("selfIntroPopup");
    const closeSelfIntroPopupBtn = document.getElementById("closeSelfIntroPopupBtn");
    const saveSelfIntroBtn = document.getElementById("saveSelfIntroBtn");
    const selfIntroductionText = document.getElementById("selfIntroductionText");

    // 자기소개서 팝업 열기
    addSelfIntroBtn.addEventListener("click", () => {
        selfIntroPopup.classList.remove("hidden");
    });

    // 자기소개서 팝업 닫기
    closeSelfIntroPopupBtn.addEventListener("click", () => {
        selfIntroPopup.classList.add("hidden");
    });

    // 자기소개서 저장
    saveSelfIntroBtn.addEventListener("click", () => {
        const selfIntroductionInput = document.getElementById("selfIntroductionInput").value;

        if (selfIntroductionInput.trim()) {
            selfIntroductionText.textContent = selfIntroductionInput;
            selfIntroPopup.classList.add("hidden");
        } else {
            alert("자기소개서를 입력해주세요!");
        }
    });
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
