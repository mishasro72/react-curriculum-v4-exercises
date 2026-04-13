import React from 'react';

export default function SnackList() {
  const snacks = [
    { name: 'chips', rank: 6 },
    { name: 'pizza', rank: 5 },
    { name: 'chocolate', rank: 4 },
    { name: 'nuts', rank: 3 },
    { name: 'fruits', rank: 2 },
    { name: 'ice cream', rank: 1 },
  ];
  return (
    <ol>
      {snacks
        .toSorted((a, b) => a.rank - b.rank)
        .map((snack) => (
          <li key={snack.rank}>{snack.name}</li>
        ))}
    </ol>
  );
}
