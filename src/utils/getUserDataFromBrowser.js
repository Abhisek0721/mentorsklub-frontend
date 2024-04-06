export const getUserData = () => {
    let userInfo = localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo);
    return userInfo;
}

export const getUserRole = () => {
    let userInfo = localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo);
    return userInfo?.userData?.role; // mentor or mentee
}

export const getAccessToken = () => {
    let userInfo = localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo);
    return userInfo?.accessToken; // jwt-token
}

export const getUserEmail = () => {
    let userInfo = localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo);
    return userInfo?.userData?.email;
}

export const getUserId = () => {
    let userInfo = localStorage.getItem('userInfo')
    userInfo = JSON.parse(userInfo);
    return userInfo?.userData?._id;
}