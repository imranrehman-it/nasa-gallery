import "./index.css";
function App() {
  return (
    <div className="App">
      <div className="iotd">
        <img
          className="iotd iotd-img"
          src="http://www.nasa.gov/sites/default/files/thumbnails/image/web_first_images_release.png"
        ></img>
        <text className="iotd-text">Nasa image Of The Day</text>
      </div>
      <div className="now-trending"></div>
    </div>
  );
}

export default App;
