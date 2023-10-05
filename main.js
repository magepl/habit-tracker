const hoursRemaining = 24;
console.log(hoursRemaining);

// QUERY SELECTORS

const newHabitBtn = document.querySelector('.new-habit-btn');
const newHabitModal = document.querySelector('.new-habit-modal');
const closeHabitModal = document.querySelector('.close-modal');
const addNewHabit = document.querySelector('.add-new-habit');
const newHabitName = document.querySelector('#habit-name');
const newHabitHours = document.querySelector('#habit-hours');
const habit = document.querySelector('.habit');

// EVENT LISTENERS

newHabitBtn.addEventListener('click', () => {
  newHabitModal.classList.add('new-habit-modal-active');
  console.log('open modal clicked');
});

closeHabitModal.addEventListener('click', () => {
  newHabitModal.classList.remove('new-habit-modal-active');
  console.log('close modal clicked');
});

addNewHabit.addEventListener('click', () => {
  const habitContainer = document.querySelector('.habit-container');

  const habit = document.createElement('li');
  habit.innerHTML = `${newHabitName.value} <span>${newHabitHours.value}</span>`;
  habit.classList.add('habit');
  habitContainer.appendChild(habit);
  habit.addEventListener('click', () => {
    habit.classList.toggle('habit-completed');
    console.log('habit clicked');
  });
});
