const switches = document.querySelectorAll('.case__switch');

function handleSingleColumnSwitch() {
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
}

function handleTwoColumnSwitch() {
  switches.forEach(switchElement => {
    switchElement.addEventListener('click', function() {
      const caseElement = this.closest('.case'); 
      const description = caseElement.querySelector('.case__description'); 

      switches.forEach(otherSwitch => {
        const otherCaseElement = otherSwitch.closest('.case');
        const otherDescription = otherCaseElement.querySelector('.case__description');

        if (otherCaseElement !== caseElement && !areInSameRow(caseElement, otherCaseElement)) {
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
}

function areInSameRow(case1, case2) {
  const rowGroups = [
    ['case-1', 'case-2'],
    ['case-4', 'case-3'],
    ['case-5', 'case-6']
  ];
  const case1Id = case1.getAttribute('id');
  const case2Id = case2.getAttribute('id');
  
  return rowGroups.some(row => row.includes(case1Id) && row.includes(case2Id));
}

function setupSwitchHandlers() {
  if (window.matchMedia('(min-width: 770px)').matches) {
    handleTwoColumnSwitch();
  } else {
    handleSingleColumnSwitch();
  }
}

setupSwitchHandlers();
window.addEventListener('resize', setupSwitchHandlers);