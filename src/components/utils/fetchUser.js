export const fetchUser= ()=>{
    const userInfo = localStorage.getItem("user") !== "undefined" ? JSON.parse(localStorage.getItem("user")): localStorage.clear();
    return userInfo
}
export const fetchAdmin= ()=>{
    const adminInfo = localStorage.getItem("admin") !== "undefined" ? JSON.parse(localStorage.getItem("admin")): localStorage.clear();
    return adminInfo
}
