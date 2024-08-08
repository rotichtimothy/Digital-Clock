function updateTime() {
    try {
        const timeElement = document.getElementById('time');
        const dateElement = document.getElementById('date');
        const dayElement = document.getElementById('day');
        const formatElement = document.getElementById('format');
        const format = formatElement ? formatElement.value : '24';

        if (!timeElement || !dateElement || !dayElement) {
            throw new Error("Clock elements not found");
        }

        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const year = now.getFullYear();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let period = '';

        if (format === '12') {
            period = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12; // Convert to 12-hour format
        }

        hours = String(hours).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds} ${period}`;
        dateElement.textContent = `${day}-${month}-${year}`;
        dayElement.textContent = daysOfWeek[now.getDay()];
        timeElement.className = period.toLowerCase(); // Apply AM/PM styling
    } catch (error) {
        console.error("Error updating time:", error.message);
    }
}

function updateTheme() {
    try {
        const themeElement = document.getElementById('theme');
        const selectedTheme = themeElement ? themeElement.value : 'dark';

        document.body.className = selectedTheme;
    } catch (error) {
        console.error("Error updating theme:", error.message);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const formatElement = document.getElementById('format');
    const themeElement = document.getElementById('theme');

    if (formatElement) {
        formatElement.addEventListener('change', updateTime);
    } else {
        console.error("Time format element not found");
    }

    if (themeElement) {
        themeElement.addEventListener('change', updateTheme);
    } else {
        console.error("Theme element not found");
    }

    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display the time immediately
    updateTheme(); // Initial call to set the theme immediately
});
