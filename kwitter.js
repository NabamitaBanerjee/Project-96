user_name = document.getElementById("user_name").value;

function adduser()
{
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}
