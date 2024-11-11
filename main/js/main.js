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
