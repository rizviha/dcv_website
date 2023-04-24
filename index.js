// isLanding = true;
// isLandingEnd = false;

// function preventDefault (event) {
//     event = event || window.event;
//     if (event.preventDefault) {
//         event.preventDefault();
//     }
//     event.returnValue = false;
// }

// const landingContent = document.querySelector('landingContent');

// landingContent.addEventListener('wheel', (e) => {
//     e.preventDefault();
//     landingContent.scrollBy({
//     top: 0,
//     left: e.deltaY,
//     behavior: 'smooth'
//     });
// });

// landingContent.onmouseover = function()
// {
//     isLanding = true;
//     console.log("landing content mouse over : true");
// }
// landingContent.onmouseout =function()
// {
//     isLanding = false;
//     console.log("landing content mouse over : true")
// }

// const servicesContent = document.querySelector('servicesContent');

// servicesContent.addEventListener('wheel', (e) => {
//     e.preventDefault();
//     servicesContent.scrollBy({
//     top: 0,
//     left: e.deltaX,
//     behavior: 'smooth'
//     });
// });
