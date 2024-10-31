<?php
class TopMovies
{
    public $topmovies_aid;

    public $topmovies_title;
    public $topmovies_year;
    public $topmovies_genre;
    public $topmovies_rating;
    public $topmovies_duration;
    public $topmovies_summary;
    public $topmovies_cast;
    public $topmovies_image;
    public $topmovies_ranking;

    public $topmovies_is_active;
    public $topmovies_datetime;
    public $topmovies_created;

    public $connection;
    public $lastInsertedId;

    public $tblTopMovies;

    public $topmovies_start;
    public $topmovies_total;
    public $topmovies_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblTopMovies = "netflix_topmovies";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblTopMovies} ";
            $sql .= "( topmovies_title, ";
            $sql .= "topmovies_year, ";
            $sql .= "topmovies_genre, ";
            $sql .= "topmovies_rating, ";
            $sql .= "topmovies_duration, ";
            $sql .= "topmovies_summary, ";
            $sql .= "topmovies_cast, ";
            $sql .= "topmovies_image, ";
            $sql .= "topmovies_ranking, ";
            $sql .= "topmovies_is_active, ";
            $sql .= "topmovies_datetime, ";
            $sql .= "topmovies_created ) values ( ";
            $sql .= ":topmovies_title, ";
            $sql .= ":topmovies_year, ";
            $sql .= ":topmovies_genre, ";
            $sql .= ":topmovies_rating, ";
            $sql .= ":topmovies_duration, ";
            $sql .= ":topmovies_summary, ";
            $sql .= ":topmovies_cast, ";
            $sql .= ":topmovies_image, ";
            $sql .= ":topmovies_ranking, ";
            $sql .= ":topmovies_is_active, ";
            $sql .= ":topmovies_datetime, ";
            $sql .= ":topmovies_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topmovies_title" => $this->topmovies_title,
                "topmovies_year" => $this->topmovies_year,
                "topmovies_genre" => $this->topmovies_genre,
                "topmovies_rating" => $this->topmovies_rating,
                "topmovies_duration" => $this->topmovies_duration,
                "topmovies_summary" => $this->topmovies_summary,
                "topmovies_cast" => $this->topmovies_cast,
                "topmovies_image" => $this->topmovies_image,
                "topmovies_ranking" => $this->topmovies_ranking,
                "topmovies_is_active" => $this->topmovies_is_active,
                "topmovies_datetime" => $this->topmovies_datetime,
                "topmovies_created" => $this->topmovies_created,
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
            $sql = "select * from {$this->tblTopMovies} ";
            $sql .= "order by topmovies_is_active desc, ";
            $sql .= "topmovies_ranking asc ";
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
            $sql = "select * from {$this->tblTopMovies} ";
            $sql .= "order by topmovies_is_active desc, ";
            $sql .= "topmovies_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->topmovies_start - 1,
                "total" => $this->topmovies_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblTopMovies} ";
            $sql .= "where topmovies_title like :topmovies_title ";
            $sql .= "order by topmovies_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topmovies_title" => "%{$this->topmovies_search}%",
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
            $sql = "select * from {$this->tblTopMovies} ";
            $sql .= "where topmovies_aid  = :topmovies_aid ";
            $sql .= "order by topmovies_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topmovies_aid" => $this->topmovies_aid,
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
            $sql = "update {$this->tblTopMovies} set ";
            $sql .= "topmovies_title = :topmovies_title, ";
            $sql .= "topmovies_year = :topmovies_year, ";
            $sql .= "topmovies_genre = :topmovies_genre, ";
            $sql .= "topmovies_rating = :topmovies_rating, ";
            $sql .= "topmovies_duration = :topmovies_duration, ";
            $sql .= "topmovies_summary = :topmovies_summary, ";
            $sql .= "topmovies_cast = :topmovies_cast, ";
            $sql .= "topmovies_image = :topmovies_image, ";
            $sql .= "topmovies_ranking = :topmovies_ranking, ";
            $sql .= "topmovies_datetime = :topmovies_datetime ";
            $sql .= "where topmovies_aid = :topmovies_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topmovies_title" => $this->topmovies_title,
                "topmovies_year" => $this->topmovies_year,
                "topmovies_genre" => $this->topmovies_genre,
                "topmovies_rating" => $this->topmovies_rating,
                "topmovies_duration" => $this->topmovies_duration,
                "topmovies_summary" => $this->topmovies_summary,
                "topmovies_cast" => $this->topmovies_cast,
                "topmovies_image" => $this->topmovies_image,
                "topmovies_ranking" => $this->topmovies_ranking,
                "topmovies_datetime" => $this->topmovies_datetime,
                "topmovies_aid" => $this->topmovies_aid,
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
            $sql = "update {$this->tblTopMovies} set ";
            $sql .= "topmovies_is_active = :topmovies_is_active, ";
            $sql .= "topmovies_datetime = :topmovies_datetime ";
            $sql .= "where topmovies_aid = :topmovies_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topmovies_is_active" => $this->topmovies_is_active,
                "topmovies_datetime" => $this->topmovies_datetime,
                "topmovies_aid" => $this->topmovies_aid,
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
            $sql = "delete from {$this->tblTopMovies} ";
            $sql .= "where topmovies_aid = :topmovies_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topmovies_aid" => $this->topmovies_aid,
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
            $sql = "select topmovies_title from {$this->tblTopMovies} ";
            $sql .= "where topmovies_title = :topmovies_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topmovies_title" => "{$this->topmovies_title}",
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
    //         $sql = "select product_topmovies_id from {$this->tblTopMovies} ";
    //         $sql .= "where product_topmovies_id = :product_topmovies_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_topmovies_id" => $this->topmovies_aid,
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
            $sql .= "from {$this->tblTopMovies} ";
            $sql .= "where topmovies_is_active = :topmovies_is_active  ";
            $sql .= "order by topmovies_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topmovies_is_active" => $this->topmovies_is_active,
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
            $sql .= "from {$this->tblTopMovies} ";
            $sql .= "where ";
            $sql .= "topmovies_is_active = :topmovies_is_active ";
            $sql .= "and topmovies_title like :topmovies_title ";
            $sql .= "order by topmovies_is_active desc, ";
            $sql .= "topmovies_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topmovies_title" => "%{$this->topmovies_search}%",
                "topmovies_is_active" => $this->topmovies_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}