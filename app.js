var jsonForm = [{
    type: 'text',
    name: 'inputField1',
    required: true,
    value: 'This is the input field',
    placeholder: 'This is the input placeholder'
}];

function generateForm(){
    console.log('Calling...');
    var element = document.getElementById('form');
    jsonForm.forEach(function(item){
        var formItem = '';
        switch (item.type) {
            case 'text':
                formItem = document.createElement('input');
                formItem.type = 'text';
                formItem.name = item.name;
                formItem.value = item.value;
                formItem.placeholder = item.placeholder;
                formItem.required = item.required;
                break;
            case 'drop-down':
                break;
            case 'text-area':
                break;
            case 'check-box':
                break;
            case 'radio':
                break;
        }
        element.appendChild(formItem);
    });

};