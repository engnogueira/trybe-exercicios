SELECT t1.title, t2.rating
FROM pixar.movies AS t1
INNER JOIN pixar.boxoffice AS t2
ON t1.id = t2.movie_id
ORDER BY t2.rating DESC;
