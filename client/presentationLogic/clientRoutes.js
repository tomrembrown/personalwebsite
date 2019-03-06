const Home = () => import(/* webpackChunkName: "Home" */'../view/templates/home.vue');
const About = () => import(/* webpackChunkName: "About" */'../view/templates/about.vue');
const Portfolio = () => import(/* webpackChunkName: "Portfolio" */'../view/templates/portfolio.vue');
const Contact = () => import(/* webpackChunkName: "Contact" */'../view/templates/contact.vue');

export const routes = [
  { path: '', name: 'Home', component: Home },
  { path: '/about', name: 'About Me', component: About },
  { path: '/portfolio', name: 'Portfolio', component: Portfolio },
  { path: '/contact', name: 'Get in Touch', component: Contact }
];