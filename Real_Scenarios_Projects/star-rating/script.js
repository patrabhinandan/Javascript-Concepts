const allStars = document.querySelectorAll('.star');
const ratingDes = document.querySelector(".ratingDesc");
allStars.forEach((star,i)=>{
    star.addEventListener('click',()=>{
        const clickedStar = i + 1;
        ratingDes.innerHTML = `${clickedStar} of 5`
        allStars.forEach((elem,j)=>{            
            if(j<clickedStar){
                elem.innerHTML = '&#9733'
            }else{
                elem.innerHTML = '&#9734'
            }
        })
    });
    // star.addEventListener('mouseover',()=>{
    //     const clickedStar = i + 1;
    //     allStars.forEach((elem,j)=>{            
    //         if(j<clickedStar){
    //             elem.innerHTML = '&#9733'
    //         }else{
    //             elem.innerHTML = '&#9734'
    //         }
    //     })
    // })
    // star.addEventListener('mouseout',()=>{
    //     const clickedStar = i + 1;
    //     allStars.forEach((elem,j)=>{      
    //         elem.innerHTML = '&#9734'     
            
    //     })
    // })
})
