export default function GenerateUser(userData) {

    if (userData == undefined) return {};

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
        id: userData.id,
        fullname: `${firstname} ${lastname}`
    };

}

function capitalize(text) {

    if (text.length === 0) return "";
    if (text.length === 1) return text[0].toUpperCase();

    return text[0].toUpperCase() + text.slice(1).toLowerCase();

}