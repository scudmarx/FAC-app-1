CakeApp = {
    dateElem: null,
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
