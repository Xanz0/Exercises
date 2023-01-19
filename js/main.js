const elCards = document.querySelector("#cards");
const elSearchForm = document.querySelector("#searchForm");
const elSearch = document.querySelector("#search");
const elSelect = document.querySelector("#select");
const elOption = document.querySelector("#option");
const formEdit = document.querySelector("#form-edit")
let searchPost = [];
let newPosts = [];
let filteredPost = [];
/**********************Render************************/
function renerCard(array,element=elCards){
	elCards.innerHTML="";

for (let i = 0; i < array.length; i++) {
    const data = array[i]
    const newCard=document.createElement("div");
    newCard.className="card d-flex col-3 m-4 p-3  "
    newCard.innerHTML=`
                            <div class="card-body   ">
                              <h5 class="card-title">${data.name}</h5>
                              <p class="card-text text-primary">${data.email}</p>
                              <p class="card-text">${data.body}</p>
                              
                              <button class="deleteBtn btn btn-danger me-5"
                              data-id="${data.id}" >Delete</button>

                            <button data-bs-toggle="modal" data-bs-target="#exampleModal" class="editBtn btn btn-warning ms-5 " >edit</button>
                            </div>
    `;
    	element.appendChild(newCard);
	}
}
renerCard(data);
/***************** Delete & Edit *************************/


elCards.addEventListener("click", (evt) => {
	let target = evt.target;
	newPosts = [];

	if (target.className.includes("deleteBtn")) {
		let id = Number(target.dataset.id);
		console.log(id)
		data.forEach((elPost) => {
			if (elPost.id !== id) {
				newPosts.push(elPost);
			}
            
		});
		data=newPosts;
		renerCard(data);
	}
	if(target.className.includes("editBtn")){
		let id = Number(target.dataset.id);
		

		data.forEach((post)=>{
			if (post.id===id) {
				const name = formEdit.name;
				const email = formEdit.email;
				const body = formEdit.body;
				name.value=post.name;
				email.value=post.email;
				body.value=post.body;
				
			}
		});
	}
});
/**********************Select******************/
for (let i = 0; i < 100; i++) {
	const option = document.createElement("option");
	elSelect.appendChild(option);

	option.textContent = elSelect.length - 1;
}








elSelect.addEventListener("change", () => {
	const type = elSelect.value;

	filteredPost = [];

	if (type == "All posts") {
		renerCard(data);
	} else {
		data.forEach((post) => {
			if (post.postId == type) {
				filteredPost.push(post);
			}
		});

		renerCard(filteredPost);
	}
});
/*************************Search*************************/
elSearchForm.addEventListener("input", (evt) => {
	evt.preventDefault();
	searchPost = [];

	let value = elSearch.value;

	data.forEach((evt) => {
		if (evt.name.toLowerCase().includes(value.toLowerCase())) {
			searchPost.push(evt);
            
		}
        
	});
    
	renerCard(searchPost);
});






















