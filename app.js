/** @format */
function addEvent(header) {
	const content = header.nextElementSibling;


    const allheader = document.querySelectorAll(".container-button");

    allheader.forEach( (event) =>{
        if(event !== header && event.classList.contains('active')){
            addEvent(event);
        }
    });

	header.classList.toggle("active");

	if (content.style.display === "block") {
		content.style.display = "none";
	} else {
		content.style.display = "block";
	}
}
