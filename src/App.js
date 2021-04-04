import React, {useState} from 'react';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Menu from "./components/Menu"
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
    const [displayMenu, setDisplayMenu] = useState(false);
    function updateDisplayMenuOnClick (){
        setDisplayMenu(!displayMenu);
    }
  return (
      <div className="App">
          <CssBaseline />
    <div className="main-content-div">
        <Header menuOnClick = {updateDisplayMenuOnClick} />
        {displayMenu && <Menu /> }
        <h1 className="main-content-text">The align-items and align-self properties control alignment of our flex items on the cross axis, down the columns if flex-direction is row and along the row if flex-direction is column.

            We are making use of cross-axis alignment in the most simple flex example. If we add display: flex to a container, the child items all become flex items arranged in a row. They will all stretch to be as tall as the tallest item, as that item is defining the height of the items on the cross axis. If your flex container has a height set, then the items will stretch to that height, regardless of how much content is in the item.

            Three items, one with additional text causing it to be taller than the others.

            Three items stretched to 200 pixels tall

            The reason the items become the same height is that the initial value of align-items, the property that controls alignment on the cross axis, is set to stretch.

            We can use other values to control how the items align:

            align-items: flex-start
            align-items: flex-end
            align-items: center
            align-items: stretch
            align-items: baseline
            In the live example below, the value of align-items is stretch. Try the other values and see how all of the items align against each other in the flex container.



            Aligning one item with align-self
            The align-items property sets the align-self property on all of the flex items as a group. This means you can explicitly declare the align-self property to target a single item. The align-self property accepts all of the same values as align-items plus a value of auto, which will reset the value to that which is defined on the flex container.

            In this next live example, the flex container has align-items: flex-start, which means the items are all aligned to the start of the cross axis. I have targeted the first item using a first-child selector and set that item to align-self: stretch; another item has been selected using its class of selected and given align-self: center. You can change the value of align-items or change the values of align-self on the individual items to see how this works.



            Changing the main axis
            So far we have looked at the behavior when our flex-direction is row, and while working in a language written top to bottom. This means that the main axis runs along the row horizontally, and our cross axis alignment moves the items up and down.

            Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the vertical axis.

            If we change our flex-direction to column, align-items and align-self will align the items to the left and right.

            Three items, the first aligned to flex-start, second to center, third to flex-end. Aligning on the horizontal axis.

            You can try this out in the example below, which has a flex container with flex-direction: column yet otherwise is exactly the same as the previous example.</h1>
    </div>
          <Footer />
      </div>
  );
}

export default App;
