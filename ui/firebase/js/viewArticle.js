const messageList = document.querySelector('.article');
// create element that match with html design
function queries(doc) {
    var li = document.createElement('li');
    li.style.background = 'rgba(0, 0, 0, .5)';
    li.style.float=' left';
	li.style.width= '40%';
	li.style.padding='6px';
    var update = document.createElement('span');
    update.className='upd_button',
	update.style.float='right';
    update.style.top = '0';
    update.style.right = '0';

    var trash = document.createElement('span');
    trash.className='del_button',
    trash.style.top = '0';
    trash.style.right = '0';
	trash.style.float='left';
    
    let img=document.createElement('img');
    view_img=document.createElement('p');
    var title = document.createElement('span');
    var title = document.createElement('p');
    title.style.fontSize = '28';
    title.style.color = 'yellow';
    var bodie = document.createElement('span');
    var bodie = document.createElement('P');
    bodie.style.fontSize = '22';
    
	
    li.setAttribute('data-id', doc.id);
    img.src=doc.data().view_img;
    title.textContent = doc.data().title;
    bodie.textContent = doc.data().bodie;
    trash.textContent = 'DELETE';
	update.textContent='UPDATE';
	




    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(bodie);
    li.appendChild(trash);
	li.appendChild(update)
    messageList.appendChild(li);

 // deleting data
 trash.addEventListener('click', (e) => {
    e.stopPropagation();
    var id = e.target.parentElement.getAttribute('data-id');
    db.collection('articles').doc(id).delete();
});
}
// getting data
db.collection('articles').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        queries(doc);
    });
});