document.addEventListener("DOMContentLoaded", () => {
    const contentData = {
        solar: {
            heading: "Solar Panel Subsidies",
            body: "Government programs provide subsidies that reduce the upfront cost of installing solar panels, making them affordable for the average household.",
            imgUrl: "img/solar.webp",
            imgAlt: "Solar panels on a house"
        },
        wind: {
            heading: "Wind Energy Incentives",
            body: "Homeowners can install small wind turbines with tax credits, reducing their dependence on fossil fuels and lowering energy costs.",
            imgUrl: "img/wind.webp",
            imgAlt: "Wind turbines in a field"
        },
        community: {
            heading: "Community Power Projects",
            body: "People can invest in local renewable energy projects, sharing the benefits of green energy without installing their own systems.",
            imgUrl: "img/community.webp",
            imgAlt: "Community solar panels"
        }
    };

    const buttons = document.querySelectorAll(".button-container button");
    const contentContainer = document.getElementById("dynamic-content");

    buttons.forEach((button, index) => {
        button.addEventListener("click", () => {
            document.querySelector("#active-button").removeAttribute("id");
            button.setAttribute("id", "active-button");
            
            const selectedContent = Object.values(contentData)[index];
            contentContainer.innerHTML = `
                <h1>${selectedContent.heading}</h1>
                <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
                <p>${selectedContent.body}</p>
            `;
        });
    });
});