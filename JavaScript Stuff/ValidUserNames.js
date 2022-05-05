function validUserNames(usernames) {
    return usernames.filter(function (username) {
        return username.length < 10;
    })
}