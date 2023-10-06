var selectedRow = null;
function onFormSubmit(e){
    event.preventDefault();
    var formData = readformData();
    if(selectedRow === null){
        insertNewRecord(formData);
    }

    else{
        updateRecord(formData);

    }
    resetform();


}

//Retrieve the data
function readformData(){
    var formData = {};
    formData["productCode"] = document.getElementById("productCode").Value;
    formData["product"] = document.getElementById("product").Value;
    formData["qty"] = document.getElementById("qty").Value;
    formData["perPrice"] = document.getElementById("perPrice").Value;
    return formData;
}

//Insert the data /add
function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table-length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML = data.productCode;
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
        cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
        cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
        cell5.innerHTML = '<button>Edit</button> <button>Delete</button>'
}

//Edit the data
function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementsById('productCode').Value = selectedRow.cells[0].innerHTML;
    document.getElementsById('product').Value = selectedRow.cells[1].innerHTML;
    document.getElementsById('qty').Value = selectedRow.cells[2].innerHTML;
    document.getElementsById('perPrice').Value = selectedRow.cells[3].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells(0).innerHTML = formData.productCode;
    selectedRow.cells(1).innerHTML = formData.product;
    selectedRow.cells(2).innerHTML = formData.qty;
    selectedRow.cells(3).innerHTML = formData.perPrice;

}

//Delete the data
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementsById('storeList').deleteRow(row.rowIndex);

    }
    resetform();
}

//Reset the Data
function resetform(){
    document.getElementById('productCode').Value = '';
    document.getElementById('product').Value = '';
    document.getElementById('qty').Value = '';
    document.getElementById('perPrice').Value = '';
}