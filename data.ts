export interface SingleNewsObjectProps {
	id: string;
	author?: string;
	title: string;
	image: string;
	description: string;
	url: string;
}

export interface NewsProps {
	news: Array<SingleNewsObjectProps>;
}

export const testNews = [
	{
		id: '1',
		title: 'Micro Frontends: 5 Common Mistakes to Avoid',
		author: 'Isuri Devindi',
		image: '/images/news1.jpeg',
		description: `Micro Frontends can either make your applications flexible and robust or become an overhead and hinder the growth of your project.
			And, there are many practices out there that might mislead any reader who is just entering into Micro Frontends.
			In this article, I will go through some of these common mistakes so that you can avoid them whenever possible...`,
		url: 'https://blog.bitsrc.io/micro-frontends-5-common-mistakes-to-avoid-4a35a37cad3d',
	},
	{
		id: '2',
		title: 'Netflix Cloud Packaging in the Terabyte Era',
		author: 'Xiaomei Liu',
		image: '/images/news2.jpeg',
		description: `Behind the scenes of the beloved Netflix streaming service and content, there are many technology innovations in media processing. 
		Packaging has always been an important step in media processing. After content ingestion, inspection and encoding, the packaging step encapsulates 
		encoded video and audio in codec agnostic container formats and provides features such as audio video synchronization, random access and DRM protection. 
		Our previous tech blog Packaging award-winning shows with award-winning technology detailed our packaging technology deployed on the streaming side...`,
		url: 'https://netflixtechblog.com/netflix-cloud-packaging-in-the-terabyte-era-d6869b4b84ae',
	},
	{
		id: '3',
		title: 'Building a type-safe dictionary in TypeScript',
		author: 'Gapur Kassym',
		image: '/images/news3.jpeg',
		description: `A dictionary is a common data structure in a programming language. As JavaScript developers, it’s important to work with 
		type-safe dictionaries because there will be conflicts or unexpected issues if we store different types of data within the same dictionary.
		In this article, we’ll cover how to build a type-safe dictionary using TypeScript...`,
		url: 'https://blog.logrocket.com/building-type-safe-dictionary-typescript/',
	},
	{
		id: '4',
		title: 'HTML Button Type – How to Add Buttons to your Website',
		author: 'Kolade Chris',
		image: '/images/news4.jpeg',
		description: `Buttons are an essential part of websites. You need them for various functionalities, from submitting information 
		and getting access to more content to linking to different parts of the web page and other websites...`,
		url: 'https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/',
	},
	{
		id: '5',
		title: 'How to detect a click outside a React component',
		author: 'Shalitha Suranga',
		image: '/images/news5.jpeg',
		description: `Web developers tend to use multiple components to make their React-based web applications more dynamic to enhance usability and flexibility.
		A React component is an independent, reusable, and isolated UI building block written in JSX (or TSX). 
		Web applications typically let the user interact with one component at a time — for example, a user can open an HTML popup and interact with the popup’s 
		content. If the user clicks outside the popup’s area, the web application either closes the popup or prevents the user from closing the popup...`,
		url: 'https://blog.logrocket.com/detect-click-outside-react-component-how-to/',
	},
	{
		id: '6',
		title: 'A deep dive into linting in Node.js',
		author: 'Alexander Nnakwue',
		image: '/images/news6.jpeg',
		description: `In the JavaScript/Node.js ecosystem, there are a host of tools used for linting our code. 
		Some of the most popular ones include JSLint, JSHint and ESLint. These tools help ensure that issues or errors 
		(mainly programmer-induced) in our source code can be detected via static code analysis – parsing and analyzing source code and returning a new result...`,
		url: 'https://blog.logrocket.com/deep-dive-linting-in-node/',
	},
	{
		id: '7',
		title: 'The Importance of Developer Velocity and Engineering Processes',
		author: 'Dan Lines',
		image: '/images/news7.jpeg',
		description: `In our rapidly changing technology landscape, it can be difficult to maintain a competitive advantage. 
		Challenges present themselves daily and staying ahead of your competition can feel daunting. At the INTERACT conference 
		for engineering leaders on September 30th, we’ll be exploring two of the most impactful ways that have emerged for companies 
		to differentiate themselves - streamlining engineering processes and maintaining high developer velocity...`,
		url: 'https://daily.dev/blog/the-importance-of-developer-velocity-and-engineering-processes',
	},
	{
		id: '8',
		title: 'Implementing Atomic Design in Modern React Development',
		author: 'Charuka Herath',
		image: '/images/news8.jpeg',
		description: `Atomic design helps developers think of UIs as a collection of components and allows them to break entire interfaces 
		down into fundamental building blocks and build up more consistent UIs.
		So, in this article, I will help you understand atomic design concepts and adapt them to modern-day development...`,
		url: 'https://blog.bitsrc.io/implementing-atomic-design-in-modern-react-development-d58d743a0f0b',
	},
	{
		id: '9',
		title: 'Using Next.js with TypeScript',
		author: 'Ibrahima Ndaw',
		image: '/images/news9.jpeg',
		description: `Next.js allows you to build static and dynamic apps using React. It ships with handy functionalities such as API Routes, 
		automatic code-splitting, internationalization, image optimization, and more. TypeScript is a superset of JavaScript that increases your code quality with types...`,
		url: 'https://blog.logrocket.com/using-next-js-with-typescript/',
	},
	{
		id: '10',
		title: 'Micro Frontends: 5 Common Mistakes to Avoid',
		author: 'Isuri Devindi',
		image: '/images/news1.jpeg',
		description: `Micro Frontends can either make your applications flexible and robust or become an overhead and hinder the growth of your project.
			And, there are many practices out there that might mislead any reader who is just entering into Micro Frontends.
			In this article, I will go through some of these common mistakes so that you can avoid them whenever possible...`,
		url: 'https://blog.bitsrc.io/micro-frontends-5-common-mistakes-to-avoid-4a35a37cad3d',
	},
	{
		id: '11',
		title: 'Netflix Cloud Packaging in the Terabyte Era',
		author: 'Xiaomei Liu',
		image: '/images/news2.jpeg',
		description: `Behind the scenes of the beloved Netflix streaming service and content, there are many technology innovations in media processing. 
		Packaging has always been an important step in media processing. After content ingestion, inspection and encoding, the packaging step encapsulates 
		encoded video and audio in codec agnostic container formats and provides features such as audio video synchronization, random access and DRM protection. 
		Our previous tech blog Packaging award-winning shows with award-winning technology detailed our packaging technology deployed on the streaming side...`,
		url: 'https://netflixtechblog.com/netflix-cloud-packaging-in-the-terabyte-era-d6869b4b84ae',
	},
	{
		id: '12',
		title: 'Building a type-safe dictionary in TypeScript',
		author: 'Gapur Kassym',
		image: '/images/news3.jpeg',
		description: `A dictionary is a common data structure in a programming language. As JavaScript developers, it’s important 
		to work with type-safe dictionaries because there will be conflicts or unexpected issues if we store different types of data within the same dictionary.
		In this article, we’ll cover how to build a type-safe dictionary using TypeScript...`,
		url: 'https://blog.logrocket.com/building-type-safe-dictionary-typescript/',
	},
	{
		id: '13',
		title: 'HTML Button Type – How to Add Buttons to your Website',
		author: 'Kolade Chris',
		image: '/images/news4.jpeg',
		description: `Buttons are an essential part of websites. You need them for various functionalities, from submitting information and getting access to 
		more content to linking to different parts of the web page and other websites...`,
		url: 'https://www.freecodecamp.org/news/html-button-type-how-to-add-buttons-to-your-website/',
	},
	{
		id: '14',
		title: 'How to detect a click outside a React component',
		author: 'Shalitha Suranga',
		image: '/images/news5.jpeg',
		description: `Web developers tend to use multiple components to make their React-based web applications more dynamic to enhance usability and flexibility.
		A React component is an independent, reusable, and isolated UI building block written in JSX (or TSX). 
		Web applications typically let the user interact with one component at a time — for example, a user can open an HTML popup and interact with the popup’s content. 
		If the user clicks outside the popup’s area, the web application either closes the popup or prevents the user from closing the popup...`,
		url: 'https://blog.logrocket.com/detect-click-outside-react-component-how-to/',
	},
	{
		id: '15',
		title: 'A deep dive into linting in Node.js',
		author: 'Alexander Nnakwue',
		image: '/images/news6.jpeg',
		description: `In the JavaScript/Node.js ecosystem, there are a host of tools used for linting our code. 
		Some of the most popular ones include JSLint, JSHint and ESLint. These tools help ensure that issues or errors (mainly programmer-induced)
		 in our source code can be detected via static code analysis – parsing and analyzing source code and returning a new result...`,
		url: 'https://blog.logrocket.com/deep-dive-linting-in-node/',
	},
	{
		id: '16',
		title: 'The Importance of Developer Velocity and Engineering Processes',
		author: 'Dan Lines',
		image: '/images/news7.jpeg',
		description: `In our rapidly changing technology landscape, it can be difficult to maintain a competitive advantage. 
		Challenges present themselves daily and staying ahead of your competition can feel daunting. 
		At the INTERACT conference for engineering leaders on September 30th, we’ll be exploring two of the most impactful ways that have 
		emerged for companies to differentiate themselves - streamlining engineering processes and maintaining high developer velocity...`,
		url: 'https://daily.dev/blog/the-importance-of-developer-velocity-and-engineering-processes',
	},
	{
		id: '17',
		title: 'Implementing Atomic Design in Modern React Development',
		author: 'Charuka Herath',
		image: '/images/news8.jpeg',
		description: `Atomic design helps developers think of UIs as a collection of components and allows them to break entire 
		interfaces down into fundamental building blocks and build up more consistent UIs.
		So, in this article, I will help you understand atomic design concepts and adapt them to modern-day development...`,
		url: 'https://blog.bitsrc.io/implementing-atomic-design-in-modern-react-development-d58d743a0f0b',
	},
	{
		id: '18',
		title: 'Using Next.js with TypeScript',
		author: 'Ibrahima Ndaw',
		image: '/images/news9.jpeg',
		description: `Next.js allows you to build static and dynamic apps using React. It ships with handy functionalities such as API Routes, 
		automatic code-splitting, internationalization, image optimization, and more. TypeScript is a superset of JavaScript that increases your code quality with types...`,
		url: 'https://blog.logrocket.com/using-next-js-with-typescript/',
	},
];
