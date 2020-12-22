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
    
    var experience = document.createElement('div');
    experience.style.fontsize=100;
    experience.style.color = 'white-dark';
    

    li.setAttribute('data-id', doc.id);
    experience.textContent = doc.data().experience;
    


    li.appendChild(experience);
    messageList.appendChild(li);
    
    
}


// getting data
    db.collection('profile').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        queries(doc);
    });
});



