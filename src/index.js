
const tableBody = document.querySelector("#table-body")
const winnersec = document.querySelector('#winner')

const renderGroups = (group) => {
    const innerTr = document.createElement('tr')
    innerTr.innerHTML = 
    `<td>${group.college.name}</td> 
    <td>${group.name}</td> 
    <td>${group.membership}</td> 
    <td>${group.college.division}</td> 
    <td><img src='./assets/trophy.png' id=${group.id}
    data-id='${group.id}'/></td>`

    tableBody.appendChild(innerTr)

    const img = innerTr.querySelector('td img')


    console.log(img.dataset.id)
}

allGroups = []

const callRender = () => {
    allGroups[0].forEach(group => {
        renderGroups(group)
    })
}


getGroups()
    .then(groups => allGroups.push(groups))
    .then(groups =>
        callRender()
        )
    

tableBody.addEventListener('click', event => {
    if (event.target.tagName === "IMG" ) {
        const tr = event.target.parentElement.parentElement

        // tableBody.innerHTML = ``

        // callRender()

        tr.parentNode.removeChild(tr)
        
        const el = tr.querySelector("td")
        
        console.log(el.innerHTML)

        winnersec.innerHTML = `Winner: ${el.innerHTML}`
        
    }
})