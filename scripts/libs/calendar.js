document.addEventListener("DOMContentLoaded", function() {
    const calendarBody = document.getElementById("calendar-body");
    const monthYear = document.getElementById("month-year");
    const prevMonthButton = document.getElementById("prev-month");
    const nextMonthButton = document.getElementById("next-month");

    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    // カレンダーの作成
    function createCalendar(month, year) {
        calendarBody.innerHTML = ""; // カレンダーをクリア

        // 今月の最初の日とその曜日
        const firstDay = (new Date(year, month).getDay() + 6) % 7; // 月曜始まりに変更
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // 前月の最後の日数
        const prevMonthDays = new Date(year, month, 0).getDate();

        monthYear.textContent = `${year}年 ${month + 1}月`;

        let date = 1;
        let nextMonthDate = 1;

        // 行を生成し、今月の日付が終了したら終了
        for (let i = 0; date <= daysInMonth; i++) { 
            const row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement("td");

                // 土曜の列に「saturday」クラスを追加
                if (j === 5) {
                    cell.classList.add("saturday");
                }

                // 日曜の列に「sunday」クラスを追加
                if (j === 6) {
                    cell.classList.add("sunday");
                }

                if (i === 0 && j < firstDay) {
                    // 前月の日付を表示
                    cell.textContent = prevMonthDays - (firstDay - j - 1);
                    cell.classList.add("grayed-out"); // グレーアウト
                } else if (date > daysInMonth) {
                    // 翌月の日付を表示
                    cell.textContent = nextMonthDate++;
                    cell.classList.add("grayed-out"); // グレーアウト
                } else {
                    // 今月の日付を表示
                    cell.textContent = date;

                    if (date === currentDate.getDate() && year === currentDate.getFullYear() && month === currentDate.getMonth()) {
                        cell.classList.add("active"); // 今日の日付をハイライト
                    }

                    date++;
                }
                row.appendChild(cell);
            }
            calendarBody.appendChild(row);
        }
    }

    // 月を変更するボタンのイベントリスナー
    prevMonthButton.addEventListener("click", function() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        createCalendar(currentMonth, currentYear);
    });

    nextMonthButton.addEventListener("click", function() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        createCalendar(currentMonth, currentYear);
    });

    // デフォルトのカレンダーを表示
    createCalendar(currentMonth, currentYear);
});
