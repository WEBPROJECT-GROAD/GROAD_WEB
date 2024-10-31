function showTabContent(index, type = 'resume') {
    // Handle Resume Tab Switching
    if (type === 'resume') {
      const resumes = document.querySelectorAll('.resume-list');
      const resumeTabs = document.querySelectorAll('.resume-tabs .tab');
  
      resumes.forEach((list, i) => {
        if (i === index) {
          list.classList.add('active');
        } else {
          list.classList.remove('active');
        }
      });
  
      resumeTabs.forEach((tab, i) => {
        if (i === index) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }
  
    // Handle Review Tab Switching
    if (type === 'review') {
      const reviews = document.querySelectorAll('.review-list');
      const reviewTabs = document.querySelectorAll('.review-tabs .tab');
  
      reviews.forEach((list, i) => {
        if (i === index) {
          list.classList.add('active');
        } else {
          list.classList.remove('active');
        }
      });
  
      reviewTabs.forEach((tab, i) => {
        if (i === index) {
          tab.classList.add('active');
        } else {
          tab.classList.remove('active');
        }
      });
    }
  }
  