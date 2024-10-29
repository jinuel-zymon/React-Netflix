<?php
class Movies
{
    public $movies_aid;

    public $movies_title;
    public $movies_year;
    public $movies_genre;
    public $movies_rating;
    public $movies_duration;
    public $movies_summary;
    public $movies_cast;
    public $movies_image;

    public $movies_is_active;
    public $movies_datetime;
    public $movies_created;

    public $connection;
    public $lastInsertedId;

    public $tblMovies;

    public $movies_start;
    public $movies_total;
    public $movies_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblMovies = "netflix_movies";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblMovies} ";
            $sql .= "( movies_title, ";
            $sql .= "movies_year, ";
            $sql .= "movies_genre, ";
            $sql .= "movies_rating, ";
            $sql .= "movies_duration, ";
            $sql .= "movies_summary, ";
            $sql .= "movies_cast, ";
            // $sql .= "movies_image, ";
            $sql .= "movies_is_active, ";
            $sql .= "movies_datetime, ";
            $sql .= "movies_created ) values ( ";
            $sql .= ":movies_title, ";
            $sql .= ":movies_year, ";
            $sql .= ":movies_genre, ";
            $sql .= ":movies_rating, ";
            $sql .= ":movies_duration, ";
            $sql .= ":movies_summary, ";
            $sql .= ":movies_cast, ";
            // $sql .= ":movies_image, ";
            $sql .= ":movies_is_active, ";
            $sql .= ":movies_datetime, ";
            $sql .= ":movies_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "movies_title" => $this->movies_title,
                "movies_year" => $this->movies_year,
                "movies_genre" => $this->movies_genre,
                "movies_rating" => $this->movies_rating,
                "movies_duration" => $this->movies_duration,
                "movies_summary" => $this->movies_summary,
                "movies_cast" => $this->movies_cast,
                // "movies_image" => $this->movies_image,
                "movies_is_active" => $this->movies_is_active,
                "movies_datetime" => $this->movies_datetime,
                "movies_created" => $this->movies_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * from {$this->tblMovies} ";
            $sql .= "order by movies_is_active desc, ";
            $sql .= "movies_title asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * from {$this->tblMovies} ";
            $sql .= "order by movies_is_active desc, ";
            $sql .= "movies_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->movies_start - 1,
                "total" => $this->movies_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblMovies} ";
            $sql .= "where movies_title like :movies_title ";
            $sql .= "order by movies_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "movies_title" => "%{$this->movies_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblMovies} ";
            $sql .= "where movies_aid  = :movies_aid ";
            $sql .= "order by movies_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "movies_aid" => $this->movies_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblMovies} set ";
            $sql .= "movies_title = :movies_title, ";
            $sql .= "movies_year = :movies_year, ";
            $sql .= "movies_genre = :movies_genre, ";
            $sql .= "movies_rating = :movies_rating, ";
            $sql .= "movies_duration = :movies_duration, ";
            $sql .= "movies_summary = :movies_summary, ";
            $sql .= "movies_cast = :movies_cast, ";
            // $sql .= "movies_image = :movies_image, ";
            $sql .= "movies_datetime = :movies_datetime ";
            $sql .= "where movies_aid = :movies_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "movies_title" => $this->movies_title,
                "movies_year" => $this->movies_year,
                "movies_genre" => $this->movies_genre,
                "movies_rating" => $this->movies_rating,
                "movies_duration" => $this->movies_duration,
                "movies_summary" => $this->movies_summary,
                "movies_cast" => $this->movies_cast,
                // "movies_image" => $this->movies_image,
                "movies_datetime" => $this->movies_datetime,
                "movies_aid" => $this->movies_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblMovies} set ";
            $sql .= "movies_is_active = :movies_is_active, ";
            $sql .= "movies_datetime = :movies_datetime ";
            $sql .= "where movies_aid = :movies_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "movies_is_active" => $this->movies_is_active,
                "movies_datetime" => $this->movies_datetime,
                "movies_aid" => $this->movies_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblMovies} ";
            $sql .= "where movies_aid = :movies_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "movies_aid" => $this->movies_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "select movies_title from {$this->tblMovies} ";
            $sql .= "where movies_title = :movies_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "movies_title" => "{$this->movies_title}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // name
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select product_movies_id from {$this->tblMovies} ";
    //         $sql .= "where product_movies_id = :product_movies_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_movies_id" => $this->movies_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblMovies} ";
            $sql .= "where movies_is_active = :movies_is_active  ";
            $sql .= "order by movies_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "movies_is_active" => $this->movies_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblMovies} ";
            $sql .= "where ";
            $sql .= "movies_is_active = :movies_is_active ";
            $sql .= "and movies_title like :movies_title ";
            $sql .= "order by movies_is_active desc, ";
            $sql .= "movies_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "movies_title" => "%{$this->movies_search}%",
                "movies_is_active" => $this->movies_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}