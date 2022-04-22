/////////////////////////////////////////////////////////////////////
// Initalize Constant to store DOM Elements
/////////////////////////////////////////////////////////////////////
const butGenerate = document.getElementById("generateButton");
const txtDisplay = document.getElementById("messagesDisplay");

/////////////////////////////////////////////////////////////////////
// Initalize Constant to store DOM Elements
/////////////////////////////////////////////////////////////////////
butGenerate.onclick = Generate4D;

/////////////////////////////////////////////////////////////////////
// Function to Display Server Response
/////////////////////////////////////////////////////////////////////
function DisplayResponse(objData)
{   
    txtDisplay.append(objData + "   ");
}

/////////////////////////////////////////////////////////////////////
// Function to Clear Display
/////////////////////////////////////////////////////////////////////
function ResetDisplay()
{   
    txtDisplay.innerHTML = "";
}

/////////////////////////////////////////////////////////////////////
// Function to Force Delay Between Chain
/////////////////////////////////////////////////////////////////////
function WaitAwhile(delay) 
{
    return function(response)
    {
        return new Promise(resolve => {
            setTimeout(() => resolve(response), delay)
        });
    };
}

/////////////////////////////////////////////////////////////////////
// Function to Try Axios -> Promise Chain 
/////////////////////////////////////////////////////////////////////
function Generate4D()
{
    ResetDisplay();

    axios.get('http://localhost:3000/generate4d/', {})
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools
        DisplayResponse(response.data.result); //Look for result in response
        return axios.get('http://localhost:3000/generate4d/', {});
    })
    .then(WaitAwhile(1000))
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools
        DisplayResponse(response.data.result); //Look for result in response
        return axios.get('http://localhost:3000/generate4d/', {});
    })
    .then(WaitAwhile(1000))
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools
        DisplayResponse(response.data.result); //Look for result in response
        return axios.get('http://localhost:3000/generate4d/', {});
    })
    .then(WaitAwhile(1000))
    .then((response) => {
        console.log(response.data); //View in Browser's Developer Tools
        DisplayResponse(response.data.result); //Look for result in response
    })
    .catch(function(error) {
        DisplayResponse(error);
    })
}
