<?php
class Genre
{
    public $genre_aid;
    public $genre_title;

    public $genre_is_active;
    public $genre_datetime;
    public $genre_created;

    public $connection;
    public $lastInsertedId;

    public $tblGenre;

    public $genre_start;
    public $genre_total;
    public $genre_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblGenre = "netflix_settings_genre";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblGenre} ";
            $sql .= "( genre_title, ";
            $sql .= "genre_is_active, ";
            $sql .= "genre_datetime, ";
            $sql .= "genre_created ) values ( ";
            $sql .= ":genre_title, ";
            $sql .= ":genre_is_active, ";
            $sql .= ":genre_datetime, ";
            $sql .= ":genre_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "genre_title" => $this->genre_title,
                "genre_is_active" => $this->genre_is_active,
                "genre_datetime" => $this->genre_datetime,
                "genre_created" => $this->genre_created,
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
            $sql = "select * from {$this->tblGenre} ";
            $sql .= "order by genre_is_active desc, ";
            $sql .= "genre_title asc ";
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
            $sql = "select * from {$this->tblGenre} ";
            $sql .= "order by genre_is_active desc, ";
            $sql .= "genre_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->genre_start - 1,
                "total" => $this->genre_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblGenre} ";
            $sql .= "where genre_title like :genre_title ";
            $sql .= "order by genre_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "genre_title" => "%{$this->genre_search}%",
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
            $sql = "select * from {$this->tblGenre} ";
            $sql .= "where genre_aid  = :genre_aid ";
            $sql .= "order by genre_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "genre_aid" => $this->genre_aid,
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
            $sql = "update {$this->tblGenre} set ";
            $sql .= "genre_title = :genre_title, ";
            $sql .= "genre_datetime = :genre_datetime ";
            $sql .= "where genre_aid = :genre_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "genre_title" => $this->genre_title,
                "genre_datetime" => $this->genre_datetime,
                "genre_aid" => $this->genre_aid,
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
            $sql = "update {$this->tblGenre} set ";
            $sql .= "genre_is_active = :genre_is_active, ";
            $sql .= "genre_datetime = :genre_datetime ";
            $sql .= "where genre_aid = :genre_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "genre_is_active" => $this->genre_is_active,
                "genre_datetime" => $this->genre_datetime,
                "genre_aid" => $this->genre_aid,
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
            $sql = "delete from {$this->tblGenre} ";
            $sql .= "where genre_aid = :genre_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "genre_aid" => $this->genre_aid,
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
            $sql = "select genre_title from {$this->tblGenre} ";
            $sql .= "where genre_title = :genre_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "genre_title" => "{$this->genre_title}",
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
    //         $sql = "select genre_id from {$this->tblGenre} ";
    //         $sql .= "where genre_id = :genre_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "genre_id" => $this->genre_aid,
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
            $sql .= "from {$this->tblGenre} ";
            $sql .= "where genre_is_active = :genre_is_active  ";
            $sql .= "order by genre_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "genre_is_active" => $this->genre_is_active,
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
            $sql .= "from {$this->tblGenre} ";
            $sql .= "where ";
            $sql .= "genre_is_active = :genre_is_active ";
            $sql .= "and genre_title like :genre_title ";
            $sql .= "order by genre_is_active desc, ";
            $sql .= "genre_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "genre_title" => "%{$this->genre_search}%",
                "genre_is_active" => $this->genre_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}