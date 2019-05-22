import crayon from 'crayon';
import svelte from 'crayon/svelte';
import AboutMe from './pages/AboutMe.svelte';
import Projects from './pages/Projects.svelte';

const app = crayon.create();
app.use(svelte.router(
	document.getElementById('app')
));


app.path('/aboutme', (req, res) =>
	res.mount(AboutMe, { req, nav: app })
);

app.path('/projects', (req, res) =>
	res.mount(Projects, { req, nav: app })
);

app.path('/', (req, res) => res.redirect('/aboutme'));


app.load();