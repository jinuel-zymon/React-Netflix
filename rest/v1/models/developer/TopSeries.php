<?php
class TopSeries
{
    public $topseries_aid;

    public $topseries_title;
    public $topseries_year;
    public $topseries_genre;
    public $topseries_rating;
    public $topseries_duration;
    public $topseries_summary;
    public $topseries_cast;
    public $topseries_image;
    public $topseries_ranking;

    public $topseries_is_active;
    public $topseries_datetime;
    public $topseries_created;

    public $connection;
    public $lastInsertedId;

    public $tblTopSeries;

    public $topseries_start;
    public $topseries_total;
    public $topseries_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblTopSeries = "netflix_topseries";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblTopSeries} ";
            $sql .= "( topseries_title, ";
            $sql .= "topseries_year, ";
            $sql .= "topseries_genre, ";
            $sql .= "topseries_rating, ";
            $sql .= "topseries_duration, ";
            $sql .= "topseries_summary, ";
            $sql .= "topseries_cast, ";
            $sql .= "topseries_image, ";
            $sql .= "topseries_ranking, ";
            $sql .= "topseries_is_active, ";
            $sql .= "topseries_datetime, ";
            $sql .= "topseries_created ) values ( ";
            $sql .= ":topseries_title, ";
            $sql .= ":topseries_year, ";
            $sql .= ":topseries_genre, ";
            $sql .= ":topseries_rating, ";
            $sql .= ":topseries_duration, ";
            $sql .= ":topseries_summary, ";
            $sql .= ":topseries_cast, ";
            $sql .= ":topseries_image, ";
            $sql .= ":topseries_ranking, ";
            $sql .= ":topseries_is_active, ";
            $sql .= ":topseries_datetime, ";
            $sql .= ":topseries_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topseries_title" => $this->topseries_title,
                "topseries_year" => $this->topseries_year,
                "topseries_genre" => $this->topseries_genre,
                "topseries_rating" => $this->topseries_rating,
                "topseries_duration" => $this->topseries_duration,
                "topseries_summary" => $this->topseries_summary,
                "topseries_cast" => $this->topseries_cast,
                "topseries_image" => $this->topseries_image,
                "topseries_ranking" => $this->topseries_ranking,
                "topseries_is_active" => $this->topseries_is_active,
                "topseries_datetime" => $this->topseries_datetime,
                "topseries_created" => $this->topseries_created,
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
            $sql = "select * from {$this->tblTopSeries} ";
            $sql .= "order by topseries_is_active desc, ";
            $sql .= "topseries_title asc ";
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
            $sql = "select * from {$this->tblTopSeries} ";
            $sql .= "order by topseries_is_active desc, ";
            $sql .= "topseries_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->topseries_start - 1,
                "total" => $this->topseries_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblTopSeries} ";
            $sql .= "where topseries_title like :topseries_title ";
            $sql .= "order by topseries_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topseries_title" => "%{$this->topseries_search}%",
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
            $sql = "select * from {$this->tblTopSeries} ";
            $sql .= "where topseries_aid  = :topseries_aid ";
            $sql .= "order by topseries_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topseries_aid" => $this->topseries_aid,
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
            $sql = "update {$this->tblTopSeries} set ";
            $sql .= "topseries_title = :topseries_title, ";
            $sql .= "topseries_year = :topseries_year, ";
            $sql .= "topseries_genre = :topseries_genre, ";
            $sql .= "topseries_rating = :topseries_rating, ";
            $sql .= "topseries_duration = :topseries_duration, ";
            $sql .= "topseries_summary = :topseries_summary, ";
            $sql .= "topseries_cast = :topseries_cast, ";
            $sql .= "topseries_image = :topseries_image, ";
            $sql .= "topseries_ranking = :topseries_ranking, ";
            $sql .= "topseries_datetime = :topseries_datetime ";
            $sql .= "where topseries_aid = :topseries_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topseries_title" => $this->topseries_title,
                "topseries_year" => $this->topseries_year,
                "topseries_genre" => $this->topseries_genre,
                "topseries_rating" => $this->topseries_rating,
                "topseries_duration" => $this->topseries_duration,
                "topseries_summary" => $this->topseries_summary,
                "topseries_cast" => $this->topseries_cast,
                "topseries_image" => $this->topseries_image,
                "topseries_ranking" => $this->topseries_ranking,
                "topseries_datetime" => $this->topseries_datetime,
                "topseries_aid" => $this->topseries_aid,
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
            $sql = "update {$this->tblTopSeries} set ";
            $sql .= "topseries_is_active = :topseries_is_active, ";
            $sql .= "topseries_datetime = :topseries_datetime ";
            $sql .= "where topseries_aid = :topseries_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topseries_is_active" => $this->topseries_is_active,
                "topseries_datetime" => $this->topseries_datetime,
                "topseries_aid" => $this->topseries_aid,
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
            $sql = "delete from {$this->tblTopSeries} ";
            $sql .= "where topseries_aid = :topseries_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topseries_aid" => $this->topseries_aid,
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
            $sql = "select topseries_title from {$this->tblTopSeries} ";
            $sql .= "where topseries_title = :topseries_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topseries_title" => "{$this->topseries_title}",
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
    //         $sql = "select product_topseries_id from {$this->tblTopSeries} ";
    //         $sql .= "where product_topseries_id = :product_topseries_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_topseries_id" => $this->topseries_aid,
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
            $sql .= "from {$this->tblTopSeries} ";
            $sql .= "where topseries_is_active = :topseries_is_active  ";
            $sql .= "order by topseries_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topseries_is_active" => $this->topseries_is_active,
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
            $sql .= "from {$this->tblTopSeries} ";
            $sql .= "where ";
            $sql .= "topseries_is_active = :topseries_is_active ";
            $sql .= "and topseries_title like :topseries_title ";
            $sql .= "order by topseries_is_active desc, ";
            $sql .= "topseries_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "topseries_title" => "%{$this->topseries_search}%",
                "topseries_is_active" => $this->topseries_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}