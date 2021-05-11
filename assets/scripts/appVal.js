/*  Adam Barnes & Richard Peterson
    CSC 365
    Project - Homepage  */

function formVal()
{
    checkFirstName()
    checkLastName()
    checkZip()
    checkPhone()
}

function checkFirstName()
{
    var pattern = /[^a-z]/i;
    if (pattern.test(document.app.appFName.value))
    {
        alert ("Please ensure that first name contains only letters.");
    }
}

function checkLastName()
{
    var pattern = /[^a-z]/i;
    if (pattern.test(document.app.appLName.value))
    {
        alert ("Please ensure that last name contains only letters.");
    }
}

function checkZip()
{
    var pattern = /[^0-9]/;
    if (pattern.test(document.app.appZip.value))
    {
        alert ("Please ensure zip code contains only numbers.");
    }
}

function checkPhone()
{
    var pattern = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
    if (!pattern.test(document.app.appPhone.value))
    {
        alert ("Please double check your phone number for the correct format.")
    }
}