
let addBtn = document.querySelector('.add-btn')
let modalCont = document.querySelector('.modal-cont')
let mainCont = document.querySelector('.main-cont')
let taskArea = document.querySelector('.textArea-cont')

let isModalVisible = false 

const lockClass = 'fa-lock'
const unlockClass = 'fa-lock-open'

//If user is clicking on add-btn, then the modal should pop-up
addBtn.addEventListener('click', function() {
    //! -> reverses the value, if it is TRUE, it will become false and vice-vera.
    isModalVisible = !isModalVisible

    if(isModalVisible === true) {
        //Make the modal visible.
        modalCont.style.display = "flex"; 
    } else {
        //Hide the modal.
        modalCont.style.display = "none";
    }
})

//Event to create a ticket when user presses shift key.
modalCont.addEventListener('keydown', function(event) {
    if(event.key == "Shift") {
        //Create a ticket.

        let ticketCont = document.createElement('div')
        ticketCont.setAttribute("class", "ticket-cont")

        let ticketId = shortid() // UUID - Universally Unique Identifiers.

        //Get the task description from the text Area.
        let taskText = taskArea.value 

        ticketCont.innerHTML = `
            <div class="ticket-color" style="background-color: lightpink"></div>
            <div class="ticket-id">${ticketId}</div>
            <div class="task-area">${taskText}</div>
            <div class="ticket-lock">
                <i class="fa-solid fa-lock"></i>
            </div>
        `

        mainCont.appendChild(ticketCont)

        //After createing the ticket, make the modal container hidden.
        modalCont.style.display = "none"
        isModalVisible = false

        taskArea.value = ""

        //Handle lock for this ticket.
        handleLock(ticketCont)
    }
})

function handleLock(ticket) {
    let ticketLockCont = ticket.querySelector('.ticket-lock')
    let ticketLockIcon = ticketLockCont.children[0]
    let ticketTaskArea = ticket.querySelector('.task-area')

    ticketLockIcon.addEventListener('click', function() {
        if(ticketLockIcon.classList.contains(lockClass)) {
            //remove fa-lock and add fa-lock-open
            ticketLockIcon.classList.remove(lockClass)
            ticketLockIcon.classList.add(unlockClass)

            //Make the task area editable.
            ticketTaskArea.setAttribute('contenteditable', 'true')
        } else {
            //remove fa-lock-open and add fa-lock
            ticketLockIcon.classList.remove(unlockClass)
            ticketLockIcon.classList.add(lockClass)

            //Make the task area non-editable.
            ticketTaskArea.setAttribute('contenteditable', 'false')
        }
    })
}

