const switches = document.querySelectorAll('.case__switch');

function handleSingleColumnSwitch() {
  switches.forEach(switchElement => {
    switchElement.addEventListener('click', debounce(function() {
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
    }, 10));
  });
}

function handleTwoColumnSwitch() {
  switches.forEach(switchElement => {
    switchElement.addEventListener('click', debounce(function() {
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
    }, 10));
  });
}

function areInSameRow(case1, case2) {
  const rowGroups = [
    ['case-1', 'case-8'],
    ['case-9', 'case-5'],
    ['case-3', 'case-2'],
    ['case-4', 'case-6']
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

let debounceTimer;
function debounce(func, delay) {
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
}

setupSwitchHandlers();
window.addEventListener('resize', setupSwitchHandlers);