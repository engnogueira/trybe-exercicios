SELECT t1.title, t1.director, t1.year, t1.length_minutes, t2.name, t2.location 
FROM pixar.movies AS t1
LEFT JOIN pixar.theater AS t2
ON t1.theater_id = t2.id
ORDER BY t2.name ASC;
