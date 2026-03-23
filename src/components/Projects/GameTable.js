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

  const circled = ["RPG", "Murder Mystery", "Super Hero", "Art Mashing"];
  const circleStyle = { border: "2px solid white", borderRadius: "50%", padding: "4px 12px", display: "inline-block" };

  const renderCell = (value) => {
    if (!value) return "";
    if (circled.includes(value)) return <span style={circleStyle}>{value}</span>;
    return value;
  };

  const maxRows = Math.max(genres.length, themes.length, artStyles.length);

  return (
    <table style={{ margin: "0 auto", fontSize: "1.25rem", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid white", padding: "10px 20px" }}>Game Genre</th>
          <th style={{ border: "1px solid white", padding: "10px 20px" }}>Game Theme</th>
          <th style={{ border: "1px solid white", padding: "10px 20px" }}>Art Style</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: maxRows }, (_, i) => (
          <tr key={i}>
            <td style={{ border: "1px solid white", padding: "8px 20px" }}>{renderCell(genres[i])}</td>
            <td style={{ border: "1px solid white", padding: "8px 20px" }}>{renderCell(themes[i])}</td>
            <td style={{ border: "1px solid white", padding: "8px 20px" }}>{renderCell(artStyles[i])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default GameTable;
