import React from 'react'

function UploadProfile() {
    function handleSubmit(event){
        event.preventDefault();
        console.log(event);
        var fdata = new FormData(event.target);
        // Correct the fetch URL to point to the API server directly
        fetch("http://localhost:3000/addProfile", {
           method:"POST",
           body:fdata
        })
    }
  return (
    <div>
        <form onSubmit={(ev) => {handleSubmit(ev)}}><br/>
            <input type="text" name="nickname"/><br/><br/>
            <input type="file" name="profilePic" /><br/><br/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UploadProfile
