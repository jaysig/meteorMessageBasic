if (Meteor.isClient) {
  Meteor.startup(function () {
    ReactDOM.render(<MessageList />, document.getElementById("render-target"));
  });
}