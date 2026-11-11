import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Pocket Notes</h1>
      <form>
        <input type="text" placeholder="Write a quick note..."></input>
        <button type="submit">Add</button>
      </form>
      <p>No notes saved yet.</p>
    </div>
  );
}
