class NavBar {

    get is() {
        return "nav-bar";
    }

    beforeRegister() {
        this.properties = {
            foo: {
                type: String,
                value: 'blah',
                notify: true
            }
        };
        //
        // this.listeners = {
        //     'click': 'click'
        // }
    }
    //
    // click() {
    //     alert('you clicked me');
    // }
}

Polymer(NavBar);
