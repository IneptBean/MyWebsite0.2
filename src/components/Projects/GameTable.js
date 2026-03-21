import React from "react";

function GameTable() {
  const genres = [
    "RPG", "Adventure/Oregon Trail like", "Rhythm", "Shooter",
    "Survival", "Cozy/Farming", "Life Sim", "Punch them up", "Hack and slash"
  ];

  const themes = [
    "Cards", "Legos", "Forest", "Water", "Travel",
    "Sins", "Prism", "Scrap book", "Murder Mystery", "Super Hero"
  ];

  const artStyles = [
    "Art Mashing", "Pixel", "Dreamy", "Watercolor", "Fabric",
    "Brutalism", "Techno", "Blocks", "Photography"
  ];

  const maxRows = Math.max(genres.length, themes.length, artStyles.length);

  return (
    <table>
      <thead>
        <tr>
          <th>Game Genre</th>
          <th>Game Theme</th>
          <th>Art Style</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: maxRows }, (_, i) => (
          <tr key={i}>
            <td>{genres[i] || ""}</td>
            <td>{themes[i] || ""}</td>
            <td>{artStyles[i] || ""}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GameTable;
