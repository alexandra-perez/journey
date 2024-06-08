import { Link } from 'react-router-dom';

export default function Form() {
  return (
    <div className="form-container">
      <form className="form">
        <h1>Get Started</h1>
        {/* User Info */}
        <label for="fname">First Name</label>
        <br />
        <input type="text" id="fname" name="fname" />
        <br />

        <label for="lname">Last Name</label>
        <br />
        <input type="text" id="lname" name="lname" />
        <br />

        <label for="email">Email</label>
        <br />
        <input type="email" id="email" name="email" />
        <br />

        {/* Travel Preferences */}
        <label htmlFor="travelExcitement">
          What excites you the most about traveling?
        </label>
        <br />
        <select id="travelExcitement" name="travelExcitement">
          <option value="culture">Discovering new cultures and history</option>
          <option value="adventure">Exploring the outdoors and nature</option>
          <option value="relaxation">Relaxing by the beach or pool</option>
          <option value="food">Tasting local cuisines</option>
          <option value="cityLife">
            Exploring vibrant cities and nightlife
          </option>
          <option value="family">Finding family-friendly activities</option>
        </select>
        <br />
        {/* Submit Button */}
      </form>
    </div>
  );
}
