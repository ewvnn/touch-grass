
const url="profiles.json";
async function retrieve_profile_info()
{


  
axios.get("profiles.json")
  .then(response => {
    const profileinfo = response.data; // THIS is the [[PromiseResult]] value
    console.log(profileinfo);           // logs the array
    console.log(profileinfo[0].username); // access first profile’s username

    // <--Retrieve Profile Picture-->
    profilepicture=document.getElementById("profilepicture");
    cropbox=document.createElement("div");
    image=document.createElement("img");
    image.setAttribute("src",`./profilepictures/${profileinfo[0].profileid}.jpg`);
    cropbox.className="crop-box";
    cropbox.appendChild(image);
    profilepicture.appendChild(cropbox);

    // <--Retrieve Username-->
    username=document.getElementById("username");
    username_textnode=document.createTextNode(profileinfo[0].username);
    username.appendChild(username_textnode);

    // <--Retrieve Email-->
    email=document.getElementById("email");
    email_textnode=document.createTextNode(profileinfo[0].email);
    email.appendChild(email_textnode);

    // <--Retrieve Friends-->
    if(profileinfo[0].friendlist.length==0)
    {
        friendlist=document.getElementById("friendlist");
        nofriends=document.createElement("h5");
        nofriends.style.textAlign="center";
        nofriends.style.color="gray";
        nofriends.style.padding="5px";
        nofriendstextnode=document.createTextNode("You currently have no friends added");
        nofriends.appendChild(nofriendstextnode);
        friendlist.appendChild(nofriends);
        friendlist.className="overflow-auto align-content-center"
    }
    else
    {
        friendlist=document.getElementById("friendlist");
        friends=document.createElement("ul");
        for(friend of profileinfo[0].friendlist)
        {
            user=document.createElement("li");
            friendimage=document.createElement("img");
            friendimage.setAttribute("src",`./profilepictures/${friend}.jpg`);
            friendimage.style.width="50px";
            friendimage.style.borderRadius="50%";
            friendimage.style.marginRight = "10px";
            friendname=document.createTextNode(profileinfo.find(x=>x.profileid===friend).username);
            user.appendChild(friendimage);
            user.appendChild(friendname);
            friends.appendChild(user);
            user.style.marginBottom="10px";
        }
        friendlist.appendChild(friends);
        friends.style.listStyleType = "none";
        friends.style.paddingLeft = "0";      
        friends.style.marginLeft = "10px";       
        friends.style.marginTop="10px";
        
    }

    // <--Retrieve Favourites-->
    if(profileinfo[0].favourites.length==0)
    {
        favourites=document.getElementById("favourites");
        nofavourites=document.createElement("h5");
        nofavourites.style.textAlign="center";
        nofavourites.style.color="gray";
        nofavourites.style.padding="5px";
        nofavouritestextnode=document.createTextNode("You currently have no favourites");
        nofavourites.appendChild(nofavouritestextnode);
        favourites.appendChild(nofavourites);
        favourites.className="overflow-auto align-content-center"
    }


  })
  .catch(error => console.error(error));
}