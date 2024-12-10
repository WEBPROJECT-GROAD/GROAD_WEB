document.addEventListener("DOMContentLoaded", function () {
    checkActivities();
});

function checkActivities() {
    const activityList = document.getElementById('default');
    if (activityList.children.length === 0) {
        activityList.innerHTML = `<img src="default_roadmap.png" alt="No activities available" class="default-image">`;
    } else {
        const defaultImage = activityList.querySelector('.default-image');
        if (defaultImage) {
            defaultImage.remove();
        }
    }
}

function addActivity() {
    const activityList = document.getElementById('activity-list');
    const newActivity = document.createElement('div');
    newActivity.classList.add('activity-item');
    newActivity.textContent = "New Activity";

    activityList.appendChild(newActivity);
    checkActivities();
}

// Function to add a new semester
function addSemester() {
    const semesterSelection = document.getElementById('semester-selection');
    const newSemester = document.createElement('button');
    newSemester.className = "semester-button";
    newSemester.textContent = "New Semester";
    semesterSelection.appendChild(newSemester);
}

// Open the modal
function addActivity() {
    document.getElementById("activityModal").style.display = "flex";
}

// Close the modal
function closeModal() {
    document.getElementById("activityModal").style.display = "none";
}



function isDateInSelectedPeriod(startDate, endDate) {

    const start = new Date(startDate);
    const end = new Date(endDate);
    const activityHeader = document.getElementById('activityHeader');

    if (start > end) {
        alert("시작 날짜가 종료 날짜보다 늦습니다. 다시 입력해주세요!");
        return false; 
    }

    if (!selectedPeriod || selectedPeriod === "") {
        alert("학기를 먼저 선택해주세요!");
        return false; // 학기 선택되지 않으면 false 반환
    }

    const startMonth = start.getMonth() + 1;
    const endMonth = end.getMonth() + 1;

    

    // 상반기: 3월 ~ 8월
    if (activityHeader.textContent.includes("상반기")) {
        if (startMonth < 3 || startMonth > 8 || endMonth < 3 || endMonth > 8) {
            alert("날짜가 상반기(3월 ~ 8월)에 맞지 않습니다.");
            return false;
        }
        return true;
    }

    // 하반기: 9월 ~ 2월
    else if (activityHeader.textContent.includes("하반기")) {
        if (
            (startMonth >= 9 || startMonth <= 2) &&
            (endMonth >= 9 || endMonth <= 2)
        ) {
            return true;
        } else {
            alert("날짜가 하반기(9월 ~ 2월)에 맞지 않습니다.");
            return false;
        }
    }
    return false;
}

