export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Füge Gegenstände deiner Reiseliste hinzu</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Du hast alles eingepackt!"
          : `Du hast ${numItems} Gegenstände in deiner Liste und du hast bereits
          ${numPacked} (${percentage})%  eingepackt.`}
      </em>
    </footer>
  );
}
