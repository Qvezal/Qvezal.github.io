//video
const videobtn = document.querySelector("#videobtn")
videobtn.addEventListener("click", () => {
	const video = document.querySelector(".yt")
	const videotext = document.querySelector(".video")
	
	video.style.display = "block";
//	videotext.style.display = "none";
	videotext.classList.add("video-active");
})
//logo
// const logo = document.querySelector('#Logo')
// logo.addEventListener("click", ()=> {
// 	console.log('click')
// 	document.location.replace("index.html")
// })
