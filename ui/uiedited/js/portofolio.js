
let imageselector=document.querySelector("#img-header");
let view_img=document.querySelector("#view-image");
imageselector.addEventListener('change',evt=>{
	let img1= new Image();
	let img=URL.createObjectURL(evt.target.files[0]);

	view_img.src=img;
})
let saveportofolio = (evt)=>{
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width =view_img.naturalWidth;
	canvas.height = view_img.naturalHeight;
	view_img.crossOrigin = 'anonymous';
	ctx.drawImage(view_img, 0, 0);
	let image= canvas.toDataURL();
	let title=document.forms['portofolioForm']['title'].value;
    let bodie=document.forms['portofolioForm']['bodie'].value;
	let conclusion=document.forms['portofolioForm']['conclusion'].value;

	db.collection('portofolios').add({
		title:title,
		view_img:image,
        bodie:bodie,
        conclusion:conclusion,
	}).then(resp=>{
		document.forms['portofolioForm']['title'].value="";
        document.forms['portofolioForm']['bodie'].value="";
        document.forms['portofolioForm']['conclusion'].value="";
		view_img.src="";
	}).catch(err=>{
	});
}
	
