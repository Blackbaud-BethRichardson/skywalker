class NavBar {

    get is() {
        return 'nav-bar';
    }

    beforeRegister() {
        this.properties = {
            selected: {
                type: Object
            },
            items: {
                type: Array,
                value: []
            }
        };

        this.listeners = {
            'on-click': 'handleClick'
        }
    }

    handleClick(event) {
        event.preventDefault();
        NavBar.unselectAll();

        let el = event.target;
        $(el).parent().addClass('bb-navbar-active');
        this.fire('menu-item-selected', {'menu': event.model.get('item.title')})
    }

    static unselectAll() {
        $('.bb-navbar-active').removeClass('bb-navbar-active');
    }
}

Polymer(NavBar);
