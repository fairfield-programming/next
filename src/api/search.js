const fetch = (...args) => import(`node-fetch`).then(({ default: fetch }) => fetch(...args))

export default async function handler(req, res) {

    let query = req.query.q;

    if (query == undefined || query == '') return res.send("[]");

    let domain = "https://fairfieldprogramming.org";
    let urls = [
        { url: "/", title: 'Home', description: 'The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science.' },
        { url: "/questions", title: 'Questions', description: 'The Fairfield Programming Association is a open-source organization that runs programs and offers resources all to educate children in the area of computer science.' },
        { url: "/learn", title: 'Learn', description: 'This page contains links to all of the Fairfield Programming Association learning resources. ' },
        { url: "/signup", title: 'Sign Up', description: 'To make an account, simply complete the form and you will be given a Fairfield Programming Association account.' },
        { url: "/login", title: 'Log In', description: 'To log into your account, simply complete this form and you will be allowed to do everything that a signed in user will do.' },
        { url: "/about", title: 'About', description: 'The Fairfield Programming Association is an organization with one goal: educate the world about computer science. If you would like to learn how we do this, you can read about what we\'ve done below.' },
        { url: "/privacy", title: 'Privacy Policy', description: 'This is the page that contains the privacy policy for the Fairfield Programming Association.' },
        { url: "/terms", title: 'Terms and Conditions', description: 'This is the page that contains the terms and conditions for the Fairfield Programming Association.' },
        { url: "/search", title: 'Search', description: 'Using this page, you can search all the contents of the Fairfield Programming Association website and our resources as well.' },
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
            title: item.title,
            description: item.body || "This question has no description..."
        });

    });

    users.forEach((item) => {

        urls.push({
            url: '/user/' + item.id,
            title: item.username,
            description: "This is a default user description..."
        });

    })

    articles.forEach((item) => {

        urls.push({
            url: '/article/' + item.id,
            title: item.title,
            description: "This is a default description..."
        })

    })

    urls = urls.filter((data) => {

        if (!data.title.toUpperCase().includes(query.toUpperCase())) return false;

        return true;

    })

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(urls));

}