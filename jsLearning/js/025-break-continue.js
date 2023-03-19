// -------------- Break - Continue ----------------

const LOREM = ['lorem', 'ipsum', 'dolor', 'amet', 'consectetur,', 'adipisicing', 'elit']

const UL_DOM = document.querySelector("#userList")

for (let i = 0; i < LOREM.length; i++){

    if(LOREM[i] == "amet") {continue}
    
    let LI_DOM = document.createElement("li")
    LI_DOM.innerHTML = LOREM[i]
    UL_DOM.append(LI_DOM)

}