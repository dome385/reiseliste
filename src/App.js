const initialItems = [
  { id: 1, description: "Reisepass", quantity: 2, packed: false },
  { id: 2, description: "Socken", quantity: 12, packed: false },
  { id: 3, description: "Zahnbürste", quantity: 3, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>✈Reiseliste✈</h1>;
}

function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Was brauchst du für deine Reise? 🧳</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Gegenstand"></input>
      <button>Hinzufügen</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={initialItems.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>
        Du hast X Dinge in deiner Liste und du hast bereits X% eingepackt.
      </em>
    </footer>
  );
}

export default App;
