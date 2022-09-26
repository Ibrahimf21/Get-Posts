// main varibales

let theInput = document.querySelector(".get-posts input")
let getButton = document.querySelector(".get-button")
let reposData = document.querySelector(".show-data")
let grep = document.querySelector("get-posts")

getButton.onclick = function () {

    getRepos();
};

//get repos function
function getRepos() {



    fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then((response) => response.json())
    .then((repositories) => { 

            // loop on repositoris
            repositories.forEach(repo => {

            // creat the main div elemnt

            let mainDiv = document.createElement("div");
            let th = document.createElement("H3");
            
            // creat repo name text
            
            th.innerHTML = `${repo.title}`;
            let repoName = document.createTextNode(repo.body);

            // appent the txt to main div

            mainDiv.appendChild(th);
            mainDiv.appendChild(repoName);

            //add class on main div
            mainDiv.className = `repo-${repo.id}`;

            // append the main div to container
            reposData.appendChild(mainDiv);
        });
    });
    }
