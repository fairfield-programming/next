export default function GenerateUser(userData) {

    let names = (userData.username || "").split("-");

    let firstname = capitalize(names[0] || "");
    let lastname = capitalize(names[1] || "");

    console.log(userData);

    return {
        username: userData.username,
        firstname,
        lastname,
        profilePicture: userData.profilePicture,
        biography: userData.biography,
    };

}

function capitalize(text) {

    if (text.length === 0) return "";
    if (text.length === 1) return text[0].toUpperCase();

    return text[0].toUpperCase() + text.slice(1).toLowerCase();

}