'use strict';

// works
const digitalOffering = document.getElementById('digitalOffering');
const integlish = document.getElementById('integlish');

const works = document.getElementById('works');
const allWorks = [...works.querySelectorAll('.work')];

function resetUI() {
  allWorks.forEach((el) => el.classList.remove('active'));
}

function displayNextWork() {
  const indexOfActiveWork = allWorks.findIndex((el) => el.classList.contains('active'));
  console.log(indexOfActiveWork);
  setTimeout(() => {
    resetUI();
    if (indexOfActiveWork + 1 == allWorks.length) {
      allWorks[0].classList.add('active');
    } else {
      allWorks[indexOfActiveWork + 1].classList.add('active');
    }
    displayNextWork();
  }, 2000);
}

allWorks[0].classList.add('active');
displayNextWork();
