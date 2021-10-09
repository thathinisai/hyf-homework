--Part 1
--Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
 VALUES("Lesson2", "About CRUD primary and foreign key", "2017-10-25 06:54:16", "2017-10-15 13:05:09", "2017-11-15 13:05:09", 2, 1);

 --Change the title of a task
 UPDATE task SET title="Database-Lesson2" WHERE id=36;

 --Change a task due date
 UPDATE task SET due_date="2021-09-26" WHERE id=36;

--Change a task status
UPDATE task SET status_id = 3 WHERE id=36;

--Mark a task as complete
UPDATE task SET status_id = 3 WHERE id=35;

--Delete a task
DELETE from task where id=37;

--Part 2: School database
CREATE TABLE  class(
id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT, 
name VARCHAR(255) NOT NULL,
begin_date DATETIME NOT NULL,
end_date DATETIME NOT NULL,
PRIMARY KEY(id)) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE Table student(
id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
email VARCHAR(255),
phone INT(8),
class_id int(10) UNSIGNED NOT NULL,
PRIMARY KEY (id), 
CONSTRAINT `fk_class`
FOREIGN KEY (class_id) REFERENCES class(id)ON DELETE CASCADE ON UPDATE CASCADE)
ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--Create an index on the name column of the student table.
CREATE INDEX student_name ON student(name);

--Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE class ADD status ENUM ("not-started", "ongoing", "finished");

--Part 3: More queries
--Get all the tasks assigned to users whose email ends in @spotify.com
SELECT user.id,  task.title, user.email
FROM user, user_task, task WHERE 
user.email LIKE "%@spotify.com" AND
user.id=user_task.user_id AND
user_task.task_id=task.id;

-- using join (Get all the tasks assigned to users whose email ends in @spotify.com)
SELECT * FROM user_task
JOIN task ON task_id=task.id
JOIN user ON user_id=user.id
WHERE user.email LIKE '%@spotify.com';

--Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT user.name as username, task.id as taskid, task.title as tasktitle,  status.name as statusname
FROM user, user_task, task, status WHERE 
user.name LIKE "Donald Duck" AND
status.name LIKE "Not started" AND
user.id=user_task.user_id AND
user_task.task_id=task.id AND
task.status_id=status.id;

--Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT user.name as username, task.id as taskid, task.title as tasktitle FROM user, user_task, task
WHERE user.name LIKE "Maryrose Meadows" AND
month(task.created)=09 AND
user.id=user_task.user_id AND
user_task.task_id = task.id;

--Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc. 
SELECT monthname(created) as month, COUNT(*) as taskcount
FROM task GROUP BY monthname(created);
