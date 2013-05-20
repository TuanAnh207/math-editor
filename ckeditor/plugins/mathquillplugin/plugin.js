CKEDITOR.plugins.add( 'mathquillplugin', {
    icons: 'mathquillplugin',
    init: function( editor ) {
        //Plugin logic goes here.
        editor.addCommand( 'insertMathquill', {
            exec: function( editor ) {

                // get the selected text - it will always return type string, even if nothing is selected
                var selectedText = editor.getSelection().getSelectedText();

                // Check for an empty string or all whitespace using jQuery trim method
                if (!selectedText || $.trim(selectedText) == '') {
                    // If empty or all whitespace set initial math value
                    selectedText = 'Insert-Math-Here';
                }

                // store the created element in a variable so I can then use jQuery and the Mathquill plugin on it.
                editor.insertHtml( '<span id="tempID">' + selectedText + '</span>' );
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