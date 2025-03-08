# API (Postman) Result
### GET
![Screenshot 2025-03-07 011507](https://github.com/user-attachments/assets/63f59aa6-2515-4c9e-a511-96d626fa3f2c)


### POST
![Screenshot 2025-03-07 010639](https://github.com/user-attachments/assets/8d5355b8-4aa8-4f93-a207-a6f736ff1df6)


### PUT
![Screenshot 2025-03-07 010954](https://github.com/user-attachments/assets/e9de8e5e-3eb1-4856-8cbc-85f322c012be)


### DELETE
![Screenshot 2025-03-07 010812](https://github.com/user-attachments/assets/9169c1df-821c-4660-8ce2-be1edb146ba3)


# Data displayed on the UI

![Screenshot 2025-03-07 011514](https://github.com/user-attachments/assets/a5ea8aca-2529-4269-820a-abd9fee73274)


# How to run the project

### 1. Clone project to your local files
### 2. Open project folder
### 3. Install dependancies
   ```
   npm i
   ```
### 4. Run frontend by using Live Server (Five Server) or Live Preview extension in Visual Studio Code
### 5. Run backend by
   ```
   npm run server
   ```
### 6. Run database by using application XAMPP, make sure to turned on apache & mySQL
   ![Screenshot 2025-03-07 012148](https://github.com/user-attachments/assets/e689fd44-5753-485f-9fa1-d4d7e85b5f90)
      <br/>   <br/>
### 7. Click admin button that aligning with MySQL, this will open phpMyAdmin
   ![image](https://github.com/user-attachments/assets/f202dc7c-87ab-4edb-8bf8-b2081b2b5230)
      <br/>   <br/>
### 8. Create new database & name new database
  
  ![image](https://github.com/user-attachments/assets/a27b60c0-90c3-445d-8724-a90b7c2d6138)
   <br> <br> <br>
  ![image](https://github.com/user-attachments/assets/33b93b2f-0947-4eea-b252-66f8a72e2920)


### 9. Create new table "mahasiswa"
  ![image](https://github.com/user-attachments/assets/cb1bd375-74d3-4889-a708-baed6c800f11)
### 10. Set these fields by following image 
  ![image](https://github.com/user-attachments/assets/a6e3c525-7b50-4001-9de9-2888b802e7fa)
### 11. Under "Structure" tab, change following field to UNIQUE:
   click "MORE" button
   ![Screenshot 2025-03-07 015003](https://github.com/user-attachments/assets/75aa6fde-40a2-4b5e-b256-5d6585408c37)
   <br> <br>
  ![Screenshot 2025-03-07 015017](https://github.com/user-attachments/assets/3baba4bf-d061-4bd4-99b4-c92289a9a3d4)
     <br> <br>
    ![Screenshot 2025-03-07 015025](https://github.com/user-attachments/assets/936c4ac3-d25e-474f-90a0-701e594afa21)
     <br> <br>
### 12. This should be our database structure:
   ![Screenshot 2025-03-07 014920](https://github.com/user-attachments/assets/51ef3c65-74f2-49d4-a1c2-fbe8454cc027)
### 13. Create first field and click "go":
  ![image](https://github.com/user-attachments/assets/bbeaff60-f100-4b71-82d7-f9d41793cea2)

### 14. Add more data to POSTMAN
Now, go to Postman 
<br> <br> <br>
Make sure to select POST and this url
```
http://localhost:3000/mahasiswa/add
```
<br> <br> <br>
Select "Body" tab, then raw, and select JSON from drop-down menu, and paste this example:
<br>
Note : NIM must UNIQUE
  ```json
      {
            "nim": 13523100,
            "nama": "Zhu Yuan",
            "jurusan": "Teknik Informatika",
            "universitas": "Institut Teknologi Bandung"
      }
  ```
<br><br><br>
See following image:
![image](https://github.com/user-attachments/assets/f5558249-5960-494a-bfb1-9c61d3f13c2d)

### 15. Don't forget to change database name in connection.js!
<br><br>
<h2>src/backend/connection.js</h4>


![image](https://github.com/user-attachments/assets/2925ca08-26d8-489b-a387-641738502bc7)

### 16. Lastly see the result from frontend!
![image](https://github.com/user-attachments/assets/7fa51e78-7720-4741-ac18-9ef4895f24b0)





