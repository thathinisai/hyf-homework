--Data model
  NAMES utf8mb4;
CREATE database meal_sharing_db;
USE meal_sharing_db;

CREATE TABLE meal (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL UNIQUE,
description TEXT NOT NULL,
location VARCHAR(255) NOT NULL,
when_date DATETIME NOT NULL,
max_reservations INT UNSIGNED NOT NULL,
price DECIMAL(5,2) NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id)
);

CREATE TABLE reservation (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
number_of_guests INT UNSIGNED NOT NULL,
meal_id INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
contact_phonenumber VARCHAR (255),
contact_name VARCHAR (255),
contact_email VARCHAR (255),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
);

CREATE TABLE review (
id INT UNSIGNED NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
description TEXT NOT NULL,
meal_id INT UNSIGNED NOT NULL,
stars INT UNSIGNED NOT NULL,
created_date DATETIME NOT NULL DEFAULT NOW(),
PRIMARY KEY (id),
FOREIGN KEY (meal_id) REFERENCES meal (id) ON DELETE CASCADE
);

--MEAL. Get all meals
SELECT * 
FROM meal;

--Add a new meal
INSERT INTO meal (
    title,
    description,
    location,
    when_date,
    max_reservations,
    price,
    created_date
  )
VALUES
  (
    "Indian kitchen in Copenhagen",
    "Traditional food with eastern european style",
    "Ballerup",
    "2021-10-03",
    10,
    250,
    "2021-09-13"
  );

  --Get a meal with any id, fx 1
SELECT * 
FROM meal
WHERE id = 1;

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal 
SET title = 'Original polish kitchen in Denmark'
WHERE id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal
WHERE id = 1;

-- Get all reservations
SELECT *
FROM reservation;

-- Add a new reservation
INSERT INTO reservation (
    number_of_guests,
    meal_id
) VALUES (
    5,
    1
);

-- RESERVATION. Get a reservation with any id, fx 1
SELECT *
FROM reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation
SET number_of_guests = 6
WHERE id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation
WHERE id = 1;

--REVIEW. Get all the reviews
Get all reviews
SELECT *
FROM review;

-- Add a new review
INSERT INTO review (
    title,  
    description,
    meal_id,
    stars,
    created_date,
) VALUES (
    'good experience',
    'the food was delicious',
    1,
    4,
    "2021-10-14"
);

-- Get a review with any id, fx 1
SELECT *
FROM review
WHERE id = 1;

-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review
SET title = 'I will come back', description = 'It was a lovely restaurant. The staff was nice & food was tasty.'
WHERE id = 1;

-- Delete a review with any id, fx 1
DELETE FROM review
WHERE id = 1;

-- Now get meals that has a price smaller than a specific price fx 90
SELECT *
FROM meal
WHERE price < 90;

-- Get meals that still has available reservations
SELECT
  meal.id,
  meal.title,
  meal.description,
  meal.when_date,
  meal.max_reservations,
  SUM(reservation.number_of_guests)
FROM
  meal
  JOIN reservation ON reservation.meal_id = meal.id
GROUP BY
  meal.id
ORDER BY
  meal.id ASC;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * 
FROM meal
WHERE title LIKE '%kitchen%';

-- Get meals that has been created between two dates
SELECT *
FROM meal
WHERE (created_date BETWEEN '2021-10-13' AND '2021-10-14');

-- Get only specific number of meals fx return only 5 meals
SELECT *
FROM meal 
LIMIT 2;

-- Get the meals that have good reviews
SELECT *
FROM meal
JOIN review ON review.meal_id = meal.id
WHERE 
stars >= 3;

-- Get reservations for a specific meal sorted by created_date
SELECT * 
FROM reservation
WHERE meal_id = 1
ORDER BY created_date DESC;

-- Sort all meals by average number of stars in the reviews
SELECT
  meal.title,
  meal.description,
  AVG(review.stars) as average_stars
FROM
  meal
  JOIN review ON meal.id = review.meal_id
GROUP BY
  meal.id
ORDER BY
  average_stars DESC; 