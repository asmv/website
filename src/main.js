import crayon from 'crayon';
import svelte from 'crayon/svelte';
import AboutMe from './pages/AboutMe.svelte';
import Projects from './pages/Projects.svelte';
import Layout from './Layout.svelte';

const app = crayon.create();
app.use(svelte.router(
	document.getElementById('app')
));

app.path('/aboutme', (req, res) =>
	res.mount(Layout, {reqData:{req, nav: app}, iComponent: AboutMe})
);

app.path('/projects', (req, res) =>
	res.mount(Layout, {reqData:{req, nav: app}, iComponent: Projects})
);

app.path('/', (req, res) => res.redirect('/aboutme'));

app.load();