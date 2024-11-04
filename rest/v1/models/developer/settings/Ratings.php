<?php
class Ratings
{
    public $ratings_aid;
    public $ratings_title;

    public $ratings_is_active;
    public $ratings_datetime;
    public $ratings_created;

    public $connection;
    public $lastInsertedId;

    public $tblRatings;

    public $ratings_start;
    public $ratings_total;
    public $ratings_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblRatings = "netflix_settings_ratings";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblRatings} ";
            $sql .= "( ratings_title, ";
            $sql .= "ratings_is_active, ";
            $sql .= "ratings_datetime, ";
            $sql .= "ratings_created ) values ( ";
            $sql .= ":ratings_title, ";
            $sql .= ":ratings_is_active, ";
            $sql .= ":ratings_datetime, ";
            $sql .= ":ratings_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ratings_title" => $this->ratings_title,
                "ratings_is_active" => $this->ratings_is_active,
                "ratings_datetime" => $this->ratings_datetime,
                "ratings_created" => $this->ratings_created,
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
            $sql = "select * from {$this->tblRatings} ";
            $sql .= "order by ratings_is_active desc, ";
            $sql .= "ratings_title asc ";
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
            $sql = "select * from {$this->tblRatings} ";
            $sql .= "order by ratings_is_active desc, ";
            $sql .= "ratings_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->ratings_start - 1,
                "total" => $this->ratings_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblRatings} ";
            $sql .= "where ratings_title like :ratings_title ";
            $sql .= "order by ratings_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ratings_title" => "%{$this->ratings_search}%",
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
            $sql = "select * from {$this->tblRatings} ";
            $sql .= "where ratings_aid  = :ratings_aid ";
            $sql .= "order by ratings_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ratings_aid" => $this->ratings_aid,
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
            $sql = "update {$this->tblRatings} set ";
            $sql .= "ratings_title = :ratings_title, ";
            $sql .= "ratings_datetime = :ratings_datetime ";
            $sql .= "where ratings_aid = :ratings_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ratings_title" => $this->ratings_title,
                "ratings_datetime" => $this->ratings_datetime,
                "ratings_aid" => $this->ratings_aid,
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
            $sql = "update {$this->tblRatings} set ";
            $sql .= "ratings_is_active = :ratings_is_active, ";
            $sql .= "ratings_datetime = :ratings_datetime ";
            $sql .= "where ratings_aid = :ratings_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ratings_is_active" => $this->ratings_is_active,
                "ratings_datetime" => $this->ratings_datetime,
                "ratings_aid" => $this->ratings_aid,
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
            $sql = "delete from {$this->tblRatings} ";
            $sql .= "where ratings_aid = :ratings_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ratings_aid" => $this->ratings_aid,
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
            $sql = "select ratings_title from {$this->tblRatings} ";
            $sql .= "where ratings_title = :ratings_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ratings_title" => "{$this->ratings_title}",
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
    //         $sql = "select ratings_id from {$this->tblRatings} ";
    //         $sql .= "where ratings_id = :ratings_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "ratings_id" => $this->ratings_aid,
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
            $sql .= "from {$this->tblRatings} ";
            $sql .= "where ratings_is_active = :ratings_is_active  ";
            $sql .= "order by ratings_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ratings_is_active" => $this->ratings_is_active,
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
            $sql .= "from {$this->tblRatings} ";
            $sql .= "where ";
            $sql .= "ratings_is_active = :ratings_is_active ";
            $sql .= "and ratings_title like :ratings_title ";
            $sql .= "order by ratings_is_active desc, ";
            $sql .= "ratings_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "ratings_title" => "%{$this->ratings_search}%",
                "ratings_is_active" => $this->ratings_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}