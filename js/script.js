async function loadImage() {

  // extract and costruct url/api 

  // This retrieves the URL entered by the user in an input field with the ID url.
  let formUrl = document.getElementById('url').value
  // This is a hardcoded API token used for authentication with the screenshot API.
  let token = "YJZC0QD-9CQ4MXW-GC5BVP7-N8ZSK6Z"
  //  This constructs the API endpoint URL by embedding the token and the user-provided URL.
  let url = `https://shot.screenshotapi.net/screenshot?token=${token}&url=${formUrl}`

  // fetch api response

  // This sends a request to the screenshot API and waits for the response.
  const response = await fetch(url)
  // This parses the JSON response from the API, which contains the screenshot data.
  const object = await response.json()


  //create an image element

  // This creates a new <img> element.
  let newImg = document.createElement('img')

  // This sets the class of the new image element to screenshot.
  newImg.className= 'screenshot'
  // This sets the src attribute of the image to the screenshot URL obtained from the API response.
  newImg.setAttribute('src', object.screenshot)

  // Insert or Replace Image in DOM

  // This selects the container element where the image will be placed.
  let container = document.querySelector('.image')
  // This selects a reference element to insert the new image before (if needed).
  let reference = document.querySelector('.reference')

  // here is a workflow of the if statement whcih checks if there are any existing images in the document

  // (1) If there is at least one image in the document,
  // (2) it selects the existing image with the class screenshot.
  // (3) It replaces the existing image with the new one.
  //  (4) If there are no images
  // (5) It inserts the new image before the reference element.
  if (document.images.length >= 1 ) {
      let existingImg = document.querySelector('.screenshot')
      container.replaceChild(newImg, existingImg)
  } else {
      container.insertBefore(newImg, reference)
  }


  console.log(newImg);

}

// This selects the button element with the ID btn.
let button = document.getElementById('btn')

// This adds an event listener to the button that:
// (1) Prevents the default form submission behavior with event.preventDefault().
// (2) Calls the loadImage function inside a try block to handle any potential errors.
// (3) Catches and logs errors to the console.
button.addEventListener("click", async (event) => {
    event.preventDefault()

    try {
      loadImage()
    } catch(e) {
      console.log("Error!");
      console.log(e);
    }
})
