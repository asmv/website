import crayon from 'crayon';
import svelte from 'crayon/svelte';

import Layout from './Layout.svelte';

import AboutMe from './components/pages/AboutMe.svelte';
import Projects from './components/pages/Projects.svelte';
import Resume from './components/pages/Resume.svelte';

const app = crayon.create();
app.use(svelte.router(
	document.getElementById('app')
));

//TODO: In the future, switch to child routes for routing.
//TODO: Figure out if I should switch back to non SPA architecture, navigation is reloaded anyway.
let pageRoutes = [
	{
		path: "/aboutme",
		title: "About Me",
		component: AboutMe
	},
	{
		path: "/projects",
		title: "Projects",
		component: Projects
	},
	{
		path: "/resume",
		title: "Resume",
		component: Resume
	}
];

app.path('/', (req, res) => res.redirect("/aboutme"));

//TODO: Use code splitting here later?
pageRoutes.forEach((pageRoute) => {
	app.path(pageRoute.path, (req, res) =>
		res.mount(Layout, {reqData:{req, nav: app}, iComponent: pageRoute.component, pageRoutes: pageRoutes}));
});

app.load();