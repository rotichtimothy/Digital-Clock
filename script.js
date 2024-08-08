function updateTime() {
    try {
        const timeElement = document.getElementById('time');
        if (!timeElement) {
            throw new Error("Clock element not found");
        }

        const now = new Date();
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');

        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    } catch (error) {
        console.error("Error updating time:", error.message);
    }
}

function updateTheme() {
    const theme = document.getElementById('theme').value;
    document.body.className = theme;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateTime, 1000);
    updateTime(); // Initial call to display the time immediately

    const themeElement = document.getElementById('theme');
    themeElement.addEventListener('change', updateTheme);
    updateTheme(); // Set initial theme
});
