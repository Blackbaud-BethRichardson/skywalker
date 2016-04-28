class NavBar {

    get is() {
        return 'nav-bar';
    }

    beforeRegister() {
        this.properties = {
            foo: {
                type: String,
                value: 'blah',
                notify: true
            }
        };

        this.listeners = {
            'click': 'click'
        }
    }

    ready() {
        this.menuItems = [
            {
                title: 'blah'
            },
            {
                title: 'blah 2'
            }
        ];
    }

    click(event) {
        event.preventDefault();

        NavBar.unselectAll();

        let el = event.target;
        $(el).parent().addClass('bb-navbar-active');
    }

    static unselectAll() {
        $('.bb-navbar-active').removeClass('bb-navbar-active');
    }
}

Polymer(NavBar);
