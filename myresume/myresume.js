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

// Function to open the popup modal
function openPopup() {
    document.getElementById("popupModal").style.display = "flex";
}

// Function to close the popup modal
function closePopup() {
    document.getElementById("popupModal").style.display = "none";
    clearPopupFields();
}

// Function to add an entry to the list
function addEntry() {
    const category = document.getElementById("category").value;
    const activityName = document.getElementById("activityName").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;

    if (category && activityName && startDate && endDate) {
        // Create a new entry element
        const entry = document.createElement("div");
        entry.classList.add("entry-item");

        // Generate unique ID for each entry
        const entryId = `entry-${Date.now()}`;
        entry.setAttribute("id", entryId);

        entry.innerHTML = `
            <div style="display: flex; align-items: center; gap: 15px;">
                <span class="entry-category" style="background-color: black; color: white; padding: 5px 15px; border-radius: 12px; font-size: 14px;">${category}</span>
                <span class="entry-name" style="font-size: 16px; color: #666;">${activityName}</span>
                <span class="entry-dates" style="font-size: 14px; color: #999; margin-left: auto;">${startDate} ~ ${endDate}</span>
            </div>
            <div class="entry-actions" style="display: flex; gap: 10px;">
                <button class="delete-button" onclick="deleteEntry('${entryId}')" style="background-color: #11ddb1; border: none; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <img src="delete_image.png" alt="delete" style="width: 20px; height: 20px;">
                </button>
                <button class="edit-button" onclick="editEntry('${entryId}')" style="background-color: #ffffff; border: 2px solid #11ddb1; border-radius: 50%; width: 35px; height: 35px; display: flex; align-items: center; justify-content: center; cursor: pointer;">
                    <img src="edit_image.png" alt="edit" style="width: 20px; height: 20px;">
                </button>
            </div>
        `;

        // Append the new entry to the list
        const entriesList = document.getElementById("entriesList");
        entriesList.appendChild(entry);

        // Hide the default state and show the registered entries section
        document.getElementById("resumeDefault").style.display = "none";
        document.getElementById("registeredEntries").style.display = "block";

        closePopup();
    } else {
        alert("모든 필드를 채워주세요!");
    }
}

// Function to delete an entry
function deleteEntry(entryId) {
    const entry = document.getElementById(entryId);
    if (entry) {
        entry.remove();

        // Check if the list is empty
        const entriesList = document.getElementById("entriesList");
        if (entriesList.children.length === 0) {
            document.getElementById("resumeDefault").style.display = "flex";
            document.getElementById("registeredEntries").style.display = "none";
        }
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
