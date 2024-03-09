document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM to be fully loaded before adding the event listener
    var btn = document.getElementById("removeButton");

    if (btn) {
        // Add click event listener to the button
        btn.addEventListener('click', remove);
    }

    function remove() {
        let select = document.getElementById('colorSelect');
        let selectedIndex = select.selectedIndex;

        if (selectedIndex !== -1) {
            // Remove the selected option
            select.remove(selectedIndex);
        }
    }
});
