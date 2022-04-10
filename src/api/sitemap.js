const fetch = (...args) => import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

export default async function handler(req, res) {

    let domain = "https://fairfieldprogramming.org";
    let urls = [
        { url: "/", changefreq: 'monthly', priority: 1.0 },
        { url: "/questions", changefreq: 'monthly', priority: 0.7 },
        { url: "/learn", changefreq: 'monthly', priority: 0.7 },
    ];

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
            priority: 0.5
        });

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