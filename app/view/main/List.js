/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    /** vscode-extjs-ignore-9 */
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel',
        'MyApp.view.main.MainController',
    ],

    controller: 'main',

    title: 'Personnel',
    reference: 'personelGrid',

    header:{
         items:[{
            xtype:'button',
            width: 100,
            text: '<span class="x-fa fa-plus" style="color:black;font-size:15px"></span>&nbsp;<b style="color:black;">Add</b>',
            cls: 'addBtn',
            style: {
                'background-color': 'white',
            },
            handler: 'onAdd'
        }]
     },

    store: {
        type: 'personnel'
    },

    autoSync: true,
    autoLoad: true,
    columnLines: true,
    bodyPadding: true,

    columns: [
        { xtype: 'rownumberer' },
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        {
            text: "Actions",
            xtype:'actioncolumn',
            bodyPadding: 5,
            width:100,
            flex:1,
            items: [{
                iconCls: 'x-fa fa-eye',  
                tooltip: 'Detail',
                handler: 'onDetail'
                
            },{
                disabled: true
            },{
                iconCls: 'x-fa fa-pen',  
                tooltip: 'Edit',
                handler: 'onEdit'
                
            },{
                disabled: true
            },{
                iconCls: 'x-fa fa-trash',
                tooltip: 'Delete',
                handler: 'onDelete',
                
            }],
        }
    ],
});
