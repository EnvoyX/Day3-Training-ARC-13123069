const getStudents = async () => {
  const response = await fetch(`http://localhost:3000/mahasiswa`);
  const data = await response.json();
  return data.payload;
};
const renderStudent = (student) => {
  return ` <li class="item-list">
              <span class="student-name">${student.nama}</span>
              <span class="student-nim">${student.nim}</span>
              <span class="student-jurusan">${student.jurusan}</span>
              <span class="student-universitas">${student.universitas}</span>
              <button class="delete-button">Delete</button>
            </li>`;
};

function updateUI(items) {
  let students = ``;
  items.forEach((student, i) => {
    return (students += renderStudent(student));
  });
  const containerList = document.querySelector(".students-list");
  containerList.innerHTML = students;
}

async function deleteStudent(nim) {
  const response = await fetch("http://localhost:3000/mahasiswa/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nim: nim,
    }),
  });
  const data = response.json();
  console.log(`NIM ${nim} deleted successfully!`);
}

async function renderUI() {
  const students = await getStudents();
  console.log(students);
  updateUI(students);
  const studentsItem = document.getElementsByClassName("item-list");
  Array.from(studentsItem).forEach(async (student, i) => {
    const datas = await getStudents();
    console.log(datas[i].nim);
    const deleteButton = document
      .querySelectorAll(".delete-button")
      [i].addEventListener("click", async (e) => {
        e.preventDefault();
        deleteStudent(datas[i].nim);
      });
  });
}

renderUI();
