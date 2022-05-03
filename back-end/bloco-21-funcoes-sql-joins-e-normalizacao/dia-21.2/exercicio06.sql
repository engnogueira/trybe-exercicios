SELECT title, director, year, length_minutes
FROM pixar.movies AS t1
INNER JOIN pixar.theater AS t2
INNER JOIN pixar.boxoffice AS t3
ON t1.theater_id = t2.id AND t3.movie_id = t1.id
WHERE t3.rating > 8;
