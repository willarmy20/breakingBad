
fetch(("data/data.json"))
.then((resp) => resp.json())
.then(data => {
    const charactersDiv = document.getElementById("charactersCard");
    const modal = document.getElementById("myModal")
    const imgForModal = document.getElementById("modalImage")

    data.Characters.forEach(character =>{
        const img = document.createElement("img")
        img.src = character.artwork[0]
        img.classList.add("cards")
        console.log(img)

        img.addEventListener("click", function(){
            const actorName = document.createElement("h2")
            actorName.textContent = character.name
            const portrayedBy = document.createElement("p");
            portrayedBy.textContent = "Portrayed By: " + character.portrayedBy
            const bio = document.createElement("p")
            bio.textContent = character.bio
            modal.style.display = "block";
            imgForModal.src = character.artwork2;
            const modalInfo = document.createElement("div")
            modalInfo.className = "modal-info"
            modalInfo.append(actorName)
            modalInfo.append(portrayedBy)
            modalInfo.append(bio)
            modal.append(modalInfo)
        })
        charactersDiv.appendChild(img)
    })
})

