/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */

var globalVar = "" || {}

Ext.define('MyApp.view.main.MainController', {
    /** vscode-extjs-ignore-9 */
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onAdd: function () {
        globalVar.myForm = new Ext.form.Panel({
            xtype: 'form-xml',
            width: 400,
            height: 290,
            title: 'Add',
            floating: true,
            closable: true,
            fullscreen: true,
            modal: true,
            items: [{
                xtype: 'fieldset',
                title: 'Contact Information',
                defaultType: 'textfield',
                margin: '0 10 10 10',
                items: [{
                    fieldLabel: 'Name',
                    emptyText: 'Name',
                    width: 340,
                    name: 'name',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Email',
                    emptyText: 'email@mail.com',
                    width: 340,
                    name: 'email',
                    vtype: 'email',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Phone number',
                    emptyText: 'xxx-xxx-xxxx',
                    width: 340,
                    name: 'phone',
                    allowBlank: false
                }]

            }],
            buttons: [{
                text: 'Add',
                disabled: true,
                formBind: true,
                handler: 'onAddSubmit'
            }]

        }).show();
    },

    onAddSubmit: function () {
        var values = globalVar.myForm.getValues();
        var store = Ext.getStore('personnel')
        store.insert(0,{
            name: values.name,
            email: values.email,
            phone: values.phone,
        });
        globalVar.myForm.destroy();
    },

    onDetail: function (grid, rowIndex, colIndex) {
        var rec = grid.getStore().getAt(rowIndex)
        var myForm = new Ext.form.Panel({
            width: 400,
            moveable: true,
            height: 315,
            title: 'Detail',
            floating: true,
            closable: true,
            modal: true,
            items: [{
                xtype: 'fieldset',
                title: 'Contact Information',
                defaultType: 'displayfield',
                margin: '0 10 0 10',
                items: [{
                    fieldLabel: 'Name',
                    emptyText: 'Name',
                    value: rec.get('name'),
                    name: 'name',
                },
                {
                    fieldLabel: 'Email',
                    name: 'email',
                    value: rec.get('email'),
                },
                {
                    fieldLabel: 'Phone number',
                    value: rec.get('phone'),
                    name: 'phone',
                }]


            }],
            buttons: [{
                text: 'Close',
                handler: function () {
                    myForm.destroy();
                }
            }]

        }).show();
    },

    onEdit: function (grid, rowIndex, colIndex) {
        globalVar.rec = grid.getStore().getAt(rowIndex)
        globalVar.myForm = new Ext.form.Panel({
            xtype: 'form-xml',
            width: 400,
            moveable: true,
            height: 290,
            title: 'Edit',
            floating: true,
            closable: true,
            modal: true,
            items: [{
                xtype: 'fieldset',
                title: 'Contact Information',
                defaultType: 'textfield',
                margin: '0 10 10 10',
                items: [{
                    fieldLabel: 'Name',
                    emptyText: 'Name',
                    width: 340,
                    bind: globalVar.rec.get('name'),
                    name: 'name',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Email',
                    emptyText: 'email@mail.com',
                    width: 340,
                    name: 'email',
                    bind: globalVar.rec.get('email'),
                    vtype: 'email',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Phone number',
                    bind: globalVar.rec.get('phone'),
                    width: 340,

                    name: 'phone',
                    allowBlank: false
                }]


            }],
            buttons: [{
                text: 'Edit',
                disabled: true,
                formBind: true,
                handler: 'onEditSubmit'
            }]

        }).show();
    },

    onEditSubmit: function () {
        var values = globalVar.myForm.getValues();
        var edit = globalVar.rec.set({
            name: values.name,
            email: values.email,
            phone: values.phone,
        });
        globalVar.myForm.destroy();
    },

    onDelete: function (grid, rowIndex, colIndex) {
        Ext.Msg.confirm('Delete', 'Are you sure?', function (choice) {
            if (choice === 'yes') {
                var store = grid.getStore();
                var del = store.remove(grid.getStore().getAt(rowIndex));
            }
        });
    },
});
