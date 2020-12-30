const messageList = document.querySelector('#comment-list');
function queries(doc) {
    let li = document.createElement('li');
    li.style.float=' center';
    li.style.width= '60%';
    li.style.height='auto';
    li.style.padding='8px';
    li.style.color='white';
  
    var names = document.createElement('p');
    names.style.fontsize=100;
    names.style.color = 'white-dark';

    var coment = document.createElement('p');
    coment.style.fontsize=100;
    coment.style.color = 'white-dark';
    

    li.setAttribute('data-id', doc.id);
    names.textContent = doc.data().names;
    coment.textContent = doc.data().coment;


    li.appendChild(names);
    li.appendChild(coment);
    messageList.appendChild(li);
}
    // getting data
    db.collection('comments').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
            queries(doc);
        });
    });
   







