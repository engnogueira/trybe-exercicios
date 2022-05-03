SELECT t1.name, t1.location, t2.title, t2.director, t2.year, t2.length_minutes
FROM pixar.theater AS t1
LEFT JOIN pixar.movies AS t2
ON t1.id = t2.theater_id
ORDER BY t1.name ASC;
