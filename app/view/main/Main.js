/**
 * This class is the main view for the application. It is specified in app.js as the
 * "autoCreateViewport" property. That setting automatically applies the "viewport"
 * plugin to promote that instance of this class to the body element.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */

Ext.define('TutorialApp.view.main.Main', {
    extend: 'Ext.container.Container',
    plugins: 'viewport',
    requires: [
        'TutorialApp.view.main.MainController',
        'TutorialApp.view.main.MainModel'
    ],

    xtype: 'app-main',



    controller: 'main',
    viewModel: {
        type: 'main'
    },
       defaults: {
        collapsible: true,
        split: true,

    },

    layout: {
        type: 'border'
    },

    items: [{
        xtype: 'panel',
             collapsible: true,

        bind: {
            title: '{name}'
        },
        region: 'west',
            items:[
            {
            title: 'Child Panel 1',
            html: '<ul><li>This area is commonly used for navigation, for example, using a "tree" component.</li></ul>',
            width: 250,
            floatable: false,
            height: 600,
            collapsible: true,
            tbar: [{
                text: 'Logout',
                handler: 'onClickButton'
            }]
    },{
        region: 'west',
        xtype: 'panel',

        title: 'Child Panel 2',
        html: '<p>Hello!</p>',
        collapsible: true,
         floatable: false,
        height: 100,
        width: 250

    }]},{

        region: 'center',
        xtype: 'tabpanel',
        items:[{
            title: 'Home',
            html: '<h2>Our Beautiful Site</h2>'
        },{
            title: 'Table',
                layout: 'fit',
        items: [{
            xtype: 'grid',
            title: 'Simpsons',
            store: {
                fields:['name', 'email', 'phone'],
                data:[
                    { name: 'Lisa',  email: "lisa@simpsons.com",
                      phone: "555-111-1224"  },
                    { name: 'Bart',  email: "bart@simpsons.com",
                      phone: "555-222-1234" },
                    { name: 'Homer', email: "home@simpsons.com",
                      phone: "555-222-1244"  },
                    { name: 'Marge', email: "marge@simpsons.com",
                      phone: "555-222-1254"  }
                ],
                proxy: {
                    type: 'memory'
                }
            },
            columns: [
                { text: 'Name',  dataIndex: 'name' },
                { text: 'Email', dataIndex: 'email', flex: 1},
                { text: 'Phone', dataIndex: 'phone' }
            ]
        }]


        },{

            title: 'Form',
            layout: 'fit',
        items: [{
            title: 'User Form',
            height: 150,
            width: 300,
            bodyPadding: 10,
            defaultType: 'textfield',
            items: [
                {
                    fieldLabel: 'First Name',
                    name: 'firstName'
                },
                {
                    fieldLabel: 'Last Name',
                    name: 'lastName'
                },
                {
                    xtype: 'datefield',
                    fieldLabel: 'Date of Birth',
                    name: 'birthDate'
                }
            ],

              buttons: [{
                    text: 'Submit',
                    formBind: true,
                    handler: function() {
                        var form = this.up('form').getForm(); // get the basic form
                        if (form.isValid()) { // make sure the form contains valid data before
                 }

                 }
                 }]


        }]

        }]
    }]
});


