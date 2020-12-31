
            var id=window.location.hash.replace('#','');
            const form = document.querySelector('#articleform');
            db.collection('articles').doc(id).get().then(art=>{
            
            document.getElementById('title').innerHTML=art.data().title;
            document.getElementById('bodie').innerHTML=art.data().bodie;
            document.getElementById('conclusion').innerHTML=art.data().conclusion;
  
            });