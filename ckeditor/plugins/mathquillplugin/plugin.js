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

                    // add a span with a temporary ID used for the jQuery selector
                    editor.insertHtml( '<span id="tempID">' + selectedText + '</span>' );

                    // convert to a Mathquill editable box and then remove the temporary ID
                    $('#tempID').mathquill('editable').removeAttr('id');
                }
                else {
                    // If text was selected

                    // add a span with a temporary ID just for the jQuery selector
                    editor.insertHtml( '<span id="tempID">' + selectedText + '</span>' );

                    // convert to a Mathquill editable box and then remove the temporary ID
                    $('#tempID').mathquill('editable').removeAttr('id');
                }
            }
        });
        editor.ui.addButton( 'Mathquill_Plugin', {
            label: 'Insert Mathquill',
            command: 'insertMathquill',
            toolbar: 'insert'
        });
    }
});