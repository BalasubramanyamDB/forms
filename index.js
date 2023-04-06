const post = async (data) => {
    const resp = await fetch("http://localhost:4000",{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    const newData = await resp.json();
    console.log(newData);

} 



const input = document.querySelector('form')
    input.addEventListener('submit',(e)=>{
        e.preventDefault();
        const fname = document.getElementById('fname').value;
        const lname = document.getElementById('lname').value;
        const dob = document.getElementById('dob').value;
        const email = document.getElementById('email').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const country = document.getElementById('country').value;
        const address = document.getElementById('addline1').value;
        const gender = document.getElementById('gender').value;

        const data = {
            firstname:fname,
            lastname:lname,
            dateofbirth:dob,
            emailid:email,
            City:city,
            State:state,
            Address:address,
            Gender:gender,
            Country:country
        }
        console.log(data);
        post(data);
    })






