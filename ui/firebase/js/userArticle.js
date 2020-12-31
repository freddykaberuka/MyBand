const messageList = document.querySelector('.article');
// create element that match with html design
function queries(doc) {
    var li = document.createElement('div');
    li.className='liste',
    li.style.background = 'rgba(0, 0, 0, .5)';
    li.style.float=' left';
	li.style.width= '40%';
	li.style.padding='6px';

    
    let img=document.createElement('img');
    view_img=document.createElement('p');
    view_img.className='img';
    var title = document.createElement('span');
    var title = document.createElement('p');
    title.className='title',
    title.style.fontSize = '28';
    title.style.color = 'yellow';
    var bodie = document.createElement('span');
    var bodie = document.createElement('P');
    bodie.className='body',
    bodie.style.fontSize = '22';
    var readme = document.createElement('span');
    var readme = document.createElement('p');
    readme.className='readme',
    readme.style.top = '0';
    readme.style.right = '0';
    readme.style.color = 'blue';
    readme.style.width = '100px';
    readme.style.padding = '0 0';
    readme.style.cursor = 'pointer';
	readme.style.float='center';
	
    li.setAttribute('data-id', doc.id);
    img.src=doc.data().view_img;
    title.textContent = doc.data().title;
    bodie.textContent = doc.data().bodie;
    readme.textContent = 'Read more...';
	




    li.appendChild(img);
    li.appendChild(title);
    li.appendChild(bodie);
    li.appendChild(readme);
    messageList.appendChild(li);

 //locate single page
    readme.addEventListener('click', (e) => {
        e.stopPropagation();
        var id = e.target.parentElement.getAttribute('data-id');
        window.location.href = 'singleb.html#' + id
    });

}
// getting data
db.collection('articles').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        queries(doc);
    });
});