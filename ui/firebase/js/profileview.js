const messageList = document.querySelector('#message-list');
const form = document.querySelector('#experienceform');
// create element that match with html design

function queries(doc) {
    let li = document.createElement('li');
    li.style.float=' center';
    li.style.width= '60%';
    li.style.height='auto';
    li.style.padding='8px';
    li.style.color='white';
    var update = document.createElement('span');
    update.className='upd_button',
    update.background='green';
	update.style.float='center';
    update.style.top = '0';
    update.style.right = '0';
    var experience = document.createElement('div');
    experience.style.fontsize=100;
    experience.style.color = 'white-dark';
    

    li.setAttribute('data-id', doc.id);
    experience.textContent = doc.data().experience;
    update.textContent='UPDATE';


    li.appendChild(experience);
    li.appendChild(update)
    
    messageList.appendChild(li);
    update.addEventListener('click', (e) => {
        e.stopPropagation();
        var id = e.target.parentElement.getAttribute('data-id');
        window.location.href = 'index2.html#' + id
    });
}


// getting data
    db.collection('profile').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        queries(doc);
    });
});

/* saving data*/
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('profile').add({
        experience: form.experience.value,
        
    });
    alert('profile added')
    form.experience.value = '';
    
});


