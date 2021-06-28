# Mock UI for Alto

### Deployed Using GitHub Pages

Link to Application: https://bsltx.github.io/alto-mock-ui/

Using the `gh-pages` package, I was able to include the `build` directory and host directly from the repo.

### To Run the App Locally:

```
// Install Node Packages
npm install

// Start local server (http://localhost:3000)
npm start
```

### How It's Built:

- Used Create React App with TypeScript to start the project and added the Redux Toolkit, SASS, and date-fns packages to support development.
- Used a promise function to mock fetching mission.json data and included a loading UI.
- I made a small change to the mission.json driver and vehicle image paths for my needs.

### Device Info:

- Developed on Windows 10 Chrome
- Tested on MacOS Chrome (MacBook Pro), MacOS Safari (MacBook Pro), iOS Safari (iPhone 11 Pro Max), and Windows Chrome

### Notes:

- Included mock actions that will alternate the user's Trip Notes and Vibe to some pre-set values upon interacting with those buttons.
- Kabob nav is fully interactive and smooth scrolls the user to the appropriate sections.
- I only included image and font assets that I used from the provided folder.
- I did not scale up icon sizes with the responsive design because the PNG quality deteriorated quickly.
- 'Your Trip' map image did not scale well but I left it in assuming it is a placeholder for an actual map interface.

### Known Issue:

The Alto logo has a background color. I explored options for scroll snapping to help solve for this. My idea was that the user's scroll would catch at the top of each section so the content would be consumed like it's seen in the comps.

Native [CSS scroll snapping](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap) required some odd configuration to html/body element stylings and there was a notable delay between the user finishing scrolling and the snap taking place. [HammerJS](https://www.npmjs.com/package/@fullpage/react-fullpage) and [fullPage.js](https://www.npmjs.com/package/@fullpage/react-fullpage) looked like the most promising solutions but due to the dev time required to properly set those up I chose the background color approach.
