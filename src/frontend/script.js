const getStudents = async () => {
  const response = await fetch(`http://localhost:3000/mahasiswa`);
  const data = await response.json();
  console.log(data);
  return data;
};
getStudents();
