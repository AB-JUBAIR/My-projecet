// Categoris ---------API
const loadCategories = () => {
  const API = "https://openapi.programming-hero.com/api/phero-tube/categories";
  fetch(API)
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error));
};

// Videos ---------API

const loadVideos = () => {
  const API = "https://openapi.programming-hero.com/api/phero-tube/videos";
  fetch(API)
    .then((res) => res.json())
    .then((data) => displayVideos(data.videos))
    .catch((error) => console.log(error));

};
// dinamic api for categories ways videos 
const loadCategoriesId = (id) => {
   const API = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
// call the function for remove the active btn
removeActiveBtn()
      const activeButton = document.getElementById(`btn-${id}`);
      // for active button bg color
activeButton.classList.add('active')
      displayVideos(data.category)})
    .catch((error) => console.error(error));  
}

// function for remove active btn
const removeActiveBtn = () => {
  const catBtn = document.getElementsByClassName('catagory-btn')
  for (let btn of catBtn) {
    btn.classList.remove('active')
  }
}
// ----------- API Object --------
const cardDemo = {
  category_id: "1001",
  video_id: "aaal",
  thumbnail: "https://i.ibb.co/hdtZYbB/enchnting.jpg",
  title: "Enchanted Harmonies",
  authors: [
    {
      profile_picture: "https://i.ibb.co/jh1q2F3/shopia.jpg",
      profile_name: "Sophia Williams",
      verified: false,
    },
  ],
  others: {
    views: "7.6K",
    posted_date: "16450",
  },
  description:
    "'Enchanted Harmonies' by Sophia Williams enchants listeners with its delicate, soothing sounds and melodic complexity. Garnering 7.6K views, this piece is perfect for those seeking an immersive musical experience that blends elegance with emotion, offering a unique soundscape that resonates deeply with its audience.",
};
// display---videos

const displayVideos = (videos) => {

  const videosContainer = document.getElementById("videos");
    videosContainer.innerHTML = ""; // for divide the videos categories
    
//  conditon for no videos
if (videos.length == 0) {
  videosContainer.classList.remove('grid')
    videosContainer.innerHTML = ` 
    <div class="min-h-[300px] w-full flex flex-col gap-5 justify-center items-center">
    <img src="../PH-Tube/Icon.png" alt="">
    <p class = "text-gray-500 text-center font-bold"> No Videos Found </p>
</div>`
    return;
}
else {
  videosContainer.classList.add('grid')
}

  videos.forEach((video) => {
    console.log(video);
    const videoCard = document.createElement("div");
    videoCard.classList = "card card-compact";
    videoCard.innerHTML = `
    <figure class = "h-[200px]">
    <img src=${video.thumbnail}
      alt="Shoes" class ="h-full w-full object-cover" />
      ${video.others.posted_date?.length == 0? "" : 
       `<span class="absolute text-xs right-2 bottom-[100px] bg-black text-white rounded p-[2px]"> 
       ${getTimeString(video.others.posted_date)} </span>`}
  </figure>
  <div class="px-0 py-2 flex gap-2">
  <div>
    <img class="w-10 h-10 rounded-full" src=${
      video.authors[0].profile_picture
    } alt="">
</div>
<div>
    <h2 class="font-bold"> ${video.title}</h2><div class= " flex  items-center">
        <p2 class="text-gray-400"> ${video.authors[0].profile_name}</p2>
${video.authors[0].verified === true
    ? '<img class= "w-4 h-4" src="../ph-tube-resources/icons8-verified-badge-48.png" alt=""> </img>'
    : ""
}
    </div>
    <p2 class=  "text-gray-400">${video.others.views} views</p2>
</div>
  </div>
    
    `;
    videosContainer.append(videoCard);
  });
};





// display---Categories-----button
const displayCategories = (categoris) => {
  const categoriesContainer = document.getElementById("categoriesContainer");
  categoris.forEach((item) => {
    console.log(item);
    const buttonContainer = document.createElement("div");
buttonContainer.innerHTML = `
<button id="btn-${item.category_id}" class="btn catagory-btn" onclick="loadCategoriesId(${item.category_id})">
${item.category}
</button>`
    categoriesContainer.append(buttonContainer);
  });
};






// ------------- fucntion call 
loadCategories();
loadVideos();




//  convert to time formate 
function getTimeString(time) {
  const hour = parseInt(time/3600);
  let remainigSecond = time %3600;
  const minuits = parseInt( remainigSecond / 60);
  remainigSecond = remainigSecond % 60
  return `${hour}h ${minuits}m ${remainigSecond}seconds ago`
}
