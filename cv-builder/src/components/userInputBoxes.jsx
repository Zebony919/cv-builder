import "./userInputBoxes.css";

function UserInputBoxes() {
  return (
    <section className="inputBody">
      <div className="general">
        <h2>General</h2>

        <form>
          <label for="name">Name:</label>
          <input type="text" name="name"></input>
          <label for="age">Age:</label>
          <input type="text" name="age"></input>
          <label for="email">Email:</label>
          <input type="email" name="email"></input>
          <label for="phoneNumber">Phone Number:</label>
          <input type="number" name="phoneNumber"></input>
        </form>
      </div>

      <div className="education"></div>

      <div className="experience"></div>
    </section>
  );
}

export default UserInputBoxes;
