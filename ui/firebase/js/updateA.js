
	let blogId=location.hash.replace("#","");
	let feature_img;
	let imageselector=document.querySelector("#img-header");
	let getBlogData=()=>{
		db.collection('articles').doc(blogId).get().then(doc=>{
			feature_img=document.querySelector("#view-image");
			document.forms['articleForm']['title'].value=doc.data().title;
            document.forms['articleForm']['bodie'].value=doc.data().bodie;
            document.forms['articleForm']['conclusion'].value=doc.data().conclusion;
			feature_img.src=doc.data().view_img;
			
		}).catch(err=>{
			
			alert(err);
		});
	}
	imageselector.addEventListener('change',evt=>{
	let img1= new Image();
	let img=URL.createObjectURL(evt.target.files[0]);
	feature_img.src=img;
})
	let updateblog = (evt)=>{
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width =feature_img.naturalWidth;
	canvas.height = feature_img.naturalHeight;
	ctx.drawImage(feature_img, 0, 0);
	let image= canvas.toDataURL('image/png');
	let title=document.forms['articleForm']['title'].value;
    let bodie=document.forms['articleForm']['bodie'].value;
    let conclusion=document.forms['articleForm']['bodie'].value;
	db.collection('articles').doc(blogId).update({
		title:title,
		view_img:image,
        bodie:bodie,
        conclusion:conclusion
	}).then(resp=>{
		window.location.href='viewArticle.html';
	}).catch(err=>{
		alert(err);
	})
}
getBlogData();
