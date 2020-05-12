import React from "react";

function Form() {
  return (
    <form>
      <label>
        Name: <input name="name" />
      </label>
      <label>
        Email: <input name="email" />
      </label>
      <label>
        Role: <input name="role" />
      </label>
      <button>Add</button>
    </form>
  );
}

export default Form;
