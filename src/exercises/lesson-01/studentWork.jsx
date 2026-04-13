//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Mikhail';
  const age = 42;
  const hobbiesList = [
    { id: 1, name: 'skiing' },
    { id: 2, name: 'longboard' },
    { id: 3, name: 'photography' },
  ];

  return (
    <div id="about">
      <h1>{name}</h1>
      <p>
        Hello, my name is {name}. I&apos;m {age}-years old. I enjoy exploring
        new experiences and learning continuously. I have a passion for
        technology, creative projects, and sharing humorous moments from life.
        My hobbies include:
        <ul>
          {hobbiesList.map((hobby) => (
            <li key={hobby.id}>{hobby.name}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}
