var tabs = document.querySelectorAll(".tabs_title ul li");
var activities = document.querySelectorAll(".activity");
var look = document.querySelectorAll(".look");
var all = document.querySelectorAll(".item_wrap");

look.forEach((element) => {
    element.style.display = "none";
});

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        var tabval = tab.getAttribute("data-tabs");

        all.forEach((item) => {
            item.style.display = "none";
        });

        if (tabval === "activity") {
            activities.forEach((activity) => {
                activity.style.display = "block";
            });
        } else if (tabval === "look") {
            look.forEach((element) => {
                element.style.display = "block";
            });
        }
    });

    if (index === 0) {
        tab.classList.add("active");
        var tabval = tab.getAttribute("data-tabs");
        if (tabval === "activity") {
            activities.forEach((activity) => {
                activity.style.display = "block";
            });
        } else if (tabval === "look") {
            look.forEach((element) => {
                element.style.display = "block";
            });
        }
    }
});

