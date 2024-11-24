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

// Add activity to timeline
function addActivityToTimeline() {
    const activityType = document.getElementById("activityType").value;
    const activityName = document.getElementById("activityName").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if (activityType && activityName && startDate && endDate) {
        const activityList = document.getElementById("activity-list");
        const newActivity = document.createElement("div");
        newActivity.classList.add("activity-item");
        newActivity.innerHTML = `
            <strong>${activityType}: ${activityName}</strong><br>
            <small>${startDate} ~ ${endDate}</small>
        `;

        activityList.appendChild(newActivity);
        closeModal();
    } else {
        alert("모든 항목을 선택해주세요!");
    }
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

    if (activityType && activityName && startDate && endDate) {
        closeModal("activityModal");

        // 타임라인에 막대 추가
        createTimelineBar(startDate, endDate, activityType, activityName);
    } else {
        alert("모든 필드를 채워주세요.");
    }
}

function createTimelineBar(startDate, endDate, activityType, activityName) {
    const activityList = document.getElementById("activity-list");

    // Calculate start and end months
    const startMonth = new Date(startDate).getMonth() + 1;
    const endMonth = new Date(endDate).getMonth() + 1;

    // Check if we are in 하반기 or 상반기
    const isSecondHalf = selectedPeriod === '하반기';
    const monthsInSemester = 6;
    let startOffset, endOffset;

    if (isSecondHalf) {
        // For 하반기: 9월 ~ 2월 (mapped as 9 to 14 internally)
        startOffset = startMonth >= 9 ? startMonth - 9 : startMonth + 3; // Adjust months to 9-14 range
        endOffset = endMonth >= 9 ? endMonth - 9 : endMonth + 3;
    } else {
        // For 상반기: 3월 ~ 8월
        startOffset = startMonth - 3; // 3 to 8 maps directly to 0-5
        endOffset = endMonth - 3;
    }

    // Calculate position and width of the timeline bar in percentage
    const startPercentage = (startOffset / monthsInSemester) * 100;
    const endPercentage = ((endOffset + 1) / monthsInSemester) * 100; // +1 to include the end month

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
        defaultContainer.innerHTML = ""; // 기본 이미지를 제거합니다.
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

let selectedPeriod = '';

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
        });

        semesterSelection.appendChild(newSemester);

        // Reset and close the modal
        document.getElementById("semesterForm").reset();
        selectedPeriod = '';
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
