
    let btn = document.getElementById("removeButton");

    if (btn) 
	{
        btn.addEventListener('click', remove);
    }

    function remove() {
        let select = document.getElementById('colorSelect');
        let selectedIndex = select.selectedIndex;

        if (selectedIndex !== -1)
		{
            select.remove(selectedIndex);
        }
    }

