# Web & Database Project


## 🛠️ Built With
* HTML / CSS 

## 📦 Installation & Setup
1. Clone the repository
2. Open `index.html` in your browser


A college music based social platform where students create profiles with their favorite music, discover students with similar tastes, like and message each other, and collaborate on group playlists.




<img width="1465" height="1054" alt="Screenshot 2026-10-20 at 1 42 33 PM" src="https://github.com/user-attachments/assets/514613c7-3b55-4a93-be3f-ede5571f0d42" />

Database Design — MusBud

Entity-Relationship Diagram (ERD)

The ERD illustrates the entities in MusBud, their attributes, primary and foreign keys, and the relationships between them. It serves as a blueprint for the database by showing how users, artists, genres, albums, songs, playlists, likes, and messages connect. This helps ensure the database supports the application's features while minimizing unnecessary duplication.



Relational Schema

The relational schema translates the ERD into database tables. Each relation has a primary key to identify records and foreign keys to connect related entities. Tables, such as UserArtists, UserGenres, and PlaylistSongs, represent many-to-many relationships between users, music preferences, and playlists.






## Database Implementation

MusBud uses **MySQL Community Server 26.10.0** as its relational database management system (RDBMS).

The database is named `MusBud` and currently includes the following implemented tables:

### Users Table
Stores user account information.
- `user_id` – Primary key; uniquely identifies each user.
- `username` – Stores the user's username.
- `email` – Stores the user's email address.
- `password` – Stores the user's password.
- `created_at` – Records when the account was created.

### Playlists Table
Stores playlists created by users.
- `playlist_id` – Primary key; uniquely identifies each playlist.
- `user_id` – Foreign key referencing the `Users` table.
- `playlist_name` – Stores the playlist name.
- `description` – Stores an optional playlist description.
- `created_at` – Records when the playlist was created.

### Table Relationship
The `Users` and `Playlists` tables have a one-to-many relationship. One user can create multiple playlists, but each playlist belongs to one user. The `user_id` foreign key connects the two tables. `ON DELETE CASCADE` and `ON UPDATE CASCADE` maintain referential integrity.

### SQL Schema and Screenshots
- [Database SQL Schema](database/schema.sql)
- [Successful Table Creation Screenshot](database/screenshots/table_creation.png)
- [SHOW TABLES Screenshot](database/screenshots/show_tables.png)
