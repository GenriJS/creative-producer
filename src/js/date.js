function getAge(birthDateString) {
  const today = new Date();
  const birthDate = new Date(birthDateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}


const birthDate = "2000-03-25";
const age = getAge(birthDate);
document.getElementById("currentAge").textContent = age;


const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;