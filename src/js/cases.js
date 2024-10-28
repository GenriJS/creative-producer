const switches = document.querySelectorAll('.case__switch');

switches.forEach(switchElement => {
  switchElement.addEventListener('click', function() {
    const caseElement = this.closest('.case'); 
    const description = caseElement.querySelector('.case__description'); 
    
    switches.forEach(otherSwitch => {
      const otherCaseElement = otherSwitch.closest('.case');
      const otherDescription = otherCaseElement.querySelector('.case__description');

      if (otherCaseElement !== caseElement) {
        otherSwitch.classList.remove('active');
        otherDescription.style.height = null;
      }
    });

    this.classList.toggle('active');
    if (description.style.height) {
      description.style.height = null;
    } else {
      description.style.height = `${description.scrollHeight}px`;
    }
  });
});