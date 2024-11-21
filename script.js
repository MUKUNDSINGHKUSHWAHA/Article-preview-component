
const shareButton = document.getElementById("desktop-share-btn");
// console.log(shareButton);
const share = document.querySelector(".share-shape-container");
// console.log(share);


shareButton.addEventListener("click" , ()=>{
    share.classList.toggle("display-none");
    // console.log(share);
})


const mobileAuthorArea = document.querySelector(".mobile-author-area");
const mobileSocialSharingBar = document.querySelector(".mobile-social-sharing-bar");
const mobileShareBtnContainer = document.querySelector(".mobile-share-btn-container");

// console.log(mobileShareBtnContainer);

mobileShareBtnContainer.addEventListener("click", ()=>{
    mobileAuthorArea.style.display = "none";
    mobileSocialSharingBar.style.display = "flex"
    // console.log("i am here");
})


const mobileSocialSharingbtn = document.querySelector(".mobile-social-sharing-btn-container")



mobileSocialSharingbtn.addEventListener("click", ()=>{
    mobileAuthorArea.style.display = "flex";
    mobileSocialSharingBar.style.display = "none"
})


