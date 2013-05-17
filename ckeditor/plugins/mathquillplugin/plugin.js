CKEDITOR.plugins.add( 'mathquillplugin', {
    icons: 'mathquillplugin',
    init: function( editor ) {
        //Plugin logic goes here.
        editor.addCommand( 'insertMathquill', {
            exec: function( editor ) {
                var now = new Date();
                editor.insertHtml( 'MY CUSTOM PLUGIN: The current date and time is: <em>' + now.toString() + '</em>' );
            }
        });
        editor.ui.addButton( 'Mathquill_Plugin', {
            label: 'Insert Mathquill',
            command: 'insertMathquill',
            toolbar: 'insert'
        });
    }
});