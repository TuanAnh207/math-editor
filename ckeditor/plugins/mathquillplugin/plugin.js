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
                    // If empty or all whitespace set initial, temporary value
                    selectedText = 'Placeholder';

                    // add a span with a temporary ID used for the jQuery selector
                    editor.insertHtml( '<span id="tempID" contenteditable="false">' + selectedText + '</span>' );

                    // convert to a Mathquill editable box and then remove the temporary ID and temporary value
                    // set the starting contents of the Mathquill editable to nothing
                    // note: without focus there's a weird bug where you can enter non editable math in the box
                    $('#tempID').mathquill('editable').mathquill('latex','').removeAttr('id').focus();
                }
                else {
                    // If text was selected

                    // add a span with a temporary ID just for the jQuery selector
                    editor.insertHtml( '<span id="tempID" contenteditable="false">' + selectedText + '</span>' );

                    // convert to a Mathquill editable box and then remove the temporary ID
                    // note: without focus there's a weird bug where you can enter non editable math in the box
                    $('#tempID').mathquill('editable').removeAttr('id').focus();
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