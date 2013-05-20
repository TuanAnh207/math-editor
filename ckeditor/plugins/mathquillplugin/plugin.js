CKEDITOR.plugins.add( 'mathquillplugin', {
    icons: 'mathquillplugin',
    init: function( editor ) {
        //Plugin logic goes here.
        editor.addCommand( 'insertMathquill', {
            exec: function( editor ) {
                // store the created element in a variable so I can then use jQuery and the Mathquill plugin on it.
                editor.insertHtml( '<span id="tempID">x^2</span>' );
                $('#tempID').mathquill('editable');
            }
        });
        editor.ui.addButton( 'Mathquill_Plugin', {
            label: 'Insert Mathquill',
            command: 'insertMathquill',
            toolbar: 'insert'
        });
    }
});