// Close the modal when clicking outside the modal content
window.onclick = function (event) {
    const modal = document.getElementById("activityModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Open specific modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Close specific modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function addActivityToTimeline() {
    const activityType = document.getElementById("activityType").value;
    const activityName = document.getElementById("activityName").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if (!activityType || !activityName || !startDate || !endDate) {
        alert("모든 항목을 입력해주세요!");
        return;
    }

    if (!isDateInSelectedPeriod(startDate, endDate)) {
        return; // 날짜 검증 실패 시 함수 종료
    }
    createTimelineBar(startDate, endDate, activityType, activityName);
    closeModal("activityModal");
}

function createTimelineBar(startDate, endDate, activityType, activityName) {
    const activityList = document.getElementById("activity-list");

    // Calculate start and end months
    const startMonth = new Date(startDate).getMonth() + 1;
    const endMonth = new Date(endDate).getMonth() + 1;

    // Check if we are in 하반기 or 상반기
    // const isSecondHalf = selectedPeriod === '하반기';
    const monthsInSemester = 6;
    let startOffset=0, endOffset=0;

    if (selectedPeriod.includes("하반기")) {
        startOffset = startMonth >= 9 ? startMonth - 9 : startMonth + 3; // Adjust months to 9~14 range
        endOffset = endMonth >= 9 ? endMonth - 9 : endMonth + 3;
    }
    // 상반기: 3월 ~ 8월
    else if (selectedPeriod.includes("상반기")) {
        startOffset = startMonth - 3; // 3월부터 시작
        endOffset = endMonth - 3;
    }
    
    
    const startPercentage = (startOffset / monthsInSemester) * 100;
    const endPercentage = ((endOffset + 1) / monthsInSemester) * 100; // +1 to include the end month
    
    if (startOffset < 0 || endOffset >= monthsInSemester) {
        alert("날짜가 학기 범위를 초과합니다. 다시 입력해주세요.");
        return;
    }

    // Create Timeline bar element
    const timelineBar = document.createElement("div");
    timelineBar.classList.add("timeline-bar");
    timelineBar.innerHTML = `<strong>${activityType}: ${activityName}</strong><br><small>${startDate} ~ ${endDate}</small>`;
    timelineBar.style.marginLeft = `${startPercentage}%`;
    timelineBar.style.width = `${endPercentage - startPercentage}%`;
    // Default color and open color modal on click
    timelineBar.style.backgroundColor = "#7EECD5";
    timelineBar.addEventListener("click", function () {
        openColorModal(timelineBar);
    });

    activityList.appendChild(timelineBar);
    removeDefaultImage();
}

function removeDefaultImage() {
    const defaultContainer = document.getElementById("default");
    if (defaultContainer) {
        defaultContainer.innerHTML = ""; 
    }
}



// Open color selection modal and keep track of the selected activity
let selectedActivity = null;

function openColorModal(activityElement) {
    selectedActivity = activityElement;
    openModal('colorModal');
}

// Set color for the selected activity
function setColor(color) {
    if (selectedActivity) {
        // Apply selected color
        switch(color) {
            case 'gray':
                selectedActivity.style.backgroundColor = '#d9d9d9';
                break;
            case 'lightgreen':
                selectedActivity.style.backgroundColor = '#7EECD5';
                break;
            case 'green':
                selectedActivity.style.backgroundColor = '#11DDB1';
                break;
        }
    }
    closeModal('colorModal');
}

let selectedPeriod="";

// Function to open the semester modal
function openSemesterModal() {
    document.getElementById("semesterModal").style.display = "flex";
}

// Function to close the modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function selectSemesterPeriod(period) {
    selectedPeriod = period;

    if (!selectedPeriod) {
        alert("학기를 선택하지 않았습니다!");
        return;
    }
    // Highlight the selected button
    document.querySelectorAll(".semester-option").forEach(button => {
        button.style.backgroundColor = "#11DDB1";
    });
    if (period === '상반기') {
        document.querySelector(".semester-option:nth-child(1)").style.backgroundColor = "#0fbfa3";
    } else {
        document.querySelector(".semester-option:nth-child(2)").style.backgroundColor = "#0fbfa3";
    }

    // Reset activity list
    document.getElementById("activity-list").innerHTML = "";
}

// Function to add semester to the list and make it clickable
function addSemesterToList() {
    const year = document.getElementById("yearInput").value;

    if (year && selectedPeriod) {
        const semesterSelection = document.getElementById("semester-selection");
        const newSemester = document.createElement("button");
        newSemester.className = "semester-button";
        newSemester.textContent = `${year}년 ${selectedPeriod}`;

        // Add event listener to update "활동 내역" header and month labels when clicked
        newSemester.addEventListener("click", function() {
            updateActivityHeader(newSemester.textContent);
            updateMonthLabels(newSemester.textContent);
            selectSemesterPeriod(selectedPeriod.includes("상반기") ? "상반기" : "하반기");
        });

        semesterSelection.appendChild(newSemester);

        // Reset and close the modal
        document.getElementById("semesterForm").reset();

        closeModal("semesterModal");
    } else {
        alert("모든 필드를 입력해주세요.");
    }
}

// Function to update "활동 내역" header text
function updateActivityHeader(text) {
    const activityHeader = document.getElementById("activityHeader");
    activityHeader.textContent = text;
}

// Function to update month labels based on whether "상반기" or "하반기" is included in the text
function updateMonthLabels(text) {
    const monthLabels = document.querySelector(".month-labels");
    monthLabels.innerHTML = ''; // Clear existing month labels

    // Check if the text includes "상반기" or "하반기" and set months accordingly
    const months = text.includes("상반기") 
        ? ['3월', '4월', '5월', '6월', '7월', '8월'] 
        : ['9월', '10월', '11월', '12월', '1월', '2월'];

    months.forEach(month => {
        const span = document.createElement("span");
        span.textContent = month;
        monthLabels.appendChild(span);
    });
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
