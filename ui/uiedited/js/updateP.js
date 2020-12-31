
	let portofolioId=location.hash.replace("#","");
	let feature_img;
	let imageselector=document.querySelector("#img-header");
	let getPortofolioData=()=>{
		db.collection('portofolios').doc(portofolioId).get().then(doc=>{
			feature_img=document.querySelector("#view-image");
			document.forms['portofolioForm']['title'].value=doc.data().title;
            document.forms['portofolioForm']['bodie'].value=doc.data().bodie;
            document.forms['portofolioForm']['conclusion'].value=doc.data().conclusion;
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
	let updateprot = (evt)=>{
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d');
	canvas.width =feature_img.naturalWidth;
	canvas.height = feature_img.naturalHeight;
	ctx.drawImage(feature_img, 0, 0);
	let image= canvas.toDataURL('image/png');
	let title=document.forms['portofolioForm']['title'].value;
    let bodie=document.forms['portofolioForm']['bodie'].value;
    let conclusion=document.forms['portofolioForm']['conclusion'].value;
	db.collection('portofolios').doc(portofolioId).update({
		title:title,
		view_img:image,
        bodie:bodie,
        conclusion:conclusion
	}).then(resp=>{
		window.location.href='viewPortofolio.html';
	}).catch(err=>{
		alert(err);
	})
}
getPortofolioData();
