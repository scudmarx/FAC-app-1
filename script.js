CakeApp = {
    dateElem: null,
    //updateTimer: window.setInterval(() => {CakeApp.setDateText()}, 600000),
    setDateText: () => {
        CakeApp.dateElem.textContent = (new Date).toLocaleDateString()
    },
    getDateElem: () => {
        return document.getElementById("dateTarget")
    },
    onLoad: () => {
        CakeApp.dateElem = CakeApp.getDateElem()
        CakeApp.setDateText()
    },
}
