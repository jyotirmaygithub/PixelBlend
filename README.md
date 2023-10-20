# <<----Learning throughtout the projects----->>

# <<-----notes will be here for future reference------>>

# command -- to download  react-infinite-scroll-component
npm install react-infinite-scroll-component

# React router ---
 This process allows React to fetch data as the user navigates between different views or pages without causing a full page reload. The use of asynchronous data fetching techniques ensures that the application remains interactive and doesn't block the user while waiting for data.

# direct access of the id is possible through the use of useparams hook

useparams is used to get the value of some variable in another page without headache
you just need to import useparams from react router dom

# {urls && <img src={urls.full} alt="" />} 
this above code usefull, when we need to render value only if it is not null or undefined 
 If urls is falsy (e.g., null or undefined), the entire expression will evaluate to falsy, and nothing will be rendered. This is a common pattern in React to conditionally render elements based on the existence of certain data.

# .text-box p:first-child 
want to target the child of a div, then dont write class again and again 
instead use parent and child realtion  

#  .text-box p:first-child {
#    font-family: var(--location-font); /* Font for the first paragraph */
#  }

# use of modal 
 this is a npm package which can be helpful in poping up the image 
# (download guideline) =====> npm install react-modal

# file-saver
it can be usefull in letting the user to download the files in their desktop
# i am providing a code below to use
async function downloadimage(){
  const response = await fetch(urls.full);
  const blob = await response.blob();
  FileSaver.saveAs(blob, 'image.jpg');
}
# download command =====> npm install file-saver (npm package)

# caution --- hide api key
hide api key -- use environment variable 
🏗️ create .env.local folder  : create a kind of a variable (apikey_for_React_project  = "write api key in the form of string ")
