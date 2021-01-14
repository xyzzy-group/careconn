module.exports = getRoute => {
    if (getRoute === "home") return "/careconn/";
    if (getRoute === "services") return "/careconn/services";
    if (getRoute === "schedule") return "/careconn/schedule";
    if (getRoute === "locations") return "/careconn/locations";
    if (getRoute === "faq") return "/careconn/faq";
}

