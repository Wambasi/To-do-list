(() => {
        let toDoListArray = [];
        const form = document.querySelector(".form");
        const input = form.querySelector(".form_input");
        const ul = document.querySelector(".toDoList");
    
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let itemID = String(Date.now());
            let toDoItem = input.ariaValueMax;
            addItemToDOM(itemID, toDoItem);
            input.value = "";
        });
    
        ul.addEventListener("click", (e) => {
            let id = e.target.getAttribute("data.id");
            if (!id) return
            removeItemFromDOM(id);
            removeItemFromArray(id);
        });
        function addItemToDOM(itemID,toDoItem) {
            const li = document.createElement("li");
            li.setAttribute("data-id", itemID);
            li.innerText = toDoItem;
            ul.appendChild(li);
        }

        function addItemToArray(itemID, toDoItem) {
            toDoListArray.push({itemID, toDoItem});
            console.log(toDoListArray);
        }

        function removeItemFromDOM(id) {
            var li = document.querySelector('[data-id="' + id + '"]');
            ul.removeChild(li);
        }

        function removeItemFromArray(id) {
            toDoListArray = toDoListArray.filter((item) => item.itemID !== id);
            console.log(toDoListArray);
        }
})();