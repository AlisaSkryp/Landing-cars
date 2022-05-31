(function() {
    const DROP_DOWN_FILTER_CLASS = 'sorting'
    const DROP_DOWN_OPENED_CLASS = 'dropdown-opened'


    function initializeDropdowns() {
        let dropDowns = document.getElementsByClassName(DROP_DOWN_FILTER_CLASS);
        for (var dropDown of dropDowns) {
            initializeDropdown(dropDown)
        }
    }


    function initializeDropdown(dropDown) {
        let span = dropDown.getElementsByTagName('span')[0];

        let toggleDropdown = () => {
            console.log(dropDown, 'toggled');
            dropDown.classList.toggle(DROP_DOWN_OPENED_CLASS);
        }
        let setDropdownValue = (newValue) => {
            span.innerHTML = newValue;
        }

        span.addEventListener('click', toggleDropdown)

        for (var option of dropDown.getElementsByTagName('li')) {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                setDropdownValue(e.target.innerHTML)
                toggleDropdown();
            })

        }
    }

    initializeDropdowns();

})()