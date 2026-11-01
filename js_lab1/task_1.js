document.getElementById("btnConcerts").onclick = () => check_concerts(concerts)
const concResultBlock = document.getElementById("result")
const countryInput = document.getElementById("countryInput")
const countriesOutput = document.getElementById("countriesOutput")
countryInput.addEventListener("keypress", (e) => {
    if (e.key == "Enter") addCountry(e.target.value)
})

const numbersTableEl = document.getElementById("numbersTable")
const btnNumbers = document.getElementById("btnNumbers")

btnNumbers.addEventListener("click", task3)

const concerts = [
    { name: "Океан Ельзи",    place: "НСК Олімпійський", date: "2026-11-06" },
    { name: "Скрябін",        place: "",                 date: "2026-11-01" },
    { name: "Imagine Dragons", place: "Арена Львів",     date: "2026-11-20" },
    { name: "Бумбокс",        place: "Палац Спорту",     date: "2026-11-03" },
    { name: "Антитіла",       place: "",                 date: "2026-10-25" }
];

const ONE_DAY = 1000 * 60 * 60 * 24

const countries = []

function check_concerts(concerts) {
    const now = Date.now()
    const messages = []

    concerts.forEach((c) => {
        let { name, place } = c;
        const [year, month, day] = c.date.split("-").map(Number)
        const date = new Date(year, month - 1, day).getTime()
        const diffInDays = Math.ceil((date - now) / ONE_DAY)

        if (!place) place = "Невідоме місце проведення"
        
        switch(diffInDays) {
            case (5):
                messages.push(
                {
                    name,
                    place,
                    message: "Сьогодні останній день покупки квитка!"
                })
                break

            case (0):
                messages.push(
                {
                    name,
                    place,
                    message: "Сьогодні йде концерт"
                })
                break
        }
    })
    const messages_html = messages.map((m) => `
        <p>${m.name}, Місце проведення: ${m.place}, ${m.message}</p>
    `).join("")
    concResultBlock.innerHTML = messages_html;


}

function addCountry(country) {
    countryInput.value = "";
    countries.push(country);
    const countriesStr = countries.join(", ")
    countriesOutput.innerText = countriesStr
}

function task3() {
    const cells = [...numbersTableEl.querySelectorAll("td")]
    const numbers = cells.map((cell) => Number(cell.textContent.trim()))
    const ascendingNumbers = [...numbers].sort((a, b) => a - b)
    const fifthMinimum = ascendingNumbers[4]
    const thirdMaximum = ascendingNumbers.at(-3)

    cells.forEach((cell) => {
        const number = Number(cell.textContent.trim())
        cell.classList.remove("third-maximum", "fifth-minimum")

        if (number === thirdMaximum) cell.classList.add("third-maximum")
        if (number === fifthMinimum) cell.classList.add("fifth-minimum")
    })
}