const saveUser = (accessToken) => {
    localStorage.removeItem("accessToken");
    localStorage.setItem("accessToken", accessToken);
}

module.exports = {
    saveUser: saveUser
}