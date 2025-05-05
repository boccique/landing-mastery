async function checkWebsite(url) {
    try {
        let response = await fetch("violations.json");
        let data = await response.json();

        for (let category in data) {
            if (data[category].websites.includes(url)) {
                return {
                    violation: category,
                    description: data[category].description,
                    law: data[category].law,
                    finePerson: data[category].finePerson,
                    fineCompany: data[category].fineCompany
                };
            }
        }
        return { violation: "Не найдено", description: "Сайт не числится в базе нарушителей." };
    } catch (error) {
        console.error("Ошибка загрузки данных:", error);
        return { violation: "Ошибка", description: "Не удалось загрузить данные. Попробуйте позже." };
    }
}

async function analyzeURL() {
    let url = document.getElementById("urlInput").value.trim();
    let result = document.getElementById("result");

    if (!url) {
        result.innerHTML = "<p style='color: red;'>Введите ссылку!</p>";
        return;
    }

    let violationInfo = await checkWebsite(url);

    if (violationInfo.violation === "Не найдено") {
        result.innerHTML = "<p style='color: green;'>Нарушений не найдено!</p>";
    } else if (violationInfo.violation === "Ошибка") {
        result.innerHTML = `<p style='color: red;'>${violationInfo.description}</p>`;
    } else {
        result.innerHTML = `
            <h2 style='color: red;'>Обнаружено нарушение!</h2>
            <p><strong>Категория:</strong> ${violationInfo.description}</p>
            <p><strong>Закон:</strong> ${violationInfo.law}</p>
            <p><strong>Штраф для физ. лиц:</strong> ${violationInfo.finePerson}</p>
            <p><strong>Штраф для юр. лиц:</strong> ${violationInfo.fineCompany}</p>
        `;
    }
}

document.getElementById("checkButton").addEventListener("click", analyzeURL);
