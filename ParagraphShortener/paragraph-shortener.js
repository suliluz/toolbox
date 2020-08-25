document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".read-more-container").forEach(function (container) {
        var sentence_container = container.querySelector(".sentence-container");

        var sentences = sentence_container.textContent.split(".");
        var firstSentence = "";

        var more_container_element = document.createElement('span');
        var read_toggle = document.createElement('p');

        more_container_element.classList.add("more", "no-display");

        read_toggle.classList.add("default-size-paragraph","main-color-text");
        read_toggle.dataset.state = "more";

        read_toggle.textContent = "Read More";

        sentences.forEach((sentence, index) => {
          if(index != 0) {
            more_container_element.textContent += sentence + ".";
          } else {
            firstSentence = sentence;
          }
        });

        read_toggle.addEventListener("click", (e) => {
          var currentState = e.target.dataset.state;
          var moreContainer = sentence_container.querySelector(".more");

          if(currentState === "less") {
            moreContainer.classList.add("no-display");
            e.target.textContent = "Read More";
            e.target.dataset.state = "more";
          } else {
            moreContainer.classList.remove("no-display");
            e.target.textContent = "Read Less";
            e.target.dataset.state = "less";
          }
        });

        sentence_container.innerHTML = firstSentence + ".";
        sentence_container.appendChild(more_container_element);
        container.appendChild(read_toggle);
    });
});