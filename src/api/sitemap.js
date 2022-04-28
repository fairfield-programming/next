const fetch = (...args) => import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

export default async function handler(req, res) {

    let domain = "https://fairfieldprogramming.org";
    let urls = [
        { url: "/", changefreq: 'monthly', priority: 1.0 },
        { url: "/questions", changefreq: 'monthly', priority: 0.7 },
        { url: "/learn", changefreq: 'monthly', priority: 0.7 },
        { url: "/signup", changefreq: 'monthly', priority: 0.7 },
        { url: "/login", changefreq: 'monthly', priority: 0.7 },
        { url: "/about", changefreq: 'monthly', priority: 0.7 },
        { url: "/privacy", changefreq: 'monthly', priority: 0.7 },
        { url: "/terms", changefreq: 'monthly', priority: 0.7 },
        { url: "/search", changefreq: 'monthly', priority: 0.7 },
    ];

    const articleResponse = await fetch('https://fpa-learn.herokuapp.com/article/');
    const articles = await articleResponse.json();

    const questionResponse = await fetch('https://fpa-questions.herokuapp.com/question');
    const questions = await questionResponse.json();

    const usersResponse = await fetch('https://fairfield-programming.herokuapp.com/user');
    const users = await usersResponse.json();

    questions.forEach((item) => {

        urls.push({
            url: '/question/' + item.id,
            changefreq: 'daily',
            priority: 0.5
        });

    });

    users.forEach((item) => {

        urls.push({
            url: '/user/' + item.id,
            changefreq: 'daily',
            priority: 0.2
        });

    })

    articles.forEach((item) => {

        urls.push({
            url: '/article/' + item.id,
            title: item.title,
            description: "This is a default description..."
        })

    })

    let output = `<?xml version="1.0" encoding="UTF-8"?>`;
    output += (`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`);

    urls.forEach((url) => {

        let month = new Date().getMonth() + 1;
        if (month < 10) month = "0" + month;

        output += (`<url>`);
        output += (`<loc>${domain}${url.url}</loc>`)
        output += (`<lastmod>${new Date().getFullYear()}-${month}-${new Date().getDate()}</lastmod>`);
        output += (`<priority>${url.priority}</priority>`);
        output += (`<changefreq>${url.changefreq}</changefreq>`);
        output += (`</url>`);

    });

    output += (`</urlset>`);

    res.setHeader('Content-Type', 'text/xml');
    res.send(output);

}