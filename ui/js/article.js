
let imageselector=document.querySelector("#img-header");
let view_img=document.querySelector("#view-image");
imageselector.addEventListener('change',evt=>{
	let img1= new Image();
	let img=URL.createObjectURL(evt.target.files[0]);

	view_img.src=img;
})
let savearticle = (evt)=>{
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width =view_img.naturalWidth;
	canvas.height = view_img.naturalHeight;
	view_img.crossOrigin = 'anonymous';
	ctx.drawImage(view_img, 0, 0);
	let image= canvas.toDataURL();
	let title=document.forms['articleForm']['title'].value;
    let bodie=document.forms['articleForm']['bodie'].value;
	let conclusion=document.forms['articleForm']['conclusion'].value;

	db.collection('articles').add({
		title:title,
		view_img:image,
        bodie:bodie,
        conclusion:conclusion,
		views:0,
		comments:0
	}).then(resp=>{
		document.forms['articleForm']['title'].value="";
        document.forms['articleForm']['bodie'].value="";
        document.forms['articleForm']['conclusion'].value="";
		view_img.src="";
	}).catch(err=>{
	});
}
	
