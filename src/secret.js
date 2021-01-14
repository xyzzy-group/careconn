module.exports = getRoute => {
    if (getRoute === "home") return "/";
    if (getRoute === "services") return "/services";
    if (getRoute === "schedule") return "/schedule";
    if (getRoute === "locations") return "/locations";
    if (getRoute === "faq") return "/faq";
}

