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

// 나의 이력서 팝업 열기 및 닫기
function openPopup() {
    document.getElementById("popupModal").style.display = "flex";
}

function closePopup() {
    document.getElementById("popupModal").style.display = "none";
}

// Function to add the entry to the list
function addEntry() {
    const category = document.getElementById("category").value;
    const activityName = document.getElementById("activityName").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if (category && activityName && startDate && endDate) {
        // Create the entry item
        const entry = document.createElement("div");
        entry.classList.add("entry-item");
        entry.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <span class="entry-category" style="background-color: black; color: white; padding: 5px 15px; border-radius: 12px; font-size: 14px;">${category}</span>
                <span class="entry-name" style="font-size: 16px; color: #666;">${activityName}</span>
                <span class="entry-dates" style="font-size: 14px; color: #999;">${startDate} ~ ${endDate}</span>
            </div>
            <div class="entry-actions" style="display: flex; gap: 10px;">
                <button class="delete-button" style="background-color: #11ddb1; border: none; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <img src="delete_image.png" alt="delete" style="width: 20px; height: 20px;">
                </button>
                <button class="edit-button" style="background-color: #ffffff; border: 2px solid #11ddb1; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <img src="edit_image.png" alt="edit" style="width: 20px; height: 20px;">
                </button>
            </div>
        `;

        // Add entry to the list
        const entriesList = document.getElementById("entriesList");
        entriesList.appendChild(entry);

        // Toggle visibility of sections
        document.getElementById("resumeDefault").style.display = "none";
        document.getElementById("registeredEntries").style.display = "block";

        // Move the "추가하기" button to the top right after the first entry is added
        const addButton = document.getElementById("addButton");
        addButton.classList.add("top-right");

        // Close popup and clear fields
        closePopup();
        clearPopupFields();
    } else {
        alert("모든 필드를 채워주세요!");
    }
}

// Function to clear the input fields after adding
function clearPopupFields() {
    document.getElementById("category").value = "";
    document.getElementById("activityName").value = "";
    document.getElementById("startDate").value = "";
    document.getElementById("endDate").value = "";
}

// Close modal when clicking outside of the content
window.onclick = function (event) {
    const modal = document.getElementById("popupModal");
    if (event.target == modal) {
        closePopup();
    }
}
