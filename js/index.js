const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo

//Set Images
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.getElementById('middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//Set Text-Content
let a = document.querySelectorAll('a');
let nav = Object.values(siteContent['nav']);
let navIndex = 0;

a.forEach(element => {
	element.textContent = nav[navIndex];
	navIndex++;
});

let ctaHTML = document.querySelector('.cta-text').children;
console.log();
let cta = Object.values(siteContent['cta'])
ctaIndex = 0;

Array.from(ctaHTML).forEach(child => {
	child.textContent = cta[ctaIndex];
	navIndex++;
})

let topContentHTML = document.querySelector('.top-content').children;
let bottomContentHTML = document.querySelector('.bottom-content').children;
let mainContent = Object.values(siteContent['main-content']);

//Remove Image
let index = mainContent.indexOf('img/mid-page-accent.jpg');
if (index > -1) {
	mainContent.splice(index, 1);
}
let mcIndex = 0;

Array.from(topContentHTML[0].children).forEach(child => {
	child.textContent = mainContent[mcIndex];
	mcIndex++;
})

Array.from(topContentHTML[1].children).forEach(child => {
	child.textContent = mainContent[mcIndex];
	mcIndex++;
})

Array.from(bottomContentHTML[0].children).forEach(child => {
	child.textContent = mainContent[mcIndex];
	mcIndex++;
})

Array.from(bottomContentHTML[1].children).forEach(child => {
	child.textContent = mainContent[mcIndex];
	mcIndex++;
})

Array.from(bottomContentHTML[2].children).forEach(child => {
	child.textContent = mainContent[mcIndex];
	mcIndex++;
})

let footer = document.querySelector('contact');


