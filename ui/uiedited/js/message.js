const messageList = document.querySelector('#message-list');
const form = document.querySelector('#contactform');
// create element that match with html design

function queries(doc) {
    let li = document.createElement('li');
    li.style.background = 'rgba(0, 0, 0, .5)';
    li.style.float=' center';
    li.style.width= '60%';
    li.style.height='auto';
    li.style.padding='8px';
    li.style.color='white';
    let name = document.createElement('div');
    name.style.fontsize=50;
    name.style.color = 'yellow';
    let email = document.createElement('div');
    let subject = document.createElement('div');
    let message = document.createElement('div');
    
    

    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    email.textContent = doc.data().email;
    subject.textContent = doc.data().subject;
    message.textContent = doc.data().message;


    li.appendChild(name);
    li.appendChild(email);
    li.appendChild(subject);
    li.appendChild(message);
    messageList.appendChild(li);

}
// getting data
    db.collection('contact').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        queries(doc);
    });
});


