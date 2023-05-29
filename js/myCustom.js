// // Get the value of the 'hideFooter' query parameter from the URL
// const urlParams = new URLSearchParams(window.location.search);
// const hideFooter = urlParams.get('hideFooter');

// // If the 'hideFooter' parameter is present and set to 'true', hide the footer element
// if (hideFooter === 'true') {
//   document.querySelector('.footer-one').style.display = 'none';
// }


// This code execute when width is less than 991px

function applyFunctionality() {
    // Add your custom functionality here
    const menuLinks = document.querySelectorAll('.menu-item > a');
    // const outd = document.querySelectorAll('.sub-menu');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            const subMenu = link.nextElementSibling;
            subMenu.classList.toggle('active');
        });
    });
}

function checkWidth() {
    if (window.innerWidth < 991) {
        applyFunctionality();
    }
}

window.addEventListener('resize', checkWidth);
checkWidth();

// const menuLinks = document.querySelectorAll('.menu-item > a img');

// menuLinks.forEach(link => {
//   link.addEventListener('click', () => {
//     const subMenu = link.parentElement.nextElementSibling;
//     subMenu.classList.toggle('active');
//   });
// });

// ------------ scroll function  ------------
window.onscroll = (e) => {
    // ------------ scroll indicator ------------
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
    //------------- hide navbar on down scroll and show on up scroll -----------------
    if (prevScrollpos > window.pageYOffset) {
        document.getElementById("main-header").style.display = "block";
        // document.getElementById("info0ff").style.display = "none";
    } else {
        document.getElementById("main-header").style.display = "none";
        // document.getElementById("info0ff").style.display = "block";
    }
    prevScrollpos = window.pageYOffset;
}
let prevScrollpos = window.pageYOffset;
// ---------- scroll function end --------------


// <!-- ------------------- pop up windows feedback box -------------- -->
document.addEventListener('contextmenu', function (event) {
    event.preventDefault(); // Prevent the default context menu from showing

    const contextMenu = document.querySelector(".window-containerpop");
    contextMenu.style.display = 'block'; // Show the context menu
    contextMenu.style.left = event.pageX + 'px'; // Set the x-coordinate
    contextMenu.style.top = event.pageY + 'px'; // Set the y-coordinate

    // Add a click event listener to the document to hide the context menu when the user clicks outside of it
    document.addEventListener('click', function hideContextMenu(event) {
        if (!contextMenu.contains(event.target)) {
            contextMenu.style.display = 'none'; // Hide the context menu
            document.removeEventListener('click', hideContextMenu); // Remove the event listener
        }
    });
});
//   ----------------- end -------------------------


// ================================== network status =================
window.addEventListener('online', function (e) {
    // alert('You Are Back Online');
    document.querySelector('#ioffon').style.display = "block";
    document.querySelector('#ioffon p').innerHTML = 'You are back <b>online</b>...&#9729;';
    setTimeout(() => {
        document.querySelector('#ioffon').style.display = "none";
    }, 5000);
}, false);
window.addEventListener('offline', function (e) {
    // alert('You went offline');
    document.querySelector('#ioffon').style.display = "block";
    document.querySelector('#ioffon p').innerHTML = 'You went <b>offline</b>... &#9888;';
    setTimeout(() => {
        document.querySelector('#ioffon').style.display = "none";
    }, 5000);
}, false);
// ============= end =====================

// current year in footer
const currentYear = new Date().getFullYear();
const currentYearSpan = document.getElementById("current-year");
currentYearSpan.textContent = currentYear;

// ================ cookie ====================
// if (document.cookie.indexOf('hideElements=true') === -1) {
// 	// Cookie doesn't exist, show all elements
// 	// console.log('Showing all elements');
// } else {
// 	// Cookie exists, hide elements
// 	document.getElementById('popoutaddinfo').classList.add('hidden');
// 	document.getElementById('info0ff').classList.add('hidden');
// }
// // Set the cookie
// var d = new Date();
// d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // set expiration date to 1 week from now
// var expires = "expires=" + d.toUTCString();
// document.cookie = "hideElements=true;" + expires + "; path=/";
// // document.cookie = 'hideElements=true; expires=Thu, 28 Apr 2024 00:00:00 UTC; path=/';


// document.addEventListener('click', function (event) {
//     var trigger = document.querySelector('.main-header .navbar');
//     if (trigger !== event.target && !trigger.contains(event.target)) {
//         document.querySelector('.main-header .navbar-collapse').classList.remove('show');
//         document.body.classList.remove('nav-open');
//     }
// });

// document.querySelector('.c-toggler').addEventListener('click', function () {
//     document.body.classList.add('nav-open');
// });




		// const removeLink = (event) => {
		// 	event.preventDefault(); // prevent default behavior of following the link
		// 	const link = event.target;
		// 	const parent = link.parentNode;
		// 	parent.removeChild(link); // remove the link from its parent element
		// }

		// // attach the onclick function to the link
		// const link = document.querySelectorAll("a");
		// link.onclick = removeLink;

		// // get a reference to the video link element
		// const videoLink = document.querySelector(".video-open .playbtn");

		// // add a click event listener to the document
		// document.addEventListener("click", (event) => {
		// 	// check if the click event occurred outside of the iframe
		// 	if (event.target.nodeName !== "IFRAME" && !event.target.closest("iframe")) {
		// 		// remove the href attribute from the video link
		// 		videoLink.removeAttribute("href");
		// 	}
		// });

		// // get a reference to the video link element
		// const videoLink = document.querySelector(".video-open.playbtn a");

		// // get a reference to the div element with class "mfp-iframe-scaler"
		// const iframeScaler = document.querySelector(".mfp-iframe-scaler");

		// // add a click event listener to the document
		// document.addEventListener("click", (event) => {
		// 	// check if the click event occurred outside of the iframe scaler div
		// 	if (!iframeScaler.contains(event.target)) {
		// 		// remove the href attribute from the video link
		// 		videoLink.removeAttribute("href");
		// 	}
		// });




        // apply css after 5 second 
        // setTimeout(function() {
        //     var style = document.createElement('style');
        //     style.innerHTML = '.VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; margin: 0 !important; padding: 0 !important; }';
        //     document.head.appendChild(style);
        //   }, 5000);