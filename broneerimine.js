const monthYearElement = document.getElementById('monthAndYear');
const datesElement = document.getElementById('dates');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');

let currentDate = new Date();

const updateCalendar = () => {
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    const firstDay = new Date(currentYear, currentMonth,0);
    const lastDay = new Date(currentYear, currentMonth+1, 0);
    const totalDays = lastDay.getDate();
    const indexFirstDay = firstDay.getDay();
    const indexLastDay = lastDay.getDay();

    const monthAndYearString = currentDate.toLocaleString('default', {month:'long', year:'numeric'});
    monthYearElement.textContent = monthAndYearString;

    let datesHTML = '';

    for (let i = indexFirstDay; i >0; i--){
        const prevDate = new Date(currentYear, currentMonth, 0-i+1);
        datesHTML += `<div class="date inactive">${prevDate.getDate()}</div>`;
    }

    for (let i=1; i<=totalDays;i++) {
        const date = new Date(currentYear, currentMonth,i);
        const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
        datesHTML += `<div class="date ${activeClass}">${i}</div>`;
    }

    for (let i=1; i<=7-indexLastDay; i++) {
        const nextDate = new Date(currentYear, currentMonth+1,i)
        datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`;
    }

    datesElement.innerHTML = datesHTML;
}

previousButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
})

nextButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
})

updateCalendar();